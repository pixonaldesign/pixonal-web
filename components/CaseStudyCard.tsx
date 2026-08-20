import Link from 'next/link';
import Image from '@/components/PrefixedImage';
import type { IndustryCaseStudyCard } from '@/lib/industry-case-studies';
import { impactCardHoverVars } from '@/components/home/impact-card';

interface CaseStudyCardProps {
  card: IndustryCaseStudyCard;
  className?: string;
}

/**
 * Impact Highlights case-study card — image fills the card edge-to-edge
 * (`bg-surface-raised` is the fallback). Title + description sit bottom-left.
 * The whole card links to that industry case study.
 */
export default function CaseStudyCard({ card, className = '' }: CaseStudyCardProps) {
  return (
    <article
      className={`relative h-full min-h-0 overflow-hidden rounded-card bg-surface-raised ${className}`}
      style={impactCardHoverVars}
    >
      <Link
        href={card.href}
        scroll={false}
        className="group absolute inset-0 flex flex-col justify-end p-5"
      >
        {card.image ? (
          <Image
            alt=""
            src={card.image}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            decoding="async"
            className="impact-card-media"
          />
        ) : null}
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent"
        />
        <div className="relative z-10 flex flex-col gap-tight">
          <h3 className="text-impact-title text-white">{card.title}</h3>
          {card.subtitle ? (
            <p className="text-impact-copy text-white/70">{card.subtitle}</p>
          ) : null}
        </div>
      </Link>
    </article>
  );
}
