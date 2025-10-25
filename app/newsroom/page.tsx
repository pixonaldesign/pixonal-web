import { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import GetInTouch from '@/components/GetInTouch';
import NewsCard from '@/components/NewsCard';
import { getAllNewsArticles, groupArticlesByYear, getFeaturedArticles } from '@/lib/markdown';

export const metadata: Metadata = {
  title: 'Newsroom - Latest News & Insights',
  description: 'Stay updated with the latest news, insights, and announcements from Pixonal. Discover industry trends, company updates, and thought leadership content.',
  openGraph: {
    title: 'Newsroom - Latest News & Insights',
    description: 'Stay updated with the latest news, insights, and announcements from Pixonal.',
  },
};

export default async function NewsroomPage() {
  const articles = await getAllNewsArticles();
  const featuredArticles = getFeaturedArticles(articles);
  const articlesByYear = groupArticlesByYear(articles);

  const categories = ['All', 'Featured', 'Press Releases', 'In the News'];
  const years = Object.keys(articlesByYear).sort((a, b) => parseInt(b) - parseInt(a));

  return (
    <div className="bg-primary-900 min-h-screen">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary-800 to-primary-900">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Newsroom
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed max-w-4xl mx-auto">
            Stay updated with the latest news, insights, and announcements from Pixonal. 
            Discover industry trends, company updates, and thought leadership content.
          </p>
        </div>
      </section>

      {/* Featured Articles */}
      {featuredArticles.length > 0 && (
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Featured Articles
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our most important and impactful stories
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredArticles.slice(0, 2).map((article) => (
                <NewsCard
                  key={article.slug}
                  title={article.title}
                  excerpt={article.excerpt}
                  date={article.date}
                  category={article.category}
                  image={article.image}
                  slug={article.slug}
                  featured={true}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Articles by Year */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              All Articles
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Browse our complete collection of news and insights
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                className="px-6 py-3 rounded-full border-2 border-gray-300 text-gray-700 hover:border-accent-blue hover:text-accent-blue transition-colors"
              >
                {category}
              </button>
            ))}
          </div>

          {/* Articles by Year */}
          <div className="space-y-16">
            {years.map((year) => (
              <div key={year}>
                <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                  {year}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {articlesByYear[year].map((article) => (
                    <NewsCard
                      key={article.slug}
                      title={article.title}
                      excerpt={article.excerpt}
                      date={article.date}
                      category={article.category}
                      image={article.image}
                      slug={article.slug}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-gradient-to-r from-accent-blue to-accent-red">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold text-white mb-6">
            Stay Updated
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Get the latest insights and updates from Pixonal delivered to your inbox
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
            />
            <button className="bg-white text-primary-900 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
              Subscribe
            </button>
          </div>
          <p className="text-white/70 text-sm mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </section>

      {/* Get in Touch Section */}
      <GetInTouch />

      {/* Footer */}
      <Footer />
    </div>
  );
}
