import Image from 'next/image';
import Link from 'next/link';
import PixonalIcon from './PixonalIcon';

export default function BlogHero() {
  return (
    <div className="relative w-full max-w-[1400px] min-h-[800px] rounded-[20px] overflow-hidden flex flex-col items-center p-6">
      {/* Stacked background images */}
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <Image
          src="/images/blog/blog-bg-1.png"
          alt=""
          fill
          className="object-cover"
          sizes="(max-width: 1400px) 100vw, 1400px"
          priority={false}
        />
        <Image
          src="/images/blog/blog-bg-2.png"
          alt=""
          fill
          className="object-cover"
          sizes="(max-width: 1400px) 100vw, 1400px"
          priority={false}
        />
      </div>

      {/* Inner content */}
      <div className="relative z-10 w-full max-w-content flex flex-1 items-center justify-center p-10 min-h-[600px]">
        <div className="flex flex-col items-center justify-center gap-8 w-full max-w-[796px] text-center">
          <p className="text-label text-black">
            PXNL / BLOG
          </p>
          <h2 className="text-black text-h1 capitalize">
            Decision-making is a design problem disguised as analytics
          </h2>
          <Link
            href="https://blog.pixonal.com/"
            className="h-[52px] px-5 rounded-xl border border-black inline-flex items-center justify-center gap-3"
          >
            <span className="text-button text-black capitalize">Read our latest blog</span>
            <PixonalIcon name="arrow-right" size={24} className="text-black" />
          </Link>
        </div>
      </div>
    </div>
  );
}
