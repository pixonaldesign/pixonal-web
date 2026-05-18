import Link from 'next/link';
import Image from 'next/image';

interface NewsCardProps {
  title: string;
  excerpt: string;
  date: string;
  category: string;
  image?: string;
  slug: string;
  featured?: boolean;
}

export default function NewsCard({ 
  title, 
  excerpt, 
  date, 
  category, 
  image, 
  slug,
  featured = false 
}: NewsCardProps) {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getCategoryColor = (category: string) => {
    switch (category.toLowerCase()) {
      case 'featured':
        return 'bg-gradient-to-r from-accent-blue to-accent-red text-white';
      case 'press releases':
        return 'bg-blue-100 text-blue-800';
      case 'in the news':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <article className={`group ${featured ? 'lg:col-span-2' : ''}`}>
      <Link href={`/newsroom/${slug}`} className="block">
        <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
          {image && (
            <div className={`relative ${featured ? 'h-64' : 'h-48'} overflow-hidden`}>
              <Image
                src={image}
                alt={title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute top-4 left-4">
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(category)}`}>
                  {category}
                </span>
              </div>
            </div>
          )}
          
          <div className="p-6">
            <div className="flex items-center justify-between mb-3">
              <span className="text-news-caption text-primary-500">
                {formatDate(date)}
              </span>
              {!image && (
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(category)}`}>
                  {category}
                </span>
              )}
            </div>
            
            <h3 className={`text-h2 text-primary-900 mb-3 group-hover:text-accent-blue transition-colors ${
              featured ? '' : ''
            }`}>
              {title}
            </h3>
            
            <p className={`text-primary-600 text-body-relaxed`}>
              {excerpt}
            </p>
            
            <div className="mt-4 flex items-center text-accent-blue font-medium group-hover:underline">
              Read More
              <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
}
