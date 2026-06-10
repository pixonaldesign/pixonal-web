import PixonalIcon from '@/components/PixonalIcon';
import type { CaseStudyPointsSection } from '@/lib/industry-case-studies';

interface CaseStudyPointsBlockProps {
  data: CaseStudyPointsSection;
  /** Vertical gap between the header and the card grid. */
  gapClassName?: string;
  /** Typography utility for the section title. */
  titleClassName?: string;
}

/**
 * Header + advisory-style card grid for a points section. Rendered standalone
 * inside its own `<section>` by `CaseStudyPoints`, or embedded inside another
 * section (e.g. the case study intro) without its own wrapper.
 */
export default function CaseStudyPointsBlock({
  data,
  gapClassName = 'gap-section',
  titleClassName = 'text-display',
}: CaseStudyPointsBlockProps) {
  return (
    <div className={`flex flex-col ${gapClassName}`}>
      <header className="flex flex-col gap-block">
        {data.eyebrow ? (
          <p className="text-stat !uppercase text-white/40">{data.eyebrow}</p>
        ) : null}
        <h2 id={data.id} className={`${titleClassName} text-primary-50`}>
          {data.title}
        </h2>
        {data.lead ? (
          <p className="text-body text-primary-50/40 max-w-[640px]">
            {data.lead}
          </p>
        ) : null}
      </header>

      <ul
        role="list"
        className={`grid grid-cols-1 gap-6 md:gap-5 md:grid-cols-2 ${
          data.columns === 2 ? '' : 'lg:grid-cols-3'
        }`}
      >
        {data.points.map((point) => (
          <li key={point.title} className="flex">
            {/* Llumen secondary-feature layout: row below md (media left),
                column at md+ (media on top). */}
            <article className="flex w-full flex-row items-start gap-4 md:flex-col md:gap-block">
              <div className="relative flex size-[112px] shrink-0 items-center justify-center rounded-card bg-black md:size-[200px]">
                {point.icon ? (
                  <PixonalIcon
                    name={point.icon}
                    size={64}
                    weight="thin"
                    className="text-white"
                  />
                ) : null}
              </div>
              <div className="flex min-w-0 flex-1 flex-col gap-stack">
                <h3 className="text-body text-primary-50">{point.title}</h3>
                <p className="text-body-relaxed text-primary-50/40">
                  {point.description}
                </p>
              </div>
            </article>
          </li>
        ))}
      </ul>
    </div>
  );
}
