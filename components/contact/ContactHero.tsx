import Image from '@/components/PrefixedImage';
import HeroSection from '@/components/HeroSection';
import HeroBlurOverlay from '@/components/HeroBlurOverlay';
import { contactHero } from '@/lib/contact';

/**
 * Contact page hero — same layout as the home hero: centered display title
 * at the bottom of the frame, over a globe still.
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
      contentClassName="gap-6 items-center"
      wrapperClassName="justify-end px-gutter md:px-10 lg:px-20 xl:px-0 pb-20 lg:pb-30 xl:pb-50"
    >
      <h1
        id="contact-hero-heading"
        className="w-full text-center text-white text-display"
      >
        {contactHero.titleLines[0]}
        <br />
        {contactHero.titleLines[1]}
      </h1>
    </HeroSection>
  );
}
