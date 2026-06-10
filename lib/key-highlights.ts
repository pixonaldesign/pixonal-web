export type KeyHighlight = {
  id: string;
  title: string;
  /** When set, renders each entry on its own line (e.g. “Built for the” / “Moment of Decision”). */
  titleLines?: [string, string];
  description: string;
  image: string;
};

export const keyHighlights: KeyHighlight[] = [
  {
    id: 'clarity',
    title: 'Built for Clarity',
    description:
      'Bring data, analytics, and signals into a single interface that removes noise and shows what matters.',
    image: '/images/llumen/key-highlights/highlight-01.png',
  },
  {
    id: 'confidence',
    title: 'Built for Confidence',
    description:
      'Operate on governed metrics and shared definitions so decisions are made on intelligence teams can trust.',
    image: '/images/llumen/key-highlights/highlight-02.png',
  },
  {
    id: 'decision',
    title: 'Built for the Moment of Decision',
    titleLines: ['Built for the', 'Moment of Decision'],
    description:
      'Stay aligned in critical moments with context, communication, and decision views always ready.',
    image: '/images/llumen/key-highlights/highlight-03.png',
  },
];

export const KEY_HIGHLIGHT_GRADIENT =
  'linear-gradient(179.39deg, rgba(0, 0, 0, 0.8) 0.93%, rgba(0, 0, 0, 0) 45.29%, rgba(0, 0, 0, 0.8) 98.14%)';
