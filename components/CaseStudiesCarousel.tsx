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

  const currentStudy = caseStudies[currentIndex];

  return (
    <section className="bg-primary-900 py-[184px] px-5">
      <div className="w-full mx-auto flex flex-col gap-12 items-center">
        <div className="flex flex-col gap-12 items-start w-full">
          <h2 className="capitalize font-untitled-sans leading-[1.2] text-[36px] text-white tracking-[-0.792px] whitespace-pre">
            Impact Highlights
          </h2>
          
          <div className="flex flex-col gap-5 items-center w-full">
            {/* Carousel Container with Multiple Cards */}
            <div className="w-screen flex justify-center overflow-x-visibl min-h-[640px]" style={{ marginLeft: 'calc(201%)', marginRight: 'calc(-50vw + 50%)' }}>
              <div 
                className="flex gap-5 transition-transform duration-500 ease-in-out"
                style={{ 
                  transform: `translateX(calc(50vw - ${(currentIndex * 96.5) + 50}vw))` 
                }}
              >
                {caseStudies.map((study) => (
                  <div key={study.slug} className="border border-[#b8b8b8] rounded-[20px] flex-shrink-0 flex items-start justify-center" style={{ width: '95.5vw' }}>
                    <Link 
                      href={`/case-studies/${study.slug}`}
                      className="flex items-start justify-center cursor-pointer h-full"
                    >
                      {/* Left Panel - Text Content */}
                      <div className="flex flex-col items-start justify-between p-6 w-[24vw] min-w-[24vw] h-full">
                        <div className="backdrop-blur-[15px] backdrop-filter flex flex-col gap-3 items-start rounded-[12px] shadow-[0px_8px_16px_0px_rgba(27,27,27,0.16)] w-full">
                          <div className="flex flex-col gap-3 items-start text-[16px] text-white w-full">
                            <p className="font-ibm-plex-mono leading-[1.1] opacity-40 text-nowrap tracking-[0.96px] uppercase whitespace-pre">
                              Case studies
                            </p>
                            <p className="font-untitled-sans leading-[1.2] min-w-full tracking-[-0.352px] w-[min-content]">
                              {study.title}
                            </p>
                            <p className="font-untitled-sans leading-[1.2] text-gray-400 min-w-full tracking-[-0.352px] w-[min-content]">
                              {study.excerpt}
                            </p>
                          </div>
                        </div>
                        <div className="flex gap-3 items-center mt-auto">
                          <p className="font-ibm-plex-mono leading-[1.1] opacity-60 text-[16px] text-nowrap text-white tracking-[0.96px] uppercase whitespace-pre">
                            Read more
                          </p>
                          <PixonalIcon name="caret-right" size={24} />
                        </div>
                      </div>

                      {/* Right Panel - Image */}
                      <div className="flex flex-col gap-[10px] items-start p-3 h-full">
                        <div className="border border-[rgba(0,0,0,0.12)] h-[55vh] relative rounded-[12px] w-[70vw] overflow-hidden h-full">
                          <img 
                            alt={study.title}
                            src={study.image}
                            className="absolute inset-0 max-w-none object-cover rounded-[12px] size-full"
                          />
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>

            {/* Carousel Controls */}
            <div className="flex gap-2 items-center justify-center">
              {/* Progress Dots with Animated Active Indicator */}
              <div className="bg-[#343434] flex gap-3 items-center p-2 rounded-[360px] relative">
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
                  <PixonalIcon name="play" size={14} className="text-white" />
                ) : (
                  <PixonalIcon name="pause" size={14} className="text-white" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

