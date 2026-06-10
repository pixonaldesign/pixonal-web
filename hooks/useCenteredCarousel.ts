'use client';

import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import {
  CAROUSEL_GAP_PX,
  CAROUSEL_SLIDE_DURATION_MS,
  CAROUSEL_VIEWPORT_INSET_PX,
  getCarouselContentMaxPx,
} from '@/components/carousel/constants';
import { breakpoints } from '@/tokens/breakpoints';

/** Below md the carousel collapses every slide to one viewport-fitted card. */
const COMPACT_BREAKPOINT_PX = breakpoints.md;

export type CarouselAlign = 'center' | 'start';

type UseCenteredCarouselOptions = {
  autoPlay?: boolean;
  slideDurationMs?: number;
  /** Per-slide widths (length = slide count). Enables variable-width tracks. */
  slideWidths?: number[];
  /** `center` keeps the active slide centered (Key Highlights). `start` aligns it to the content gutter (feature carousels). */
  align?: CarouselAlign;
  /** Infinite-loop (duplicate slides) when true; clamp at boundaries when false. */
  loop?: boolean;
  /** Total horizontal inset (both sides) subtracted from viewport when computing uniform slide width. Defaults to `CAROUSEL_VIEWPORT_INSET_PX`. */
  viewportInsetPx?: number;
};

function getUniformCardWidth(viewportWidth: number, insetPx: number): number {
  if (viewportWidth === 0) return 0;
  return Math.min(getCarouselContentMaxPx(viewportWidth), viewportWidth - insetPx);
}

function getCumulativeOffsets(slideWidths: number[], gapPx: number): number[] {
  const offsets: number[] = [0];
  for (let i = 0; i < slideWidths.length - 1; i++) {
    offsets.push(offsets[i] + slideWidths[i] + gapPx);
  }
  return offsets;
}

function getStartAlignOffset(viewportWidth: number, gapPx: number): number {
  // Place the first slide at the left edge of the layout-content-max area,
  // falling back to the layout gutter on narrower viewports.
  const contentInset = (viewportWidth - getCarouselContentMaxPx(viewportWidth)) / 2;
  return Math.max(gapPx, contentInset);
}

