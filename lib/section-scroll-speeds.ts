/**
 * Per-section parallax speed — how fast the section *moves* vs the page.
 * 1 = locked to the document. Does not change wheel speed.
 *
 * - `< 1` slower (lags, later sections can slide over it)
 * - `1`   normal (no extra movement)
 * - `> 1` faster (catches up and overlays slower sections)
 *
 * `zIndex` controls who paints on top when they overlap.
 * Flip `parallaxEnabled` to turn the effect on or off for every section.
 */
export const parallaxEnabled = false;

export const sectionScrollSpeeds = {
  hero: { speed: 0.95, zIndex: 1 },
  statement: { speed: 1.15, zIndex: 2 },
  caseStudies: { speed: 1, zIndex: 3 },
  llumen: { speed: 1, zIndex: 4 },
  news: { speed: 1, zIndex: 5 },
  partners: { speed: 1, zIndex: 6 },
  contact: { speed: 1, zIndex: 7 },
} as const;

export type SectionScrollSpeedKey = keyof typeof sectionScrollSpeeds;
