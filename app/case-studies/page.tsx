import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { getAllCaseStudies } from '@/lib/markdown';
import PixonalIcon from '@/components/PixonalIcon';
import GetInTouch from '@/components/GetInTouch';

export const metadata: Metadata = {
  title: 'Case Studies - Real-World Impact',
  description: 'Explore how organizations are transforming their operations with Pixonal\'s intelligent data solutions. See real-world case studies across defense, smart cities, and real estate.',
  openGraph: {
    title: 'Case Studies - Real-World Impact',
    description: 'Explore how organizations are transforming their operations with Pixonal\'s intelligent data solutions.',
  },
};

export default async function CaseStudiesPage() {
  const caseStudies = await getAllCaseStudies();

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 bg-linear-to-br from-primary-800 to-primary-900">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-untitled-sans font-normal text-white mb-6 leading-tight">
            Case Studies
          </h1>
          <p className="text-xl md:text-2xl font-untitled-sans text-gray-300 mb-8 leading-relaxed max-w-4xl mx-auto">
            Explore how organizations are transforming their operations with our intelligent data solutions.
          </p>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study) => (
              <Link
                key={study.slug}
                href={`/case-studies/${study.slug}`}
                className="bg-gray-50 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="relative h-48 bg-linear-to-br from-primary-800 to-primary-900">
                  <Image
                    src={study.image}
                    alt={study.title}
                    fill
                    className="object-cover opacity-90"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center space-x-2 mb-3">
                    <span className="text-xs font-ibm-plex font-mono text-gray-500 uppercase tracking-wider">
                      Case Study
                    </span>
                    <span className="text-xs text-gray-400">•</span>
                    <span className="text-xs text-gray-500">
                      {new Date(study.date).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'long' 
                      })}
                    </span>
                  </div>
                  <h3 className="text-xl font-untitled-sans font-normal text-gray-900 mb-3 leading-tight">
                    {study.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {study.excerpt}
                  </p>
                  <div className="flex items-center text-accent-blue font-medium text-sm">
                    <span>Read More</span>
                    <PixonalIcon name="caret-right" size={16} className="ml-2" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Get in Touch Section */}
      <GetInTouch />
    </>
  );
}

