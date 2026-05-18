'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { CaseStudy } from '@/lib/markdown';
import PixonalIcon from './PixonalIcon';
import CaseStudyCard from './CaseStudyCard';

interface CaseStudiesCarouselProps {
  caseStudies: CaseStudy[];
}

const SLIDE_DURATION_MS = 7000;

export default function CaseStudiesCarousel({ caseStudies }: CaseStudiesCarouselProps) {
  const N = caseStudies.length;
  // Logical index can grow past N — we render a duplicate set so the slide
  // can transition smoothly into the "next" slide even when wrapping.
  const [logicalIndex, setLogicalIndex] = useState(0);
  const [enableTransition, setEnableTransition] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const [viewportWidth, setViewportWidth] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const viewportRef = useRef<HTMLDivElement | null>(null);

  // Measure the visible container width so centering math doesn't get thrown
  // off by scrollbars or container-query support quirks.
  useEffect(() => {
    const el = viewportRef.current;
    if (!el) return;
    const update = () => setViewportWidth(el.clientWidth);
    update();
    const observer = new ResizeObserver(update);
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const GAP_PX = 20;
  const cardWidth = viewportWidth === 0 ? 0 : Math.min(1360, viewportWidth - 40);
  const cardStep = cardWidth + GAP_PX;
  const startOffset = (viewportWidth - cardWidth) / 2;
  const translateX = startOffset - logicalIndex * cardStep;

  const visibleIndex = N > 0 ? ((logicalIndex % N) + N) % N : 0;

  const clearTimer = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  // Auto-advance: re-arm the timer whenever the slide changes or pause toggles.
  useEffect(() => {
    clearTimer();
    if (isPaused || N === 0) return;
    intervalRef.current = setInterval(() => {
      setLogicalIndex((prev) => prev + 1);
    }, SLIDE_DURATION_MS);
    return clearTimer;
  }, [isPaused, N, logicalIndex, clearTimer]);

  // After we animate into the duplicated copy (logicalIndex === N), snap back
  // to 0 with the transition disabled so the loop is invisible.
  const handleTransitionEnd = () => {
    if (logicalIndex >= N) {
      setEnableTransition(false);
      setLogicalIndex((prev) => prev - N);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => setEnableTransition(true));
      });
    }
  };

  const handlePauseToggle = () => setIsPaused((p) => !p);

  const goToSlide = (index: number) => {
    setEnableTransition(true);
    setLogicalIndex(index);
  };

  if (N === 0) return null;

  // Render the cards twice so we can animate past the last slide into a
  // duplicate of the first before snapping back.
  const renderedCards = [...caseStudies, ...caseStudies];

  return (
    <section className="bg-primary-900 py-20 flex flex-col justify-center items-center">
      <div className="w-full max-w-[1400px] mx-auto flex flex-col gap-block items-center pb-12 pl-10">
        <div className="flex flex-col gap-block items-start w-full max-w-content">
          <h2 className="text-h1 text-white whitespace-pre">Impact Highlights</h2>
        </div>
      </div>

      {/* Carousel as full-bleed section */}
      <div ref={viewportRef} className="w-full relative overflow-hidden">
        <div
          className={`flex gap-5 ${enableTransition ? 'transition-transform duration-500 ease-in-out' : ''}`}
          onTransitionEnd={handleTransitionEnd}
          style={{
            transform: `translateX(${translateX}px)`,
            width: cardWidth > 0 ? `${renderedCards.length * cardStep - GAP_PX}px` : undefined,
            visibility: cardWidth === 0 ? 'hidden' : undefined,
          }}
        >
          {renderedCards.map((study, i) => (
            <CaseStudyCard key={`${study.slug}-${i}`} study={study} width={cardWidth} />
          ))}
        </div>
      </div>

      {/* Carousel Controls */}
      <div className="w-full mx-auto flex justify-center max-w-content px-5 py-4">
        <div className="flex gap-2 items-center justify-center">
          {/* Ticker */}
          <div className="bg-primary-800 flex gap-2 items-center p-2 rounded-[360px] h-full">
            {caseStudies.map((_, index) => {
              const isActive = index === visibleIndex;
              return (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  aria-label={`Go to slide ${index + 1}`}
                  title={`Go to slide ${index + 1}`}
                  className={
                    isActive
                      ? 'relative h-2 w-12 rounded-[4px] bg-zinc-300/40 overflow-hidden'
                      : 'h-2 w-2 rounded-[4px] bg-zinc-300/20 hover:bg-zinc-300/40 transition-colors'
                  }
                >
                  {isActive && (
                    <span
                      key={visibleIndex}
                      className="absolute inset-y-0 left-0 w-full origin-left bg-zinc-300 rounded-[4px]"
                      style={{
                        animation: `case-study-progress ${SLIDE_DURATION_MS}ms linear forwards`,
                        animationPlayState: isPaused ? 'paused' : 'running',
                      }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Pause/Play Button */}
          <button
            onClick={handlePauseToggle}
            className="bg-primary-800 flex items-center justify-center p-2 rounded-[360px] w-8 h-8 hover:bg-primary-700 transition-colors"
            aria-label={isPaused ? 'Play carousel' : 'Pause carousel'}
            aria-pressed={isPaused}
          >
            {isPaused ? (
              <PixonalIcon name="play" size={14} weight="fill" className="text-white" />
            ) : (
              <PixonalIcon name="pause" size={14} weight="fill" className="text-white" />
            )}
          </button>
        </div>
      </div>
    </section>
  );
}
