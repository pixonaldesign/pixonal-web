/**
 * Spacing primitives (4px base) and semantic aliases.
 * Stack gaps standardized to 8px / 12px (not Figma's 10px default).
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
  16: 64,
  20: 80,
  46: 184,
} as const;

export type SpaceKey = keyof typeof space;

/** Semantic spacing — maps to primitives */
export const spacingSemantic = {
  'gap-tight': space[2],
  'gap-stack': space[3],
  'gap-inline': space[2],
  'gap-block': space[6],
  'gap-section': space[10],
  'gap-feature': space[12],
  'padding-card': space[6],
  'padding-card-sm': space[3],
  'padding-button-x': space[4],
  'padding-button-y': space[3],
  'padding-nav-y': space[8],
  'padding-nav-x': space[10],
} as const;

/** Layout tokens that change by breakpoint (see styles/tokens.css) */
export const layout = {
  gutter: { default: 20, md: 24, xl: 40 },
  contentMax: { default: '100%', xl: 1360, '2xl': 1400 },
  sectionY: { default: 80, md: 120, xl: 184 },
} as const;
