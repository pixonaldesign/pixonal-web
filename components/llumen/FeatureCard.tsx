import type { CSSProperties } from 'react';
import Image from 'next/image';
import type { FeatureCard as FeatureCardType } from '@/lib/llumen-content';
import { resolveFeatureCardWidth } from '@/lib/feature-card-layout';

interface FeatureCardProps {
  card: FeatureCardType;
  /**
   * Width supplied by the parent carousel. The parent passes a viewport-aware
   * width (480-based at lg+, 400-based at md→lg, viewport-fitted below md).
   */
  width?: number;
}

function isVideoSource(card: FeatureCardType): boolean {
  if (card.mediaType) return card.mediaType === 'video';
  if (!card.image) return false;
  return /\.(mp4|webm|mov)$/i.test(card.image);
}

/**
 * Visual container height ladder. Inline height/aspect aren't used — Tailwind
 * responsive classes drive the height so the container reacts to the viewport
 * even when the article's inline width changes lag a tick behind a resize.
 *  - <md: aspect-[16/9] (height auto, width fills viewport from the carousel)
 *  - md→lg: 400px tall
 *  - lg+:   480px tall
 */
const VISUAL_HEIGHT_CLASS =
  'max-md:aspect-[16/9] md:h-[400px] lg:h-[480px]';

export default function FeatureCard({ card, width }: FeatureCardProps) {
  const cardWidth = width ?? resolveFeatureCardWidth(card);
  const isVideo = isVideoSource(card);
  const isBleed = card.bleed === true;
  const hasMedia = !!card.image;

  const backgroundStyle: CSSProperties = card.cardBackground
    ? { background: card.cardBackground }
    : card.gradient
      ? {
          background: `linear-gradient(to bottom, ${card.gradient.from}, ${card.gradient.to})`,
        }
      : { background: '#000000' };

  return (
    <article
      className="flex flex-col gap-block shrink-0"
      style={{ width: `${cardWidth}px` }}
    >
      <div
        className={`relative rounded-card overflow-hidden shrink-0 ${VISUAL_HEIGHT_CLASS} ${
          isBleed ? '' : 'flex items-center justify-center p-5'
        }`}
        style={backgroundStyle}
      >
        {hasMedia ? (
          isBleed ? (
            isVideo ? (
              <video
                src={card.image}
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
                aria-hidden
                className="absolute inset-0 w-full h-full object-cover"
                style={{ objectPosition: card.objectPosition }}
              />
            ) : (
              <Image
                src={card.image!}
                alt=""
                fill
                sizes={`${cardWidth}px`}
                className="object-cover"
                style={{ objectPosition: card.objectPosition ?? 'center' }}
              />
            )
          ) : (
            // Non-bleed: image floats inside the padded container at its own
            // aspect ratio via object-contain.
            <div className="relative w-full h-full">
              {isVideo ? (
                <video
                  src={card.image}
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="metadata"
                  aria-hidden
                  className="w-full h-full object-contain"
                />
              ) : (
                <Image
                  src={card.image!}
                  alt=""
                  fill
                  sizes={`${cardWidth}px`}
                  className="object-contain object-center"
                />
              )}
            </div>
          )
        ) : null}
      </div>
      <div className="text-body">
        <h3 className="inline text-primary-50">{card.title}.</h3>{' '}
        <span className="text-primary-50/40">{card.description}</span>
      </div>
    </article>
  );
}
