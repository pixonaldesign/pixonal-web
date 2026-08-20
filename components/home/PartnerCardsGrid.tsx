'use client';

import { useEffect, useRef, type CSSProperties } from 'react';
import Image from '@/components/PrefixedImage';
import { impactCardShellClass } from '@/components/home/impact-card';
import NoiseTexture from '@/components/NoiseTexture';

export type PartnerCardData = {
  name: string;
  logo: string;
  description: string;
  industry: string;
};

export type PartnerSpotlightMode = 'off' | 'soft' | 'circle';

export type PartnerSoftSettings = {
  size: number;
  opacity: number;
  blur: number;
  falloff: number;
};

export type PartnerCircleSettings = {
  size: number;
  opacity: number;
  falloff: number;
};

export type PartnerBorderSettings = {
  enabled: boolean;
  size: number;
  opacity: number;
  width: number;
};

interface PartnerCardsGridProps {
  partners: readonly PartnerCardData[];
  spotlight?: PartnerSpotlightMode;
  soft?: PartnerSoftSettings;
  circle?: PartnerCircleSettings;
  border?: PartnerBorderSettings;
}

export const DEFAULT_SOFT: PartnerSoftSettings = {
  size: 300,
  opacity: 0.3,
  blur: 160,
  falloff: 40,
};

export const DEFAULT_CIRCLE: PartnerCircleSettings = {
  size: 520,
  opacity: 0.1,
  falloff: 70,
};

export const DEFAULT_BORDER: PartnerBorderSettings = {
  enabled: true,
  size: 300,
  opacity: 0.4,
  width: 1,
};

export const DEFAULT_SPOTLIGHT: PartnerSpotlightMode = 'soft';

/**
 * Shared cursor spotlight: one light source, sampled by every card.
 * Closest cards catch the bright center; farther cards only get the falloff.
 */
export default function PartnerCardsGrid({
  partners,
  spotlight = DEFAULT_SPOTLIGHT,
  soft = DEFAULT_SOFT,
  circle = DEFAULT_CIRCLE,
  border = DEFAULT_BORDER,
}: PartnerCardsGridProps) {
  const cardsRef = useRef<Array<HTMLElement | null>>([]);
  const posRef = useRef({ x: 0, y: 0 });
  const rafRef = useRef(0);

  useEffect(() => {
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const applyGlow = () => {
    rafRef.current = 0;
    const { x, y } = posRef.current;
    for (const card of cardsRef.current) {
      if (!card) continue;
      const rect = card.getBoundingClientRect();
      card.style.setProperty('--glow-x', `${x - rect.left}px`);
      card.style.setProperty('--glow-y', `${y - rect.top}px`);
    }
  };

  const onPointerMove = (event: React.PointerEvent<HTMLUListElement>) => {
    posRef.current = { x: event.clientX, y: event.clientY };
    if (!rafRef.current) {
      rafRef.current = requestAnimationFrame(applyGlow);
    }
  };

  return (
    <ul
      role="list"
      className="group/partners grid min-w-0 flex-1 grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3"
      onPointerMove={onPointerMove}
    >
      {partners.map((partner, index) => (
        <li key={partner.name}>
          <article
            ref={(node) => {
              cardsRef.current[index] = node;
            }}
            className={`relative flex h-full min-h-0 flex-col overflow-hidden aspect-square p-5 ${impactCardShellClass}`}
            style={
              {
                '--glow-x': '-200px',
                '--glow-y': '-200px',
              } as CSSProperties
            }
          >
            <NoiseTexture opacity={0.04} />
            {spotlight === 'circle' ? (
              <div
                aria-hidden
                className="pointer-events-none absolute z-[2] rounded-full opacity-0 transition-opacity duration-300 group-hover/partners:opacity-100 motion-reduce:hidden"
                style={{
                  width: circle.size,
                  height: circle.size,
                  left: 'var(--glow-x)',
                  top: 'var(--glow-y)',
                  transform: 'translate(-50%, -50%)',
                  background: `radial-gradient(circle, rgba(255, 255, 255, ${circle.opacity}) 0%, transparent ${circle.falloff}%)`,
                }}
              />
            ) : null}
            {spotlight === 'soft' ? (
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 z-[2] opacity-0 transition-opacity duration-300 group-hover/partners:opacity-100 motion-reduce:hidden"
                style={{
                  filter: `blur(${soft.blur}px)`,
                  background: `radial-gradient(circle ${soft.size}px at var(--glow-x) var(--glow-y), rgba(255, 255, 255, ${soft.opacity}), transparent ${soft.falloff}%)`,
                }}
              />
            ) : null}
            {border.enabled ? (
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 z-[3] rounded-card opacity-0 transition-opacity duration-300 group-hover/partners:opacity-100 motion-reduce:hidden"
                style={{
                  padding: `${border.width}px`,
                  background: `radial-gradient(circle ${border.size}px at var(--glow-x) var(--glow-y), rgba(255, 255, 255, ${border.opacity}), transparent 70%)`,
                  WebkitMask:
                    'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                  WebkitMaskComposite: 'xor',
                  mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                  maskComposite: 'exclude',
                }}
              />
            ) : null}
            <div className="relative z-10 flex h-full min-h-0 flex-col">
              <div className="flex h-14 items-center justify-start">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={280}
                  height={56}
                  className="h-14 w-auto max-w-full object-contain object-left filter brightness-0 invert"
                />
              </div>
              <div className="mt-auto flex flex-col gap-stack">
                <p className="text-lead text-white">{partner.description}</p>
                <h3 className="text-partner-industry text-white/40">
                  {partner.industry}
                </h3>
              </div>
            </div>
          </article>
        </li>
      ))}
    </ul>
  );
}
