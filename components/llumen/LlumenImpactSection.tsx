'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import CarouselAutoControls from '@/components/carousel/CarouselAutoControls';
import { breakpoints } from '@/tokens/breakpoints';
import { useWindowWidth } from '@/hooks/useWindowWidth';
import { CAROUSEL_SLIDE_DURATION_MS } from '@/components/carousel/constants';
import PixonalIcon from '@/components/PixonalIcon';
import {
  llumenIndustries,
  llumenIndustriesIntro,
  llumenIndustriesIntroLead,
  type IndustrySlide,
} from '@/lib/llumen-content';
import { useCenteredCarousel } from '@/hooks/useCenteredCarousel';

// Split a label into two roughly balanced lines on word boundaries.
// Used below lg where the tab strip scrolls horizontally and each tab is
// content-sized — we need exactly two lines per label for a uniform look.
function splitLabelToTwoLines(text: string): [string, string] {
  const words = text.split(' ');
  if (words.length <= 1) return [text, ''];
  let bestIndex = 1;
  let bestDiff = Number.POSITIVE_INFINITY;
  for (let i = 1; i < words.length; i++) {
    const left = words.slice(0, i).join(' ');
    const right = words.slice(i).join(' ');
    const diff = Math.abs(left.length - right.length);
    if (diff < bestDiff) {
      bestDiff = diff;
      bestIndex = i;
    }
  }
  return [
    words.slice(0, bestIndex).join(' '),
    words.slice(bestIndex).join(' '),
  ];
}

function IndustryCard({ slide }: { slide: IndustrySlide }) {
  return (
    // Layout:
    //  - lg+: row, content basis 30% / image flex-1 (~70%), 40px gap, 600px tall.
    //  - <lg: column-reverse so the image (DOM-second) sits on top per Figma
    //         2607:9198, content below; card padding drops to 12px.
    <article className="backdrop-blur-[100px] bg-black/30 border border-white/30 rounded-card flex flex-col-reverse lg:flex-row gap-block lg:gap-10 items-stretch p-3 lg:p-5 lg:h-[600px]">
      <div className="flex flex-col justify-between gap-block min-w-0 flex-1 lg:flex-none lg:basis-[30%]">
        <div className="flex flex-col gap-tight">
          <p className="text-label text-primary-50/40">{slide.number}</p>
          <h3 className="text-h2 text-primary-50">{slide.title || '—'}</h3>
        </div>
        <div className="flex flex-col gap-block text-primary-50/80">
          {slide.impact ? (
            <div className="flex flex-col gap-tight">
              <p className="text-body text-primary-50">Impact</p>
              <p className="text-body text-primary-50/80">{slide.impact}</p>
            </div>
          ) : null}
          {slide.benefits ? (
            <div className="flex flex-col gap-tight">
              <p className="text-body text-primary-50">Benefits</p>
              <p className="text-body text-primary-50/80">{slide.benefits}</p>
            </div>
          ) : null}
        </div>
      </div>
      <div className="relative w-full aspect-[3/2] lg:aspect-auto lg:w-auto lg:flex-1 rounded-card overflow-hidden border border-black/10">
        <Image
          src={slide.image}
          alt=""
          fill
          sizes="(max-width: 1024px) 100vw, 70vw"
          className="object-cover"
        />
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(0deg, rgba(0,0,0,0) 12%, rgba(0,0,0,0.5) 100%)',
          }}
        />
      </div>
    </article>
  );
}

