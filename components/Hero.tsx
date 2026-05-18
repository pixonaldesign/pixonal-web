import Image from 'next/image';

export default function Hero() {
  return (
    <div className="aspect-video rounded-[20px] flex flex-col justify-center items-center gap-tight relative px-gutter md:px-10 lg:px-20 py-20 md:py-40 lg:py-96 mx-5 mt-5">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[20px]">
        <Image
          alt="Hero Background"
          className="absolute h-[105.25%] left-[-3.59%] max-w-none top-0 w-[107.17%]"
          src="/images/hero-background.png"
          fill
        />
      </div>

      <h1 className="relative z-10 w-full max-w-content text-white text-display">
        Intelligence at the
        <br />
        Moment of Decision
      </h1>
      <p className="relative z-10 w-full max-w-content text-white font-mono font-semibold uppercase text-[length:var(--text-lead-size)] leading-[var(--text-lead-line-height)] tracking-[var(--tracking-mono)] whitespace-pre">
        Governance + Interaction + Communication
      </p>
    </div>
  );
}
