'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { NewsArticle } from '@/lib/markdown';
import PixonalIcon from './PixonalIcon';

interface FooterClientProps {
  newsArticles: NewsArticle[];
}

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
    <>
      {/* Newsroom Section - Only show if not on newsroom page */}
      {!isNewsroomPage && newsArticles.length > 0 && (
        <>
          <div className="flex justify-between items-start">
            <div className="text-primary-50 text-body">
              Newsroom
            </div>
            <div className="w-[688px] flex flex-col gap-10">
              <div className="flex flex-col gap-5">
                {newsArticles.map((article, index) => (
                  <div key={article.slug} className="flex gap-5">
                    <div className="w-64 h-36 rounded-xl overflow-hidden flex-shrink-0 bg-gray-700 flex items-center justify-center">
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
                    <div className="flex-1 flex flex-col gap-3.5">
                      <div className="flex justify-between items-start">
                        <div className="w-36 text-white/40 text-news-caption">
                          {getCategoryLabel(article.category)}
                        </div>
                        <div className="w-36 opacity-30 text-right text-white/40 text-news-caption">
                          {formatDate(article.date)}
                        </div>
                      </div>
                      <div className="h-24 text-white text-button">
                        <Link 
                          href={`/newsroom/${article.slug}`}
                          className="hover:text-white/80 transition-colors"
                        >
                          {article.title}
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="h-px opacity-20 bg-white"></div>
        </>
      )}

      {/* Get in Touch Section */}
      <div className="flex flex-col gap-20">
        <div className="flex justify-between items-start">
          <div className="text-primary-50 text-body">
            Get in touch
          </div>
          <div className="w-[689px] flex flex-col gap-3">
            <div className="flex justify-center items-center gap-tight">
              <div className="flex-1 text-body text-white/40">
                Area 2071, Sheikh Zayed Road, Dubai, UAE
              </div>
            </div>
            <div className="text-primary-50 text-body">
              <a href="mailto:m.said@pixonal.com" className="hover:text-white/80 transition-colors">
                m.said@pixonal.com
              </a>
              <br/>
              <a href="tel:+971557181303" className="hover:text-white/80 transition-colors">
                +971 55 7181 303
              </a>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="flex gap-12">
          <div className="flex-1 h-7 text-primary-50 text-body">
            Join our mailing list
          </div>
          <div className="w-[688px] flex flex-col gap-7">
            <div className="h-10 relative flex items-center">
              <input
                type="email"
                placeholder="Your e-mail here"
                className="w-72 pb-3 bg-transparent border-b border-neutral-100/50 text-neutral-100 text-m font-normal font-sans leading-6 placeholder-neutral-100 focus:outline-none focus:border-white transition-colors"
              />
              <button className="ml-6 p-3 rounded-xl backdrop-blur-[5px] bg-transparent hover:bg-white/10 transition-colors flex items-center gap-4">
                <span className="text-button text-primary-50">
                  Submit
                </span>
                <PixonalIcon name="arrow-right" size={16} className="text-white" />
              </button>
            </div>
            <div className="w-72 h-6 relative">
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
      </div>

      <div className="h-px opacity-20 bg-white"></div>

      {/* Navigation Links */}
      <div className="w-[1264px] h-48 flex justify-between items-start">
        <div className="w-[559px] self-stretch flex justify-start items-center gap-52">
          <div className="self-stretch flex flex-col justify-between items-start">
            <Link href="/llumen" className="text-white text-body hover:text-white/80 transition-colors">
              Llumen
            </Link>
            <Link href="/advisory" className="text-white text-body hover:text-white/80 transition-colors">
              Advisory
            </Link>
            <Link href="/rooms" className="text-white text-body hover:text-white/80 transition-colors">
              Rooms
            </Link>
            <Link href="/careers" className="text-white text-body hover:text-white/80 transition-colors">
              Careers
            </Link>
          </div>
          <div className="self-stretch flex flex-col justify-between items-start">
            <Link href="/team" className="text-white text-body hover:text-white/80 transition-colors">
              Team
            </Link>
            <Link href="/newsroom" className="text-white text-body hover:text-white/80 transition-colors">
              News
            </Link>
            <Link href="/blog" className="text-white text-body hover:text-white/80 transition-colors">
              Blog
            </Link>
            <Link href="/contact" className="text-white text-body hover:text-white/80 transition-colors">
              Contact
            </Link>
          </div>
        </div>
        <div className="w-[689px] self-stretch flex flex-col justify-start items-start gap-7">
          <div className="text-white text-body">
            Industries
          </div>
          <div className="flex-1 opacity-70 flex justify-start items-start gap-16">
            <div className="self-stretch flex flex-col justify-between items-start">
              <Link href="/industries/mobility" className="opacity-80 text-white text-body-tight hover:text-white/80 transition-colors">
                Mobility and Transportation
              </Link>
              <Link href="/industries/real-estate" className="opacity-80 text-white text-body-tight hover:text-white/80 transition-colors">
                Real-Estate & Assets
              </Link>
              <Link href="/industries/citizen-services" className="opacity-80 text-white text-body-tight hover:text-white/80 transition-colors">
                Citizen & Service Experience
              </Link>
              <Link href="/industries/labour" className="opacity-80 text-white text-body-tight hover:text-white/80 transition-colors">
                Labour & Talents
              </Link>
            </div>
            <div className="self-stretch flex flex-col justify-between items-start">
              <Link href="/industries/technology" className="opacity-80 text-white text-body-tight hover:text-white/80 transition-colors">
                Technology Infrastructure
              </Link>
              <Link href="/industries/customs" className="opacity-80 text-white text-body-tight hover:text-white/80 transition-colors">
                Customs & Taxes
              </Link>
              <Link href="/industries/environment" className="opacity-80 text-white text-body-tight hover:text-white/80 transition-colors">
                Environment & Climate Change
              </Link>
              <Link href="/industries/military" className="opacity-80 text-white text-body-tight hover:text-white/80 transition-colors">
                Military & Defense
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="w-full h-5 opacity-50 text-button text-primary-50 px-4 pl-0">
        © 2025 Pixonal Inc. All rights reserved.
      </div>
    </>
  );
}