export default function LlumenImpactSection() {
  // Below lg the tab row can't wrap, so make it a horizontal scroller and
  // fade the edge that still has overflow. We use mask-image (not an overlay
  // gradient) because the parent background is a dynamic gradient. At lg+
  // the mask is disabled entirely so it can't clip tab dividers.
  const viewportWidth = useWindowWidth();
  const isBelowLg = viewportWidth > 0 && viewportWidth < breakpoints.lg;

  // Panel padding (matches `p-5 lg:p-6 xl:p-10` on the gradient panel
  // below). The carousel viewport spans the full panel width via negative
  // margins so adjacent slides crop at the gradient panel's edge rather
  // than at the inner padding. We pass `viewportInsetPx = 2 * panelPadding`
  // so the centered active slide still aligns inside the padding.
  const panelPadding =
    viewportWidth >= breakpoints.xl ? 40 : viewportWidth >= breakpoints.lg ? 24 : 20;

  const carousel = useCenteredCarousel(llumenIndustries.length, {
    autoPlay: true,
    slideDurationMs: CAROUSEL_SLIDE_DURATION_MS,
    viewportInsetPx: panelPadding * 2,
  });

  const activeSlide = llumenIndustries[carousel.visibleIndex];
  const renderedSlides = [...llumenIndustries, ...llumenIndustries];
  const tabsScrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const updateTabsOverflow = useCallback(() => {
    const el = tabsScrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 0);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 1);
  }, []);

  useEffect(() => {
    updateTabsOverflow();
    const el = tabsScrollRef.current;
    if (!el) return;
    const ro = new ResizeObserver(updateTabsOverflow);
    ro.observe(el);
    return () => ro.disconnect();
  }, [updateTabsOverflow]);

  // Keep the active tab centered in the strip while the carousel autoplays.
  // Only meaningful below lg where the strip can actually scroll.
  useEffect(() => {
    const container = tabsScrollRef.current;
    if (!container) return;
    const max = container.scrollWidth - container.clientWidth;
    if (max <= 0) return;
    const tab = container.children[carousel.visibleIndex] as
      | HTMLElement
      | undefined;
    if (!tab) return;
    const target =
      tab.offsetLeft - (container.clientWidth - tab.offsetWidth) / 2;
    container.scrollTo({
      left: Math.max(0, Math.min(target, max)),
      behavior: 'smooth',
    });
  }, [carousel.visibleIndex]);

  const tabsMaskImage = isBelowLg
    ? `linear-gradient(to right, ${
        canScrollLeft ? 'transparent' : 'black'
      } 0, black 48px, black calc(100% - 48px), ${
        canScrollRight ? 'transparent' : 'black'
      } 100%)`
    : undefined;

  return (
    <section
      id="impact"
      aria-labelledby="impact-heading"
      className="py-section px-gutter"
    >
      <div className="max-w-content mx-auto flex flex-col gap-section">
        <header className="flex flex-col gap-stack max-w-[670px]">
          <h2 id="impact-heading" className="text-display text-primary-50">
            Impact
          </h2>
          <p className="text-body text-primary-50/40">
            <span className="text-primary-50">{llumenIndustriesIntroLead} </span>
            {llumenIndustriesIntro}
          </p>
        </header>

        <div
          className="rounded-card flex flex-col gap-10 p-5 lg:p-6 xl:p-10 transition-[background] duration-700 ease-in-out"
          style={{ background: activeSlide.gradient }}
        >
          <div className="flex flex-col gap-8">
            <div className="flex gap-3 items-start">
              <PixonalIcon
                name="asterisk"
                size={24}
                weight="regular"
                className="text-white shrink-0"
              />
              <p className="text-stat text-white">Industries</p>
            </div>

            <div
              ref={tabsScrollRef}
              onScroll={updateTabsOverflow}
              role="tablist"
              aria-label="Llumen industries"
              className="flex gap-block items-stretch flex-nowrap overflow-x-auto lg:overflow-visible [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
              style={{
                WebkitMaskImage: tabsMaskImage,
                maskImage: tabsMaskImage,
              }}
            >
              {llumenIndustries.map((slide, index) => {
                const isActive = index === carousel.visibleIndex;
                const [labelLine1, labelLine2] = splitLabelToTwoLines(
                  slide.label,
                );
                return (
                  <button
                    key={slide.id}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    aria-controls={`industry-panel-${slide.id}`}
                    id={`industry-tab-${slide.id}`}
                    onClick={(event) => {
                      carousel.goToSlide(index);
                      const tab = event.currentTarget;
                      const container = tabsScrollRef.current;
                      if (!container) return;
                      // Scroll only the tab strip, not the page, so an
                      // overflowing ancestor can't be dragged along.
                      const target =
                        tab.offsetLeft -
                        (container.clientWidth - tab.offsetWidth) / 2;
                      const max = container.scrollWidth - container.clientWidth;
                      container.scrollTo({
                        left: Math.max(0, Math.min(target, max)),
                        behavior: 'smooth',
                      });
                    }}
                    className={`max-lg:shrink-0 lg:flex-1 lg:basis-0 lg:min-w-0 flex gap-4 items-stretch text-left transition-opacity ${
                      isActive
                        ? 'opacity-100'
                        : 'opacity-40 hover:opacity-70'
                    }`}
                  >
                    <span
                      aria-hidden
                      className="w-px shrink-0 self-stretch bg-white"
                    />
                    <span className="text-label text-white self-center">
                      <span className="hidden max-lg:block whitespace-nowrap">
                        {labelLine1}
                      </span>
                      {labelLine2 ? (
                        <span className="hidden max-lg:block whitespace-nowrap">
                          {labelLine2}
                        </span>
                      ) : null}
                      <span className="max-lg:hidden block max-w-[180px] hyphens-auto break-words [overflow-wrap:anywhere]">
                        {slide.label}
                      </span>
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="flex flex-col gap-block">
            <div
              ref={carousel.viewportRef}
              className="relative overflow-hidden -mx-5 lg:-mx-6 xl:-mx-10"
            >
              <div
                className={`flex gap-5 ${
                  carousel.enableTransition
                    ? 'transition-transform duration-500 ease-in-out'
                    : ''
                }`}
                onTransitionEnd={carousel.handleTransitionEnd}
                style={{
                  transform: `translateX(${carousel.translateX}px)`,
                  width:
                    carousel.trackWidth !== undefined
                      ? `${carousel.trackWidth}px`
                      : undefined,
                  visibility:
                    carousel.cardWidth === 0 ? 'hidden' : undefined,
                }}
              >
                {renderedSlides.map((slide, i) => {
                  const sourceIndex = i % llumenIndustries.length;
                  const isActive = sourceIndex === carousel.visibleIndex;
                  return (
                    <div
                      key={`${slide.id}-${i}`}
                      id={
                        isActive
                          ? `industry-panel-${slide.id}`
                          : undefined
                      }
                      role={isActive ? 'tabpanel' : undefined}
                      aria-labelledby={
                        isActive ? `industry-tab-${slide.id}` : undefined
                      }
                      className="shrink-0"
                      style={{ width: `${carousel.cardWidth}px` }}
                    >
                      <IndustryCard slide={slide} />
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="flex justify-center">
              <CarouselAutoControls
                count={llumenIndustries.length}
                activeIndex={carousel.visibleIndex}
                isPaused={carousel.isPaused}
                onSelect={carousel.goToSlide}
                onPauseToggle={carousel.handlePauseToggle}
                durationMs={CAROUSEL_SLIDE_DURATION_MS}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
