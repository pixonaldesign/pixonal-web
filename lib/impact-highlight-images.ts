/**
 * Card-sized crops for the home Impact Highlights grid.
 * Case-study / news originals stay full-res on their own pages; this map
 * keeps the homepage from decoding 6–8k photos when the section enters view.
 */
const IMPACT_CARD_IMAGES: Record<string, string> = {
  '/images/industries/cities-and-infrastructure/case-study/hero.png':
    '/images/home/impact/cities-infrastructure.jpg',
  '/images/industries/people-and-workforce/case-study/hero.png':
    '/images/home/impact/people-workforce.jpg',
  '/images/industries/safety-and-security/case-study/hero.png':
    '/images/home/impact/safety-defense.jpg',
  '/images/news/featured-mbrif-cohort-10.png':
    '/images/home/impact/featured-mbrif-cohort-10.jpg',
  '/images/news/featured-pixonal-honored-for-excellence.png':
    '/images/home/impact/featured-pixonal-honored-for-excellence.jpg',
  '/images/news/featured-pixonal-expands-its-reach.jpg':
    '/images/home/impact/featured-pixonal-expands-its-reach.jpg',
};

export function impactCardImage(src?: string): string {
  if (!src) return '';
  return IMPACT_CARD_IMAGES[src] ?? src;
}
