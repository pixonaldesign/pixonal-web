import Link from 'next/link';
import type { ReactNode } from 'react';
import {
  getNewsArticleHref,
  isExternalNewsArticle,
  type NewsArticle,
} from '@/lib/news';

interface NewsArticleLinkProps {
  article: Pick<NewsArticle, 'slug' | 'externalUrl'>;
  className?: string;
  children: ReactNode;
  onClick?: () => void;
}

/** Internal `/newsroom/[slug]` or external press-release URL. */
export default function NewsArticleLink({
  article,
  className,
  children,
  onClick,
}: NewsArticleLinkProps) {
  const href = getNewsArticleHref(article);

  if (isExternalNewsArticle(article)) {
    return (
      <a
        href={href}
        className={className}
        onClick={onClick}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={className} onClick={onClick}>
      {children}
    </Link>
  );
}
