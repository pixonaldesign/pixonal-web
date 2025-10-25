import { Metadata } from 'next';
import GetInTouch from '@/components/GetInTouch';
import { industries } from '@/lib/industries';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Industries - Data Solutions Across Sectors',
  description: 'Discover how Pixonal\'s intelligent data solutions transform operations across mobility, real estate, citizen services, technology infrastructure, military defense, and law enforcement.',
  openGraph: {
    title: 'Industries - Data Solutions Across Sectors',
    description: 'Discover how Pixonal\'s intelligent data solutions transform operations across multiple industries.',
  },
};

export default function IndustriesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary-800 to-primary-900">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Industries We Serve
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed max-w-4xl mx-auto">
            From smart cities to military defense, we provide intelligent data solutions 
            that transform operations across diverse sectors and drive meaningful change.
          </p>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <Link 
                key={industry.slug} 
                href={`/industries/${industry.slug}`}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <div className={`h-48 bg-gradient-to-br ${industry.color} flex items-center justify-center`}>
                  <span className="text-6xl">{industry.icon}</span>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-accent-blue transition-colors">
                    {industry.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {industry.shortDescription}
                  </p>
                  <div className="flex items-center text-accent-blue font-medium group-hover:underline">
                    <span>Learn More</span>
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Pixonal */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose Pixonal?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our industry expertise and proven track record make us the ideal partner for your digital transformation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-accent-blue to-accent-red rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Proven Results
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Track record of delivering measurable improvements across all industries we serve
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-accent-blue to-accent-red rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Industry Expertise
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Deep understanding of sector-specific challenges and regulatory requirements
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-accent-blue to-accent-red rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Dedicated Support
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Expert team committed to your success with ongoing support and optimization
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real results from organizations that have transformed their operations with our solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl">
              <div className="text-4xl mb-4">🏙️</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Smart City Initiative
              </h3>
              <p className="text-gray-600 mb-6">
                Reduced traffic congestion by 35% and improved emergency response times by 40% 
                through intelligent data analytics.
              </p>
              <div className="text-blue-600 font-semibold">
                Mobility & Transportation
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl">
              <div className="text-4xl mb-4">🏢</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Real Estate Portfolio
              </h3>
              <p className="text-gray-600 mb-6">
                Increased property values by 20% and reduced energy consumption by 30% 
                through data-driven asset management.
              </p>
              <div className="text-green-600 font-semibold">
                Real Estate & Assets
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-2xl">
              <div className="text-4xl mb-4">👥</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Citizen Services Platform
              </h3>
              <p className="text-gray-600 mb-6">
                Improved service delivery speed by 50% and citizen satisfaction by 90% 
                through digital transformation.
              </p>
              <div className="text-purple-600 font-semibold">
                Citizen & Service Experience
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Get in Touch Section */}
      <GetInTouch />
    </>
  );
}
