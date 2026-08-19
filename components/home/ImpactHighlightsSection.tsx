import CaseStudyCard from '@/components/CaseStudyCard';
import ImageIdlePreloader from '@/components/home/ImageIdlePreloader';
import ImpactNewsCard from '@/components/home/ImpactNewsCard';
import { impactCardImage } from '@/lib/impact-highlight-images';
import type { IndustryCaseStudyCard } from '@/lib/industry-case-studies';
import type { NewsArticle } from '@/lib/news';

interface ImpactHighlightsSectionProps {
  caseStudies: IndustryCaseStudyCard[];
  news: NewsArticle[];
}

/**
 * 4×3 square-cell grid (Figma 2710:18182).
 * Hidden 1×1 sizers lock each row to the column width so every cell is square
 * and spanning cards stretch flush (no gaps).
 *
 *   [ case 2×2 ] [ case 2×1              ]
 *   [          ] [ news 1×1 ] [ news 1×1 ]
 *   [ news 1×1 ] [ case 2×1            ] [ news 1×1 ]
 */
export default function ImpactHighlightsSection({
  caseStudies,
  news,
}: ImpactHighlightsSectionProps) {
  const caseBySlug = Object.fromEntries(
    caseStudies.map((card) => [
      card.industrySlug,
      { ...card, image: impactCardImage(card.image) },
    ]),
  );
  const largeCase = caseBySlug['cities-infrastructure'];
  const topRightCase = caseBySlug['people-workforce'];
  const bottomCase = caseBySlug['safety-defense'];
  const newsCards = news.map((article) => ({
    ...article,
    image: impactCardImage(article.image),
  }));

  if (!largeCase && !topRightCase && !bottomCase && newsCards.length === 0) {
    return null;
  }

  const preloadSrcs = [
    largeCase?.image,
    topRightCase?.image,
    bottomCase?.image,
    ...newsCards.map((article) => article.image),
  ].filter((src): src is string => Boolean(src));

  return (
    <section
      className="px-gutter pb-[var(--layout-section-y)] pt-[calc(var(--layout-section-y)_+_40px)]"
      aria-labelledby="impact-highlights-heading"
    >
      <ImageIdlePreloader srcs={preloadSrcs} />
      <div className="mx-auto flex max-w-content flex-col gap-16">
        <header className="flex flex-col items-center text-center">
          <h2
            id="impact-highlights-heading"
            className="text-figure text-primary-50"
          >
            From the field to the future.
            <br />
            The latest from Pixonal.
          </h2>
        </header>

        <div className="grid grid-cols-1 gap-tight lg:grid-cols-4">
          <div
            aria-hidden
            className="pointer-events-none invisible col-start-1 row-start-1 hidden aspect-square lg:block"
          />
          <div
            aria-hidden
            className="pointer-events-none invisible col-start-1 row-start-2 hidden aspect-square lg:block"
          />
          <div
            aria-hidden
            className="pointer-events-none invisible col-start-1 row-start-3 hidden aspect-square lg:block"
          />

          {largeCase ? (
            <CaseStudyCard
              key={largeCase.industrySlug}
              card={largeCase}
              className="min-h-[280px] lg:col-span-2 lg:col-start-1 lg:row-span-2 lg:row-start-1 lg:min-h-0"
            />
          ) : null}

          {topRightCase ? (
            <CaseStudyCard
              key={topRightCase.industrySlug}
              card={topRightCase}
              className="min-h-[200px] lg:col-span-2 lg:col-start-3 lg:row-start-1 lg:min-h-0"
            />
          ) : null}

          {newsCards[0] ? (
            <ImpactNewsCard
              key={newsCards[0].slug}
              article={newsCards[0]}
              className="lg:col-start-3 lg:row-start-2"
            />
          ) : null}

          {newsCards[1] ? (
            <ImpactNewsCard
              key={newsCards[1].slug}
              article={newsCards[1]}
              className="lg:col-start-4 lg:row-start-2"
            />
          ) : null}

          {newsCards[2] ? (
            <ImpactNewsCard
              key={newsCards[2].slug}
              article={newsCards[2]}
              className="lg:col-start-1 lg:row-start-3"
            />
          ) : null}

          {bottomCase ? (
            <CaseStudyCard
              key={bottomCase.industrySlug}
              card={bottomCase}
              className="min-h-[200px] lg:col-span-2 lg:col-start-2 lg:row-start-3 lg:min-h-0"
            />
          ) : null}

          {newsCards[3] ? (
            <ImpactNewsCard
              key={newsCards[3].slug}
              article={newsCards[3]}
              className="lg:col-start-4 lg:row-start-3"
            />
          ) : null}
        </div>
      </div>
    </section>
  );
}
