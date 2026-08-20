'use client';

import Image from '@/components/PrefixedImage';
import { Carousel } from '@/components/carousel';
import type { FeatureSectionContent } from '@/lib/llumen-content';
import { resolveFeatureCardWidth } from '@/lib/feature-card-layout';
import { useWindowWidth } from '@/hooks/useWindowWidth';
import FeatureCard from './FeatureCard';

interface LlumenFeatureSectionProps {
  section: FeatureSectionContent;
}

export default function LlumenFeatureSection({ section }: LlumenFeatureSectionProps) {
  const viewportWidth = useWindowWidth();
  const hasSecondary =
    !!section.secondaryFeatures && section.secondaryFeatures.length > 0;

  return (
    <div className="py-section flex flex-col gap-section">
      <Carousel
        sectionId={section.id}
        title={section.title}
        descriptionLead={section.descriptionLead}
        subtitle={section.description}
        headingId={`${section.id}-heading`}
        slides={section.cards}
        layout="horizontal"
        titleVariant="feature"
        controlVariant="arrows"
        controlsAlign="center"
        sectionClassName="flex flex-col justify-center items-center"
        getSlideKey={(card, index) => `${section.id}-${card.title}-${index}`}
        getSlideWidth={(card) => resolveFeatureCardWidth(card, viewportWidth)}
        renderSlide={(card, { width }) => <FeatureCard card={card} width={width} />}
      />

      {hasSecondary && (
        <div
          className="px-gutter"
          aria-labelledby={`${section.id}-secondary-heading`}
          role="region"
        >
          <div className="max-w-content mx-auto">
            <h2 id={`${section.id}-secondary-heading`} className="sr-only">
              {section.title} — additional capabilities
            </h2>
            {/*
              Below md: one feature per row, image on the left and copy on
              the right (Figma 2612:9448). md+: original N-column grid where
              N matches the secondaryFeatures length.
            */}
            <div
              className="grid grid-cols-1 gap-6 md:gap-5 w-full md:[grid-template-columns:repeat(var(--secondary-cols),minmax(0,1fr))]"
              style={
                {
                  '--secondary-cols': section.secondaryFeatures!.length,
                } as React.CSSProperties
              }
            >
              {section.secondaryFeatures!.map((feature) => (
                <article
                  key={feature.title}
                  className="flex flex-row md:flex-col gap-4 md:gap-block w-full items-start"
                >
                  <div className="relative size-[112px] md:size-[200px] rounded-card overflow-hidden bg-primary-800 shrink-0">
                    <Image
                      src={feature.image}
                      alt=""
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 112px, 200px"
                    />
                  </div>
                  <div className="flex flex-col gap-stack flex-1 min-w-0">
                    <h3 className="text-body text-primary-50">{feature.title}</h3>
                    <p className="text-body-relaxed text-primary-50/40">{feature.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
