'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { NewsArticle } from '@/lib/markdown';

interface MobileMenuProps {
  newsArticles: NewsArticle[];
}

export default function MobileMenu({ newsArticles }: MobileMenuProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // Get latest 4 articles
  const displayArticles = newsArticles.slice(0, 4);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' }).toUpperCase();
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
      {/* Mobile Menu Button */}
      <button 
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="p-2.5 rounded-[10px] hover:bg-[rgba(255,255,255,0.05)] transition-colors"
        title="Toggle menu"
        aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
      >
        {isMenuOpen ? (
          // X Icon (close)
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19.2806 17.9693C19.3502 18.039 19.4055 18.1217 19.4432 18.2128C19.4809 18.3038 19.5003 18.4014 19.5003 18.4999C19.5003 18.5985 19.4809 18.6961 19.4432 18.7871C19.4055 18.8781 19.3502 18.9609 19.2806 19.0306C19.2109 19.1002 19.1281 19.1555 19.0371 19.1932C18.9461 19.2309 18.8485 19.2503 18.7499 19.2503C18.6514 19.2503 18.5538 19.2309 18.4628 19.1932C18.3717 19.1555 18.289 19.1002 18.2193 19.0306L11.9999 12.8102L5.78055 19.0306C5.63982 19.1713 5.44895 19.2503 5.24993 19.2503C5.05091 19.2503 4.86003 19.1713 4.7193 19.0306C4.57857 18.8898 4.49951 18.699 4.49951 18.4999C4.49951 18.3009 4.57857 18.11 4.7193 17.9693L10.9396 11.7499L4.7193 5.53055C4.57857 5.38982 4.49951 5.19895 4.49951 4.99993C4.49951 4.80091 4.57857 4.61003 4.7193 4.4693C4.86003 4.32857 5.05091 4.24951 5.24993 4.24951C5.44895 4.24951 5.63982 4.32857 5.78055 4.4693L11.9999 10.6896L18.2193 4.4693C18.36 4.32857 18.5509 4.24951 18.7499 4.24951C18.949 4.24951 19.1398 4.32857 19.2806 4.4693C19.4213 4.61003 19.5003 4.80091 19.5003 4.99993C19.5003 5.19895 19.4213 5.38982 19.2806 5.53055L13.0602 11.7499L19.2806 17.9693Z" fill="white"/>
          </svg>
        ) : (
          // Hamburger Icon
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21 11.75C21 11.9489 20.921 12.1397 20.7803 12.2803C20.6397 12.421 20.4489 12.5 20.25 12.5H3.75C3.55109 12.5 3.36032 12.421 3.21967 12.2803C3.07902 12.1397 3 11.9489 3 11.75C3 11.5511 3.07902 11.3603 3.21967 11.2197C3.36032 11.079 3.55109 11 3.75 11H20.25C20.4489 11 20.6397 11.079 20.7803 11.2197C20.921 11.3603 21 11.5511 21 11.75ZM20.25 17H3.75C3.55109 17 3.36032 17.079 3.21967 17.2197C3.07902 17.3603 3 17.5511 3 17.75C3 17.9489 3.07902 18.1397 3.21967 18.2803C3.36032 18.421 3.55109 18.5 3.75 18.5H20.25C20.4489 18.5 20.6397 18.421 20.7803 18.2803C20.921 18.1397 21 17.9489 21 17.75C21 17.5511 20.921 17.3603 20.7803 17.2197C20.6397 17.079 20.4489 17 20.25 17Z" fill="#F6F6F6"/>
            <path d="M21 5.75C21 5.94891 20.921 6.13968 20.7803 6.28033C20.6397 6.42098 20.4489 6.5 20.25 6.5H3.75C3.55109 6.5 3.36032 6.42098 3.21967 6.28033C3.07902 6.13968 3 5.94891 3 5.75C3 5.55109 3.07902 5.36032 3.21967 5.21967C3.36032 5.07902 3.55109 5 3.75 5H20.25C20.4489 5 20.6397 5.07902 20.7803 5.21967C20.921 5.36032 21 5.55109 21 5.75ZM20.25 11H3.75C3.55109 11 3.36032 11.079 3.21967 11.2197C3.07902 11.3603 3 11.5511 3 11.75C3 11.9489 3.07902 12.1397 3.21967 12.2803C3.36032 12.421 3.55109 12.5 3.75 12.5H20.25C20.4489 12.5 20.6397 12.421 20.7803 12.2803C20.921 12.1397 21 11.9489 21 11.75C21 11.5511 20.921 11.3603 20.7803 11.2197C20.6397 11.079 20.4489 11 20.25 11Z" fill="#F6F6F6"/>
          </svg>
        )}
      </button>

      {/* Full Panel Menu */}
      {isMenuOpen && (
        <div className="fixed top-[84px] left-0 right-0 w-full max-w-[1400px] mx-auto px-5 pb-5 bg-zinc-900 rounded-[20px] backdrop-blur-[10px] z-50 max-h-[calc(100vh-100px)] overflow-y-auto">
          <div className="self-stretch flex-1 flex flex-col justify-between items-start gap-5 pt-5">
            {/* Top Section - Left Nav Links and Right Content Cards */}
            <div className="self-stretch px-5 flex flex-col lg:flex-row justify-between items-start gap-5">
              {/* Left Column - Navigation Links */}
              <div className="flex flex-col justify-center items-start gap-3">
                <Link 
                  href="/llumen" 
                  onClick={() => setIsMenuOpen(false)}
                  className="self-stretch justify-center text-white text-xl font-normal font-untitled-sans capitalize leading-6 hover:text-white/80 transition-colors"
                >
                  Llumen®
                </Link>
                <Link 
                  href="/industries" 
                  onClick={() => setIsMenuOpen(false)}
                  className="self-stretch justify-center text-white text-xl font-normal font-untitled-sans capitalize leading-6 hover:text-white/80 transition-colors"
                >
                  Industries
                </Link>
                <Link 
                  href="/advisory" 
                  onClick={() => setIsMenuOpen(false)}
                  className="self-stretch justify-center text-white text-xl font-normal font-untitled-sans capitalize leading-6 hover:text-white/80 transition-colors"
                >
                  Advisory
                </Link>
                <Link 
                  href="/about" 
                  onClick={() => setIsMenuOpen(false)}
                  className="self-stretch justify-center text-white text-xl font-normal font-untitled-sans capitalize leading-6 hover:text-white/80 transition-colors"
                >
                  About
                </Link>
                <Link 
                  href="/newsroom" 
                  onClick={() => setIsMenuOpen(false)}
                  className="self-stretch justify-center text-white text-xl font-normal font-untitled-sans capitalize leading-6 hover:text-white/80 transition-colors"
                >
                  Newsroom
                </Link>
                <Link 
                  href="/contact" 
                  onClick={() => setIsMenuOpen(false)}
                  className="self-stretch justify-center text-white text-xl font-normal font-untitled-sans capitalize leading-6 hover:text-white/80 transition-colors"
                >
                  Contact us
                </Link>
              </div>

              {/* Right Column - Content Cards */}
              <div className="flex-1 w-full lg:w-auto flex flex-col lg:flex-row justify-start items-center gap-5">
                {/* Llumen Card */}
                <div className="flex-1 w-full lg:max-w-[280px] h-40 p-3 rounded-[10px] bg-zinc-800/50 flex flex-col justify-between items-start">
                  <div className="flex flex-col justify-start items-start gap-1">
                    <div className="justify-start text-white text-xs font-semibold font-ibm-plex font-mono uppercase leading-3 tracking-wide">
                      Llumen
                    </div>
                    <div className="w-full lg:w-44 justify-start text-white text-sm font-normal font-untitled-sans capitalize leading-3">
                      Supercharged Decisions Instant Impact
                    </div>
                  </div>
                  <Link 
                    href="/llumen"
                    onClick={() => setIsMenuOpen(false)}
                    className="h-8 px-3 py-2 rounded-lg outline outline-1 outline-offset-[-1px] outline-white inline-flex justify-center items-center gap-1.5 hover:bg-white/10 transition-colors"
                  >
                    <div className="justify-start text-white text-sm font-normal font-untitled-sans capitalize leading-3">
                      Transform your Moment of Decision
                    </div>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20.7806 12.5306L14.0306 19.2806C13.8899 19.4213 13.699 19.5003 13.5 19.5003C13.301 19.5003 13.1101 19.4213 12.9694 19.2806C12.8286 19.1398 12.7496 18.949 12.7496 18.7499C12.7496 18.5509 12.8286 18.36 12.9694 18.2193L18.4397 12.7499H3.75C3.55109 12.7499 3.36032 12.6709 3.21967 12.5303C3.07902 12.3896 3 12.1988 3 11.9999C3 11.801 3.07902 11.6103 3.21967 11.4696C3.36032 11.3289 3.55109 11.2499 3.75 11.2499H18.4397L12.9694 5.78055C12.8286 5.63982 12.7496 5.44895 12.7496 5.24993C12.7496 5.05091 12.8286 4.86003 12.9694 4.7193C13.1101 4.57857 13.301 4.49951 13.5 4.49951C13.699 4.49951 13.8899 4.57857 14.0306 4.7193L20.7806 11.4693C20.8504 11.539 20.9057 11.6217 20.9434 11.7127C20.9812 11.8038 21.0006 11.9014 21.0006 11.9999C21.0006 12.0985 20.9812 12.1961 20.9434 12.2871C20.9057 12.3782 20.8504 12.4609 20.7806 12.5306Z" fill="white"/>
                    </svg>
                  </Link>
                </div>

                {/* Data for Humans Card */}
                <div className="flex-1 w-full lg:max-w-[280px] h-40 p-3 rounded-[10px] bg-zinc-800/50 flex flex-col justify-between items-start">
                  <div className="flex flex-col justify-start items-start gap-1">
                    <div className="justify-start text-white text-xs font-semibold font-ibm-plex font-mono uppercase leading-3 tracking-wide">
                      data for humans
                    </div>
                    <div className="w-full lg:w-44 justify-start text-white text-sm font-normal font-untitled-sans capitalize leading-3">
                      A paradigm shift in data communication
                    </div>
                  </div>
                  <Link 
                    href="#"
                    onClick={() => setIsMenuOpen(false)}
                    className="h-8 px-3 py-2 rounded-lg outline outline-1 outline-offset-[-1px] outline-white inline-flex justify-center items-center gap-1.5 hover:bg-white/10 transition-colors"
                  >
                    <div className="justify-start text-white text-sm font-normal font-untitled-sans capitalize leading-3">
                      Read More from Our White Paper
                    </div>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20.7806 12.5306L14.0306 19.2806C13.8899 19.4213 13.699 19.5003 13.5 19.5003C13.301 19.5003 13.1101 19.4213 12.9694 19.2806C12.8286 19.1398 12.7496 18.949 12.7496 18.7499C12.7496 18.5509 12.8286 18.36 12.9694 18.2193L18.4397 12.7499H3.75C3.55109 12.7499 3.36032 12.6709 3.21967 12.5303C3.07902 12.3896 3 12.1988 3 11.9999C3 11.801 3.07902 11.6103 3.21967 11.4696C3.36032 11.3289 3.55109 11.2499 3.75 11.2499H18.4397L12.9694 5.78055C12.8286 5.63982 12.7496 5.44895 12.7496 5.24993C12.7496 5.05091 12.8286 4.86003 12.9694 4.7193C13.1101 4.57857 13.301 4.49951 13.5 4.49951C13.699 4.49951 13.8899 4.57857 14.0306 4.7193L20.7806 11.4693C20.8504 11.539 20.9057 11.6217 20.9434 11.7127C20.9812 11.8038 21.0006 11.9014 21.0006 11.9999C21.0006 12.0985 20.9812 12.1961 20.9434 12.2871C20.9057 12.3782 20.8504 12.4609 20.7806 12.5306Z" fill="white"/>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>

            {/* Bottom Section - Social Icons, Copyright, and News Items */}
            <div className="self-stretch px-5 flex flex-col lg:flex-row justify-between items-start gap-5">
              {/* Left Column - Social Icons and Copyright */}
              <div className="flex-1 self-stretch flex flex-col justify-between items-start gap-5">
                {/* Social Media Icons */}
                <div className="flex flex-col justify-start items-start gap-5">
                  <a href="#" className="hover:opacity-70 transition-opacity" aria-label="LinkedIn">
                    <Image 
                      src="/images/footer/LinkedinLogo.svg" 
                      alt="LinkedIn" 
                      width={24} 
                      height={24}
                      className="text-white"
                    />
                  </a>
                  <a href="#" className="hover:opacity-70 transition-opacity" aria-label="Instagram">
                    <Image 
                      src="/images/footer/InstagramLogo.svg" 
                      alt="Instagram" 
                      width={24} 
                      height={24}
                      className="text-white"
                    />
                  </a>
                  <a href="#" className="hover:opacity-70 transition-opacity" aria-label="Threads">
                    <Image 
                      src="/images/footer/ThreadsLogo.svg" 
                      alt="Threads" 
                      width={24} 
                      height={24}
                      className="text-white"
                    />
                  </a>
                  <a href="#" className="hover:opacity-70 transition-opacity" aria-label="Facebook">
                    <Image 
                      src="/images/footer/FacebookLogo.svg" 
                      alt="Facebook" 
                      width={24} 
                      height={24}
                      className="text-white"
                    />
                  </a>
                </div>

                {/* Copyright */}
                <div className="self-stretch justify-center text-neutral-100/50 text-sm font-normal font-untitled-sans leading-4">
                  © 2025 Pixonal. All rights reserved.
                </div>
              </div>

              {/* Right Column - News Items */}
              <div className="flex-1 lg:flex-[2] w-full flex flex-col justify-center items-start gap-5">
                {/* News Grid */}
                <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-5">
                  {displayArticles.length > 0 ? (
                    displayArticles.map((article, index) => (
                      <div key={article.slug} className="flex flex-col justify-start items-start gap-2.5">
                        <div className="self-stretch flex justify-start items-start gap-2.5">
                          <div className="w-32 h-20 rounded-lg overflow-hidden flex-shrink-0 bg-gray-700 flex items-center justify-center">
                            {article.image ? (
                              <Image
                                src={article.image}
                                alt={article.title}
                                width={128}
                                height={72}
                                className="w-full h-full object-cover"
                              />
                            ) : (
                              <div className="text-gray-400 text-xs">News Image</div>
                            )}
                          </div>
                          <div className="flex-1 flex flex-col justify-start items-start gap-2">
                            <div className="self-stretch flex justify-between items-start">
                              <div className="w-32 justify-start text-white/40 text-xs font-semibold font-ibm-plex font-mono uppercase leading-3 tracking-wide">
                                {getCategoryLabel(article.category)}
                              </div>
                              <div className="w-32 opacity-30 text-right justify-start text-white/40 text-xs font-semibold font-ibm-plex font-mono uppercase leading-3 tracking-wide">
                                {formatDate(article.date)}
                              </div>
                            </div>
                            <Link 
                              href={`/newsroom/${article.slug}`}
                              onClick={() => setIsMenuOpen(false)}
                              className="self-stretch h-12 justify-start text-white text-sm font-normal font-untitled-sans capitalize leading-3 hover:text-white/80 transition-colors line-clamp-3"
                            >
                              {article.title}
                            </Link>
                          </div>
                        </div>
                      </div>
                    ))
                  ) : (
                    // Loading state or empty state
                    <div className="text-white/40 text-xs">Loading news...</div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Backdrop overlay */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
          onClick={() => setIsMenuOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  );
}
