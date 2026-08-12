import Image from 'next/image';
import type { NewsArticle } from '@/lib/news';
import NewsArticleLink from './NewsArticleLink';

type NewsArticleCardVariant = 'hero' | 'grid' | 'compact';

interface NewsArticleCardProps {
  article: NewsArticle;
  /**
   * - `hero`    Featured-tab hero: 16:9 image full-width on top, eyebrow + h2 below.
   * - `grid`    (default) Standard grid card: 16:10 image on top, eyebrow + h2 below.
   * - `compact` Press Releases / In the News list item: small 16:9 image on
   *             the left, two-line eyebrow (Month YEAR / source) + 16px
   *             title on the right.
   */
  variant?: NewsArticleCardVariant;
  /** Convenience alias for `variant='hero'` (kept for back-compat). */
  featured?: boolean;
}

function formatCategory(category: string): string {
  switch (category.toLowerCase()) {
    case 'in-the-news':
    case 'in the news':
      return 'In the News';
    case 'press releases':
    case 'press-release':
      return 'Press Releases';
    case 'featured':
      return 'Featured';
    default:
      return category;
  }
}

/** "2025-01-30" → "JAN 2025". Empty string if no parseable date. */
function formatMonthYear(date: string): string {
  if (!date) return '';
  const d = new Date(date);
  if (Number.isNaN(d.getTime())) return '';
  return `${d.toLocaleString('en-US', { month: 'short' })} ${d.getFullYear()}`.toUpperCase();
}

export default function NewsArticleCard({
  article,
  variant,
  featured = false,
}: NewsArticleCardProps) {
  const resolved: NewsArticleCardVariant = variant ?? (featured ? 'hero' : 'grid');

  if (resolved === 'compact') {
    return <CompactCard article={article} />;
  }

  const isHero = resolved === 'hero';
  const year = article.date ? new Date(article.date).getFullYear() : '';
  const eyebrowParts =
    article.eyebrow ||
    [formatCategory(article.category), year, article.source]
      .filter(Boolean)
      .join(' / ');

  return (
    <article className="group flex h-full w-full flex-col">
      <NewsArticleLink
        article={article}
        className="flex h-full flex-col gap-4 md:gap-5 lg:gap-6"
      >
        <div
          className={`relative w-full overflow-hidden rounded-card bg-zinc-800 ${
            isHero ? 'aspect-[16/9]' : 'aspect-[16/10]'
          }`}
        >
          {article.image ? (
            <Image
              src={article.image}
              alt=""
              fill
              sizes={
                isHero
                  ? '(max-width: 1024px) 100vw, 1400px'
                  : '(max-width: 768px) 100vw, (max-width: 1400px) 50vw, 680px'
              }
              className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
              priority={isHero}
            />
          ) : null}
        </div>
        <div className="flex flex-col gap-tight text-white">
          {eyebrowParts ? (
            <p className="text-stat text-white/40">{eyebrowParts}</p>
          ) : null}
          <h3 className="text-h2 text-white capitalize transition-colors group-hover:text-white/80">
            {article.title}
          </h3>
        </div>
      </NewsArticleLink>
    </article>
  );
}

/**
 * Compact list-row variant per Figma 2435:8692.
 *
 * Responsive layout:
 *  - md+  : image on the LEFT (~271px @ lg+, 200px @ md), text on the RIGHT.
 *           Two-line news-caption eyebrow (Month YEAR / source) + 16px title.
 *  - <md  : falls back to the standard "grid" card design used on the
 *           Featured tab — 16:10 image on top, `text-stat` eyebrow
 *           (Category / Year / Source) + `text-h2` title below.
 */
function CompactCard({ article }: { article: NewsArticle }) {
  const year = article.date ? new Date(article.date).getFullYear() : '';
  const stackedEyebrow = [formatCategory(article.category), year, article.source]
    .filter(Boolean)
    .join(' / ');

  return (
    <article className="group w-full">
      <NewsArticleLink article={article} className="block w-full">
        {/* <md — grid card layout (mirrors Featured tab cards). */}
        <div className="flex flex-col gap-4 md:hidden">
          <div className="relative aspect-[16/10] w-full overflow-hidden rounded-card bg-zinc-800">
            {article.image ? (
              <Image
                src={article.image}
                alt=""
                fill
                sizes="100vw"
                className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
              />
            ) : null}
          </div>
          <div className="flex flex-col gap-tight text-white">
            {stackedEyebrow ? (
              <p className="text-stat text-white/40">{stackedEyebrow}</p>
            ) : null}
            <h3 className="text-h2 text-white capitalize transition-colors group-hover:text-white/80">
              {article.title}
            </h3>
          </div>
        </div>

        {/* md+ — horizontal compact layout per Figma. */}
        <div className="hidden md:flex md:items-start md:gap-5 lg:gap-6">
          <div className="relative aspect-[271/152] w-[200px] lg:w-[271px] shrink-0 overflow-hidden rounded-[12px] bg-zinc-800">
            {article.image ? (
              <Image
                src={article.image}
                alt=""
                fill
                sizes="(max-width: 1024px) 200px, 271px"
                className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
              />
            ) : null}
          </div>
          <div className="flex min-w-0 flex-1 flex-col gap-[14px] text-white">
            <div className="text-news-caption text-white/40">
              <p>{formatMonthYear(article.date)}</p>
              {article.source ? <p>{article.source}</p> : null}
            </div>
            <h3 className="text-button text-white transition-colors group-hover:text-white/80">
              {article.title}
            </h3>
          </div>
        </div>
      </NewsArticleLink>
    </article>
  );
}
