import type { Metadata } from 'next';
import GetInTouchHero from '@/components/GetInTouchHero';
import BlogHero from '@/components/BlogHero';
import AdvisoryHero from '@/components/advisory/AdvisoryHero';
import AdvisoryServices from '@/components/advisory/AdvisoryServices';
import AdvisoryMethodology from '@/components/advisory/AdvisoryMethodology';
import AdvisoryIndustries from '@/components/advisory/AdvisoryIndustries';
import AdvisoryTeam from '@/components/advisory/AdvisoryTeam';
import SectionHeading from '@/components/advisory/SectionHeading';
import { advisoryBlogHeading, advisoryHero } from '@/lib/advisory';

export const metadata: Metadata = {
  title: 'Advisory — The Modern Blueprint of Decision-Making',
  description: advisoryHero.subtitle,
  alternates: { canonical: '/advisory' },
  openGraph: {
    title: 'Advisory — The Modern Blueprint of Decision-Making',
    description: advisoryHero.subtitle,
    url: '/advisory',
  },
};

export default function AdvisoryPage() {
  return (
    <>
      <AdvisoryHero />

      <AdvisoryServices />

      <AdvisoryMethodology />

      <AdvisoryIndustries />

      <AdvisoryTeam />

      <section
        aria-labelledby="advisory-blog-heading"
        className="bg-primary-900 py-section px-gutter"
      >
        <div className="mx-auto flex max-w-content flex-col gap-section">
          <SectionHeading
            id="advisory-blog-heading"
            title={advisoryBlogHeading}
            className="max-w-[1239px]"
          />
          <div className="flex justify-center">
            <BlogHero />
          </div>
        </div>
      </section>

      <section
        className="bg-primary-900 pt-section px-gutter"
        aria-label="Get in touch"
      >
        <div className="mx-auto flex justify-center">
          <GetInTouchHero />
        </div>
      </section>
    </>
  );
}
