import HeroSection from '@/components/HeroSection';
import HeroVideoBackground from '@/components/HeroVideoBackground';
import HeroBlurOverlay from '@/components/HeroBlurOverlay';
import PrimaryButton from '@/components/PrimaryButton';
import SecondaryButton from '@/components/SecondaryButton';

export default function LlumenHero() {
  return (
    <HeroSection
      id="demo"
      ariaLabelledBy="llumen-hero-heading"
      background={<HeroVideoBackground src="/videos/llumen/llumen-hero-video.mp4" />}
      overlay={<HeroBlurOverlay />}
      wrapperClassName="justify-end px-gutter md:px-10 lg:px-20 xl:px-0 pb-20 md:pb-30 lg:pb-50"
    >
      <p className="text-stat text-primary-50 uppercase">Llumen</p>
      <h1 id="llumen-hero-heading" className="text-display text-primary-50">
        The Operating System for
        <br />
        Critical Decision.
      </h1>
      <div className="@container w-full">
        <div className="flex flex-col gap-block items-stretch @[360px]:flex-row @[360px]:items-center">
          <PrimaryButton
            href="#demo"
            className="w-full @[360px]:w-auto @[360px]:max-sm:flex-1"
          >
            Watch Film
          </PrimaryButton>
          <SecondaryButton
            href="/contact"
            showArrow
            className="w-full @[360px]:w-auto @[360px]:max-sm:flex-1"
          >
            Request Demo
          </SecondaryButton>
        </div>
      </div>
    </HeroSection>
  );
}
