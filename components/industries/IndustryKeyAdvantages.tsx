'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import CarouselAutoControls from '@/components/carousel/CarouselAutoControls';
import { CAROUSEL_SLIDE_DURATION_MS } from '@/components/carousel/constants';
import PixonalIcon from '@/components/PixonalIcon';
import { breakpoints } from '@/tokens/breakpoints';
import { useWindowWidth } from '@/hooks/useWindowWidth';
import { useCenteredCarousel } from '@/hooks/useCenteredCarousel';
import type { KeyAdvantageTab } from '@/lib/industries';

function KeyAdvantageCard({ tab }: { tab: KeyAdvantageTab }) {
  return (
    <article className="backdrop-blur-[100px] bg-black/30 border border-white/30 rounded-card flex flex-col-reverse lg:flex-row gap-block lg:gap-10 items-stretch p-3 lg:p-5 lg:h-[600px]">
      <div className="flex flex-col justify-between gap-block min-w-0 flex-1 lg:flex-none lg:basis-[30%]">
        <div className="flex flex-col gap-tight">
          <p className="text-label text-primary-50/40">{tab.number}</p>
          <h3 className="text-h2 text-primary-50">{tab.title}</h3>
        </div>
        <p className="text-body text-primary-50/80">{tab.description}</p>
      </div>
      <div
        className="relative w-full aspect-[3/2] lg:aspect-auto lg:w-auto lg:flex-1 rounded-card overflow-hidden border border-black/10"
        style={tab.imageBackground ? { background: tab.imageBackground } : undefined}
      >
        {tab.image ? (
          tab.imageBackground ? (
            // Inset variant: UI screenshot on a solid backdrop with 20px
            // padding; `next/image` `fill` needs a positioned parent so we
            // use absolute inset-5.
            <div className="absolute inset-5">
              <Image
                src={tab.image}
                alt=""
                fill
                sizes="(max-width: 1024px) 100vw, 70vw"
                className="object-contain"
              />
            </div>
          ) : (
            <Image
              src={tab.image}
              alt=""
              fill
              sizes="(max-width: 1024px) 100vw, 70vw"
              className="object-cover"
            />
          )
        ) : null}
      </div>
    </article>
  );
}

interface IndustryKeyAdvantagesProps {
  /** Overview heading (left column of the section header). Defaults to "Overview". */
  overviewHeading?: string;
  /** Overview paragraph (right column of the section header). */
  overviewText: string;
  /** Label above the tab strip — typically "Key Advantages". */
  eyebrow: string;
  /**
   * Background gradient applied to the outer card. Used as the fallback when
   * the active tab does not declare its own `gradient`.
   */
  gradient: string;
  tabs: KeyAdvantageTab[];
}

// Split a label into two roughly balanced lines on word boundaries. Used
// below lg where the tab strip scrolls horizontally and each tab is
// content-sized — keep every label at exactly two lines for a uniform look.
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

/**
 * Section that hosts both the "Overview" header and the "Key Advantages"
 * carousel for an industry page — they share one section per design.
 *
 * The gradient card mirrors `LlumenImpactSection` 1:1: same outer/inner
 * paddings, same 30/70 content-to-image ratio at lg+, same 600px height,
 * same two-line label splitting below lg, same auto-play + pause controls.
 * Each tab can supply its own gradient — the outer card cross-fades when
 * the active tab changes.
 */
