import Image from 'next/image';
import Link from 'next/link';
import PixonalIcon from './PixonalIcon';

export default function WhitepaperHero() {
  return (
    <div className="w-full h-[800px] flex flex-col justify-start items-start gap-2.5">
      <div className="w-full flex-1 p-6 rounded-[20px] flex flex-col justify-start items-center gap-2.5 relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 pointer-events-none">
          <Image
            src="/images/whitepaper-bg.png"
            alt="Whitepaper Background"
            className="object-cover"
            fill
            priority
          />
        </div>
        
        {/* Inner Content Container with Gradient Background */}
        <div className="relative z-10 w-full flex-1 p-10 bg-linear-to-b from-black/0 to-black/80 rounded-[20px] outline outline-white flex justify-center items-center gap-2.5">
          <div className="flex flex-col justify-center items-center gap-8 w-full max-w-[499px]">
            {/* Title */}
            <div className="w-full text-center text-neutral-100 text-2xl sm:text-3xl md:text-4xl font-normal font-untitled-sans capitalize leading-10">
              Data for Humans: Why dashboards no longer cut it: A Paradigm Shift in Data Communication
            </div>
            
            {/* Description */}
            <div className="w-full text-center text-zinc-400 text-sm sm:text-base font-normal font-untitled-sans leading-5">
              We&apos;ve spent years building data solutions around developer constraints rather than real-world usage—and it&apos;s stifling innovation. Learn how shifting to a narrative-driven, human-focused approach unleashes the true power of data, bridging technical silos and unlocking game-changing insights.
            </div>
            
            {/* Button */}
            <Link 
              href="#"
              className="h-12 px-5 py-4 rounded-xl shadow-[0px_8px_16px_0px_rgba(27,27,27,0.16)] outline -outline-offset-1 outline-white backdrop-blur-2xl flex flex-col justify-center items-start gap-2.5 hover:opacity-90 transition-opacity"
            >
              <div className="inline-flex justify-start items-center gap-3">
                <span className="text-white text-base font-normal font-untitled-sans capitalize leading-4">
                  Read More from Our White Paper
                </span>
                <PixonalIcon name="caret-right" size={16} className="text-white" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

