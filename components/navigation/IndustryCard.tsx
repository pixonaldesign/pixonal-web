'use client';

import Link from 'next/link';
import Image from 'next/image';
import PixonalIcon from '@/components/PixonalIcon';
import type { IndustryMenuItem } from './nav-config';

interface IndustryCardProps {
  item: IndustryMenuItem;
  onNavigate: () => void;
}

/**
 * Industries menu card (Figma 1802:7797 default / 1802:7805 hover).
 * Default: bordered transparent surface. Hover: full-bleed background image
 * with a top-to-bottom dark gradient for legibility.
 */
export default function IndustryCard({ item, onNavigate }: IndustryCardProps) {
  return (
    <Link
      href={item.href}
      onClick={onNavigate}
      className="group relative flex h-[252px] min-w-0 flex-1 flex-col items-start justify-between rounded-[12px] border border-white/40 p-4 overflow-hidden transition-colors"
    >
      {/* Hover background — full-bleed image + gradient overlay */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-[12px] opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100"
      >
        <Image
          src={item.image}
          alt=""
          fill
          className="object-cover rounded-[12px]"
          sizes="(max-width: 1024px) 50vw, 33vw"
        />
        <div className="absolute inset-0 rounded-[12px] bg-gradient-to-b from-black/70 from-0% to-transparent to-[68.625%]" />
      </div>

      <span className="relative z-10 w-full text-h2 text-white">
        {item.label}
      </span>

      <span
        aria-hidden
        className="relative z-10 flex w-full items-center justify-end"
      >
        <span className="flex h-[30px] w-[30px] items-center justify-center rounded-full bg-white/10 text-white transition-colors group-hover:bg-white/20">
          <PixonalIcon name="caret-right" size={16} className="text-white" />
        </span>
      </span>
    </Link>
  );
}
