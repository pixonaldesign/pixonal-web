import Image from 'next/image';
import {
  CASE_STUDY_ANCHOR_ID,
  type CaseStudyPointsSection,
  type CaseStudyStat,
} from '@/lib/industry-case-studies';
import CaseStudyPointsBlock from './CaseStudyPointsBlock';

interface CaseStudyIntroProps {
  headingId: string;
  title: string;
  partner?: { label: string; name: string };
  summary: string;
  image?: string;
  stats: CaseStudyStat[];
  /** Points block (Context & Key Challenges) folded into this section. */
  challenges?: CaseStudyPointsSection;
}

/**
 * Case study opener — title, optional partner credit pill, a lead summary
 * paragraph, an optional banner image, the headline stats row, and (optionally)
 * the Context & Key Challenges block folded into the same section.
 */
export default function CaseStudyIntro({
  headingId,
  title,
  partner,
  summary,
  image,
  stats,
  challenges,
}: CaseStudyIntroProps) {
  return (
    <section
      id={CASE_STUDY_ANCHOR_ID}
      className="pb-section px-gutter scroll-mt-[88px]"
      aria-labelledby={headingId}
    >
      <div className="mx-auto w-full max-w-content">
        <div aria-hidden className="h-px w-full bg-white/10" />
        <div className="flex flex-col gap-section pt-10">
        <div className="flex flex-col gap-block">
          <div className="flex flex-col gap-tight">
            <h2 id={headingId} className="text-display text-primary-50">
              {title}
            </h2>
            {partner ? (
              <p className="text-body text-primary-50/40 inline-flex items-center self-start rounded-full bg-white/10 px-4 py-2">
                {partner.label}{' '}
                <span className="text-primary-50">&nbsp;{partner.name}</span>
              </p>
            ) : null}
          </div>
          <p className="text-lead normal-case text-primary-50/70 max-w-[900px]">
            {summary}
          </p>
        </div>

        {stats.length ? (
          <dl className="grid grid-cols-2 gap-block lg:grid-cols-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col gap-stack border-t border-white/15 pt-1"
              >
                <dt
                  className="text-figure text-primary-50"
                  style={{ fontFamily: 'var(--font-mono)' }}
                >
                  {stat.value}
                </dt>
                <dd className="text-body text-primary-50/40">{stat.label}</dd>
              </div>
            ))}
          </dl>
        ) : null}

        {image ? (
          <div className="relative aspect-video overflow-hidden rounded-card">
            <Image
              src={image}
              alt=""
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1580px) 100vw, 1580px"
            />
          </div>
        ) : null}

        {challenges ? (
          <CaseStudyPointsBlock
            data={challenges}
            gapClassName="gap-6 md:gap-10"
            titleClassName="text-h1"
          />
        ) : null}
        </div>
      </div>
    </section>
  );
}