export default function IndustryKeyAdvantages({
  overviewHeading = 'Overview',
  overviewText,
  eyebrow,
  gradient,
  tabs,
}: IndustryKeyAdvantagesProps) {
  const count = tabs.length;

  // Tab strip auto-scroll + edge fade. Only 3 tabs in this carousel, so they
  // fit comfortably from sm upward — scrolling/two-line-split only kicks in
  // below the sm breakpoint (unlike the Llumen Impact section which has
  // many more tabs and switches at lg).
  const viewportWidth = useWindowWidth();
  const isBelowSm = viewportWidth > 0 && viewportWidth < breakpoints.sm;

  // Panel padding matches `p-5 lg:p-6 xl:p-10` on the gradient panel below.
  // The carousel viewport spans the full panel width via negative margins
  // so adjacent slides crop at the gradient panel's edge rather than at
  // the inner padding. We pass `viewportInsetPx = 2 * panelPadding` so the
  // centered active slide still aligns inside the padding.
  const panelPadding =
    viewportWidth >= breakpoints.xl ? 40 : viewportWidth >= breakpoints.lg ? 24 : 20;

  const carousel = useCenteredCarousel(count, {
    autoPlay: true,
    slideDurationMs: CAROUSEL_SLIDE_DURATION_MS,
    viewportInsetPx: panelPadding * 2,
  });
  const activeIndex = carousel.visibleIndex;
  const renderedSlides = [...tabs, ...tabs];
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

  useEffect(() => {
    const container = tabsScrollRef.current;
    if (!container) return;
    const max = container.scrollWidth - container.clientWidth;
    if (max <= 0) return;
    const tab = container.children[activeIndex] as HTMLElement | undefined;
    if (!tab) return;
    const target = tab.offsetLeft - (container.clientWidth - tab.offsetWidth) / 2;
    container.scrollTo({
      left: Math.max(0, Math.min(target, max)),
      behavior: 'smooth',
    });
  }, [activeIndex]);

  const tabsMaskImage = isBelowSm
    ? `linear-gradient(to right, ${
        canScrollLeft ? 'transparent' : 'black'
      } 0, black 48px, black calc(100% - 48px), ${
        canScrollRight ? 'transparent' : 'black'
      } 100%)`
    : undefined;

  const activeTab = tabs[activeIndex];

  return (
    <section
      id="key-advantages"
      aria-labelledby="industry-overview-heading"
      className="bg-primary-900 py-section px-gutter"
    >
      <div className="max-w-content mx-auto flex flex-col gap-section">
        {/* Overview header — same shape as the Llumen Impact section header. */}
        <header className="flex flex-col lg:flex-row gap-block lg:gap-5 lg:items-start">
          <h2
            id="industry-overview-heading"
            className="text-h1 text-primary-50 lg:w-[498px] shrink-0"
          >
            {overviewHeading}
          </h2>
          <p className="text-body text-primary-50/80 flex-1 lg:max-w-[842px]">
            {overviewText}
          </p>
        </header>

        {/* Key Advantages gradient card. */}
        <div
          className="rounded-card flex flex-col gap-10 p-5 lg:p-6 xl:p-10 transition-[background] duration-700 ease-in-out"
          style={{ background: activeTab.gradient ?? gradient }}
        >
          <div className="flex flex-col gap-8">
            <div className="flex gap-3 items-start">
              <PixonalIcon
                name="asterisk"
                size={24}
                weight="regular"
                className="text-white shrink-0"
              />
              <p className="text-stat text-white">{eyebrow}</p>
            </div>

            <div
              ref={tabsScrollRef}
              onScroll={updateTabsOverflow}
              role="tablist"
              aria-label={eyebrow}
              className="flex gap-block items-stretch flex-nowrap overflow-x-auto sm:overflow-visible [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
              style={{
                WebkitMaskImage: tabsMaskImage,
                maskImage: tabsMaskImage,
              }}
            >
              {tabs.map((tab, index) => {
                const isActive = index === activeIndex;
                const [labelLine1, labelLine2] = splitLabelToTwoLines(tab.label);
                return (
                  <button
                    key={tab.id}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    aria-controls={`industry-key-panel-${tab.id}`}
                    id={`industry-key-tab-${tab.id}`}
                    onClick={(event) => {
                      carousel.goToSlide(index);
                      const container = tabsScrollRef.current;
                      const button = event.currentTarget;
                      if (!container) return;
                      const max =
                        container.scrollWidth - container.clientWidth;
                      const target =
                        button.offsetLeft -
                        (container.clientWidth - button.offsetWidth) / 2;
                      container.scrollTo({
                        left: Math.max(0, Math.min(target, max)),
                        behavior: 'smooth',
                      });
                    }}
                    className={`max-sm:shrink-0 sm:flex-1 sm:basis-0 sm:min-w-0 flex gap-4 items-stretch text-left transition-opacity ${
                      isActive
                        ? 'opacity-100'
                        : 'opacity-40 hover:opacity-70'
                    }`}
                  >
                    <span
                      aria-hidden
                      className="w-px shrink-0 self-stretch bg-white"
                    />
                    <span className="text-label text-white self-center min-w-0">
                      <span className="hidden max-sm:block whitespace-nowrap">
                        {labelLine1}
                      </span>
                      {labelLine2 ? (
                        <span className="hidden max-sm:block whitespace-nowrap">
                          {labelLine2}
                        </span>
                      ) : null}
                      <span className="max-sm:hidden block break-words [overflow-wrap:anywhere]">
                        {tab.label}
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
                {renderedSlides.map((tab, i) => {
                  const sourceIndex = i % count;
                  const isActive = sourceIndex === activeIndex;
                  return (
                    <div
                      key={`${tab.id}-${i}`}
                      id={
                        isActive
                          ? `industry-key-panel-${tab.id}`
                          : undefined
                      }
                      role={isActive ? 'tabpanel' : undefined}
                      aria-labelledby={
                        isActive ? `industry-key-tab-${tab.id}` : undefined
                      }
                      className="shrink-0"
                      style={{ width: `${carousel.cardWidth}px` }}
                    >
                      <KeyAdvantageCard tab={tab} />
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="flex justify-center">
              <CarouselAutoControls
                count={count}
                activeIndex={activeIndex}
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
