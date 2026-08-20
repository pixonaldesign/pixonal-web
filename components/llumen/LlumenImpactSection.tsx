import ImpactCarousel from '@/components/carousel/ImpactCarousel';
import {
  llumenIndustries,
  llumenIndustriesIntro,
  llumenIndustriesIntroLead,
} from '@/lib/llumen-content';

const impactSlides = llumenIndustries.map((slide) => ({
  id: slide.id,
  label: slide.label,
  number: slide.number,
  title: slide.title,
  image: slide.image,
  blocks: [
    { heading: 'Impact', body: slide.impact },
    { heading: 'Benefits', body: slide.benefits },
  ],
}));

export default function LlumenImpactSection() {
  return (
    <section
      id="impact"
      aria-labelledby="impact-heading"
      className="flex flex-col gap-impact-intro py-section"
    >
      <div className="px-gutter">
        <header className="mx-auto flex w-full max-w-content flex-col gap-stack">
          <h2 id="impact-heading" className="text-figure text-primary-50">
            Impact
          </h2>
          <p className="text-lead text-primary-50/70 max-w-[840px]">
            {llumenIndustriesIntroLead} {llumenIndustriesIntro}
          </p>
        </header>
      </div>

      <ImpactCarousel
        slides={impactSlides}
        tablistLabel="Llumen industries"
        idPrefix="industry"
      />
    </section>
  );
}
