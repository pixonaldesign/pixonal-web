import GetInTouch from '@/components/GetInTouch';
import PixonalIcon from '@/components/PixonalIcon';
import Link from 'next/link';
import Image from 'next/image';

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <div className="w-full h-[788px] min-h-[788px] px-10 md:px-20 lg:px-40 py-20 md:py-40 lg:py-96 rounded-[20px] flex flex-col justify-center items-start gap-2.5 relative">
        {/* Background Image */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[20px]">
          <img 
            alt="Hero Background" 
            className="absolute h-[105.25%] left-[-3.59%] max-w-none top-0 w-[107.17%]"
            src="/images/hero-background.png"
          />
        </div>
        
        {/* Hero Content */}
        <div className="relative z-10 w-full justify-start text-white text-4xl md:text-6xl lg:text-8xl font-normal font-untitled-sans leading-tight md:leading-[92.40px] tracking-[-1.848px]">
          Intelligence at the<br />
          Moment of Decision
        </div>
        <div className="relative z-10 w-full justify-start text-white text-lg md:text-xl lg:text-2xl font-semibold font-ibm-plex-mono uppercase leading-7 tracking-[1.44px] whitespace-pre">
          Governance + Interaction + Communication
        </div>
      </div>

      {/* Impact Highlights Carousel */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Impact Highlights
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how organizations are transforming their operations with our solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl">
              <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center mb-6">
                <PixonalIcon name="lightning" size={32} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Smart City Initiative
              </h3>
              <p className="text-gray-600 mb-6">
                Reduced traffic congestion by 35% and improved emergency response times by 40% 
                through intelligent data analytics and real-time optimization.
              </p>
              <div className="flex items-center text-blue-600 font-medium">
                <span>Read Case Study</span>
                <PixonalIcon name="caret-right" size={16} className="ml-2" />
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl">
              <div className="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center mb-6">
                <PixonalIcon name="check-circle" size={32} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Real Estate Optimization
              </h3>
              <p className="text-gray-600 mb-6">
                Increased property values by 20% and reduced energy consumption by 30% 
                through data-driven asset management and predictive maintenance.
              </p>
              <div className="flex items-center text-green-600 font-medium">
                <span>Read Case Study</span>
                <PixonalIcon name="caret-right" size={16} className="ml-2" />
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-2xl">
              <div className="w-16 h-16 bg-purple-500 rounded-2xl flex items-center justify-center mb-6">
                <PixonalIcon name="users" size={32} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Citizen Services
              </h3>
              <p className="text-gray-600 mb-6">
                Improved service delivery speed by 50% and citizen satisfaction by 90% 
                through intelligent process optimization and digital transformation.
              </p>
              <div className="flex items-center text-purple-600 font-medium">
                <span>Read Case Study</span>
                <PixonalIcon name="caret-right" size={16} className="ml-2" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Trusted by Leading Organizations
            </h2>
            <p className="text-xl text-gray-600">
              Join industry leaders who have transformed their operations with our solutions
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            {/* Partner logos would go here */}
            <div className="bg-white p-8 rounded-lg shadow-sm flex items-center justify-center">
              <div className="text-gray-400 text-lg font-medium">Partner 1</div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm flex items-center justify-center">
              <div className="text-gray-400 text-lg font-medium">Partner 2</div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm flex items-center justify-center">
              <div className="text-gray-400 text-lg font-medium">Partner 3</div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm flex items-center justify-center">
              <div className="text-gray-400 text-lg font-medium">Partner 4</div>
            </div>
          </div>
        </div>
      </section>

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