export function useCenteredCarousel(
  slideCount: number,
  {
    autoPlay = false,
    slideDurationMs = CAROUSEL_SLIDE_DURATION_MS,
    slideWidths,
    align = 'center',
    loop = true,
    viewportInsetPx = CAROUSEL_VIEWPORT_INSET_PX,
  }: UseCenteredCarouselOptions = {},
) {
  const [logicalIndex, setLogicalIndex] = useState(0);
  const [enableTransition, setEnableTransition] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const [viewportWidth, setViewportWidth] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const viewportRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = viewportRef.current;
    if (!el) return;
    const update = () => setViewportWidth(el.clientWidth);
    update();
    const observer = new ResizeObserver(update);
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const uniformCardWidth = getUniformCardWidth(viewportWidth, viewportInsetPx);

  // Below md the carousel collapses every slide to a single uniform
  // viewport-fitted width so each card fills the screen one-at-a-time.
  // This overrides any variable widths the parent passed in.
  const isCompact =
    viewportWidth > 0 && viewportWidth < COMPACT_BREAKPOINT_PX && slideCount > 0;

  const sourceSlideWidths = useMemo(() => {
    if (slideCount === 0) return [] as number[];
    if (isCompact) {
      return Array(slideCount).fill(uniformCardWidth);
    }
    if (slideWidths && slideWidths.length === slideCount) {
      return slideWidths;
    }
    return Array(slideCount).fill(uniformCardWidth);
  }, [isCompact, slideWidths, slideCount, uniformCardWidth]);

  const hasVariableWidths = sourceSlideWidths.length === slideCount && slideCount > 0;

  // Build a single source of truth for the rendered track widths.
  const renderedWidths = useMemo(() => {
    if (hasVariableWidths) {
      return loop ? [...sourceSlideWidths, ...sourceSlideWidths] : sourceSlideWidths;
    }
    if (uniformCardWidth === 0) return [];
    const single = Array(slideCount).fill(uniformCardWidth);
    return loop ? [...single, ...single] : single;
  }, [hasVariableWidths, sourceSlideWidths, loop, slideCount, uniformCardWidth]);

  const cumulativeOffsets = useMemo(
    () => getCumulativeOffsets(renderedWidths, CAROUSEL_GAP_PX),
    [renderedWidths],
  );

  const trackWidth = useMemo(() => {
    if (renderedWidths.length === 0) return undefined;
    const sum = renderedWidths.reduce((total, width) => total + width, 0);
    return sum + (renderedWidths.length - 1) * CAROUSEL_GAP_PX;
  }, [renderedWidths]);

  const safeIndex = Math.min(logicalIndex, Math.max(0, renderedWidths.length - 1));
  const activeSlideWidth = renderedWidths[safeIndex] ?? 0;

  const startOffset =
    align === 'start'
      ? getStartAlignOffset(viewportWidth, CAROUSEL_GAP_PX)
      : (viewportWidth - activeSlideWidth) / 2;

  const rawTranslate = startOffset - (cumulativeOffsets[safeIndex] ?? 0);

  // Clamp the leftward shift so the last card stays flush against the right
  // edge of the visible area instead of overscrolling into whitespace.
  const minTranslate =
    !loop && trackWidth !== undefined && trackWidth > viewportWidth - startOffset * 2
      ? viewportWidth - startOffset - trackWidth
      : -Infinity;
  const translateX = Math.max(rawTranslate, minTranslate);

  const visibleIndex =
    slideCount > 0 ? ((logicalIndex % slideCount) + slideCount) % slideCount : 0;

  // Non-loop: smallest index where snapping to that card's left edge fully
  // reveals the last card on the right (i.e., further "next" only overscrolls).
  const maxLogicalIndex = useMemo(() => {
    if (loop) return slideCount;
    if (renderedWidths.length === 0 || trackWidth === undefined) return 0;
    const visibleSpan = viewportWidth - startOffset * 2;
    const threshold = trackWidth - visibleSpan;
    if (threshold <= 0) return 0;
    for (let i = 0; i < cumulativeOffsets.length; i++) {
      if (cumulativeOffsets[i] >= threshold) return i;
    }
    return Math.max(0, cumulativeOffsets.length - 1);
  }, [loop, renderedWidths.length, trackWidth, viewportWidth, startOffset, cumulativeOffsets, slideCount]);

  const canGoPrev = loop ? true : logicalIndex > 0;
  const canGoNext = loop ? true : logicalIndex < maxLogicalIndex;

  const clearTimer = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  useEffect(() => {
    clearTimer();
    if (!autoPlay || isPaused || slideCount === 0) return;
    intervalRef.current = setInterval(() => {
      setLogicalIndex((prev) => prev + 1);
    }, slideDurationMs);
    return clearTimer;
  }, [autoPlay, isPaused, slideCount, logicalIndex, slideDurationMs, clearTimer]);

  // Keep index within bounds when slide count or viewport changes.
  useEffect(() => {
    if (!loop && logicalIndex > maxLogicalIndex) {
      setLogicalIndex(maxLogicalIndex);
    }
  }, [loop, logicalIndex, maxLogicalIndex]);

  const handleTransitionEnd = () => {
    if (loop && logicalIndex >= slideCount) {
      setEnableTransition(false);
      setLogicalIndex((prev) => prev - slideCount);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => setEnableTransition(true));
      });
    }
  };

  const goToSlide = (index: number) => {
    setEnableTransition(true);
    setLogicalIndex(index);
  };

  const goToNext = () => {
    setEnableTransition(true);
    setLogicalIndex((prev) => {
      if (loop) return prev + 1;
      return Math.min(prev + 1, maxLogicalIndex);
    });
  };

  const goToPrev = () => {
    if (slideCount === 0) return;
    if (loop && logicalIndex === 0) {
      setEnableTransition(false);
      setLogicalIndex(slideCount);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setEnableTransition(true);
          setLogicalIndex(slideCount - 1);
        });
      });
      return;
    }
    setEnableTransition(true);
    setLogicalIndex((prev) => Math.max(0, prev - 1));
  };

  const handlePauseToggle = () => setIsPaused((p) => !p);

  return {
    viewportRef,
    viewportWidth,
    cardWidth: uniformCardWidth,
    /** Per-source-slide widths (length = slideCount). Reflects the compact
     *  override below sm. Consumers use this to size each rendered slide. */
    sourceSlideWidths,
    isCompact,
    logicalIndex,
    visibleIndex,
    enableTransition,
    translateX,
    trackWidth,
    gapPx: CAROUSEL_GAP_PX,
    handleTransitionEnd,
    goToSlide,
    goToNext,
    goToPrev,
    canGoPrev,
    canGoNext,
    isPaused,
    handlePauseToggle,
    slideCount,
    slideDurationMs,
  };
}
