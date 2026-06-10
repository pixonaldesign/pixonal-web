'use client';

import { useEffect, useState } from 'react';

/**
 * Tracks `window.innerWidth` after mount. Returns 0 during SSR / before
 * hydration so consumers can detect "not measured yet" and fall back to a
 * default. The carousel slides are already hidden (visibility: hidden) until
 * the carousel's own ResizeObserver fires, so the brief 0-width window does
 * not cause a visible layout flash.
 */
export function useWindowWidth(): number {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const update = () => setWidth(window.innerWidth);
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  return width;
}
