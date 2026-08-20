import type { ReactNode } from 'react';

export type CarouselControlVariant = 'auto' | 'arrows';

export type CarouselLayout = 'centered' | 'horizontal';

/** Kept for call-site compat; section titles always use `text-figure`. */
export type CarouselTitleVariant = 'impact' | 'feature';

export type CarouselSlideRenderContext = {
  /** Set for centered layout; `0` for horizontal layout. */
  width: number;
  index: number;
};

export type CarouselProps<T> = {
  /** Optional `id` on the root `<section>` (e.g. in-page anchors). */
  sectionId?: string;
  /** Omit for track-only carousels (e.g. nested inside another section). */
  title?: string;
  subtitle?: string;
  /** White lead-in line before `subtitle` (feature sections). */
  descriptionLead?: string;
  /** Used for `aria-labelledby` when provided. */
  headingId?: string;
  slides: T[];
  layout?: CarouselLayout;
  titleVariant?: CarouselTitleVariant;
  controlVariant?: CarouselControlVariant;
  slideDurationMs?: number;
  getSlideKey: (slide: T, index: number) => string;
  renderSlide: (slide: T, context: CarouselSlideRenderContext) => ReactNode;
  /** Required for `layout="horizontal"` — width of each slide in px. */
  getSlideWidth?: (slide: T, index: number) => number;
  sectionClassName?: string;
  headerClassName?: string;
  controlsClassName?: string;
  controlsAlign?: 'center' | 'end';
};
