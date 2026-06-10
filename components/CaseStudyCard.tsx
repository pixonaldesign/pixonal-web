import Link from 'next/link';
import Image from 'next/image';
import type { IndustryCaseStudyCard } from '@/lib/industry-case-studies';
import PixonalIcon from './PixonalIcon';

interface CaseStudyCardProps {
  card: IndustryCaseStudyCard;
  /** Explicit pixel width set by the parent carousel (deterministic centering). */
  width?: number;
}

export default function CaseStudyCard({ card, width }: CaseStudyCardProps) {
  return (
    <article
      className="border border-zinc-400/16 rounded-card shrink-0 lg:h-[593px] overflow-hidden"
      style={width !== undefined ? { width: `${width}px` } : undefined}
    >
      <Link
        href={card.href}
        scroll={false}
        className="group flex flex-col lg:flex-row w-full h-full cursor-pointer"
      >
        {/* Media — top under lg, right at lg+ */}
        <div className="order-1 lg:order-2 lg:flex-1 lg:min-w-0 p-3 lg:pl-0 lg:flex lg:items-start">
          <div className="relative w-full aspect-[16/9] lg:h-[569px] lg:aspect-auto rounded-xl border border-black/10 overflow-hidden">
            <Image
              alt={card.title}
              src={card.image}
              fill
              sizes="(max-width: 1024px) 100vw, 70vw"
              className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
            />
          </div>
        </div>

        {/* Content — below media under lg, left at lg+ */}
        <div className="order-2 lg:order-1 lg:w-100 lg:shrink-0 p-card flex flex-col justify-between gap-block lg:h-full">
          <div className="flex flex-col gap-stack">
            <p className="text-label text-white opacity-40">Case Studies</p>
            <h3 className="text-h2 text-white">{card.title}</h3>
            {card.subtitle && (
              <p className="text-body text-white opacity-60">{card.subtitle}</p>
            )}
          </div>

          <div className="inline-flex items-center gap-2 text-label text-white opacity-60 group-hover:opacity-100 transition-opacity">
            <span>Read more</span>
            <PixonalIcon name="arrow-right" size={24} />
          </div>
        </div>
      </Link>
    </article>
  );
}
