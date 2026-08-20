import Image from '@/components/PrefixedImage';
import type { CaseStudyPointsSection } from '@/lib/industry-case-studies';
import CaseStudyPointsBlock from './CaseStudyPointsBlock';

interface CaseStudyPointsProps {
  data: CaseStudyPointsSection;
  /** Typography utility for the section title. */
  titleClassName?: string;
  /** Vertical gap between the header and the card grid. */
  gapClassName?: string;
  /**
   * When true the section applies section padding to the top only (the next
   * section supplies the gap below). Defaults to padding on both edges.
   */
  topPaddingOnly?: boolean;
}

/**
 * Standalone text-grid case study section (Discoveries, Results) — an eyebrow +
 * title + advisory-style icon cards inside its own section wrapper, with an
 * optional banner image below the grid.
 */
export default function CaseStudyPoints({
  data,
  titleClassName,
  gapClassName,
  topPaddingOnly = false,
}: CaseStudyPointsProps) {
  return (
    <section
      className={`px-gutter ${topPaddingOnly ? '' : 'py-section'}`}
      style={
        topPaddingOnly ? { paddingTop: 'var(--layout-section-y)' } : undefined
      }
      aria-labelledby={data.id}
    >
      <div className="mx-auto flex w-full max-w-content flex-col gap-section">
        <CaseStudyPointsBlock
          data={data}
          titleClassName={titleClassName}
          gapClassName={gapClassName}
        />

        {data.image ? (
          <div className="relative aspect-video overflow-hidden rounded-card">
            <Image
              src={data.image}
              alt=""
              fill
              className="object-cover"
              sizes="(max-width: 1580px) 100vw, 1580px"
            />
          </div>
        ) : null}
      </div>
    </section>
  );
}
