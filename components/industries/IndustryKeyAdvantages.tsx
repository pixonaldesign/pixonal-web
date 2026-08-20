import ImpactCarousel from '@/components/carousel/ImpactCarousel';
import SectionHeader from '@/components/SectionHeader';
import type { KeyAdvantageTab } from '@/lib/industries';

interface IndustryKeyAdvantagesProps {
  /** Overview heading. Defaults to "Overview". */
  overviewHeading?: string;
  /** Overview supporting copy. */
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
        <SectionHeader
          className="mx-auto flex w-full max-w-content flex-col gap-stack"
          id="industry-overview-heading"
          title={overviewHeading}
          subtitle={overviewText}
        />
      </div>

      <ImpactCarousel
        slides={slides}
        tablistLabel={eyebrow}
        idPrefix="industry-key"
      />
    </section>
  );
}
