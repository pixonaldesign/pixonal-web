import Link from 'next/link';
import Image from 'next/image';
import SectionHeading from '@/components/advisory/SectionHeading';
import {
  advisoryIndustriesIntro,
  advisoryIndustryTiles,
  type AdvisoryIndustryTile,
} from '@/lib/advisory';

function IndustryTile({ tile }: { tile: AdvisoryIndustryTile }) {
  return (
    <Link
      href={tile.href}
      className="group relative flex h-full min-h-[300px] w-full flex-col justify-start overflow-hidden rounded-card bg-black p-5 lg:p-6"
    >
      <Image
        src={tile.image}
        alt=""
        fill
        className="object-cover"
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
      />
      <div aria-hidden className="absolute inset-0 bg-black/40" />
      <p className="relative z-10 text-h2 font-semibold text-[#f6f6f6] capitalize">
        {tile.label}
      </p>
    </Link>
  );
}

/**
 * Advisory industries mosaic — "Informed by diversity, anchored in domain
 * expertise". A 4-column grid at lg+ where two tiles span 2 columns to
 * reproduce the Figma mosaic; collapses to 2 columns at sm and 1 below.
 * Reuses the existing industry artwork + routes.
 */
export default function AdvisoryIndustries() {
  return (
    <section
      aria-labelledby="advisory-industries-heading"
      className="bg-primary-900 py-section px-gutter"
    >
      <div className="mx-auto flex max-w-content flex-col gap-section">
        <SectionHeading
          id="advisory-industries-heading"
          title={advisoryIndustriesIntro.title}
          description={advisoryIndustriesIntro.description}
        />

        <ul
          role="list"
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {advisoryIndustryTiles.map((tile) => (
            <li
              key={tile.label}
              className={`flex lg:min-h-[381px] ${
                tile.span === 'wide' ? 'lg:col-span-2' : 'lg:col-span-1'
              }`}
            >
              <IndustryTile tile={tile} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
