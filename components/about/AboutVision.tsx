import { aboutVision } from '@/lib/about';
import PrefixedVideo from '@/components/PrefixedVideo';
import AboutSectionHeader from './AboutSectionHeader';

/**
 * "Our Vision" — the same display title + bold lead + muted subtitle header
 * used by the story carousels, above a full-width 16:9 media card.
 */
export default function AboutVision() {
  return (
    <section
      className="py-section px-gutter"
      aria-labelledby="about-vision-heading"
    >
      <div className="mx-auto flex max-w-content flex-col gap-section">
        <AboutSectionHeader
          id="about-vision-heading"
          title={aboutVision.title}
          lead={aboutVision.lead}
          subtitle={aboutVision.subtitle}
        />

        <div className="relative aspect-video w-full overflow-hidden rounded-card bg-black">
          <PrefixedVideo
            className="absolute inset-0 h-full w-full object-cover"
            src={aboutVision.video}
            autoPlay
            muted
            loop
            playsInline
          />
        </div>
      </div>
    </section>
  );
}
