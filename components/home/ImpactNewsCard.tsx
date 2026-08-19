import Image from 'next/image';
import type { NewsArticle } from '@/lib/news';
import NewsArticleLink from '@/components/newsroom/NewsArticleLink';
import {
  impactCardHoverVars,
  impactCardShellClass,
} from '@/components/home/impact-card';

interface ImpactNewsCardProps {
  article: NewsArticle;
  className?: string;
}

/**
 * Impact Highlights news card — padded shell with image + 16px title.
 * Links to the article (`/newsroom/[slug]` or `externalUrl`).
 */
export default function ImpactNewsCard({
  article,
  className = '',
}: ImpactNewsCardProps) {
  return (
    <article
      className={`flex h-full min-h-0 flex-col overflow-hidden p-5 ${impactCardShellClass} ${className}`}
      style={impactCardHoverVars}
    >
      <NewsArticleLink
        article={article}
        className="group flex h-full flex-col gap-stack"
      >
        <div className="relative min-h-[140px] flex-1 overflow-hidden rounded-xl">
          {article.image ? (
            <Image
              src={article.image}
              alt=""
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
              decoding="async"
              className="impact-card-media"
            />
          ) : null}
        </div>
        <h3 className="text-impact-copy text-white transition-colors group-hover:text-white/80">
          {article.title}
        </h3>
      </NewsArticleLink>
    </article>
  );
}
