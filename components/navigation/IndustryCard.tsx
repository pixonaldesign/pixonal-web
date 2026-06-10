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
 * - lg+: bordered transparent surface by default, full-bleed image reveals on
 *        hover / keyboard focus.
 * - <lg: image is always visible (touch devices have no hover) so users
 *        immediately see which industry each card represents.
 */
export default function IndustryCard({ item, onNavigate }: IndustryCardProps) {
  return (
    <Link
      href={item.href}
      onClick={onNavigate}
      className="group relative flex h-[252px] min-w-0 flex-1 flex-col items-start justify-between rounded-card border border-white/40 p-4 overflow-hidden transition-colors"
    >
      {/* Background — always visible below lg, hover-revealed at lg+ */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-card opacity-100 lg:opacity-0 transition-opacity duration-300 lg:group-hover:opacity-100 lg:group-focus-visible:opacity-100"
      >
        <Image
          src={item.image}
          alt=""
          fill
          className="object-cover rounded-card"
          sizes="(max-width: 1024px) 50vw, 33vw"
        />
        <div className="absolute inset-0 rounded-card bg-gradient-to-b from-black/70 from-0% to-transparent to-[68.625%]" />
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
