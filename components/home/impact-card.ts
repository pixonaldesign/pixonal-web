import type { CSSProperties } from 'react';

/** Shared shell for Impact Highlights / partner cards. */
export const impactCardShellClass = 'rounded-card bg-surface-raised';

/**
 * Image zoom on card hover. Edit these and refresh.
 * - `scale` — 1 = none. Try 1.02 (subtle) → 1.08 (obvious).
 * - `durationMs` — grow/shrink time.
 */
export const impactCardHover = {
  scale: 1.06,
  durationMs: 500,
} as const;

export const impactCardHoverVars = {
  '--impact-card-hover-scale': String(impactCardHover.scale),
  '--impact-card-hover-duration': `${impactCardHover.durationMs}ms`,
} as CSSProperties;
