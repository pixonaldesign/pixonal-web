import type { CaseStudyApproachSection } from '@/lib/industry-case-studies';
import CaseStudyPointsBlock from './CaseStudyPointsBlock';

interface CaseStudyApproachProps {
  data: CaseStudyApproachSection;
}

/**
 * Approach & Methodology — a main `h1`-styled title above stacked groups, each
 * with an `h2`-styled sub-title and the same advisory-style black icon cards as
 * the Context & Key Challenges section.
 */
export default function CaseStudyApproach({ data }: CaseStudyApproachProps) {
  return (
    <section
      className="px-gutter"
      style={{ paddingTop: 'var(--layout-section-y)' }}
      aria-labelledby={data.id}
    >
      <div className="mx-auto flex w-full max-w-content flex-col gap-section">
        <h2 id={data.id} className="text-h1 text-primary-50">
          {data.title}
        </h2>

        <div className="flex flex-col gap-section">
          {data.groups.map((group) => (
            <CaseStudyPointsBlock
              key={group.id}
              data={{
                id: group.id,
                title: group.title,
                points: group.points,
              }}
              titleClassName="text-h2"
              gapClassName="gap-6 md:gap-10"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
