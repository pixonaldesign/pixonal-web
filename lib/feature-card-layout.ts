import type { FeatureCard } from '@/lib/llumen-content';
import { breakpoints } from '@/tokens/breakpoints';

/**
 * Carousel visual-frame rules
 *
 *  - lg+:     every image container is 480px tall.
 *  - md→lg:   every image container is 400px tall (shorter to avoid the
 *             landscape width clipping the viewport at ~853px).
 *  - <md:     every card collapses to aspect-[16/9] filling the viewport.
 *
 *  Container aspect is strictly one of two ratios:
 *    • 16:9 when the source image is landscape (w >= h)
 *    • 3:4  when the source image is portrait  (w <  h)
 *
 *  Card width = aspect × responsive height. The compact (<md) override is
 *  done by the carousel hook (overrides slideWidths to uniform viewport
 *  width) + a CSS class override on the container in FeatureCard.
 */

export const FEATURE_VISUAL_HEIGHT_LG_PX = 480;
export const FEATURE_VISUAL_HEIGHT_MD_PX = 400;
export const FEATURE_VISUAL_PADDING_PX = 20;

const LANDSCAPE_ASPECT = 16 / 9;
const PORTRAIT_ASPECT = 3 / 4;

export type FeatureCardOrientation = 'landscape' | 'portrait';

export type FeatureCardGradient = {
  from: string;
  to: string;
};

export function getFeatureCardOrientation(
  card: FeatureCard,
): FeatureCardOrientation {
  const w = card.imageWidth ?? 0;
  const h = card.imageHeight ?? 0;
  if (w === 0 || h === 0) return 'landscape';
  return w >= h ? 'landscape' : 'portrait';
}

export function getFeatureCardAspectRatio(card: FeatureCard): number {
  return getFeatureCardOrientation(card) === 'landscape'
    ? LANDSCAPE_ASPECT
    : PORTRAIT_ASPECT;
}

/** Active visual height for a given viewport. SSR / pre-measurement (0)
 *  defaults to the lg+ height so we don't downsize then upsize on hydration. */
export function getFeatureVisualHeight(viewportWidth: number): number {
  if (viewportWidth === 0) return FEATURE_VISUAL_HEIGHT_LG_PX;
  return viewportWidth >= breakpoints.lg
    ? FEATURE_VISUAL_HEIGHT_LG_PX
    : FEATURE_VISUAL_HEIGHT_MD_PX;
}

/** Aspect-driven card width. The carousel substitutes a viewport-fitted width
 *  below md, so this only matters at md+. */
export function resolveFeatureCardWidth(
  card: FeatureCard,
  viewportWidth = 0,
): number {
  return Math.round(
    getFeatureVisualHeight(viewportWidth) * getFeatureCardAspectRatio(card),
  );
}
