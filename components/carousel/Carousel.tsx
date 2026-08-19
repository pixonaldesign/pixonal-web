'use client';

import CarouselArrowControls from './CarouselArrowControls';
import CarouselAutoControls from './CarouselAutoControls';
import CarouselHorizontal from './CarouselHorizontal';
import { CAROUSEL_SLIDE_DURATION_MS } from './constants';
import type { CarouselProps } from './types';
import { useCenteredCarousel } from '@/hooks/useCenteredCarousel';

export default function Carousel<T>({
  sectionId,
  title,
  subtitle,
  descriptionLead,
  headingId,
  slides,
  layout = 'centered',
  titleVariant = 'impact',
  controlVariant = 'auto',
  slideDurationMs = CAROUSEL_SLIDE_DURATION_MS,
  getSlideKey,
  renderSlide,
  getSlideWidth,
  sectionClassName,
  headerClassName,
  controlsClassName,
  controlsAlign = 'center',
}: CarouselProps<T>) {
  if (layout === 'horizontal') {
    return (
      <CarouselHorizontal
        sectionId={sectionId}
        title={title}
        subtitle={subtitle}
        descriptionLead={descriptionLead}
        headingId={headingId}
        slides={slides}
        getSlideKey={getSlideKey}
        renderSlide={renderSlide}
        getSlideWidth={getSlideWidth}
        titleVariant={titleVariant}
        sectionClassName={sectionClassName}
        headerClassName={headerClassName}
        controlsClassName={controlsClassName}
        controlsAlign={controlsAlign}
      />
    );
  }

  const slideCount = slides.length;
  const carousel = useCenteredCarousel(slideCount, {
    autoPlay: controlVariant === 'auto',
    slideDurationMs,
  });

  if (slideCount === 0) return null;

  const renderedSlides = [...slides, ...slides];
  const controlsJustifyClass =
    controlsAlign === 'end' ? 'justify-end' : 'justify-center';

  const resolvedSectionClassName =
    sectionClassName ?? 'py-section flex flex-col justify-center items-center';
  const resolvedHeaderClassName =
    headerClassName ??
    'w-full max-w-content mx-auto flex flex-col gap-block items-start pb-12 px-5';
  const resolvedControlsClassName =
    controlsClassName ?? 'w-full max-w-content mx-auto flex px-5 py-4';

  return (
    <section
      id={sectionId}
      className={resolvedSectionClassName}
      aria-labelledby={headingId ?? undefined}
    >
      <div className={resolvedHeaderClassName}>
        <div className="flex flex-col gap-block items-start w-full">
          <h2
            id={headingId}
            className={`${
              titleVariant === 'feature' ? 'text-display' : 'text-h1'
            } text-primary-50 whitespace-pre-wrap`}
          >
            {title ?? ''}
          </h2>
          {(descriptionLead || subtitle) ? (
            <p className="text-body text-primary-50/40 max-w-[640px]">
              {descriptionLead ? (
                <span className="text-primary-50">{descriptionLead} </span>
              ) : null}
              {subtitle}
            </p>
          ) : null}
        </div>
      </div>

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
            visibility: carousel.cardWidth === 0 ? 'hidden' : undefined,
          }}
        >
          {renderedSlides.map((slide, i) => {
            const sourceIndex = i % slideCount;
            return (
              <div key={getSlideKey(slide, i)} className="shrink-0">
                {renderSlide(slide, {
                  width: carousel.cardWidth,
                  index: sourceIndex,
                })}
              </div>
            );
          })}
        </div>
      </div>

      <div className={`${resolvedControlsClassName} ${controlsJustifyClass}`}>
        {controlVariant === 'auto' ? (
          <CarouselAutoControls
            count={slideCount}
            activeIndex={carousel.visibleIndex}
            isPaused={carousel.isPaused}
            onSelect={carousel.goToSlide}
            onPauseToggle={carousel.handlePauseToggle}
            onPrev={carousel.goToPrev}
            onNext={carousel.goToNext}
            durationMs={slideDurationMs}
          />
        ) : (
          <CarouselArrowControls
            onPrev={carousel.goToPrev}
            onNext={carousel.goToNext}
            align={controlsAlign}
          />
        )}
      </div>
    </section>
  );
}
