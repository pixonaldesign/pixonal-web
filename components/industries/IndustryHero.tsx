import Image from 'next/image';
import HeroSection from '@/components/HeroSection';
import HeroVideoBackground from '@/components/HeroVideoBackground';
import HeroBlurOverlay from '@/components/HeroBlurOverlay';

interface IndustryHeroProps {
  label: string;
  title: string;
  image?: string;
  video?: string;
}

/**
 * Industry page hero — reuses the shared HeroSection shell so the layout
 * matches the home and Llumen heroes exactly. Renders the
 * "Industries / <Label>" breadcrumb-style eyebrow above the title.
 */
export default function IndustryHero({
  label,
  title,
  image,
  video,
}: IndustryHeroProps) {
  return (
    <HeroSection
      ariaLabelledBy="industry-hero-heading"
      background={
        video ? (
          <HeroVideoBackground src={video} />
        ) : image ? (
          <Image
            alt=""
            src={image}
            fill
            priority
            className="object-cover opacity-60"
            sizes="100vw"
          />
        ) : null
      }
      overlay={<HeroBlurOverlay />}
      contentClassName="gap-tight items-start"
      wrapperClassName="justify-end px-gutter md:px-10 lg:px-20 pb-20 md:pb-30 lg:pb-50"
    >
      <p className="text-stat !uppercase text-white">
        <span className="text-white/40">Industries / </span>
        <span className="text-white/80">{label}</span>
      </p>
      <h1
        id="industry-hero-heading"
        className="text-display text-white max-w-[1131px]"
      >
        {title}
      </h1>
    </HeroSection>
  );
}
