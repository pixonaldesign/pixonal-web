'use client';

import { useEffect, useRef, useState } from 'react';
import Image from '@/components/PrefixedImage';
import {
  CAROUSEL_GAP_PX,
  CAROUSEL_SLIDE_DURATION_MS,
} from '@/components/carousel/constants';
import { useCenteredCarousel } from '@/hooks/useCenteredCarousel';

export type ImpactCarouselBlock = {
  heading?: string;
  body: string;
};

export type ImpactCarouselSlide = {
  id: string;
  label: string;
  number: string;
  title: string;
  image?: string;
  /** Solid fill behind inset screenshots (`object-contain`) instead of cover. */
  imageBackground?: string;
  blocks?: ImpactCarouselBlock[];
};

type ImpactCarouselProps = {
  slides: ImpactCarouselSlide[];
  tablistLabel: string;
  /** Prefix for tab / panel ids so multiple instances can coexist. */
  idPrefix?: string;
};

function ImpactSlide({
  slide,
  isActive,
  panelId,
  tabId,
}: {
  slide: ImpactCarouselSlide;
  isActive: boolean;
  panelId: string;
  tabId: string;
}) {
  const containImage = Boolean(slide.imageBackground);

  return (
    <article
      id={isActive ? panelId : undefined}
      role={isActive ? 'tabpanel' : undefined}
      aria-labelledby={isActive ? tabId : undefined}
      aria-hidden={!isActive}
      className="relative h-full overflow-hidden rounded-card"
      style={
        slide.imageBackground ? { background: slide.imageBackground } : undefined
      }
    >
      {slide.image ? (
        containImage ? (
          <div className="absolute inset-5">
            <Image
              src={slide.image}
              alt=""
              fill
              sizes="(min-width: 90rem) 1580px, 100vw"
              className="object-contain"
              priority={slide.number === '01'}
            />
          </div>
        ) : (
          <Image
            src={slide.image}
            alt=""
            fill
            sizes="(min-width: 90rem) 1580px, 100vw"
            className="object-cover"
            priority={slide.number === '01'}
          />
        )
      ) : null}
      <div aria-hidden className="impact-slide-overlay z-[1]">
        <div className="impact-slide-overlay-blur impact-slide-overlay-blur-1" />
        <div className="impact-slide-overlay-blur impact-slide-overlay-blur-2" />
        <div className="impact-slide-overlay-blur impact-slide-overlay-blur-3" />
        <div className="impact-slide-overlay-tint" />
      </div>
      <div className="impact-slide-copy relative z-[2] flex h-full flex-col justify-between">
        <div className="flex flex-col gap-tight">
          <p className="text-label text-primary-50/40">{slide.number}</p>
          <h3 className="text-h2 text-primary-50">{slide.title || '—'}</h3>
        </div>
        {slide.blocks && slide.blocks.length > 0 ? (
          <div className="flex flex-col gap-block">
            {slide.blocks.map((block) => (
              <div key={block.heading ?? block.body} className="flex flex-col gap-tight">
                {block.heading ? (
                  <p className="text-body text-primary-50">{block.heading}</p>
                ) : null}
                <p className="text-body text-primary-50/80">{block.body}</p>
              </div>
            ))}
          </div>
        ) : null}
      </div>
    </article>
  );
}

