'use client';

import { useEffect, useRef } from 'react';
import GradientButton from './GradientButton';
import PixonalIcon from './PixonalIcon';
import Link from 'next/link';

export default function LlumenCard() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            video.play().catch(() => {
              // Autoplay was prevented, user interaction required
            });
          } else {
            video.pause();
          }
        });
      },
      {
        threshold: 0.5, // Start playing when 50% of the video is visible
      }
    );

    observer.observe(video);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="w-[1360px] mx-auto md:px-8 p-12 bg-[#121212] rounded-[20px] flex flex-col lg:flex-row justify-start items-start gap-10 lg:gap-40">
      {/* Left Column - Title */}
      <div className="w-full lg:w-[25%] flex flex-col justify-start items-start gap-5">
        <h2 className="w-full text-white text-4xl font-normal font-untitled-sans capitalize leading-[1.2]">
          Llumen — <br />
          the intelligence interface
        </h2>
      </div>

      {/* Right Column - Content */}
      <div className="flex-1 flex flex-col justify-start items-start gap-10 px-4">
        {/* Description */}
        <div className="w-full flex flex-col justify-start items-start gap-10">
          <p className="w-full opacity-80 text-white text-base font-normal font-untitled-sans leading-5">
            Llumen turns raw data into living stories by breaking information into &ldquo;tokens&rdquo; that connect directly to your insights. These tokens weave facts, figures, and visuals into cohesive, interactive narratives.
            <br /><br />
            For quick analyses or recurring reports, Llumen&apos;s token-based architecture gives you the flexibility to shape the story you need, exactly when you need it.
          </p>

          {/* CTA Buttons */}
          <div className="inline-flex justify-center items-start gap-6 flex-wrap">
            <GradientButton href="/llumen#demo">
              Request Demo
            </GradientButton>
            <Link 
              href="/llumen"
              className="p-3.5 rounded-xl outline -outline-offset-1 outline-white inline-flex justify-center items-center gap-2 hover:bg-white/10 transition-colors text-white text-base font-normal font-untitled-sans capitalize leading-4 whitespace-nowrap"
            >
              Explore Llumen
              <PixonalIcon name="arrow-right" size={24} />
            </Link>
          </div>
        </div>

        {/* Video Placeholder */}
        <div className="w-full aspect-video bg-primary-700 rounded-[20px] border border-gray-700 overflow-hidden flex items-center justify-center">
          <video 
            ref={videoRef}
            className="w-full h-full object-cover"
            muted
            loop
            playsInline
            poster="/images/llumen-preview.png"
          >
            <source src="/videos/LlumenBriefing.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  );
}

