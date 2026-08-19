/** Client-safe news article types and helpers (no Node.js APIs). */

export interface NewsArticle {
  slug: string;
  title: string;
  date: string;
  category: string;
  source?: string;
  excerpt: string;
  image?: string;
  content: string;
  readingTime?: number;
  /** When set, cards/nav link out to this URL instead of `/newsroom/[slug]`. */
  externalUrl?: string;
  /** Optional card eyebrow override (e.g. live Featured copy). */
  eyebrow?: string;
  /** Lower = earlier in the Featured tab (editorial order). */
  featuredOrder?: number;
}

export function getNewsArticleHref(
  article: Pick<NewsArticle, 'slug' | 'externalUrl'>,
): string {
  return article.externalUrl || `/newsroom/${article.slug}`;
}

export function isExternalNewsArticle(
  article: Pick<NewsArticle, 'externalUrl'>,
): boolean {
  return Boolean(article.externalUrl);
}

const IMPACT_HIGHLIGHT_NEWS_COUNT = 4;

/** Featured articles first, then latest — used by the home Impact Highlights grid. */
export function getImpactHighlightNews(
  articles: NewsArticle[],
  count = IMPACT_HIGHLIGHT_NEWS_COUNT,
): NewsArticle[] {
  const withImage = articles.filter((article) => article.image);
  const featured = withImage
    .filter((article) => article.category.toLowerCase() === 'featured')
    .sort(
      (a, b) =>
        (a.featuredOrder ?? Number.MAX_SAFE_INTEGER) -
        (b.featuredOrder ?? Number.MAX_SAFE_INTEGER),
    );
  const rest = withImage.filter(
    (article) => article.category.toLowerCase() !== 'featured',
  );
  return [...featured, ...rest].slice(0, count);
}
