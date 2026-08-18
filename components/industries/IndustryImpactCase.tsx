import Image from 'next/image';
import SecondaryButton from '@/components/SecondaryButton';
import type { IndustryImpactCase as ImpactCase } from '@/lib/industries';

interface IndustryImpactCaseProps {
  data: ImpactCase;
}

/**
 * Full-bleed impact-case call-out card with background image, eyebrow,
 * title, and CTA. Matches the "Whitepaper" block in the Figma.
 */
export default function IndustryImpactCase({ data }: IndustryImpactCaseProps) {
  return (
    <section
      aria-labelledby="industry-impact-case-heading"
      className="bg-primary-900 px-gutter py-section"
    >
      <div className="max-w-content mx-auto">
        <div className="relative rounded-card overflow-hidden aspect-[16/9] lg:aspect-[1400/760] flex">
          <Image
            src={data.image}
            alt=""
            fill
            sizes="(max-width: 1024px) 100vw, 1580px"
            className="object-cover"
          />
          <div
            aria-hidden
            className="absolute inset-0 bg-gradient-to-b from-transparent from-[5.829%] to-black/80 to-[74.223%]"
          />
          <div className="relative flex-1 flex flex-col items-center justify-end gap-block px-gutter pb-12 lg:pb-20">
            <div className="flex flex-col gap-3 items-center text-center max-w-[536px]">
              <p className="text-label text-primary-50/40">{data.eyebrow}</p>
              <h2
                id="industry-impact-case-heading"
                className="text-h1 text-primary-50"
              >
                {data.title}
              </h2>
            </div>
            <SecondaryButton href={data.href} showArrow>
              {data.cta ?? 'Explore'}
            </SecondaryButton>
          </div>
        </div>
      </div>
    </section>
  );
}
