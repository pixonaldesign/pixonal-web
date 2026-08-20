/**
 * Spacing primitives (4px base) and semantic aliases.
 * Mirrors styles/tokens.css — keep both in sync.
 */

/** Primitive scale in px */
export const space = {
  0: 0,
  1: 4,
  2: 8,
  3: 12,
  4: 16,
  5: 20,
  6: 24,
  8: 32,
  10: 40,
  12: 48,
  14: 56,
  16: 64,
  20: 80,
  24: 96,
  25: 100,
  28: 112,
  30: 120,
  32: 128,
  36: 144,
  40: 160,
  46: 184,
} as const;

export type SpaceKey = keyof typeof space;

/**
 * Semantic spacing — static (NOT breakpoint-dependent).
 * For breakpoint-dependent values see `layout` below.
 */
export const spacingSemantic = {
  'gap-tight': space[2],
  'gap-stack': space[3],
  'gap-inline': space[2],
  'gap-block': space[6],
  'gap-footer': space[30],
  'padding-card-sm': space[3],
  'padding-button-x': space[4],
  'padding-button-y': space[3],
  'padding-nav-y': space[8],
  'padding-nav-x': space[10],
} as const;

/**
 * Layout tokens that change by breakpoint (see :root @media blocks in styles/tokens.css).
 * Keys not listed for a breakpoint inherit the previous step.
 */
export const layout = {
  gutter: { default: 20, xl: 40 },
  contentMax: { default: 1120, xl: 1580 },
  contentPadX: { default: 0, xl: 20 },
  sectionY: { default: 64, md: 96, xl: 120 },
  gapSection: { default: 40, md: 56, xl: 80 },
  gapFeature: { default: 48, md: 72, xl: 120 },
  cardPadding: { default: 24, md: 28, xl: 40 },
  /** Get in Touch band. Mask falloff lives in `styles/tokens.css`. */
  endCta: { height: 600, fade: 240 },
  /** Llumen Impact carousel. Overlay and copy live in `styles/tokens.css`. */
  impactSlide: { height: 800, introGap: 40, copyPadding: 24 },
  /** Centered contact form column. */
  formMax: { default: 800 },
} as const;
