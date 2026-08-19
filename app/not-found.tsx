import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen">
      <div className="flex items-center justify-center min-h-[80vh]">
        <div className="text-center">
          <h1 className="text-display text-white mb-4">404</h1>
          <h2 className="text-h1 text-white mb-6">Page Not Found</h2>
          <p className="text-lead text-primary-100 mb-8 max-w-md mx-auto">
            Sorry, we could not find the page you are looking for.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="bg-gradient-to-r from-accent-blue to-accent-red text-white px-8 py-4 rounded-full text-button hover:opacity-90 transition-opacity"
            >
              Go Home
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-full text-button hover:bg-white hover:text-primary-900 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
