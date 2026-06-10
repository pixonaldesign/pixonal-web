'use client';

import { Carousel } from '@/components/carousel';
import type { IndustryCaseStudyCard } from '@/lib/industry-case-studies';
import CaseStudyCard from './CaseStudyCard';

interface CaseStudiesCarouselProps {
  cards: IndustryCaseStudyCard[];
  title?: string;
}

export default function CaseStudiesCarousel({
  cards,
  title = 'Impact Highlights',
}: CaseStudiesCarouselProps) {
  return (
    <Carousel
      title={title}
      slides={cards}
      controlVariant="auto"
      getSlideKey={(card, index) => `${card.industrySlug}-${index}`}
      renderSlide={(card, { width }) => (
        <CaseStudyCard card={card} width={width} />
      )}
    />
  );
}
