'use client';

import { useEffect, useRef, type ReactNode } from 'react';
import { useLenis } from '@/components/SmoothScrollProvider';
import {
  parallaxEnabled,
  sectionScrollSpeeds,
  type SectionScrollSpeedKey,
} from '@/lib/section-scroll-speeds';

interface ParallaxSectionProps {
  children: ReactNode;
  /** Named key from `sectionScrollSpeeds`, or a raw speed number. */
  speed?: SectionScrollSpeedKey | number;
  zIndex?: number;
  className?: string;
}

function resolveMotion(speed: SectionScrollSpeedKey | number, zIndex?: number) {
  if (typeof speed === 'number') {
    return { speed, zIndex: zIndex ?? 1 };
  }
  const named = sectionScrollSpeeds[speed];
  return { speed: named.speed, zIndex: zIndex ?? named.zIndex };
}

/**
 * Section that moves slower or faster than the page so it can overlay neighbors.
 * Layout slot stays in document flow; the inner layer is what translates.
 * When `parallaxEnabled` is false this is a plain wrapper (no z-index overlay).
 */
export default function ParallaxSection({
  children,
  speed = 1,
  zIndex,
  className,
}: ParallaxSectionProps) {
  const slotRef = useRef<HTMLDivElement>(null);
  const layerRef = useRef<HTMLDivElement>(null);
  const lenis = useLenis();
  const motion = resolveMotion(speed, zIndex);

  useEffect(() => {
    const layer = layerRef.current;
    if (!layer) return;

    const prefersReduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    if (!parallaxEnabled || prefersReduced || motion.speed === 1) {
      layer.style.transform = '';
      return;
    }

    const apply = (scrollY: number) => {
      const offsetY = scrollY * (1 - motion.speed);
      layer.style.transform = `translate3d(0, ${offsetY}px, 0)`;
    };

    if (lenis) {
      const onScroll = (instance: { scroll: number }) => apply(instance.scroll);
      apply(lenis.scroll);
      lenis.on('scroll', onScroll);
      return () => {
        lenis.off('scroll', onScroll);
      };
    }

    const onWindowScroll = () => apply(window.scrollY);
    onWindowScroll();
    window.addEventListener('scroll', onWindowScroll, { passive: true });
    return () => window.removeEventListener('scroll', onWindowScroll);
  }, [lenis, motion.speed]);

  if (!parallaxEnabled) {
    return <div className={className}>{children}</div>;
  }

  return (
    <div
      ref={slotRef}
      className={`relative ${className ?? ''}`}
      style={{ zIndex: motion.zIndex }}
    >
      <div ref={layerRef} className="will-change-transform">
        {children}
      </div>
    </div>
  );
}
