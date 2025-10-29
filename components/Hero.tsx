import Image from 'next/image';

export default function Hero() {
  return (
    <div className="w-full aspect-video rounded-[20px] flex flex-col justify-center items-start gap-2.5 relative px-10 md:px-20 lg:px-40 py-20 md:py-40 lg:py-96">
      {/* Background Image */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[20px]">
        <Image 
          alt="Hero Background" 
          className="absolute h-[105.25%] left-[-3.59%] max-w-none top-0 w-[107.17%]"
          src="/images/hero-background.png"
          fill
        />
      </div>
      
      {/* Hero Content */}
      <div className="relative z-10 w-full justify-start text-white text-4xl md:text-6xl lg:text-8xl font-normal font-untitled-sans leading-tight md:leading-[92.40px] tracking-[-1.848px]">
        Intelligence at the<br />
        Moment of Decision
      </div>
      <div className="relative z-10 w-full justify-start text-white text-lg md:text-xl lg:text-2xl font-semibold font-ibm-plex font-mono uppercase leading-7 tracking-[1.44px] whitespace-pre">
        Governance + Interaction + Communication
      </div>
    </div>
  );
}

