/**
 * Site-wide Lenis smooth scroll tuning.
 * Adjust these values to change scroll feel without touching the provider.
 *
 * - `lerp` — 0–1; lower = heavier/slower catch-up, higher = snappier (try 0.05–0.15)
 * - `duration` — scroll-to animation length in seconds
 * - `wheelMultiplier` — mouse wheel sensitivity (>1 = faster scroll per notch)
 * - `touchMultiplier` — touch/trackpad gesture sensitivity
 */
export const smoothScrollConfig = {
  lerp: 0.08,
  duration: 1.35,
  wheelMultiplier: 0.9,
  touchMultiplier: 1.4,
  autoRaf: true,
  respectReducedMotion: true,
} as const;
