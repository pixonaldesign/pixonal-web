import Image from '@/components/PrefixedImage';
import type {
  CaseStudyAspect,
  CaseStudyMediaSection,
  CaseStudyMediaSlide,
} from '@/lib/industry-case-studies';

const ASPECT_CLASS: Record<CaseStudyAspect, string> = {
  '16/9': 'aspect-[16/9]',
  '3/4': 'aspect-[3/4]',
  '1/1': 'aspect-square',
};

function CaseStudyMediaCard({ slide }: { slide: CaseStudyMediaSlide }) {
  const aspectClass = ASPECT_CLASS[slide.aspect ?? '16/9'];

  return (
    <div className="flex flex-col gap-4 lg:gap-6 max-w-content mx-auto w-full px-5">
      <div className={`relative ${aspectClass} overflow-hidden rounded-card`}>
        <Image
          src={slide.image}
          alt=""
          fill
          className="object-cover"
          sizes="(max-width: 1580px) 100vw, 1580px"
        />
      </div>

      <div className="text-body">
        <h3 className="inline text-primary-50">{slide.title}.</h3>{' '}
        <span className="text-primary-50/40">{slide.description}</span>
      </div>
    </div>
  );
}

interface CaseStudyMediaStackProps {
  data: CaseStudyMediaSection;
  /** Typography utility for the section title. */
  titleClassName?: string;
  /** Vertical gap between the header and the media stack. */
  gapClassName?: string;
  /**
   * When true the section applies section padding to the top only (the next
   * section supplies the gap below). Defaults to padding on both edges.
   */
  topPaddingOnly?: boolean;
}

/**
 * Case study media section — vertical stack of image + caption cards
 * (replaces the previous horizontal carousel).
 */
export default function CaseStudyMediaStack({
  data,
  titleClassName = 'text-display',
  gapClassName = 'gap-10',
  topPaddingOnly = false,
}: CaseStudyMediaStackProps) {
  return (
    <section
      className={topPaddingOnly ? undefined : 'py-section'}
      style={
        topPaddingOnly ? { paddingTop: 'var(--layout-section-y)' } : undefined
      }
      aria-labelledby={data.id}
    >
      <div className={`flex flex-col ${gapClassName}`}>
        <div className="mx-auto flex w-full max-w-content flex-col gap-block px-5">
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

        <div className="flex flex-col gap-section">
          {data.slides.map((slide) => (
            <CaseStudyMediaCard key={slide.id} slide={slide} />
          ))}
        </div>
      </div>
    </section>
  );
}
