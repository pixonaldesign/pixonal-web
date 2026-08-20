'use client';

import { useCallback, useRef, useState } from 'react';
import Image from 'next/image';
import {
  interactiveStatementCopy,
  interactiveStatementIdleEyebrow,
  interactiveStatementImages,
  interactiveStatementScenes,
} from '@/lib/interactive-statement-images';
import { AnimatedStatementMaskLine } from '@/components/home/AnimatedStatementPhrase';
import NoiseTexture from '@/components/NoiseTexture';

/** Flip these back on when the dark grain surface is needed again. */
const SHOW_DARK_SURFACE = true;
const SHOW_NOISE = true;

const PREVIEW_WIDTH = 480;
const PREVIEW_HEIGHT = 360;
const CURSOR_OFFSET = 8;
/** Cursor travel (px) before the next image. Lower = faster switching. */
const IMAGE_TRAVEL_PX = 240;

type PointerState = {
  x: number;
  y: number;
  visible: boolean;
};

function clampPreviewPosition(
  localX: number,
  localY: number,
  sectionWidth: number,
  sectionHeight: number
) {
  const maxLeft = sectionWidth - PREVIEW_WIDTH - 8;
  const maxTop = sectionHeight - PREVIEW_HEIGHT - 8;

  let left = localX + CURSOR_OFFSET;
  let top = localY + CURSOR_OFFSET;

  if (left > maxLeft) left = localX - PREVIEW_WIDTH - CURSOR_OFFSET;
  if (top > maxTop) top = localY - PREVIEW_HEIGHT - CURSOR_OFFSET;

  return {
    left: Math.max(8, left),
    top: Math.max(8, top),
  };
}

/**
 * Interactive statement — cursor movement reveals cycling imagery.
 */
export default function InteractiveStatementSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const lastPointRef = useRef<{ x: number; y: number } | null>(null);
  const travelRef = useRef(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const [preview, setPreview] = useState<PointerState>({
    x: 0,
    y: 0,
    visible: false,
  });

  const handlePointerMove = useCallback(
    (event: React.PointerEvent<HTMLElement>) => {
      const section = sectionRef.current;
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const localX = event.clientX - rect.left;
      const localY = event.clientY - rect.top;
      const last = lastPointRef.current;
      lastPointRef.current = { x: localX, y: localY };

      if (last) {
        travelRef.current += Math.hypot(localX - last.x, localY - last.y);
        const steps = Math.floor(travelRef.current / IMAGE_TRAVEL_PX);
        if (steps > 0) {
          travelRef.current -= steps * IMAGE_TRAVEL_PX;
          const count = interactiveStatementImages.length;
          setActiveIndex((index) => (index + steps) % count);
        }
      }

      const position = clampPreviewPosition(
        localX,
        localY,
        rect.width,
        rect.height
      );

      setPreview({
        x: position.left,
        y: position.top,
        visible: true,
      });
    },
    []
  );

  const handlePointerLeave = useCallback(() => {
    lastPointRef.current = null;
    travelRef.current = 0;
    setPreview((current) => ({ ...current, visible: false }));
  }, []);

  const scene = preview.visible
    ? (interactiveStatementScenes[activeIndex] ?? interactiveStatementIdleEyebrow)
    : interactiveStatementIdleEyebrow;
  const eyebrowLabel = `${scene.lead} + ${scene.governed} + ${scene.critical}`;

  return (
    <section
      ref={sectionRef}
      aria-label="What we build"
      className={`relative mx-5 mt-5 h-[80dvh] overflow-hidden rounded-card lg:h-auto lg:aspect-video ${
        SHOW_DARK_SURFACE ? 'bg-black' : ''
      }`}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
    >
      {SHOW_NOISE ? <NoiseTexture /> : null}
      <div
        aria-hidden
        className={`pointer-events-none absolute z-0 overflow-hidden rounded-card border border-white/15 ${
          preview.visible ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          width: PREVIEW_WIDTH,
          height: PREVIEW_HEIGHT,
          left: preview.x,
          top: preview.y,
        }}
      >
        {interactiveStatementImages.map((src, index) => (
          <Image
            key={src}
            src={src}
            alt=""
            fill
            priority={index === 0}
            className={`object-cover ${
              index === activeIndex ? 'opacity-100' : 'opacity-0'
            }`}
            sizes={`${PREVIEW_WIDTH}px`}
          />
        ))}
      </div>

      <div className="relative z-10 flex h-full items-center justify-center px-gutter xl:px-0">
        <div className="flex w-full max-w-content flex-col items-center gap-6 text-center pointer-events-none">
          <p
            className="w-full text-white font-mono font-semibold uppercase text-[length:var(--text-lead-size)] leading-[var(--text-lead-line-height)] tracking-[var(--tracking-mono)] lg:whitespace-pre"
            aria-live="polite"
            aria-label={eyebrowLabel}
          >
            <span aria-hidden="true">
              <AnimatedStatementMaskLine
                lead={scene.lead}
                governed={scene.governed}
                critical={scene.critical}
              />
            </span>
          </p>
          <h2 className="text-figure text-white text-balance">
            {interactiveStatementCopy}
          </h2>
        </div>
      </div>
    </section>
  );
}