export default function ImpactCarousel({
  slides,
  tablistLabel,
  idPrefix = 'impact',
}: ImpactCarouselProps) {
  const [reduceMotion, setReduceMotion] = useState(false);
  const [contentFrame, setContentFrame] = useState({ width: 0, offset: 0 });
  const contentRef = useRef<HTMLDivElement>(null);
  const tabsScrollRef = useRef<HTMLDivElement>(null);
  const slideCount = slides.length;

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    const sync = () => setReduceMotion(media.matches);
    sync();
    media.addEventListener('change', sync);
    return () => media.removeEventListener('change', sync);
  }, []);

  const carousel = useCenteredCarousel(slideCount, {
    autoPlay: !reduceMotion,
    slideDurationMs: CAROUSEL_SLIDE_DURATION_MS,
    align: 'start',
  });

  const renderedSlides = [...slides, ...slides];
  const slideWidth = contentFrame.width;
  const translateX =
    contentFrame.offset - carousel.logicalIndex * (slideWidth + CAROUSEL_GAP_PX);
  const trackWidth =
    slideWidth > 0
      ? renderedSlides.length * slideWidth +
        (renderedSlides.length - 1) * CAROUSEL_GAP_PX
      : undefined;

  useEffect(() => {
    const content = contentRef.current;
    const viewport = carousel.viewportRef.current;
    if (!content || !viewport) return;

    const update = () => {
      const contentRect = content.getBoundingClientRect();
      const viewportRect = viewport.getBoundingClientRect();
      const styles = window.getComputedStyle(content);
      const padLeft = Number.parseFloat(styles.paddingLeft) || 0;
      const padRight = Number.parseFloat(styles.paddingRight) || 0;
      setContentFrame({
        width: content.clientWidth - padLeft - padRight,
        offset: contentRect.left - viewportRect.left + padLeft,
      });
    };

    update();
    const observer = new ResizeObserver(update);
    observer.observe(content);
    observer.observe(viewport);
    window.addEventListener('resize', update);
    return () => {
      observer.disconnect();
      window.removeEventListener('resize', update);
    };
  }, [carousel.viewportRef]);

  useEffect(() => {
    const container = tabsScrollRef.current;
    if (!container) return;
    const tab = container.children[carousel.visibleIndex] as
      | HTMLElement
      | undefined;
    if (!tab) return;
    const max = container.scrollWidth - container.clientWidth;
    if (max <= 0) return;
    const target =
      tab.offsetLeft - (container.clientWidth - tab.offsetWidth) / 2;
    container.scrollTo({
      left: Math.max(0, Math.min(target, max)),
      behavior: 'smooth',
    });
  }, [carousel.visibleIndex]);

  if (slideCount === 0) return null;

  return (
    <div className="flex flex-col gap-5">
      <div className="px-gutter">
        <div ref={contentRef} className="mx-auto w-full max-w-content">
          <div
            ref={tabsScrollRef}
            role="tablist"
            aria-label={tablistLabel}
            className="flex gap-tight overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {slides.map((slide, slideIndex) => {
              const isActive = slideIndex === carousel.visibleIndex;
              return (
                <button
                  key={slide.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={`${idPrefix}-panel-${slide.id}`}
                  id={`${idPrefix}-tab-${slide.id}`}
                  onClick={() => carousel.goToSlide(slideIndex)}
                  className={`relative min-w-40 flex-1 overflow-hidden rounded-tab bg-surface-raised px-4 py-3 text-left transition-colors ${
                    isActive
                      ? 'text-primary-50'
                      : 'text-primary-50/45 hover:text-primary-50/70'
                  }`}
                >
                  {isActive && !reduceMotion ? (
                    <span
                      key={carousel.visibleIndex}
                      aria-hidden
                      className="absolute inset-0 origin-left bg-surface-raised-fill"
                      style={{
                        animation: `case-study-progress ${CAROUSEL_SLIDE_DURATION_MS}ms linear forwards`,
                      }}
                    />
                  ) : null}
                  {isActive && reduceMotion ? (
                    <span
                      aria-hidden
                      className="absolute inset-0 bg-surface-raised-fill"
                    />
                  ) : null}
                  <span className="relative z-[1] text-label">{slide.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <div
        ref={carousel.viewportRef}
        className="relative h-impact-slide overflow-hidden"
      >
        <div
          className={`flex h-full gap-5 ${
            carousel.enableTransition
              ? 'transition-transform duration-500 ease-in-out'
              : ''
          }`}
          onTransitionEnd={carousel.handleTransitionEnd}
          style={{
            transform: `translateX(${translateX}px)`,
            width: trackWidth !== undefined ? `${trackWidth}px` : undefined,
            visibility: slideWidth === 0 ? 'hidden' : undefined,
          }}
        >
          {renderedSlides.map((slide, i) => {
            const sourceIndex = i % slideCount;
            const isActive = sourceIndex === carousel.visibleIndex;
            return (
              <div
                key={`${slide.id}-${i}`}
                className="h-full shrink-0"
                style={{ width: `${slideWidth}px` }}
              >
                <ImpactSlide
                  slide={slide}
                  isActive={isActive}
                  panelId={`${idPrefix}-panel-${slide.id}`}
                  tabId={`${idPrefix}-tab-${slide.id}`}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
