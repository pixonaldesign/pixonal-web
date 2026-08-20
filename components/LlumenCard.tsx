import Image from '@/components/PrefixedImage';
import HeroSection from './HeroSection';
import HeroVideoBackground from './HeroVideoBackground';
import PrimaryButton from './PrimaryButton';
import SecondaryButton from './SecondaryButton';

export default function LlumenCard() {
  return (
    <HeroSection
      ariaLabelledBy="home-llumen-heading"
      background={
        <HeroVideoBackground src="/videos/llumen/llumen-hero-video.mp4" />
      }
      overlay={
        <div aria-hidden className="absolute inset-0 z-[1] bg-black/50" />
      }
      contentClassName="items-center gap-10 text-center"
      wrapperClassName="justify-center px-gutter md:px-10 lg:px-20 xl:px-0"
    >
      <div className="flex w-full flex-col items-center gap-block">
        <Image
          src="/images/nav/llumen-icon.png"
          alt="Llumen"
          width={360}
          height={90}
          className="h-16 w-auto"
        />
        <h2
          id="home-llumen-heading"
          className="text-figure text-primary-50 text-balance max-w-[640px]"
        >
          The Operating System for Critical Decisions
        </h2>
        <p className="text-lead text-primary-50/70 max-w-[840px]">
          Llumen is a connected suite of products built to work as one operating
          environment on top of your existing data and technology
          infrastructure, bringing together intelligence, models, workflows, and
          the people responsible for decisions across the organization.
        </p>
      </div>

      <div className="flex flex-col items-center gap-block sm:flex-row sm:justify-center">
        <PrimaryButton href="/llumen#demo">Request Demo</PrimaryButton>
        <SecondaryButton href="/llumen" showArrow>
          Explore Llumen
        </SecondaryButton>
      </div>
    </HeroSection>
  );
}
