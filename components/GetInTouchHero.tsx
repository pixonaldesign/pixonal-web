import HeroSection from './HeroSection';
import HeroVideoBackground from './HeroVideoBackground';
import SecondaryButton from './SecondaryButton';

export default function GetInTouchHero() {
  return (
    <HeroSection
      ariaLabelledBy="get-in-touch-heading"
      background={<HeroVideoBackground src="/videos/getintouchbg.mp4" />}
      overlay={
        <div aria-hidden className="absolute inset-0 z-[1] bg-black/40" />
      }
      contentClassName="items-center gap-12 text-center"
      wrapperClassName="justify-center px-gutter md:px-10 lg:px-20 xl:px-0"
    >
      <h2 id="get-in-touch-heading" className="text-center text-white">
        <span className="text-display-accent block">Transform your</span>
        <span className="text-display block">Moment of Decision.</span>
      </h2>
      <SecondaryButton
        href="/contact"
        showArrow
        className="shadow-[0px_8px_16px_0px_rgba(27,27,27,0.16)]"
      >
        Get in Touch
      </SecondaryButton>
    </HeroSection>
  );
}
