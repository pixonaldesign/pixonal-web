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
                            <p className="opacity-40 font-ibm-plex font-mono font-semibold uppercase leading-4 tracking-wide text-base text-white">
                              CASE STUDIES
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
                          <p className="opacity-60 font-ibm-plex font-mono font-semibold uppercase leading-4 tracking-wide text-base text-white">
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
              <PixonalIcon name="play" size={14} weight="fill" className="text-white" />
            ) : (
              <PixonalIcon name="pause" size={14} weight="fill" className="text-white" />
            )}
          </button>
        </div>
      </div>
    </section>
  );
}

