import Image from 'next/image';
import HeroSection from '@/components/HeroSection';
import HeroBlurOverlay from '@/components/HeroBlurOverlay';
import { aboutHero } from '@/lib/about';

/**
 * About page hero — reuses the shared hero shell (same as home / Llumen)
 * with a still image background, an eyebrow, and the display title.
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
      contentClassName="gap-block items-start"
      wrapperClassName="justify-end px-gutter md:px-10 lg:px-20 pb-20 md:pb-30 lg:pb-50"
    >
      <p className="text-stat !uppercase text-white">{aboutHero.eyebrow}</p>
      <h1 id="about-hero-heading" className="text-display text-white max-w-[1014px]">
        {aboutHero.title}
      </h1>
    </HeroSection>
  );
}
