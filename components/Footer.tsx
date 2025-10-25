import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-primary-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-accent-blue to-accent-red rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">P</span>
              </div>
              <span className="text-xl font-medium">Pixonal</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Empowering organizations with intelligent data solutions and strategic advisory services.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-medium text-lg mb-4">Products</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/llumen" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Llumen Platform
                </Link>
              </li>
              <li>
                <Link href="/llumen#features" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Key Features
                </Link>
              </li>
              <li>
                <Link href="/llumen#licenses" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Licenses
                </Link>
              </li>
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h3 className="font-medium text-lg mb-4">Industries</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/industries/mobility" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Mobility & Transportation
                </Link>
              </li>
              <li>
                <Link href="/industries/real-estate" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Real Estate & Assets
                </Link>
              </li>
              <li>
                <Link href="/industries/citizen-services" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Citizen & Service Experience
                </Link>
              </li>
              <li>
                <Link href="/industries/technology" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Technology Infrastructure
                </Link>
              </li>
              <li>
                <Link href="/industries/military" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Military & Defense
                </Link>
              </li>
              <li>
                <Link href="/industries/safety" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Safety & Law Enforcement
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-medium text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/advisory" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Advisory Services
                </Link>
              </li>
              <li>
                <Link href="/newsroom" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Newsroom
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Contact Us
                </Link>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="max-w-md">
            <h3 className="font-medium text-lg mb-4">Stay Updated</h3>
            <p className="text-gray-400 text-sm mb-4">
              Get the latest insights and updates from Pixonal.
            </p>
            <div className="flex space-x-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent-blue focus:border-transparent"
              />
              <button className="bg-gradient-to-r from-accent-blue to-accent-red text-white px-6 py-2 rounded-lg hover:opacity-90 transition-opacity">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 Pixonal. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
