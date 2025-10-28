import GetInTouch from '@/components/GetInTouch';
import PixonalIcon from '@/components/PixonalIcon';
import CaseStudiesCarousel from '@/components/CaseStudiesCarousel';
import SecuredIntelligenceStatement from '@/components/SecuredIntelligenceStatement';
import LlumenCard from '@/components/LlumenCard';
import WhitepaperHero from '@/components/WhitepaperHero';
import Partners from '@/components/Partners';
import Hero from '@/components/Hero';
import Link from 'next/link';
import Image from 'next/image';
import { getAllCaseStudies } from '@/lib/markdown';

export default async function HomePage() {
  const caseStudies = await getAllCaseStudies();
  return (
    <>
      {/* Hero Section */}
      <Hero />

      {/* Impact Highlights Carousel */}
      <CaseStudiesCarousel caseStudies={caseStudies} />

      {/* Llumen Card Section */}
      <section className="py-20 bg-primary-900">
        <div className="px-4 flex justify-center">
          <LlumenCard />
        </div>
      </section>

      {/* Whitepaper Hero Section */}
      <section className="py-20 bg-primary-900">
        <div className="mx-auto px-4 flex justify-center">
          <WhitepaperHero />
        </div>
      </section>

      {/* Partners Section */}
      <Partners />

      {/* Llumen Preview Section */}
      <section className="py-20 bg-primary-900">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">
                Introducing <span className="text-gradient">Llumen</span>
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Our revolutionary platform that transforms how organizations interact with data. 
                Llumen provides intelligent insights, seamless governance, and powerful communication 
                tools to drive meaningful change.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-accent-blue rounded-full flex items-center justify-center">
                    <PixonalIcon name="check" size={16} className="text-white" />
                  </div>
                  <span className="text-white">Intelligent Data Processing</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-accent-blue rounded-full flex items-center justify-center">
                    <PixonalIcon name="check" size={16} className="text-white" />
                  </div>
                  <span className="text-white">Advanced Analytics & Insights</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-accent-blue rounded-full flex items-center justify-center">
                    <PixonalIcon name="check" size={16} className="text-white" />
                  </div>
                  <span className="text-white">Seamless Integration</span>
                </div>
              </div>
              <Link 
                href="/llumen" 
                className="bg-gradient-to-r from-accent-blue to-accent-red text-white px-8 py-4 rounded-full text-lg font-medium hover:opacity-90 transition-opacity inline-flex items-center"
              >
                Learn More About Llumen
                <PixonalIcon name="caret-right" size={20} className="ml-2" />
              </Link>
            </div>
            <div className="relative">
              <div className="bg-white rounded-2xl p-8 shadow-2xl">
                <div className="space-y-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="space-y-4">
                    <div className="h-4 bg-gray-200 rounded"></div>
                    <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                    <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="h-20 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg"></div>
                    <div className="h-20 bg-gradient-to-br from-green-100 to-green-200 rounded-lg"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* White Paper CTA Section */}
      <section className="py-20 bg-gradient-to-r from-accent-blue to-accent-red">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold text-white mb-6">
            Download Our Latest White Paper
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            "The Future of Data-Driven Organizations: A Comprehensive Guide to Digital Transformation"
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-primary-900 px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-100 transition-colors">
              Download White Paper
            </button>
            <Link 
              href="/newsroom" 
              className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-white hover:text-primary-900 transition-colors"
            >
              View All Resources
            </Link>
          </div>
        </div>
      </section>

          {/* Get in Touch Section */}
          <GetInTouch />
        </>
      );
    }