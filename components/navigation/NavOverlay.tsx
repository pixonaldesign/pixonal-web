'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { NewsArticle } from '@/lib/markdown';
import PixonalIcon from '@/components/PixonalIcon';
import IndustryCard from './IndustryCard';
import {
  industriesMenuItems,
  navMenuSurfaceClass,
  overlayNavLinks,
} from './nav-config';

const INDUSTRIES_HREF = '/industries';

interface NavOverlayProps {
  id: string;
  isOpen: boolean;
  onClose: () => void;
  newsArticles: NewsArticle[];
}

function FeatureCardButton({
  href,
  label,
  onNavigate,
}: {
  href: string;
  label: string;
  onNavigate: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onNavigate}
      className="h-[52px] px-4 border border-white rounded-xl inline-flex items-center justify-center gap-2 hover:bg-white/10 transition-colors shrink-0"
    >
      <span className="text-white text-body-tight capitalize">{label}</span>
      <PixonalIcon name="arrow-right" size={24} className="text-white shrink-0" />
    </Link>
  );
}

export default function NavOverlay({
  id,
  isOpen,
  onClose,
  newsArticles,
}: NavOverlayProps) {
  const displayArticles = newsArticles.slice(0, 4);
  // Inline accordion for the Industries entry on mobile/tablet — clicking
  // "Industries" expands the 6 industry links instead of navigating.
  const [isIndustriesExpanded, setIsIndustriesExpanded] = useState(false);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date
      .toLocaleDateString('en-US', { month: 'short', year: 'numeric' })
      .toUpperCase();
  };

  const getCategoryLabel = (category: string) => {
    switch (category.toLowerCase()) {
      case 'in-the-news':
        return 'In the news';
      case 'press releases':
      case 'press-release':
        return 'Press release';
      case 'featured':
        return 'Featured';
      default:
        return category;
    }
  };

  return (
    <>
      {/* Panel stays in DOM when closed for crawlable links (SEO). */}
      <div
        id={id}
        role="dialog"
        aria-modal={isOpen}
        aria-label="Site menu"
        aria-hidden={!isOpen}
        hidden={!isOpen}
        className={`absolute left-0 right-0 top-full z-50 w-full rounded-b-card rounded-t-none border border-white/10 border-t-0 pb-section shadow-[0px_8px_32px_rgba(0,0,0,0.4)] max-h-[calc(100dvh-1.25rem-66px-1.25rem)] overflow-x-hidden overflow-y-auto overscroll-contain nav-menu-scroll ${navMenuSurfaceClass}`}
        tabIndex={isOpen ? 0 : -1}
      >
        <div className="flex flex-col gap-section px-6 pt-10 pb-10">
          <div className="flex flex-col lg:flex-row justify-between items-start gap-section w-full">
            <nav aria-label="Menu navigation" className="shrink-0 w-full lg:w-auto">
              <ul
                className="flex flex-col gap-5 w-full lg:w-[251px]"
                role="list"
              >
                {overlayNavLinks.map((item) => {
                  if (item.href === INDUSTRIES_HREF) {
                    // Industries expands inline into a 6-item sub-list.
                    // SEO is still satisfied because each sub-link is a real
                    // <Link href="/industries/..."> rendered in the DOM —
                    // hidden=!isOpen on the panel doesn't strip them from
                    // the static HTML.
                    return (
                      <li key={item.href}>
                        <button
                          type="button"
                          onClick={() =>
                            setIsIndustriesExpanded((prev) => !prev)
                          }
                          aria-expanded={isIndustriesExpanded}
                          aria-controls={`${id}-industries-sublist`}
                          className="text-white text-h2 hover:text-white/80 transition-colors flex items-center gap-3"
                        >
                          {item.label}
                          <PixonalIcon
                            name="caret-down"
                            size={20}
                            weight="regular"
                            className={`text-white transition-transform duration-200 ${
                              isIndustriesExpanded ? 'rotate-180' : ''
                            }`}
                          />
                        </button>
                        <ul
                          id={`${id}-industries-sublist`}
                          role="list"
                          hidden={!isIndustriesExpanded}
                          className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-5"
                        >
                          {industriesMenuItems.map((industry) => (
                            <li key={industry.href} className="flex min-w-0">
                              <IndustryCard
                                item={industry}
                                onNavigate={onClose}
                              />
                            </li>
                          ))}
                        </ul>
                      </li>
                    );
                  }
                  return (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        onClick={onClose}
                        className="text-white text-h2 hover:text-white/80 transition-colors block"
                      >
                        {item.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>

            <div className="flex flex-col lg:flex-row gap-section w-full min-w-0">
              <div className="flex-1 min-w-0 max-w-full lg:max-w-none">
                <div className="aspect-[160/90] w-full rounded-card bg-zinc-800/40 flex flex-col justify-between p-5 relative overflow-hidden">
                  <div className="flex flex-col gap-2 text-white relative z-10">
                    <p className="text-news-caption">Llumen</p>
                    <p className="text-body-tight capitalize max-w-[178px]">
                      Supercharged Decisions Instant Impact
                    </p>
                  </div>
                  <FeatureCardButton
                    href="/llumen"
                    label="Transform your Moment of Decision"
                    onNavigate={onClose}
                  />
                </div>
              </div>

              <div className="flex-1 min-w-0 max-w-full lg:max-w-none">
                <div className="aspect-[160/90] w-full rounded-card relative overflow-hidden flex flex-col justify-between p-5">
                  <Image
                    src="/images/nav/data-for-humans-card.jpg"
                    alt=""
                    fill
                    className="object-cover pointer-events-none"
                    sizes="(max-width: 1280px) 100vw, 560px"
                  />
                  <div className="absolute inset-0 bg-black/20 pointer-events-none" aria-hidden />
                  <div className="flex flex-col gap-2 text-white relative z-10">
                    <p className="text-news-caption">data for humans</p>
                    <p className="text-body-tight capitalize max-w-[178px] whitespace-pre-wrap">
                      A paradigm shift in data{'\n'}communication
                    </p>
                  </div>
                  <div className="relative z-10">
                    <FeatureCardButton
                      href="/advisory"
                      label="Read More from Our White Paper"
                      onNavigate={onClose}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row justify-between items-start gap-section w-full">
            <div className="flex flex-col justify-between gap-section lg:min-h-[409px] shrink-0">
              <div className="flex flex-col gap-section">
                <a href="#" className="hover:opacity-70 transition-opacity" aria-label="LinkedIn">
                  <Image
                    src="/images/footer/LinkedinLogo.svg"
                    alt=""
                    width={24}
                    height={24}
                  />
                </a>
                <a href="#" className="hover:opacity-70 transition-opacity" aria-label="Instagram">
                  <Image
                    src="/images/footer/InstagramLogo.svg"
                    alt=""
                    width={24}
                    height={24}
                  />
                </a>
                <a href="#" className="hover:opacity-70 transition-opacity" aria-label="Threads">
                  <Image
                    src="/images/footer/ThreadsLogo.svg"
                    alt=""
                    width={24}
                    height={24}
                  />
                </a>
                <a href="#" className="hover:opacity-70 transition-opacity" aria-label="Facebook">
                  <Image
                    src="/images/footer/FacebookLogo.svg"
                    alt=""
                    width={24}
                    height={24}
                  />
                </a>
              </div>
              <p className="text-primary-100/50 text-body">
                © 2025 Pixonal. All rights reserved.
              </p>
            </div>

            <section
              className="flex flex-col gap-section w-full lg:max-w-[1166px]"
              aria-label="Latest news"
            >
              <ul className="grid grid-cols-1 lg:grid-cols-2 gap-section" role="list">
                {displayArticles.length > 0 ? (
                  displayArticles.map((article) => (
                    <li key={article.slug}>
                      <article className="flex gap-5 items-start">
                        <div className="relative w-[271px] max-w-[40%] sm:max-w-none aspect-[271/152] shrink-0 rounded-xl overflow-hidden bg-zinc-800">
                          {article.image ? (
                            <Image
                              src={article.image}
                              alt=""
                              fill
                              className="object-cover"
                              sizes="271px"
                            />
                          ) : (
                            <span className="absolute inset-0 flex items-center justify-center text-primary-100/40 text-label">
                              News
                            </span>
                          )}
                        </div>
                        <div className="flex flex-col gap-[14px] min-w-0 flex-1">
                          <div className="flex justify-between gap-3 text-news-caption text-white/40 uppercase">
                            <span>{getCategoryLabel(article.category)}</span>
                            <time className="opacity-30 text-right" dateTime={article.date}>
                              {formatDate(article.date)}
                            </time>
                          </div>
                          <Link
                            href={`/newsroom/${article.slug}`}
                            onClick={onClose}
                            className="text-white text-body-tight capitalize line-clamp-4 hover:text-white/80 transition-colors"
                          >
                            {article.title}
                          </Link>
                        </div>
                      </article>
                    </li>
                  ))
                ) : (
                  <li className="text-primary-100/40 text-label">Loading news...</li>
                )}
              </ul>
            </section>
          </div>
        </div>
      </div>

      {isOpen && (
        <button
          type="button"
          className="fixed inset-0 z-40 cursor-default bg-transparent"
          onClick={onClose}
          aria-label="Close navigation menu"
        />
      )}
    </>
  );
}
