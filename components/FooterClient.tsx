'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import type { NewsArticle } from '@/lib/news';
import NewsArticleLink from '@/components/newsroom/NewsArticleLink';
import PixonalIcon from './PixonalIcon';

interface FooterClientProps {
  newsArticles: NewsArticle[];
}

/**
 * Responsive layout summary:
 * - lg+: original two-column layout (narrow label on the left, content on
 *   the right) for Newsroom / Get in touch / Mailing list. Links area shows
 *   four sub-columns (2 main + Industries label + 2 industries).
 * - md to <lg: label sits on top of its content. Newsroom cards switch from
 *   a vertical stack to a 2-column horizontal grid. Get in touch and Mailing
 *   list sit side-by-side. Links area shows one merged "main" column and
 *   one merged "industries" column.
 * - <md: everything stacks vertically.
 */

const mainLinks: { label: string; href: string }[][] = [
  [
    { label: 'Llumen', href: '/llumen' },
    { label: 'About', href: '/about' },
    { label: 'Rooms', href: '/rooms' },
    { label: 'Careers', href: '/careers' },
  ],
  [
    { label: 'Team', href: '/team' },
    { label: 'News', href: '/newsroom' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '/contact' },
  ],
];

const industriesLinks: { label: string; href: string }[][] = [
  [
    { label: 'Mobility and Transportation', href: '/industries/mobility' },
    { label: 'Real-Estate & Assets', href: '/industries/real-estate' },
    { label: 'Citizen & Service Experience', href: '/industries/citizen-services' },
    { label: 'Labour & Talents', href: '/industries/labour' },
  ],
  [
    { label: 'Technology Infrastructure', href: '/industries/technology' },
    { label: 'Customs & Taxes', href: '/industries/customs' },
    { label: 'Environment & Climate Change', href: '/industries/environment' },
    { label: 'Military & Defense', href: '/industries/military' },
  ],
];

