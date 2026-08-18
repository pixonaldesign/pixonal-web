import Image from 'next/image';
import type { AboutLogo } from '@/lib/about';

interface AboutLogosSectionProps {
  headingId: string;
  title: string;
  logos: AboutLogo[];
  /** Optional 16:9 feature image rendered above the logo grid. */
  image?: string;
  /** Tailwind grid-cols utility for the logo grid at lg+. */
  columnsClassName?: string;
  /** Padding utilities for the bordered card. */
  cardPaddingClassName?: string;
}

/**
 * Logo wall used by "Collaborations & Accelerators" and "Media Recognition".
 * A title above a bordered card (matching the home Partners logo card) that
 * holds an optional feature image and a responsive grid of partner logos.
 */
export default function AboutLogosSection({
  headingId,
  title,
  logos,
  image,
  columnsClassName = 'lg:grid-cols-5',
  cardPaddingClassName = 'px-6 py-10 md:px-10 md:py-[60px]',
}: AboutLogosSectionProps) {
  return (
    <section
      className="bg-primary-900 py-section px-gutter"
      aria-labelledby={headingId}
    >
      <div className="mx-auto flex max-w-content flex-col gap-block">
        <h2 id={headingId} className="text-h1 text-white capitalize">
          {title}
        </h2>

        <div
          className={`flex w-full flex-col gap-12 rounded-card border border-stone-300/16 ${cardPaddingClassName}`}
        >
          {image && (
            <div className="relative aspect-video w-full overflow-hidden rounded-xl">
              <Image
                src={image}
                alt=""
                fill
                className="object-cover"
                sizes="(max-width: 1580px) 100vw, 1580px"
              />
            </div>
          )}

          <ul
            role="list"
            className={`grid grid-cols-2 gap-x-8 gap-y-10 md:grid-cols-3 md:gap-x-12 md:gap-y-12 ${columnsClassName} items-center justify-items-center`}
          >
            {logos.map((logo, index) => (
              <li
                key={`${logo.src}-${index}`}
                className="flex h-[60px] w-full items-center justify-center md:h-[75px]"
              >
                <Image
                  src={logo.src}
                  alt={logo.name}
                  width={180}
                  height={75}
                  className="max-h-full max-w-full object-contain"
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
