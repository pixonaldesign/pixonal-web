import type { IndustryCaseStudy as CaseStudy } from '@/lib/industry-case-studies';
import CaseStudyApproach from './case-study/CaseStudyApproach';
import CaseStudyAutoScroll from './case-study/CaseStudyAutoScroll';
import CaseStudyClosing from './case-study/CaseStudyClosing';
import CaseStudyIntro from './case-study/CaseStudyIntro';
import CaseStudyMediaStack from './case-study/CaseStudyMediaStack';
import CaseStudyPoints from './case-study/CaseStudyPoints';

interface IndustryCaseStudyProps {
  data: CaseStudy;
}

/**
 * Full per-industry case study: intro + stats, then narrative sections in
 * order. Media sections are vertical stacks (no carousels); Approach may be
 * grouped icon cards or a media stack; Results is a text grid or closing.
 */
export default function IndustryCaseStudy({ data }: IndustryCaseStudyProps) {
  return (
    <>
      <CaseStudyAutoScroll />
      <CaseStudyIntro
        headingId="case-study-intro"
        title={data.title}
        partner={data.partner}
        summary={data.summary}
        image={data.image}
        stats={data.stats}
        challenges={data.challenges}
      />
      {data.objectives ? (
        <CaseStudyMediaStack
          data={data.objectives}
          gapClassName="gap-6 md:gap-10"
          topPaddingOnly
        />
      ) : null}
      {'groups' in data.approach ? (
        <CaseStudyApproach data={data.approach} />
      ) : (
        <CaseStudyMediaStack
          data={data.approach}
          gapClassName="gap-6 md:gap-10"
          topPaddingOnly
        />
      )}
      <CaseStudyMediaStack
        data={data.visualization}
        gapClassName="gap-6 md:gap-10"
        topPaddingOnly
      />
      <CaseStudyPoints
        data={data.discoveries}
        gapClassName="gap-6 md:gap-10"
        topPaddingOnly
      />
      {'points' in data.results ? (
        <CaseStudyPoints
          data={data.results}
          gapClassName="gap-6 md:gap-10"
        />
      ) : (
        <CaseStudyClosing data={data.results} />
      )}
    </>
  );
}
