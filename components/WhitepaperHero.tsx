import Image from 'next/image';
import Link from 'next/link';
import PixonalIcon from './PixonalIcon';

export default function WhitepaperHero() {
  return (
    <div className="w-full flex justify-center items-center gap-12">
      <div className="w-[95vw] aspect-[1400/788] p-10 bg-linear-to-b from-black/0 to-black/80 rounded-[20px] flex justify-center items-center gap-2.5 relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 pointer-events-none">
          <Image
            src="/images/whitepaper-bg.png"
            alt="Whitepaper Background"
            fill
            className="object-cover"
            priority
          />
        </div>
        
        {/* Inner Content Container with Dimmed Background */}
        <div className="relative z-10 w-full h-full">
          <div className="w-full h-full px-150 py-90 bg-black/40 backdrop-blur-sm rounded-[12px] outline-1 outline-white flex flex-col justify-center items-center gap-6 md:gap-8">
          {/* Title */}
          <div className="w-full max-w-[85%] text-center text-neutral-100 text-2xl md:text-3xl lg:text-4xl font-normal font-untitled-sans capitalize leading-tight md:leading-10">
            Data for Humans: Why dashboards no longer cut it: A Paradigm Shift in Data Communication
          </div>
          
          {/* Description */}
          <div className="w-full max-w-[85%] text-center text-zinc-400 text-sm md:text-base font-normal font-untitled-sans leading-relaxed md:leading-5">
            We&apos;ve spent years building data solutions around developer constraints rather than real-world usage—and it&apos;s stifling innovation. Learn how shifting to a narrative-driven, human-focused approach unleashes the true power of data, bridging technical silos and unlocking game-changing insights.
          </div>
          
          {/* Button */}
          <Link 
            href="#"
            className="h-12 px-5 py-4 rounded-xl shadow-[0px_8px_16px_0px_rgba(27,27,27,0.16)] outline-1 -outline-offset-1 outline-white backdrop-blur-2xl flex justify-center items-center gap-3 hover:opacity-90 transition-opacity whitespace-nowrap"
          >
            <span className="text-white text-sm md:text-base font-normal font-untitled-sans capitalize leading-4">
              Read More from Our White Paper
            </span>
            <PixonalIcon name="caret-right" size={16} className="text-white" />
          </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

