'use client';

import { Carousel } from '@/components/carousel';
import { resolveFeatureCardWidth } from '@/lib/feature-card-layout';
import { useWindowWidth } from '@/hooks/useWindowWidth';
import type { FeatureCard as FeatureCardType } from '@/lib/llumen-content';
import FeatureCard from './FeatureCard';

interface FeatureCarouselProps {
  cards: FeatureCardType[];
  title?: string;
  descriptionLead?: string;
  description?: string;
  headingId?: string;
}

/** @deprecated Prefer `<Carousel layout="horizontal" … />` directly. */
export default function FeatureCarousel({
  cards,
  title,
  descriptionLead,
  description,
  headingId,
}: FeatureCarouselProps) {
  const viewportWidth = useWindowWidth();
  return (
    <Carousel
      title={title}
      descriptionLead={descriptionLead}
      subtitle={description}
      headingId={headingId}
      slides={cards}
      layout="horizontal"
      titleVariant="feature"
      controlVariant="arrows"
      controlsAlign="end"
      getSlideKey={(card, index) => `${card.title}-${index}`}
      getSlideWidth={(card) => resolveFeatureCardWidth(card, viewportWidth)}
      renderSlide={(card, { width }) => <FeatureCard card={card} width={width} />}
      sectionClassName={title ? undefined : 'bg-transparent p-0'}
      headerClassName={title ? undefined : 'w-full flex flex-col gap-block'}
    />
  );
}
