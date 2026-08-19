'use client';

import { useState } from 'react';
import PixonalIcon from './PixonalIcon';

interface GetInTouchProps {
  className?: string;
}

export default function GetInTouch({ className }: GetInTouchProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Using Formspree for form submission
      const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', company: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className={`bg-primary-800 py-16 ${className}`}>
      <div className="max-w-content mx-auto px-5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-block items-center">
          {/* Left Side - Content */}
          <div className="flex flex-col gap-block">
            <div>
              <h2 className="text-h1 text-white mb-4">
                Ready to Transform Your Organization?
              </h2>
              <p className="text-lead text-primary-100">
                Let&apos;s discuss how Pixonal can help you unlock the full potential of your data and drive meaningful change.
              </p>
            </div>

            <div className="flex flex-col gap-stack">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-linear-to-r from-accent-blue to-accent-red rounded-lg flex items-center justify-center shrink-0">
                  <PixonalIcon name="lightning" size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-h2 text-white mb-2">Accelerate Innovation</h3>
                  <p className="text-gray-300">
                    Leverage our platform to rapidly prototype and deploy data-driven solutions.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-linear-to-r from-accent-blue to-accent-red rounded-lg flex items-center justify-center shrink-0">
                  <PixonalIcon name="check-circle" size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-h2 text-white mb-2">Proven Results</h3>
                  <p className="text-gray-300">
                    Join organizations that have already transformed their operations with our solutions.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-linear-to-r from-accent-blue to-accent-red rounded-lg flex items-center justify-center shrink-0">
                  <PixonalIcon name="users" size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-h2 text-white mb-2">Expert Support</h3>
                  <p className="text-gray-300">
                    Get dedicated support from our team of data scientists and industry experts.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="bg-white rounded-2xl p-8 shadow-2xl">
            <h3 className="text-h2 text-primary-900 mb-6">Get in Touch</h3>
            
            {submitStatus === 'success' && (
              <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
                Thank you! We&apos;ll get back to you soon.
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
                Something went wrong. Please try again or contact us directly.
              </div>
            )}

            <form onSubmit={handleSubmit} className="flex flex-col gap-stack">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-blue focus:border-transparent"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-blue focus:border-transparent"
                  placeholder="Enter your email address"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-blue focus:border-transparent"
                  placeholder="Enter your company name"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-blue focus:border-transparent resize-none"
                  placeholder="Tell us about your project or how we can help"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-linear-to-r from-accent-blue to-accent-red text-white py-3 px-6 rounded-lg font-medium hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">
                Or reach out directly at{' '}
                <a href="mailto:hello@pixonal.com" className="text-accent-blue hover:underline">
                  hello@pixonal.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
