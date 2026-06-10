import HeroSection from './HeroSection';
import HeroVideoBackground from './HeroVideoBackground';
import HeroBlurOverlay from './HeroBlurOverlay';

export default function Hero() {
  return (
    <HeroSection
      contentClassName="gap-tight items-start"
      wrapperClassName="justify-end px-gutter md:px-10 lg:px-20 pb-20 lg:pb-30 xl:pb-50"
      background={
        <HeroVideoBackground
          src="/videos/home-hero.mp4"
          poster="/images/hero-background.jpg"
        />
      }
      overlay={<HeroBlurOverlay />}
    >
      <h1 className="w-full max-w-content text-white text-display">
        Intelligence at the
        <br />
        Moment of Decision
      </h1>
      <p className="w-full max-w-content text-white font-mono font-semibold uppercase text-[length:var(--text-lead-size)] leading-[var(--text-lead-line-height)] tracking-[var(--tracking-mono)] lg:whitespace-pre">
        Governance + Interaction + Communication
      </p>
    </HeroSection>
  );
}