export default function FooterClient({ newsArticles }: FooterClientProps) {
  const pathname = usePathname();
  const isNewsroomPage = pathname === '/newsroom';

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' }).toUpperCase();
  };

  const getCategoryLabel = (category: string) => {
    switch (category.toLowerCase()) {
      case 'in-the-news':
        return 'In the news';
      case 'press releases':
        return 'Press release';
      case 'featured':
        return 'Featured';
      default:
        return category;
    }
  };

  return (
    <div className="w-full flex flex-col gap-section">
      {/* Newsroom Section */}
      {!isNewsroomPage && newsArticles.length > 0 && (
        <>
          <div className="flex flex-col gap-block lg:flex-row lg:gap-12 lg:justify-between lg:items-start">
            <div className="text-primary-50 text-body lg:flex-none">
              Newsroom
            </div>
            <div className="flex flex-col gap-10 w-full lg:w-[688px] lg:flex-none">
              <div className="grid grid-cols-1 gap-5">
                {newsArticles.map((article) => (
                  <div
                    key={article.slug}
                    className="flex flex-col sm:flex-row gap-5"
                  >
                    <div className="w-full sm:w-64 aspect-video sm:aspect-auto sm:h-36 rounded-xl overflow-hidden shrink-0 bg-gray-700 flex items-center justify-center">
                      {article.image ? (
                        <Image
                          src={article.image}
                          alt={article.title}
                          width={271}
                          height={152}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="text-gray-400 text-sm">News Image</div>
                      )}
                    </div>
                    <div className="flex-1 flex flex-col gap-3.5 min-w-0">
                      <div className="flex justify-between items-start gap-4">
                        <div className="text-white/40 text-news-caption">
                          {getCategoryLabel(article.category)}
                        </div>
                        <div className="opacity-30 text-right text-white/40 text-news-caption">
                          {formatDate(article.date)}
                        </div>
                      </div>
                      <div className="text-white text-button">
                        <NewsArticleLink
                          article={article}
                          className="hover:text-white/80 transition-colors"
                        >
                          {article.title}
                        </NewsArticleLink>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="h-px opacity-20 bg-white" />
        </>
      )}

      {/* Get in touch + Mailing list */}
      <div className="flex flex-col gap-12 md:flex-row md:gap-12 lg:flex-col lg:gap-20">
        {/* Get in touch */}
        <div className="flex-1 flex flex-col gap-block lg:flex-row lg:gap-12 lg:justify-between lg:items-start">
          <div className="text-primary-50 text-body lg:flex-none">
            Get in touch
          </div>
          <div className="flex flex-col gap-3 w-full lg:w-[689px] lg:flex-none">
            <div className="text-body text-white/40">
              Area 2071, Sheikh Zayed Road, Dubai, UAE
            </div>
            <div className="text-primary-50 text-body">
              <a
                href="mailto:m.said@pixonal.com"
                className="hover:text-white/80 transition-colors"
              >
                m.said@pixonal.com
              </a>
              <br />
              <a
                href="tel:+971557181303"
                className="hover:text-white/80 transition-colors"
              >
                +971 55 7181 303
              </a>
            </div>
          </div>
        </div>

        {/* Mailing list */}
        <div className="flex-1 flex flex-col gap-block lg:flex-row lg:gap-12 lg:justify-between lg:items-start">
          <div className="text-primary-50 text-body lg:flex-none">
            Join our mailing list
          </div>
          <div className="flex flex-col gap-7 w-full lg:w-[688px] lg:flex-none">
            <div className="flex items-center flex-wrap gap-4">
              <input
                type="email"
                placeholder="Your e-mail here"
                className="flex-1 min-w-0 sm:w-72 sm:flex-none pb-3 bg-transparent border-b border-neutral-100/50 text-neutral-100 text-m font-normal font-sans leading-6 placeholder-neutral-100 focus:outline-none focus:border-white transition-colors"
              />
              <button className="p-3 rounded-xl backdrop-blur-[5px] bg-transparent hover:bg-white/10 transition-colors flex items-center gap-4">
                <span className="text-button text-primary-50">Submit</span>
                <PixonalIcon name="arrow-right" size={16} className="text-white" />
              </button>
            </div>
            <div className="flex gap-3">
              <a href="#" className="hover:opacity-70 transition-opacity">
                <PixonalIcon name="instagram" size={24} className="text-white" />
              </a>
              <a href="#" className="hover:opacity-70 transition-opacity">
                <PixonalIcon name="linkedin" size={24} className="text-white" />
              </a>
              <a href="#" className="hover:opacity-70 transition-opacity">
                <PixonalIcon name="x" size={24} className="text-white" />
              </a>
              <a href="#" className="hover:opacity-70 transition-opacity">
                <PixonalIcon name="youtube" size={24} className="text-white" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="h-px opacity-20 bg-white" />

      {/*
        Navigation Links
        - <sm: everything stacks vertically (one column of 8 main links, then
          Industries label + 8 industry links).
        - sm – lg: two equal-width columns side-by-side (main vs industries).
          Each block internally stays as a single stacked column.
        - lg+: each block splits into 2 sub-columns. Sub-columns use flex-1
          so they share the available width evenly — no fixed pixel widths,
          which used to overflow narrower lg viewports.
      */}
      <div className="flex flex-col gap-12 sm:flex-row sm:gap-12 lg:gap-16">
        {/* Main links */}
        <div className="flex flex-col gap-4 sm:flex-1 lg:flex-row lg:gap-8">
          {mainLinks.map((column, columnIndex) => (
            <div
              key={columnIndex}
              className="flex flex-col gap-4 lg:flex-1 lg:min-w-0"
            >
              {column.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-white text-body hover:text-white/80 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          ))}
        </div>

        {/* Industries */}
        <div className="flex flex-col gap-4 sm:flex-1 lg:gap-7">
          <div className="text-white text-body">Industries</div>
          <div className="opacity-70 flex flex-col gap-4 lg:flex-row lg:gap-8">
            {industriesLinks.map((column, columnIndex) => (
              <div
                key={columnIndex}
                className="flex flex-col gap-4 lg:flex-1 lg:min-w-0"
              >
                {column.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="opacity-80 text-white text-body-tight hover:text-white/80 transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="w-full opacity-50 text-button text-primary-50">
        © 2025 Pixonal Inc. All rights reserved.
      </div>
    </div>
  );
}
