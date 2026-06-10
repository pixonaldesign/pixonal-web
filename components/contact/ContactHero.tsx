import Image from 'next/image';
import HeroSection from '@/components/HeroSection';
import HeroBlurOverlay from '@/components/HeroBlurOverlay';
import { contactHero } from '@/lib/contact';

/**
 * Contact page hero — shared hero shell (same as home / About) with a globe
 * still background, an eyebrow, and the display title.
 */
export default function ContactHero() {
  return (
    <HeroSection
      ariaLabelledBy="contact-hero-heading"
      background={
        <Image
          src={contactHero.image}
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
      <p className="text-stat !uppercase text-white">{contactHero.eyebrow}</p>
      <h1 id="contact-hero-heading" className="text-display text-white">
        {contactHero.titleLines.map((line) => (
          <span key={line} className="block">
            {line}
          </span>
        ))}
      </h1>
    </HeroSection>
  );
}
