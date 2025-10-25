import { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import GetInTouch from '@/components/GetInTouch';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Llumen Platform - Intelligent Data Solutions',
  description: 'Transform your organization with Llumen, our revolutionary platform for intelligent data processing, advanced analytics, and seamless integration across all industries.',
  openGraph: {
    title: 'Llumen Platform - Intelligent Data Solutions',
    description: 'Transform your organization with Llumen, our revolutionary platform for intelligent data processing, advanced analytics, and seamless integration.',
  },
};

export default function LlumenPage() {
  const features = [
    {
      title: 'Intelligent Data Processing',
      description: 'Advanced algorithms that automatically process, clean, and structure your data for optimal analysis.',
      icon: '🧠'
    },
    {
      title: 'Real-time Analytics',
      description: 'Get instant insights and predictions with our powerful real-time analytics engine.',
      icon: '⚡'
    },
    {
      title: 'Seamless Integration',
      description: 'Connect with existing systems and workflows through our comprehensive API and integration suite.',
      icon: '🔗'
    },
    {
      title: 'Advanced Security',
      description: 'Enterprise-grade security with end-to-end encryption and compliance with industry standards.',
      icon: '🔒'
    },
    {
      title: 'Scalable Architecture',
      description: 'Built to grow with your organization, from startup to enterprise scale.',
      icon: '📈'
    },
    {
      title: 'User-Friendly Interface',
      description: 'Intuitive design that makes complex data analysis accessible to everyone in your organization.',
      icon: '🎨'
    }
  ];

  const impactAreas = [
    {
      title: 'Mobility & Transportation',
      description: 'Optimize traffic flow, reduce congestion, and enhance transportation efficiency.',
      metrics: '35% traffic reduction'
    },
    {
      title: 'Real Estate & Assets',
      description: 'Maximize property value and operational efficiency through data-driven insights.',
      metrics: '20% value increase'
    },
    {
      title: 'Citizen Services',
      description: 'Enhance public service delivery and citizen engagement.',
      metrics: '50% faster delivery'
    },
    {
      title: 'Technology Infrastructure',
      description: 'Build robust, scalable technology foundations with intelligent management.',
      metrics: '99.9% uptime'
    },
    {
      title: 'Military & Defense',
      description: 'Strengthen national security with advanced threat assessment and analytics.',
      metrics: '95% threat detection'
    },
    {
      title: 'Safety & Law Enforcement',
      description: 'Enhance public safety with predictive analytics and crime prevention.',
      metrics: '25% crime reduction'
    }
  ];

  const roles = [
    {
      title: 'Decision Makers',
      description: 'Strategic insights and executive dashboards for informed decision-making.',
      features: ['Executive dashboards', 'Strategic insights', 'ROI tracking', 'Performance metrics']
    },
    {
      title: 'IT Professionals',
      description: 'Technical tools and APIs for seamless integration and system management.',
      features: ['API access', 'System integration', 'Technical support', 'Documentation']
    },
    {
      title: 'Data Analysts',
      description: 'Advanced analytics tools and visualization capabilities for deep data exploration.',
      features: ['Advanced analytics', 'Data visualization', 'Custom reports', 'Machine learning tools']
    }
  ];

  const licenses = [
    {
      name: 'Core',
      price: 'Starting at $999/month',
      description: 'Perfect for small to medium organizations',
      features: [
        'Up to 10 users',
        'Basic analytics',
        'Standard support',
        'Core integrations',
        'Monthly reports'
      ],
      cta: 'Start Free Trial'
    },
    {
      name: 'Enterprise',
      price: 'Custom pricing',
      description: 'Advanced features for large organizations',
      features: [
        'Unlimited users',
        'Advanced analytics',
        'Priority support',
        'Custom integrations',
        'Real-time reporting',
        'Dedicated account manager'
      ],
      cta: 'Contact Sales',
      popular: true
    },
    {
      name: 'Sovereign',
      price: 'Custom pricing',
      description: 'Government and defense-grade security',
      features: [
        'Unlimited users',
        'Full analytics suite',
        '24/7 support',
        'Custom integrations',
        'Real-time reporting',
        'Dedicated infrastructure',
        'Compliance certification'
      ],
      cta: 'Contact Sales'
    }
  ];

  return (
    <div className="bg-primary-900 min-h-screen">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-800 to-primary-900">
          <div className="absolute inset-0 bg-black/20"></div>
        </div>
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Meet <span className="text-gradient">Llumen</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
            The revolutionary platform that transforms how organizations interact with data. 
            Intelligent processing, seamless governance, and powerful communication tools 
            to drive meaningful change.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-accent-blue to-accent-red text-white px-8 py-4 rounded-full text-lg font-medium hover:opacity-90 transition-opacity">
              Start Free Trial
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-white hover:text-primary-900 transition-colors">
              Watch Demo
            </button>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Key Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Powerful capabilities designed to transform your data into actionable insights
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-2xl hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Where Llumen Makes an Impact */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Where Llumen Makes an Impact
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how organizations across industries are transforming with Llumen
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {impactAreas.map((area, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {area.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {area.description}
                </p>
                <div className="text-accent-blue font-semibold">
                  {area.metrics}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Llumen by Roles */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Llumen by Roles
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tailored experiences for every member of your organization
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {roles.map((role, index) => (
              <div key={index} className="bg-gradient-to-br from-primary-50 to-primary-100 p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {role.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {role.description}
                </p>
                <ul className="space-y-2">
                  {role.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-accent-blue rounded-full"></div>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Licenses That Fit Every Need */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Licenses That Fit Every Need
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the perfect plan for your organization's size and requirements
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {licenses.map((license, index) => (
              <div key={index} className={`bg-white rounded-2xl p-8 shadow-lg relative ${
                license.popular ? 'ring-2 ring-accent-blue' : ''
              }`}>
                {license.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-accent-blue to-accent-red text-white px-4 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {license.name}
                  </h3>
                  <div className="text-3xl font-bold text-gray-900 mb-2">
                    {license.price}
                  </div>
                  <p className="text-gray-600">
                    {license.description}
                  </p>
                </div>

                <ul className="space-y-4 mb-8">
                  {license.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <svg className="w-3 h-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-3 px-6 rounded-lg font-medium transition-colors ${
                  license.popular
                    ? 'bg-gradient-to-r from-accent-blue to-accent-red text-white hover:opacity-90'
                    : 'bg-gray-900 text-white hover:bg-gray-800'
                }`}>
                  {license.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Get in Touch Section */}
      <GetInTouch />

      {/* Footer */}
      <Footer />
    </div>
  );
}
