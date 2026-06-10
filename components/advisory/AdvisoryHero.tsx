import Image from 'next/image';
import HeroSection from '@/components/HeroSection';
import HeroBlurOverlay from '@/components/HeroBlurOverlay';
import { advisoryHero } from '@/lib/advisory';

/**
 * Advisory page hero — shares the home / Llumen hero shell so the top of
 * page silhouette stays consistent. Image background with a dark gradient
 * overlay, left-aligned eyebrow + display title + lead subtitle.
 */
export default function AdvisoryHero() {
  return (
    <HeroSection
      ariaLabelledBy="advisory-hero-heading"
      background={
        <Image
          src={advisoryHero.image}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-60"
        />
      }
      overlay={<HeroBlurOverlay />}
      contentClassName="gap-block items-start"
      wrapperClassName="justify-end px-gutter md:px-10 lg:px-20 pb-20 md:pb-30 lg:pb-50"
    >
      <p className="text-stat !uppercase text-white">{advisoryHero.eyebrow}</p>
      <h1
        id="advisory-hero-heading"
        className="text-display text-white max-w-[1014px]"
      >
        {advisoryHero.title}
      </h1>
      <p className="text-h2 text-white/80 max-w-[934px]">
        {advisoryHero.subtitle}
      </p>
    </HeroSection>
  );
}
