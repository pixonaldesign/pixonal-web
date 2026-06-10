'use client';

import PixonalIcon from '@/components/PixonalIcon';

const arrowButtonClassName =
  'bg-primary-800 flex items-center justify-center p-2 rounded-[360px] w-8 h-8 hover:bg-primary-700 transition-colors disabled:opacity-30 disabled:hover:bg-primary-800';

interface CarouselArrowControlsProps {
  onPrev: () => void;
  onNext: () => void;
  canGoPrev?: boolean;
  canGoNext?: boolean;
  align?: 'center' | 'end';
  className?: string;
}

export default function CarouselArrowControls({
  onPrev,
  onNext,
  canGoPrev = true,
  canGoNext = true,
  align = 'center',
  className = '',
}: CarouselArrowControlsProps) {
  const alignClass = align === 'end' ? 'justify-end' : 'justify-center';

  return (
    <div className={`flex gap-2 items-center ${alignClass} ${className}`.trim()}>
      <button
        type="button"
        onClick={onPrev}
        disabled={!canGoPrev}
        aria-label="Previous slide"
        className={arrowButtonClassName}
      >
        <PixonalIcon name="arrow-left" size={14} weight="regular" />
      </button>
      <button
        type="button"
        onClick={onNext}
        disabled={!canGoNext}
        aria-label="Next slide"
        className={arrowButtonClassName}
      >
        <PixonalIcon name="arrow-right" size={14} weight="regular" />
      </button>
    </div>
  );
}
