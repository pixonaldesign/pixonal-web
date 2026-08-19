import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import GetInTouchHero from '@/components/GetInTouchHero';
import IndustryHero from '@/components/industries/IndustryHero';
import IndustryKeyAdvantages from '@/components/industries/IndustryKeyAdvantages';
import IndustryCaseStudy from '@/components/industries/IndustryCaseStudy';
import { getAllIndustrySlugs, getIndustryBySlug } from '@/lib/industries';
import { getIndustryCaseStudy } from '@/lib/industry-case-studies';

interface IndustryPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return getAllIndustrySlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: IndustryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);

  if (!industry) {
    return { title: 'Industry Not Found' };
  }

  const title = `${industry.label} — Pixonal Industries`;
  return {
    title,
    description: industry.description,
    alternates: { canonical: `/industries/${industry.slug}` },
    openGraph: {
      title,
      description: industry.description,
      url: `/industries/${industry.slug}`,
    },
  };
}

export default async function IndustryPage({ params }: IndustryPageProps) {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);

  if (!industry) notFound();

  const caseStudy = getIndustryCaseStudy(slug);

  return (
    <>
      <IndustryHero
        label={industry.label}
        title={industry.hero.title}
        image={industry.hero.image}
        video={industry.hero.video}
      />

      <IndustryKeyAdvantages
        overviewText={industry.overview}
        eyebrow={industry.keyAdvantagesEyebrow}
        gradient={industry.keyAdvantagesGradient}
        tabs={industry.keyAdvantages}
      />

      {caseStudy ? <IndustryCaseStudy data={caseStudy} /> : null}

      <GetInTouchHero />
    </>
  );
}
