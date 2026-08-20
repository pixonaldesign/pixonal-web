import HeroSection from './HeroSection';
import HeroVideoBackground from './HeroVideoBackground';
import HeroBlurOverlay from './HeroBlurOverlay';

export default function Hero() {
  return (
    <HeroSection
      contentClassName="gap-6 items-center"
      wrapperClassName="justify-end px-gutter md:px-10 lg:px-20 xl:px-0 pb-20 lg:pb-30 xl:pb-50"
      background={
        <HeroVideoBackground src="/videos/home-hero.mp4" />
      }
      overlay={<HeroBlurOverlay />}
    >
      <h1 className="w-full text-center text-white text-display">
        Agentic command rooms running
        <br />
        cities and critical operations.
      </h1>
    </HeroSection>
  );
}
