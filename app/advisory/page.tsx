import { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import GetInTouch from '@/components/GetInTouch';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Advisory Services - Strategic Data Consulting',
  description: 'Transform your organization with our strategic advisory services. Expert guidance on data strategy, digital transformation, and technology implementation across all industries.',
  openGraph: {
    title: 'Advisory Services - Strategic Data Consulting',
    description: 'Transform your organization with our strategic advisory services and expert guidance.',
  },
};

export default function AdvisoryPage() {
  const services = [
    {
      title: 'Data Strategy & Governance',
      description: 'Develop comprehensive data strategies that align with your business objectives and ensure proper governance frameworks.',
      icon: '📊',
      features: [
        'Data architecture design',
        'Governance framework development',
        'Compliance and regulatory guidance',
        'Data quality assessment',
        'Privacy and security protocols'
      ]
    },
    {
      title: 'Digital Transformation',
      description: 'Guide your organization through complete digital transformation with proven methodologies and best practices.',
      icon: '🚀',
      features: [
        'Transformation roadmap development',
        'Change management strategies',
        'Technology stack evaluation',
        'Process optimization',
        'Cultural transformation support'
      ]
    },
    {
      title: 'Technology Implementation',
      description: 'Expert guidance on selecting, implementing, and optimizing technology solutions for maximum impact.',
      icon: '⚙️',
      features: [
        'Technology assessment and selection',
        'Implementation planning and execution',
        'Integration strategies',
        'Performance optimization',
        'Ongoing support and maintenance'
      ]
    },
    {
      title: 'Analytics & Insights',
      description: 'Unlock the power of your data with advanced analytics capabilities and actionable insights.',
      icon: '🔍',
      features: [
        'Advanced analytics implementation',
        'Machine learning model development',
        'Business intelligence solutions',
        'Predictive analytics',
        'Real-time reporting systems'
      ]
    },
    {
      title: 'Industry Expertise',
      description: 'Deep sector knowledge across mobility, real estate, citizen services, technology, military, and law enforcement.',
      icon: '🏢',
      features: [
        'Sector-specific best practices',
        'Regulatory compliance guidance',
        'Industry trend analysis',
        'Competitive intelligence',
        'Market opportunity assessment'
      ]
    },
    {
      title: 'Training & Support',
      description: 'Empower your team with comprehensive training programs and ongoing support services.',
      icon: '🎓',
      features: [
        'Custom training programs',
        'Workshop facilitation',
        'Knowledge transfer sessions',
        'Documentation and best practices',
        'Ongoing consultation support'
      ]
    }
  ];

  const impactAreas = [
    {
      title: 'Strategic Alignment',
      description: 'Ensure your data initiatives align with business objectives and drive measurable value.',
      metric: '95% alignment rate'
    },
    {
      title: 'Implementation Success',
      description: 'Proven track record of successful technology implementations and digital transformations.',
      metric: '98% success rate'
    },
    {
      title: 'ROI Achievement',
      description: 'Deliver measurable return on investment through strategic guidance and optimization.',
      metric: '300% average ROI'
    },
    {
      title: 'Time to Value',
      description: 'Accelerate your transformation timeline with expert guidance and proven methodologies.',
      metric: '50% faster delivery'
    }
  ];

  const deliverables = [
    {
      title: 'Strategic Roadmap',
      description: 'Comprehensive 3-5 year roadmap aligned with your business objectives',
      duration: '4-6 weeks'
    },
    {
      title: 'Technology Assessment',
      description: 'Detailed evaluation of current technology stack and recommendations',
      duration: '2-3 weeks'
    },
    {
      title: 'Implementation Plan',
      description: 'Step-by-step implementation guide with timelines and milestones',
      duration: '3-4 weeks'
    },
    {
      title: 'Governance Framework',
      description: 'Complete data governance framework with policies and procedures',
      duration: '6-8 weeks'
    },
    {
      title: 'Training Program',
      description: 'Customized training curriculum for your team and stakeholders',
      duration: '2-4 weeks'
    },
    {
      title: 'Ongoing Support',
      description: 'Continuous support and guidance throughout implementation',
      duration: 'Ongoing'
    }
  ];

  const testimonials = [
    {
      quote: "Pixonal's advisory services transformed our approach to data. Their strategic guidance helped us achieve 300% ROI within the first year.",
      author: "Sarah Johnson",
      role: "Chief Data Officer",
      company: "Global Tech Corp"
    },
    {
      quote: "The team's industry expertise and practical approach made our digital transformation seamless and successful.",
      author: "Michael Chen",
      role: "CTO",
      company: "Smart City Solutions"
    },
    {
      quote: "Their governance framework implementation saved us months of work and ensured compliance from day one.",
      author: "Emily Rodriguez",
      role: "Head of Analytics",
      company: "Financial Services Inc"
    }
  ];

  return (
    <div className="bg-primary-900 min-h-screen">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary-800 to-primary-900">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Strategic Advisory Services
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed max-w-4xl mx-auto">
            Transform your organization with expert guidance on data strategy, digital transformation, 
            and technology implementation. Our advisory services deliver measurable results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-accent-blue to-accent-red text-white px-8 py-4 rounded-full text-lg font-medium hover:opacity-90 transition-opacity">
              Schedule Consultation
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-white hover:text-primary-900 transition-colors">
              Download Brochure
            </button>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Advisory Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive guidance across all aspects of data strategy and digital transformation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-2xl hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-6">{service.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
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

      {/* Impact Areas */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Proven Impact
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Measurable results delivered through our strategic advisory services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {impactAreas.map((area, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-accent-blue mb-2">
                  {area.metric}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {area.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {area.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Deliverables
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tangible outcomes that drive your transformation forward
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {deliverables.map((deliverable, index) => (
              <div key={index} className="bg-gradient-to-br from-primary-50 to-primary-100 p-8 rounded-2xl">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {deliverable.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {deliverable.description}
                </p>
                <div className="text-accent-blue font-semibold">
                  Duration: {deliverable.duration}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Client Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from organizations that have transformed with our advisory services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-sm">
                <div className="text-4xl text-accent-blue mb-4">"</div>
                <p className="text-gray-600 mb-6 leading-relaxed italic">
                  {testimonial.quote}
                </p>
                <div>
                  <div className="font-semibold text-gray-900">
                    {testimonial.author}
                  </div>
                  <div className="text-gray-600">
                    {testimonial.role}
                  </div>
                  <div className="text-accent-blue font-medium">
                    {testimonial.company}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A structured approach to delivering maximum value
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-accent-blue to-accent-red rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Discovery & Assessment
              </h3>
              <p className="text-gray-600">
                Understand your current state, challenges, and objectives
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-accent-blue to-accent-red rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Strategy Development
              </h3>
              <p className="text-gray-600">
                Create comprehensive strategies aligned with your goals
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-accent-blue to-accent-red rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Implementation Support
              </h3>
              <p className="text-gray-600">
                Guide execution with hands-on support and expertise
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-accent-blue to-accent-red rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">4</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Optimization & Growth
              </h3>
              <p className="text-gray-600">
                Continuously optimize and scale your solutions
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-accent-blue to-accent-red">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Organization?
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Let's discuss how our advisory services can drive meaningful change and deliver measurable results
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-primary-900 px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-100 transition-colors">
              Schedule Free Consultation
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-white hover:text-primary-900 transition-colors">
              Download Service Guide
            </button>
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
