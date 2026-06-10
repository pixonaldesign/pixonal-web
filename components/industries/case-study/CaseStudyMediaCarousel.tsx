'use client';

import Image from 'next/image';
import { Carousel } from '@/components/carousel';
import { useWindowWidth } from '@/hooks/useWindowWidth';
import { breakpoints } from '@/tokens/breakpoints';
import type {
  CaseStudyAspect,
  CaseStudyMediaSection,
  CaseStudyMediaSlide,
} from '@/lib/industry-case-studies';

/** Card frame heights (mirrors the About / Llumen feature carousels). */
const VISUAL_HEIGHT_LG_PX = 420;
const VISUAL_HEIGHT_MD_PX = 360;

const ASPECT_RATIO: Record<CaseStudyAspect, number> = {
  '16/9': 16 / 9,
  '3/4': 3 / 4,
  '1/1': 1,
};

const ASPECT_CLASS: Record<CaseStudyAspect, string> = {
  '16/9': 'aspect-[16/9]',
  '3/4': 'aspect-[3/4]',
  '1/1': 'aspect-square',
};

function resolveSlideWidth(
  aspect: CaseStudyAspect,
  viewportWidth: number,
): number {
  const height =
    viewportWidth === 0 || viewportWidth >= breakpoints.lg
      ? VISUAL_HEIGHT_LG_PX
      : VISUAL_HEIGHT_MD_PX;
  return Math.round(height * ASPECT_RATIO[aspect]);
}

function CaseStudyMediaCard({
  slide,
  width,
}: {
  slide: CaseStudyMediaSlide;
  width: number;
}) {
  const style = width ? { width: `${width}px` } : undefined;
  const aspectClass = ASPECT_CLASS[slide.aspect ?? '16/9'];

  return (
    <div style={style} className="flex shrink-0 flex-col gap-4 lg:gap-6">
      {/* Below md the carousel fills the viewport, so collapse to 16:9. */}
      <div
        className={`relative max-md:!aspect-[16/9] ${aspectClass} overflow-hidden rounded-card`}
      >
        <Image
          src={slide.image}
          alt=""
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 90vw, 60vw"
        />
      </div>

      {/* Semantic Governance caption style: inline bold title + muted copy. */}
      <div className="text-body">
        <h3 className="inline text-primary-50">{slide.title}.</h3>{' '}
        <span className="text-primary-50/40">{slide.description}</span>
      </div>
    </div>
  );
}

interface CaseStudyMediaCarouselProps {
  data: CaseStudyMediaSection;
  /** Typography utility for the section title. */
  titleClassName?: string;
  /** Vertical gap between the header and the carousel. */
  gapClassName?: string;
  /**
   * When true the section applies section padding to the top only (the next
   * section supplies the gap below). Defaults to padding on both edges.
   */
  topPaddingOnly?: boolean;
}

/**
 * Case study section that carries imagery + data — rendered as a non-autoplay
 * arrow carousel of media cards (image on top, title + copy below), reusing the
 * shared `Carousel` and About header pattern.
 */
export default function CaseStudyMediaCarousel({
  data,
  titleClassName = 'text-display',
  gapClassName = 'gap-10',
  topPaddingOnly = false,
}: CaseStudyMediaCarouselProps) {
  const viewportWidth = useWindowWidth();

  return (
    <section
      className={`bg-primary-900 ${topPaddingOnly ? '' : 'py-section'}`}
      style={
        topPaddingOnly ? { paddingTop: 'var(--layout-section-y)' } : undefined
      }
      aria-labelledby={data.id}
    >
      <div className={`flex flex-col ${gapClassName}`}>
        <div className="mx-auto flex w-full max-w-content flex-col gap-block px-5 xl:px-0">
          {data.eyebrow ? (
            <p className="text-stat !uppercase text-white/40">{data.eyebrow}</p>
          ) : null}
          <h2 id={data.id} className={`${titleClassName} text-primary-50`}>
            {data.title}
          </h2>
          {data.lead || data.subtitle ? (
            <p className="text-body text-primary-50/40 max-w-[640px]">
              {data.lead ? (
                <span className="text-primary-50">{data.lead} </span>
              ) : null}
              {data.subtitle}
            </p>
          ) : null}
        </div>

        <Carousel
          slides={data.slides}
          layout="horizontal"
          controlVariant="arrows"
          controlsAlign="center"
          headerClassName="hidden"
          sectionClassName="w-full flex flex-col"
          getSlideKey={(slide, index) => `${slide.id}-${index}`}
          getSlideWidth={(slide) =>
            resolveSlideWidth(slide.aspect ?? '16/9', viewportWidth)
          }
          renderSlide={(slide, { width }) => (
            <CaseStudyMediaCard slide={slide} width={width} />
          )}
        />
      </div>
    </section>
  );
}
