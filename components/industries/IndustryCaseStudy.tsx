import type { IndustryCaseStudy as CaseStudy } from '@/lib/industry-case-studies';
import CaseStudyApproach from './case-study/CaseStudyApproach';
import CaseStudyAutoScroll from './case-study/CaseStudyAutoScroll';
import CaseStudyClosing from './case-study/CaseStudyClosing';
import CaseStudyIntro from './case-study/CaseStudyIntro';
import CaseStudyMediaCarousel from './case-study/CaseStudyMediaCarousel';
import CaseStudyPoints from './case-study/CaseStudyPoints';

interface IndustryCaseStudyProps {
  data: CaseStudy;
}

/**
 * Full per-industry case study: intro + stats, then the narrative sections in
 * order. Objectives / Visualization / Discoveries are carousels; Approach is a
 * grouped icon-card section; Results is a text grid.
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
        <CaseStudyMediaCarousel
          data={data.objectives}
          titleClassName="text-h1"
          gapClassName="gap-6 md:gap-10"
          topPaddingOnly
        />
      ) : null}
      {'groups' in data.approach ? (
        <CaseStudyApproach data={data.approach} />
      ) : (
        <CaseStudyMediaCarousel
          data={data.approach}
          titleClassName="text-h1"
          gapClassName="gap-6 md:gap-10"
          topPaddingOnly
        />
      )}
      <CaseStudyMediaCarousel
        data={data.visualization}
        titleClassName="text-h1"
        gapClassName="gap-6 md:gap-10"
        topPaddingOnly
      />
      <CaseStudyPoints
        data={data.discoveries}
        titleClassName="text-h1"
        gapClassName="gap-6 md:gap-10"
        topPaddingOnly
      />
      {'points' in data.results ? (
        <CaseStudyPoints
          data={data.results}
          titleClassName="text-h1"
          gapClassName="gap-6 md:gap-10"
        />
      ) : (
        <CaseStudyClosing data={data.results} />
      )}
    </>
  );
}
