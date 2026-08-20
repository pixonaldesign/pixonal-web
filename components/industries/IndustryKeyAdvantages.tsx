import ImpactCarousel from '@/components/carousel/ImpactCarousel';
import type { KeyAdvantageTab } from '@/lib/industries';

interface IndustryKeyAdvantagesProps {
  /** Overview heading (left column of the section header). Defaults to "Overview". */
  overviewHeading?: string;
  /** Overview paragraph (right column of the section header). */
  overviewText: string;
  /** Label above the tab strip — typically "Key Advantages". */
  eyebrow: string;
  tabs: KeyAdvantageTab[];
}

export default function IndustryKeyAdvantages({
  overviewHeading = 'Overview',
  overviewText,
  eyebrow,
  tabs,
}: IndustryKeyAdvantagesProps) {
  const slides = tabs.map((tab) => ({
    id: tab.id,
    label: tab.label,
    number: tab.number,
    title: tab.title,
    image: tab.image,
    imageBackground: tab.imageBackground,
    blocks: tab.description ? [{ body: tab.description }] : undefined,
  }));

  return (
    <section
      id="key-advantages"
      aria-labelledby="industry-overview-heading"
      className="flex flex-col gap-impact-intro py-section"
    >
      <div className="px-gutter">
        <header className="mx-auto flex w-full max-w-content flex-col gap-block lg:flex-row lg:items-start lg:gap-5">
          <h2
            id="industry-overview-heading"
            className="text-h1 text-primary-50 lg:w-[498px] shrink-0"
          >
            {overviewHeading}
          </h2>
          <p className="text-body text-primary-50/80 flex-1 lg:max-w-[842px]">
            {overviewText}
          </p>
        </header>
      </div>

      <ImpactCarousel
        slides={slides}
        tablistLabel={eyebrow}
        idPrefix="industry-key"
      />
    </section>
  );
}
