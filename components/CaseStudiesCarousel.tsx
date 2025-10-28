'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { CaseStudy } from '@/lib/markdown';
import PixonalIcon from './PixonalIcon';

interface CaseStudiesCarouselProps {
  caseStudies: CaseStudy[];
}

export default function CaseStudiesCarousel({ caseStudies }: CaseStudiesCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const progressRef = useRef<number>(0);

  useEffect(() => {
    if (isPaused || caseStudies.length === 0) return;

    // Reset progress when changing slides
    progressRef.current = 0;
    setProgress(0);

    // Progress animation
    const progressInterval = setInterval(() => {
      progressRef.current += 2; // Increment by 2% every 100ms for 5-second duration
      setProgress(progressRef.current);
    }, 100);

    // Auto-play interval
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % caseStudies.length);
    }, 5000);

    return () => {
      clearInterval(progressInterval);
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [currentIndex, isPaused, caseStudies.length]);

  const handlePause = () => {
    setIsPaused(!isPaused);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    progressRef.current = 0;
    setProgress(0);
  };

  if (caseStudies.length === 0) {
    return null;
  }

  return (
    <section className="bg-primary-900 py-[184px] px-5">
      <div className="w-full mx-auto flex flex-col gap-12 items-center max-w-[1400px] pb-12">
        <div className="flex flex-col gap-12 items-start w-full">
          <h2 className="capitalize font-untitled-sans leading-[1.2] text-[36px] text-white tracking-[-0.792px] whitespace-pre">
            Impact Highlights
          </h2>
        </div>
      </div>
      
      {/* Carousel as full-bleed section */}
      <div className="w-full relative overflow-hidden min-h-[593px]" style={{ maxWidth: '1400px', margin: '0 auto' }}>
        <div 
          className="flex gap-5 transition-transform duration-500 ease-in-out"
          style={{ 
            transform: `translateX(calc(-${currentIndex * 1420}px))`,
            width: `${caseStudies.length * 1420}px`
          }}
        >
                {caseStudies.map((study) => (
                  <div key={study.slug} className="border border-zinc-400 rounded-[20px] shrink-0 h-full" style={{ width: '1400px', height: '593px' }}>
                    <Link 
                      href={`/case-studies/${study.slug}`}
                      className="flex w-full h-full cursor-pointer"
                    >
                      {/* Left Panel - Text Content */}
                      <div className="w-100 p-6 flex flex-col justify-between h-full">
                        <div className="backdrop-blur-lg flex flex-col gap-3 rounded-xl shadow-[0px_8px_16px_0px_rgba(27,27,27,0.16)]">
                          <div className="flex flex-col gap-3">
                            <p className="opacity-40 font-ibm-plex-mono font-semibold uppercase leading-4 tracking-wide text-base text-white">
                              Case studies
                            </p>
                            <p className="font-untitled-sans font-normal leading-5 text-base text-white">
                              {study.title}
                            </p>
                            {study.excerpt && (
                              <p className="font-untitled-sans font-normal leading-5 text-base text-white opacity-60">
                                {study.excerpt}
                              </p>
                            )}
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <p className="opacity-60 font-ibm-plex-mono font-semibold uppercase leading-4 tracking-wide text-base text-white">
                            Read more
                          </p>
                          <PixonalIcon name="caret-right" size={24} />
                        </div>
                      </div>

                      {/* Right Panel - Image */}
                      <div className="pr-3 pt-3 pb-3 flex items-start h-[593px]">
                        <img 
                          alt={study.title}
                          src={study.image}
                          className="rounded-xl border border-black/10 w-[1012px] h-[569px] object-cover"
                        />
                      </div>
                    </Link>
                  </div>
                ))}
        </div>
      </div>
      
      {/* Carousel Controls */}
      <div className="w-full mx-auto flex justify-center max-w-[1400px] px-5 py-4">
        <div className="flex gap-2 items-center justify-center">
          {/* Progress Dots with Animated Active Indicator */}
          <div className="bg-[#343434] flex gap-3 h-full items-center p-2 rounded-[360px] relative">
            {caseStudies.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`bg-[#d9d9d9] rounded-[4px] transition-all ${
                  index === currentIndex ? 'opacity-100' : 'opacity-20 hover:opacity-40'
                }`}
                style={{
                  height: '8px',
                  width: index === currentIndex ? '33px' : '8px',
                }}
              />
            ))}
            {/* Animated Progress Bar Overlay */}
            <div 
              className="absolute bg-[#d9d9d9] h-2 rounded-[4px] transition-all duration-300"
              style={{
                left: `${(currentIndex * 16) + 8}px`,
                width: `${33 + (progress * 15 / 100)}px`,
              }}
            />
          </div>

          {/* Pause/Play Button */}
          <button
            onClick={handlePause}
            className="bg-[#343434] flex gap-[10px] items-center justify-center overflow-clip p-2 rounded-[360px] w-8"
            aria-label={isPaused ? 'Play' : 'Pause'}
          >
            {isPaused ? (
              <svg width="14" height="14" viewBox="0 0 14 14" fill="white" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.8125 7L3.0625 1.09375V12.9062L11.8125 7Z" fill="white"/>
              </svg>
            ) : (
              <svg width="14" height="14" viewBox="0 0 14 14" fill="white" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.8125 2.625V11.375C11.8125 11.6071 11.7203 11.8296 11.5562 11.9937C11.3921 12.1578 11.1696 12.25 10.9375 12.25H8.75C8.51794 12.25 8.29538 12.1578 8.13128 11.9937C7.96719 11.8296 7.875 11.6071 7.875 11.375V2.625C7.875 2.39294 7.96719 2.17038 8.13128 2.00628C8.29538 1.84219 8.51794 1.75 8.75 1.75H10.9375C11.1696 1.75 11.3921 1.84219 11.5562 2.00628C11.7203 2.17038 11.8125 2.39294 11.8125 2.625ZM5.25 1.75H3.0625C2.83044 1.75 2.60788 1.84219 2.44378 2.00628C2.27969 2.17038 2.1875 2.39294 2.1875 2.625V11.375C2.1875 11.6071 2.27969 11.8296 2.44378 11.9937C2.60788 12.1578 2.83044 12.25 3.0625 12.25H5.25C5.48206 12.25 5.70462 12.1578 5.86872 11.9937C6.03281 11.8296 6.125 11.6071 6.125 11.375V2.625C6.125 2.39294 6.03281 2.17038 5.86872 2.00628C5.70462 1.84219 5.48206 1.75 5.25 1.75Z" fill="white"/>
              </svg>
            )}
          </button>
        </div>
      </div>
    </section>
  );
}

