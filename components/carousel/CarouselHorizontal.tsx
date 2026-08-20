'use client';

import { useMemo } from 'react';
import CarouselArrowControls from './CarouselArrowControls';
import type { CarouselProps } from './types';
import SectionHeader from '@/components/SectionHeader';
import { useCenteredCarousel } from '@/hooks/useCenteredCarousel';

type CarouselHorizontalProps<T> = Pick<
  CarouselProps<T>,
  | 'sectionId'
  | 'title'
  | 'subtitle'
  | 'descriptionLead'
  | 'headingId'
  | 'slides'
  | 'getSlideKey'
  | 'renderSlide'
  | 'getSlideWidth'
  | 'sectionClassName'
  | 'headerClassName'
  | 'controlsClassName'
  | 'controlsAlign'
>;

export default function CarouselHorizontal<T>({
  sectionId,
  title,
  subtitle,
  descriptionLead,
  headingId,
  slides,
  getSlideKey,
  renderSlide,
  getSlideWidth,
  sectionClassName = 'py-section flex flex-col justify-center items-center',
  headerClassName = 'w-full max-w-content mx-auto flex flex-col gap-block items-start px-5 pb-12',
  controlsClassName = 'w-full max-w-content mx-auto flex px-5 py-4',
  controlsAlign = 'center',
}: CarouselHorizontalProps<T>) {
  const slideCount = slides.length;

  const slideWidths = useMemo(
    () =>
      getSlideWidth
        ? slides.map((slide, index) => getSlideWidth(slide, index))
        : undefined,
    [slides, getSlideWidth],
  );

  const carousel = useCenteredCarousel(slideCount, {
    slideWidths,
    align: 'start',
    loop: false,
  });

  if (slideCount === 0) return null;

  const renderedSlides = slides;
  const controlsJustifyClass =
    controlsAlign === 'end' ? 'justify-end' : 'justify-center';

  return (
    <section
      id={sectionId}
      className={sectionClassName}
      aria-labelledby={headingId ?? undefined}
    >
      {(title || descriptionLead || subtitle) ? (
        <div className={headerClassName}>
          <SectionHeader
            id={headingId}
            title={title ?? ''}
            titleClassName="text-figure text-primary-50 whitespace-pre-wrap"
            subtitle={[descriptionLead, subtitle].filter(Boolean).join(' ') || undefined}
          />
        </div>
      ) : null}

      <div ref={carousel.viewportRef} className="w-full relative overflow-hidden">
        <div
          className={`flex gap-5 ${carousel.enableTransition ? 'transition-transform duration-500 ease-in-out' : ''}`}
          onTransitionEnd={carousel.handleTransitionEnd}
          style={{
            transform: `translateX(${carousel.translateX}px)`,
            width:
              carousel.trackWidth !== undefined
                ? `${carousel.trackWidth}px`
                : undefined,
            visibility: carousel.viewportWidth === 0 ? 'hidden' : undefined,
          }}
        >
          {renderedSlides.map((slide, i) => {
            const sourceIndex = i % slideCount;
            const slideWidth =
              carousel.sourceSlideWidths[sourceIndex] ?? carousel.cardWidth;
            return (
              <div key={getSlideKey(slide, i)} className="shrink-0">
                {renderSlide(slide, { width: slideWidth, index: sourceIndex })}
              </div>
            );
          })}
        </div>
      </div>

      <div className={`${controlsClassName} ${controlsJustifyClass}`}>
        <CarouselArrowControls
          align={controlsAlign}
          onPrev={carousel.goToPrev}
          onNext={carousel.goToNext}
          canGoPrev={carousel.canGoPrev}
          canGoNext={carousel.canGoNext}
        />
      </div>
    </section>
  );
}
