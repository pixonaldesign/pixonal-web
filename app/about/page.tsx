import type { Metadata } from 'next';
import Partners from '@/components/Partners';
import GetInTouchHero from '@/components/GetInTouchHero';
import AboutHero from '@/components/about/AboutHero';
import AboutStorySection from '@/components/about/AboutStorySection';
import AboutVision from '@/components/about/AboutVision';
import AboutLogosSection from '@/components/about/AboutLogosSection';
import {
  aboutCollaborations,
  aboutMedia,
  aboutResearchStory,
  aboutVisionStory,
} from '@/lib/about';

export const metadata: Metadata = {
  title: 'About Pixonal — Transforming Data into Strategic Leadership Assets',
  description:
    'Since 2016, Pixonal has helped leaders turn scattered data into clear, purposeful direction — building living environments where data speaks through clear, confident stories.',
  alternates: { canonical: '/about' },
  openGraph: {
    title: 'About Pixonal — Transforming Data into Strategic Leadership Assets',
    description:
      'Since 2016, Pixonal has helped leaders turn scattered data into clear, purposeful direction.',
    url: '/about',
  },
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />

      <AboutStorySection
        headingId="about-vision-story-heading"
        title={aboutVisionStory.title}
        lead={aboutVisionStory.lead}
        subtitle={aboutVisionStory.subtitle}
        slides={[...aboutVisionStory.slides]}
        captionPosition="overlay"
        controlVariant="auto"
      />

      <AboutVision />

      <AboutStorySection
        headingId="about-research-heading"
        title={aboutResearchStory.title}
        lead={aboutResearchStory.lead}
        subtitle={aboutResearchStory.subtitle}
        slides={[...aboutResearchStory.slides]}
        captionPosition="below"
        layout="horizontal"
      />

      <Partners title="Partners & Clients" />

      <AboutLogosSection
        headingId="about-collaborations-heading"
        title={aboutCollaborations.title}
        logos={[...aboutCollaborations.logos]}
        columnsClassName="lg:grid-cols-4"
      />

      <AboutLogosSection
        headingId="about-media-heading"
        title={aboutMedia.title}
        image={aboutMedia.image}
        logos={[...aboutMedia.logos]}
        columnsClassName="lg:grid-cols-5"
        cardPaddingClassName="p-5 lg:p-6"
      />

      <GetInTouchHero />
    </>
  );
}
