'use client';

import PixonalIcon from '@/components/PixonalIcon';
import { CAROUSEL_SLIDE_DURATION_MS } from './constants';

const roundButtonClassName =
  'bg-primary-800 flex items-center justify-center p-2 rounded-[360px] w-8 h-8 hover:bg-primary-700 transition-colors';

interface CarouselAutoControlsProps {
  count: number;
  activeIndex: number;
  isPaused: boolean;
  onSelect: (index: number) => void;
  onPauseToggle: () => void;
  onPrev?: () => void;
  onNext?: () => void;
  durationMs?: number;
}

export default function CarouselAutoControls({
  count,
  activeIndex,
  isPaused,
  onSelect,
  onPauseToggle,
  onPrev,
  onNext,
  durationMs = CAROUSEL_SLIDE_DURATION_MS,
}: CarouselAutoControlsProps) {
  return (
    <div className="flex gap-2 items-center justify-center">
      {onPrev ? (
        <button
          type="button"
          onClick={onPrev}
          className={roundButtonClassName}
          aria-label="Previous slide"
        >
          <PixonalIcon name="arrow-left" size={14} className="text-white" />
        </button>
      ) : null}
      <div className="bg-primary-800 flex gap-2 items-center p-2 rounded-[360px] h-full">
        {Array.from({ length: count }, (_, index) => {
          const isActive = index === activeIndex;
          return (
            <button
              key={index}
              type="button"
              onClick={() => onSelect(index)}
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
                  key={activeIndex}
                  className="absolute inset-y-0 left-0 w-full origin-left bg-zinc-300 rounded-[4px]"
                  style={{
                    animation: `case-study-progress ${durationMs}ms linear forwards`,
                    animationPlayState: isPaused ? 'paused' : 'running',
                  }}
                />
              )}
            </button>
          );
        })}
      </div>
      <button
        type="button"
        onClick={onPauseToggle}
        className={roundButtonClassName}
        aria-label={isPaused ? 'Play carousel' : 'Pause carousel'}
        aria-pressed={isPaused}
      >
        {isPaused ? (
          <PixonalIcon name="play" size={14} weight="fill" className="text-white" />
        ) : (
          <PixonalIcon name="pause" size={14} weight="fill" className="text-white" />
        )}
      </button>
      {onNext ? (
        <button
          type="button"
          onClick={onNext}
          className={roundButtonClassName}
          aria-label="Next slide"
        >
          <PixonalIcon name="arrow-right" size={14} className="text-white" />
        </button>
      ) : null}
    </div>
  );
}
