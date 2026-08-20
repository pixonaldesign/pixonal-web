'use client';

import { useEffect } from 'react';

interface ImageIdlePreloaderProps {
  srcs: string[];
}

/**
 * Fetch + decode images after first paint so viewport entry does not hitch.
 */
export default function ImageIdlePreloader({ srcs }: ImageIdlePreloaderProps) {
  const key = srcs.filter(Boolean).join('|');

  useEffect(() => {
    const unique = [...new Set(key.split('|').filter(Boolean))];
    if (unique.length === 0) return;

    let cancelled = false;

    const warmup = () => {
      unique.forEach((src) => {
        if (cancelled) return;
        const img = new window.Image();
        img.decoding = 'async';
        img.src = src;
        void img.decode?.().catch(() => undefined);
      });
    };

    let idleId = 0;
    let timeoutId = 0;

    if (typeof window.requestIdleCallback === 'function') {
      idleId = window.requestIdleCallback(warmup, { timeout: 1500 });
    } else {
      timeoutId = window.setTimeout(warmup, 400);
    }

    return () => {
      cancelled = true;
      if (idleId) window.cancelIdleCallback(idleId);
      if (timeoutId) window.clearTimeout(timeoutId);
    };
  }, [key]);

  return null;
}
