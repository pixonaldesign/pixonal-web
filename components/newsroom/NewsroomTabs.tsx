'use client';

import { useMemo, useState } from 'react';
import NewsArticleCard from './NewsArticleCard';
import Tabs, { type TabItem } from '@/components/ui/Tabs';
import type { NewsArticle } from '@/lib/news';

type TabId = 'featured' | 'press-releases' | 'in-the-news';

const TABS: (TabItem & { id: TabId })[] = [
  { id: 'featured', label: 'Featured' },
  { id: 'press-releases', label: 'Press Releases' },
  { id: 'in-the-news', label: 'In the News' },
];

const TAB_ID_PREFIX = 'newsroom';

interface NewsroomTabsProps {
  articles: NewsArticle[];
}

function matchesCategory(article: NewsArticle, tab: TabId): boolean {
  const c = article.category.toLowerCase();
  switch (tab) {
    case 'press-releases':
      return c === 'press releases' || c === 'press-release';
    case 'in-the-news':
      return c === 'in-the-news' || c === 'in the news';
    case 'featured':
      return c === 'featured';
    default:
      return true;
  }
}

/**
 * Newsroom tab switcher.
 *
 * Tab strip mirrors `LlumenRolesSection` 1:1 — `bg-[#343434]` pill
 * container, scrollable below lg with edge fades, equal-width tabs that
 * fill the strip on mobile and shrink to `min-w-[220px]` at lg+.
 *
 * Layout per Figma 2435:8614:
 *  - Featured tab: first matching article renders as a full-width 16:9
 *    hero card on top, the rest fall into the 2-column grid below.
 *  - Press Releases / In the News: 2-column grid only, filtered by
 *    category. All grid cards share one uniform design.
 */
export default function NewsroomTabs({ articles }: NewsroomTabsProps) {
  const [active, setActive] = useState<TabId>('featured');

  const filtered = useMemo(() => {
    const matched = articles.filter((article) => matchesCategory(article, active));
    if (active !== 'featured') return matched;
    return [...matched].sort((a, b) => {
      const ao = a.featuredOrder ?? Number.MAX_SAFE_INTEGER;
      const bo = b.featuredOrder ?? Number.MAX_SAFE_INTEGER;
      if (ao !== bo) return ao - bo;
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    });
  }, [articles, active]);

  const heroArticle = active === 'featured' ? filtered[0] : undefined;
  const gridArticles =
    active === 'featured' ? filtered.slice(1) : filtered;

  return (
    <section
      aria-labelledby="newsroom-tabs-heading"
      className="bg-primary-900 py-section px-gutter"
    >
      <h2 id="newsroom-tabs-heading" className="sr-only">
        News by category
      </h2>

      <div className="mx-auto flex max-w-content flex-col items-center gap-section">
        <Tabs
          items={TABS}
          activeId={active}
          onChange={(id) => setActive(id as TabId)}
          idPrefix={TAB_ID_PREFIX}
          ariaLabel="News by category"
        />

        <div
          id={`${TAB_ID_PREFIX}-panel-${active}`}
          role="tabpanel"
          aria-labelledby={`${TAB_ID_PREFIX}-tab-${active}`}
          className="w-full"
        >
          {filtered.length === 0 ? (
            <p className="text-body text-white/60 text-center">
              No articles in this category yet.
            </p>
          ) : active === 'featured' ? (
            <div className="flex w-full flex-col gap-8 md:gap-10 lg:gap-12">
              {heroArticle ? (
                <NewsArticleCard article={heroArticle} featured />
              ) : null}

              {gridArticles.length > 0 ? (
                <ul
                  role="list"
                  className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-10 lg:gap-10"
                >
                  {gridArticles.map((article) => (
                    <li key={article.slug} className="flex">
                      <NewsArticleCard article={article} />
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
          ) : (
            <CompactListByYear articles={filtered} />
          )}
        </div>
      </div>
    </section>
  );
}

/**
 * Press Releases / In the News list per Figma 2435:8692.
 *
 * Articles are grouped by their publication year. Each year group renders
 * with the year label on the left column (~20% of the row) and a list of
 * compact cards on the right.
 *
 * Responsive behavior:
 *  - xl+   : year column (20% / `w-1/5`) + 2-col compact list
 *  - md→xl : year column (20% / `w-1/5`) + 1-col compact list
 *  - <md   : year stacks above the list. Cards switch to the Featured-tab
 *            "grid" design (16:10 image on top) — handled inside the card.
 *
 * Article-to-article gap is 40px (`gap-10`) at every breakpoint.
 */
function CompactListByYear({ articles }: { articles: NewsArticle[] }) {
  const groups = useMemo(() => {
    const byYear = new Map<number, NewsArticle[]>();
    for (const article of articles) {
      const year = article.date ? new Date(article.date).getFullYear() : 0;
      const bucket = byYear.get(year) ?? [];
      bucket.push(article);
      byYear.set(year, bucket);
    }
    return Array.from(byYear.entries())
      .sort((a, b) => b[0] - a[0])
      .map(([year, items]) => ({ year, items }));
  }, [articles]);

  return (
    <div className="flex w-full flex-col gap-section">
      {groups.map(({ year, items }) => (
        <div
          key={year || 'undated'}
          className="relative flex w-full flex-col gap-6 md:flex-row md:items-start md:gap-10"
        >
          <p
            className="text-h2 text-white shrink-0 self-start md:sticky md:top-[calc(1.25rem+66px+32px)] md:w-1/5"
            aria-hidden={year === 0}
          >
            {year || ''}
          </p>
          <ul
            role="list"
            className="grid min-w-0 flex-1 grid-cols-1 gap-10 xl:grid-cols-2"
          >
            {items.map((article) => (
              <li key={article.slug}>
                <NewsArticleCard article={article} variant="compact" />
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
