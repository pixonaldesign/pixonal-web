import Image from '@/components/PrefixedImage';
import SecondaryButton from './SecondaryButton';

export default function BlogHero() {
  return (
    <div className="relative w-full max-w-content min-h-[800px] rounded-card overflow-hidden flex flex-col items-center p-6">
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <Image
          src="/images/blog/blog-bg-1.png"
          alt=""
          fill
          className="object-cover"
          sizes="(max-width: 1580px) 100vw, 1580px"
          priority={false}
        />
        <Image
          src="/images/blog/blog-bg-2.png"
          alt=""
          fill
          className="object-cover"
          sizes="(max-width: 1580px) 100vw, 1580px"
          priority={false}
        />
      </div>

      <div className="relative z-10 w-full max-w-content flex flex-1 items-center justify-center p-10 min-h-[600px]">
        <div className="flex flex-col items-center justify-center gap-8 w-full max-w-[796px] text-center">
          <p className="text-label text-black">PXNL / BLOG</p>
          <h2 className="text-black text-h1 capitalize">
            Decision-making is a design problem disguised as analytics
          </h2>
          <SecondaryButton
            href="https://blog.pixonal.com/"
            variant="on-light"
            showArrow
          >
            Read our latest blog
          </SecondaryButton>
        </div>
      </div>
    </div>
  );
}
