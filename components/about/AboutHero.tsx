import Image from '@/components/PrefixedImage';
import HeroSection from '@/components/HeroSection';
import HeroBlurOverlay from '@/components/HeroBlurOverlay';
import { aboutHero } from '@/lib/about';

/**
 * About page hero — same layout as the home hero: centered display title
 * at the bottom of the frame.
 */
export default function AboutHero() {
  return (
    <HeroSection
      ariaLabelledBy="about-hero-heading"
      background={
        <Image
          src={aboutHero.image}
          alt=""
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      }
      overlay={<HeroBlurOverlay />}
      contentClassName="gap-6 items-center"
      wrapperClassName="justify-end px-gutter md:px-10 lg:px-20 xl:px-0 pb-20 lg:pb-30 xl:pb-50"
    >
      <h1
        id="about-hero-heading"
        className="w-full text-center text-white text-display"
      >
        {aboutHero.title}
      </h1>
    </HeroSection>
  );
}
