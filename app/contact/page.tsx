import { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import GetInTouch from '@/components/GetInTouch';

export const metadata: Metadata = {
  title: 'Contact Us - Get in Touch with Pixonal',
  description: 'Get in touch with Pixonal for intelligent data solutions and strategic advisory services. Contact our team for consultations, partnerships, and support.',
  openGraph: {
    title: 'Contact Us - Get in Touch with Pixonal',
    description: 'Get in touch with Pixonal for intelligent data solutions and strategic advisory services.',
  },
};

export default function ContactPage() {
  const offices = [
    {
      city: 'Abu Dhabi',
      country: 'UAE',
      address: 'Al Maryah Island, Abu Dhabi Global Market',
      phone: '+971 2 XXX XXXX',
      email: 'abu-dhabi@pixonal.com'
    },
    {
      city: 'Dubai',
      country: 'UAE',
      address: 'Dubai International Financial Centre',
      phone: '+971 4 XXX XXXX',
      email: 'dubai@pixonal.com'
    },
    {
      city: 'Riyadh',
      country: 'Saudi Arabia',
      address: 'King Abdullah Financial District',
      phone: '+966 11 XXX XXXX',
      email: 'riyadh@pixonal.com'
    },
    {
      city: 'Cairo',
      country: 'Egypt',
      address: 'New Administrative Capital',
      phone: '+20 2 XXX XXXX',
      email: 'cairo@pixonal.com'
    },
    {
      city: 'Bahrain',
      country: 'Bahrain',
      address: 'Bahrain Financial Harbour',
      phone: '+973 17 XXX XXXX',
      email: 'bahrain@pixonal.com'
    },
    {
      city: 'Kuwait',
      country: 'Kuwait',
      address: 'Kuwait City Business District',
      phone: '+965 2 XXX XXXX',
      email: 'kuwait@pixonal.com'
    }
  ];

  const contactMethods = [
    {
      title: 'General Inquiries',
      description: 'Questions about our services, partnerships, or general information',
      email: 'hello@pixonal.com',
      phone: '+971 4 XXX XXXX'
    },
    {
      title: 'Sales & Partnerships',
      description: 'Interested in our solutions or want to explore partnership opportunities',
      email: 'sales@pixonal.com',
      phone: '+971 4 XXX XXXX'
    },
    {
      title: 'Support & Technical',
      description: 'Need help with existing solutions or technical support',
      email: 'support@pixonal.com',
      phone: '+971 4 XXX XXXX'
    },
    {
      title: 'Media & Press',
      description: 'Media inquiries, press releases, and media kit requests',
      email: 'media@pixonal.com',
      phone: '+971 4 XXX XXXX'
    }
  ];

  return (
    <div className="bg-primary-900 min-h-screen">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary-800 to-primary-900">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-inter font-normal text-white mb-6 leading-tight">
            Get in Touch
          </h1>
          <p className="text-xl md:text-2xl font-inter text-gray-300 mb-8 leading-relaxed max-w-4xl mx-auto">
            Ready to transform your organization? Let's discuss how our intelligent data solutions 
            and strategic advisory services can drive meaningful change for your business.
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-inter font-normal text-gray-900 mb-4">
              How Can We Help?
            </h2>
            <p className="text-xl font-inter text-gray-600 max-w-3xl mx-auto">
              Choose the best way to reach us based on your needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactMethods.map((method, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-2xl hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-inter font-normal text-gray-900 mb-4">
                  {method.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed font-inter">
                  {method.description}
                </p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <svg className="w-5 h-5 text-accent-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <a href={`mailto:${method.email}`} className="text-accent-blue hover:underline">
                      {method.email}
                    </a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <svg className="w-5 h-5 text-accent-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <a href={`tel:${method.phone}`} className="text-accent-blue hover:underline">
                      {method.phone}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-inter font-normal text-gray-900 mb-4">
              Our Offices
            </h2>
            <p className="text-xl font-inter text-gray-600 max-w-3xl mx-auto">
              Visit us at one of our regional offices across the Middle East and North Africa
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {offices.map((office, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-inter font-normal text-gray-900 mb-2">
                  {office.city}
                </h3>
                <p className="text-gray-600 mb-4 font-inter">
                  {office.country}
                </p>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <svg className="w-5 h-5 text-accent-blue mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="text-gray-700 font-inter">{office.address}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <svg className="w-5 h-5 text-accent-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <a href={`tel:${office.phone}`} className="text-accent-blue hover:underline">
                      {office.phone}
                    </a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <svg className="w-5 h-5 text-accent-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <a href={`mailto:${office.email}`} className="text-accent-blue hover:underline">
                      {office.email}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-inter font-normal text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl font-inter text-gray-600">
              Quick answers to common questions about our services
            </p>
          </div>

          <div className="space-y-8">
            <div className="bg-gray-50 p-8 rounded-2xl">
              <h3 className="text-xl font-inter font-normal text-gray-900 mb-4">
                How quickly can you implement a solution?
              </h3>
              <p className="text-gray-600 leading-relaxed font-inter">
                Implementation timelines vary based on project complexity and scope. Our Core solutions can typically be deployed within 4-6 weeks, while Enterprise and Sovereign implementations may take 3-6 months. We provide detailed project timelines during our initial consultation.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl">
              <h3 className="text-xl font-inter font-normal text-gray-900 mb-4">
                Do you offer training for our team?
              </h3>
              <p className="text-gray-600 leading-relaxed font-inter">
                Yes, we provide comprehensive training programs tailored to your team's needs. This includes hands-on workshops, documentation, and ongoing support to ensure your team can effectively use and maintain our solutions.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl">
              <h3 className="text-xl font-inter font-normal text-gray-900 mb-4">
                What industries do you serve?
              </h3>
              <p className="text-gray-600 leading-relaxed font-inter">
                We serve organizations across mobility & transportation, real estate & assets, citizen & service experience, technology infrastructure, military & defense, and safety & law enforcement. Our solutions are designed to be adaptable across various sectors.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl">
              <h3 className="text-xl font-inter font-normal text-gray-900 mb-4">
                How do you ensure data security and compliance?
              </h3>
              <p className="text-gray-600 leading-relaxed font-inter">
                We implement enterprise-grade security measures including end-to-end encryption, access controls, and compliance with industry standards. Our Sovereign tier offers government and defense-grade security with dedicated infrastructure and compliance certifications.
              </p>
            </div>
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
