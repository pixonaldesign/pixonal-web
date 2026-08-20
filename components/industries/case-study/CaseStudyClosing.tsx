import Image from '@/components/PrefixedImage';
import SectionHeader from '@/components/SectionHeader';
import type { CaseStudyClosingSection } from '@/lib/industry-case-studies';

interface CaseStudyClosingProps {
  data: CaseStudyClosingSection;
}

/**
 * Closing statement section — mirrors the intro layout: a heading, a lead
 * paragraph, and an optional full-width banner image beneath them.
 */
export default function CaseStudyClosing({ data }: CaseStudyClosingProps) {
  return (
    <section className="py-section px-gutter">
      <div className="mx-auto flex w-full max-w-content flex-col gap-6 md:gap-10">
        <SectionHeader id={data.id} title={data.title} subtitle={data.body} />

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
