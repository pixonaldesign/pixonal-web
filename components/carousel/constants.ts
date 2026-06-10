import { breakpoints } from '@/tokens/breakpoints';
import { layout } from '@/tokens/spacing';

/** xl breakpoint in px — content-max steps up here. */
const XL_BREAKPOINT_PX = breakpoints.xl;

/**
 * Returns the active `--layout-content-max` for a given viewport width.
 * Mirrors styles/tokens.css: 1120px below xl, 1360px at xl+.
 */
export function getCarouselContentMaxPx(viewportWidth: number): number {
  return viewportWidth >= XL_BREAKPOINT_PX
    ? layout.contentMax.xl
    : layout.contentMax.default;
}

export const CAROUSEL_GAP_PX = 20;

export const CAROUSEL_SLIDE_DURATION_MS = 7000;

/** Horizontal inset subtracted from viewport when computing slide width. */
export const CAROUSEL_VIEWPORT_INSET_PX = 40;
