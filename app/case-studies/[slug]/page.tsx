import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { getAllCaseStudies, getCaseStudy } from '@/lib/markdown';
import PixonalIcon from '@/components/PixonalIcon';
import GetInTouch from '@/components/GetInTouch';

interface CaseStudyPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const caseStudies = await getAllCaseStudies();
  return caseStudies.map((study) => ({
    slug: study.slug,
  }));
}

export async function generateMetadata({ params }: CaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const caseStudy = await getCaseStudy(slug);

  if (!caseStudy) {
    return {
      title: 'Case Study Not Found',
    };
  }

  return {
    title: `${caseStudy.title} - Case Study`,
    description: caseStudy.excerpt,
    openGraph: {
      title: caseStudy.title,
      description: caseStudy.excerpt,
      images: [caseStudy.image],
    },
  };
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const caseStudy = await getCaseStudy(slug);

  if (!caseStudy) {
    return (
      <div className="min-h-screen bg-primary-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Case Study Not Found</h1>
          <p className="text-gray-300 mb-8">The case study you&apos;re looking for doesn&apos;t exist.</p>
          <Link
            href="/case-studies"
            className="bg-white text-primary-900 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors inline-flex items-center"
          >
            Back to Case Studies
            <PixonalIcon name="arrow-left" size={16} className="ml-2" />
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 bg-linear-to-br from-primary-800 to-primary-900">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src={caseStudy.image}
            alt={caseStudy.title}
            fill
            className="object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <Link
            href="/case-studies"
            className="inline-flex items-center text-gray-300 hover:text-white mb-6 transition-colors"
          >
            <PixonalIcon name="arrow-left" size={16} className="mr-2" />
            Back to All Case Studies
          </Link>
          <div className="mb-4">
            <span className="text-xs font-ibm-plex font-mono text-gray-400 uppercase tracking-wider">
              Case Study
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-untitled-sans font-normal text-white mb-6 leading-tight">
            {caseStudy.title}
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {caseStudy.excerpt}
          </p>
          <div className="mt-6 text-gray-400">
            {new Date(caseStudy.date).toLocaleDateString('en-US', { 
              year: 'numeric', 
              month: 'long',
              day: 'numeric'
            })}
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div 
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: caseStudy.content }}
          />
        </div>
      </section>

      {/* Get in Touch Section */}
      <GetInTouch />
    </>
  );
}

