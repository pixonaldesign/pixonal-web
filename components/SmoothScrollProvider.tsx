'use client';

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from 'react';
import Lenis from 'lenis';
import { smoothScrollConfig } from '@/lib/smooth-scroll-config';

const SmoothScrollContext = createContext<Lenis | null>(null);

export function useLenis() {
  return useContext(SmoothScrollContext);
}

interface SmoothScrollProviderProps {
  children: ReactNode;
}

/**
 * Lenis smooth scroll for the whole site.
 * Global feel: `lib/smooth-scroll-config.ts`
 * Per-section overlay speed: `ParallaxSection` + `lib/section-scroll-speeds.ts`
 */
export default function SmoothScrollProvider({ children }: SmoothScrollProviderProps) {
  const [lenis, setLenis] = useState<Lenis | null>(null);

  useEffect(() => {
    const instance = new Lenis({
      lerp: smoothScrollConfig.lerp,
      duration: smoothScrollConfig.duration,
      wheelMultiplier: smoothScrollConfig.wheelMultiplier,
      touchMultiplier: smoothScrollConfig.touchMultiplier,
      autoRaf: smoothScrollConfig.autoRaf,
      respectReducedMotion: smoothScrollConfig.respectReducedMotion,
    });

    setLenis(instance);

    return () => {
      instance.destroy();
      setLenis(null);
    };
  }, []);

  return (
    <SmoothScrollContext.Provider value={lenis}>
      {children}
    </SmoothScrollContext.Provider>
  );
}
