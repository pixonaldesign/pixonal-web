/**
 * Breakpoints aligned to Figma artboards (xl = 1440, 2xl = 1920).
 * Mobile ladder is inferred — no mobile designs in Figma.
 */

/**
 * Minimum supported viewport width.
 * Every component must render without horizontal scroll or clipping at this width.
 * Stress-test against this floor before shipping.
 */
export const MIN_VIEWPORT_PX = 360;

export const breakpoints = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1440,
  '2xl': 1920,
} as const;

export type BreakpointName = keyof typeof breakpoints;

export const breakpointPx = {
  sm: `${breakpoints.sm}px`,
  md: `${breakpoints.md}px`,
  lg: `${breakpoints.lg}px`,
  xl: `${breakpoints.xl}px`,
  '2xl': `${breakpoints['2xl']}px`,
} as const;
