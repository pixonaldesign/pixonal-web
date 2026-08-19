'use client';

import { useEffect, useState } from 'react';
import { useLenis } from '@/components/SmoothScrollProvider';

const TOP_OFFSET_PX = 80;
const DELTA_THRESHOLD_PX = 8;

/**
 * True while the user is scrolling down (past `TOP_OFFSET_PX`).
 * False at the top of the page, while scrolling up, or when reduced motion is on.
 */
export default function useHideOnScrollDown() {
  const lenis = useLenis();
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (media.matches) {
      setHidden(false);
      return;
    }

    let lastY = lenis?.scroll ?? window.scrollY;

    const apply = (y: number) => {
      const delta = y - lastY;

      if (y <= TOP_OFFSET_PX) {
        setHidden(false);
        lastY = y;
        return;
      }

      if (Math.abs(delta) < DELTA_THRESHOLD_PX) return;

      setHidden(delta > 0);
      lastY = y;
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
  }, [lenis]);

  return hidden;
}
