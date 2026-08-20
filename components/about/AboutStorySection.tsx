'use client';

import Image from '@/components/PrefixedImage';
import { Carousel } from '@/components/carousel';
import type {
  CarouselControlVariant,
  CarouselLayout,
} from '@/components/carousel/types';
import { useWindowWidth } from '@/hooks/useWindowWidth';
import { breakpoints } from '@/tokens/breakpoints';
import type { AboutAspect, AboutMediaSlide } from '@/lib/about';
import AboutSectionHeader from './AboutSectionHeader';

type CaptionPosition = 'overlay' | 'below';

/** Predefined card frame heights (mirrors the Llumen feature carousel). */
const VISUAL_HEIGHT_LG_PX = 480;
const VISUAL_HEIGHT_MD_PX = 400;

const ASPECT_RATIO: Record<AboutAspect, number> = {
  '16/9': 16 / 9,
  '3/4': 3 / 4,
  '1/1': 1,
};

const ASPECT_CLASS: Record<AboutAspect, string> = {
  '16/9': 'aspect-[16/9]',
  '3/4': 'aspect-[3/4]',
  '1/1': 'aspect-square',
};

function resolveSlideWidth(aspect: AboutAspect, viewportWidth: number): number {
  const height =
    viewportWidth === 0 || viewportWidth >= breakpoints.lg
      ? VISUAL_HEIGHT_LG_PX
      : VISUAL_HEIGHT_MD_PX;
  return Math.round(height * ASPECT_RATIO[aspect]);
}

function AboutMediaCard({
  slide,
  width,
  captionPosition,
}: {
  slide: AboutMediaSlide;
  width: number;
  captionPosition: CaptionPosition;
}) {
  const style = width ? { width: `${width}px` } : undefined;
  const aspectClass = ASPECT_CLASS[slide.aspect ?? '16/9'];

  if (captionPosition === 'below') {
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
        <p className="text-body text-white">{slide.caption}</p>
      </div>
    );
  }

  return (
    <div style={style} className="shrink-0">
      <div className="relative flex aspect-[16/9] items-end overflow-hidden rounded-card p-6 lg:p-10">
        <Image
          src={slide.image}
          alt=""
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 90vw, 60vw"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80"
        />
        <p className="relative z-10 max-w-[536px] text-body text-white">
          {slide.caption}
        </p>
      </div>
    </div>
  );
}

interface AboutStorySectionProps {
  headingId: string;
  title: string;
  /** Bold white lead-in sentence before the muted continuation. */
  lead: string;
  subtitle: string;
  slides: AboutMediaSlide[];
  /** Caption sits over the image (`overlay`) or beneath it (`below`). */
  captionPosition?: CaptionPosition;
  /**
   * `centered` = looping auto/ticker carousel (uniform width).
   * `horizontal` = non-autoplay arrow carousel using predefined aspect ratios.
   */
  layout?: CarouselLayout;
  controlVariant?: CarouselControlVariant;
}

/**
 * About narrative section — reuses `Carousel` and its built-in feature header
 * (display title + bold lead + muted subtitle), the same pattern as the Llumen
 * feature sections on the home/product pages.
 */
export default function AboutStorySection({
  headingId,
  title,
  lead,
  subtitle,
  slides,
  captionPosition = 'overlay',
  layout = 'centered',
  controlVariant = 'auto',
}: AboutStorySectionProps) {
  const viewportWidth = useWindowWidth();

  return (
    <section className="py-section" aria-labelledby={headingId}>
      <div className="flex flex-col gap-section">
        <div className="mx-auto w-full max-w-content px-5">
          <AboutSectionHeader
            id={headingId}
            title={title}
            lead={lead}
            subtitle={subtitle}
          />
        </div>

        <Carousel
          slides={slides}
          layout={layout}
          controlVariant={controlVariant}
          controlsAlign="center"
          headerClassName="hidden"
          sectionClassName="w-full flex flex-col"
          getSlideKey={(slide, index) => `${slide.id}-${index}`}
          getSlideWidth={(slide) =>
            resolveSlideWidth(slide.aspect ?? '16/9', viewportWidth)
          }
          renderSlide={(slide, { width }) => (
            <AboutMediaCard
              slide={slide}
              width={width}
              captionPosition={captionPosition}
            />
          )}
        />
      </div>
    </section>
  );
}
