import Link from 'next/link';
import Image from 'next/image';
import type { CaseStudy } from '@/lib/markdown';
import PixonalIcon from './PixonalIcon';

interface CaseStudyCardProps {
  study: CaseStudy;
  /** Explicit pixel width set by the parent carousel (deterministic centering). */
  width?: number;
}

export default function CaseStudyCard({ study, width }: CaseStudyCardProps) {
  return (
    <article
      className="border border-zinc-400/16 rounded-[20px] shrink-0 min-[1440px]:h-[593px] overflow-hidden"
      style={width !== undefined ? { width: `${width}px` } : undefined}
    >
      <Link
        href={`/case-studies/${study.slug}`}
        className="group flex flex-col min-[1440px]:flex-row w-full h-full cursor-pointer"
      >
        {/* Media — top under 1440px, right at 1440px+ */}
        <div className="order-1 min-[1440px]:order-2 p-3 min-[1440px]:pl-0 min-[1440px]:pr-3 min-[1440px]:pt-3 min-[1440px]:pb-3 min-[1440px]:h-[593px] min-[1440px]:flex min-[1440px]:items-start">
          <div className="relative w-full aspect-[16/9] min-[1440px]:w-[1012px] min-[1440px]:h-[569px] min-[1440px]:aspect-auto rounded-xl border border-black/10 overflow-hidden">
            <Image
              alt={study.title}
              src={study.image}
              fill
              sizes="(max-width: 1440px) 100vw, 1012px"
              className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
            />
          </div>
        </div>

        {/* Content — below media under 1440px, left at 1440px+ */}
        <div className="order-2 min-[1440px]:order-1 min-[1440px]:w-100 p-card flex flex-col justify-between gap-block min-[1440px]:h-full">
          <div className="flex flex-col gap-stack">
            <p className="text-label text-white opacity-40">Case Studies</p>
            <h3 className="text-h2 text-white">{study.title}</h3>
            {study.excerpt && (
              <p className="text-body text-white opacity-60">{study.excerpt}</p>
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
