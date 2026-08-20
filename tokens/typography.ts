/**
 * Typography tokens — mirrors Figma text styles with responsive size steps.
 * Letter-spacing uses em so it scales with font-size (-0.02em sans, 0.06em mono).
 */

export const fontFamily = {
  sans: "'Roobert', sans-serif",
  mono: "'IBM Plex Mono', monospace",
  monoItalic: "'IBM Plex Mono', monospace",
} as const;

export const letterSpacing = {
  sans: '-0.02em',
  mono: '0.06em',
  none: '0',
} as const;

export type TypeScaleStep = {
  fontSize: number;
  lineHeight: number;
};

export type ResponsiveTypeScale = {
  default: TypeScaleStep;
  md?: TypeScaleStep;
  lg?: TypeScaleStep;
  xl?: TypeScaleStep;
  '2xl'?: TypeScaleStep;
};

/** Size / line-height per breakpoint (px) */
export const typeScale = {
  display: {
    default: { fontSize: 48, lineHeight: 1.1 },
    md: { fontSize: 56, lineHeight: 1.1 },
    lg: { fontSize: 72, lineHeight: 1.1 },
    xl: { fontSize: 84, lineHeight: 1.1 },
    '2xl': { fontSize: 84, lineHeight: 1.1 },
  },
  'display-accent': {
    default: { fontSize: 48, lineHeight: 1.1 },
    md: { fontSize: 56, lineHeight: 1.1 },
    lg: { fontSize: 72, lineHeight: 1.1 },
    xl: { fontSize: 84, lineHeight: 1.1 },
    '2xl': { fontSize: 84, lineHeight: 1.1 },
  },
  h1: {
    default: { fontSize: 28, lineHeight: 1.2 },
    md: { fontSize: 32, lineHeight: 1.2 },
    lg: { fontSize: 34, lineHeight: 1.2 },
    xl: { fontSize: 36, lineHeight: 1.2 },
    '2xl': { fontSize: 36, lineHeight: 1.2 },
  },
  h2: {
    default: { fontSize: 20, lineHeight: 1.3 },
    md: { fontSize: 22, lineHeight: 1.3 },
    lg: { fontSize: 23, lineHeight: 1.3 },
    xl: { fontSize: 24, lineHeight: 1.3 },
    '2xl': { fontSize: 24, lineHeight: 1.3 },
  },
  lead: {
    default: { fontSize: 18, lineHeight: 1.2 },
    xl: { fontSize: 20, lineHeight: 1.2 },
    '2xl': { fontSize: 20, lineHeight: 1.2 },
  },
  body: {
    default: { fontSize: 16, lineHeight: 1.2 },
    xl: { fontSize: 16, lineHeight: 1.2 },
    '2xl': { fontSize: 16, lineHeight: 1.2 },
  },
  'body-tight': {
    default: { fontSize: 16, lineHeight: 1.1 },
    xl: { fontSize: 16, lineHeight: 1.1 },
    '2xl': { fontSize: 16, lineHeight: 1.1 },
  },
  'body-relaxed': {
    default: { fontSize: 16, lineHeight: 1.4 },
    xl: { fontSize: 16, lineHeight: 1.4 },
    '2xl': { fontSize: 16, lineHeight: 1.4 },
  },
  button: {
    default: { fontSize: 16, lineHeight: 1.1 },
    xl: { fontSize: 16, lineHeight: 1.1 },
    '2xl': { fontSize: 16, lineHeight: 1.1 },
  },
  nav: {
    default: { fontSize: 16, lineHeight: 1.1 },
    xl: { fontSize: 16, lineHeight: 1.1 },
    '2xl': { fontSize: 16, lineHeight: 1.1 },
  },
  label: {
    default: { fontSize: 14, lineHeight: 1.1 },
    md: { fontSize: 16, lineHeight: 1.1 },
    xl: { fontSize: 16, lineHeight: 1.1 },
    '2xl': { fontSize: 16, lineHeight: 1.1 },
  },
  stat: {
    default: { fontSize: 16, lineHeight: 1.1 },
    xl: { fontSize: 16, lineHeight: 1.1 },
    '2xl': { fontSize: 16, lineHeight: 1.1 },
  },
  'news-caption': {
    default: { fontSize: 12, lineHeight: 1.2 },
    xl: { fontSize: 12, lineHeight: 1.2 },
    '2xl': { fontSize: 12, lineHeight: 1.2 },
  },
  'impact-title': {
    default: { fontSize: 20, lineHeight: 1.3 },
  },
  'impact-copy': {
    default: { fontSize: 16, lineHeight: 1.2 },
  },
} as const satisfies Record<string, ResponsiveTypeScale>;

export type TypeTokenName = keyof typeof typeScale;

/** Non-size typography metadata per token */
export const typeMeta = {
  display: { family: 'sans', weight: 400, transform: 'none' as const },
  'display-accent': {
    family: 'monoItalic',
    weight: 300,
    transform: 'none' as const,
    fontStyle: 'italic' as const,
  },
  h1: { family: 'sans', weight: 400, transform: 'capitalize' as const },
  h2: { family: 'sans', weight: 400, transform: 'capitalize' as const },
  lead: { family: 'sans', weight: 400, transform: 'none' as const },
  body: { family: 'sans', weight: 400, transform: 'none' as const },
  'body-tight': { family: 'sans', weight: 400, transform: 'none' as const },
  'body-relaxed': { family: 'sans', weight: 400, transform: 'none' as const },
  button: { family: 'sans', weight: 500, transform: 'capitalize' as const },
  nav: { family: 'sans', weight: 400, transform: 'capitalize' as const },
  label: { family: 'mono', weight: 600, transform: 'uppercase' as const },
  stat: { family: 'mono', weight: 600, transform: 'capitalize' as const },
  'news-caption': { family: 'mono', weight: 600, transform: 'uppercase' as const },
  'impact-title': { family: 'sans', weight: 600, transform: 'none' as const },
  'impact-copy': { family: 'sans', weight: 400, transform: 'none' as const },
} as const satisfies Record<TypeTokenName, unknown>;
