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
