import Image from 'next/image';
import PixonalIcon from '@/components/PixonalIcon';
import SectionHeading from '@/components/advisory/SectionHeading';
import {
  advisoryEngine,
  advisoryEngineSteps,
  advisoryMethodologyBanner,
} from '@/lib/advisory';

/**
 * Advisory methodology — a full-bleed banner card ("Move faster, govern
 * better…") followed by the "execution engine" header and a 2-column grid
 * of process steps. Uses the shared section spacing tokens so it reads in
 * the same rhythm as the rest of the site.
 */
export default function AdvisoryMethodology() {
  return (
    <section
      aria-labelledby="advisory-engine-heading"
      className="bg-primary-900 py-section px-gutter"
    >
      <div className="mx-auto flex max-w-content flex-col gap-section">
        {/* Banner card. */}
        <div className="relative flex min-h-[60dvh] lg:min-h-[70dvh] flex-col justify-center overflow-hidden rounded-card bg-black px-gutter md:px-10 lg:px-20 py-12 lg:py-24">
          <Image
            src={advisoryMethodologyBanner.image}
            alt=""
            fill
            className="object-cover"
            sizes="(max-width: 1400px) 100vw, 1400px"
          />
          <div aria-hidden className="absolute inset-0 bg-black/40" />
          <div className="relative z-10 flex flex-col gap-block">
            <h2 className="text-display text-white capitalize max-w-[1014px]">
              {advisoryMethodologyBanner.title}
            </h2>
            <p className="text-h2 text-white/80 max-w-[1014px]">
              {advisoryMethodologyBanner.subtitle}
            </p>
          </div>
        </div>

        {/* Execution engine header. */}
        <SectionHeading
          id="advisory-engine-heading"
          title={advisoryEngine.title}
          lead={advisoryEngine.descriptionLead}
          description={advisoryEngine.description}
        />

        {/* Process step grid. */}
        <ul role="list" className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {advisoryEngineSteps.map((step) => (
            <li key={step.title} className="flex">
              <article className="flex w-full flex-col items-center justify-center gap-block rounded-card bg-black px-8 py-10 lg:px-20 lg:py-10 text-center">
                <PixonalIcon
                  name={step.icon}
                  size={64}
                  weight="thin"
                  className="text-white shrink-0"
                />
                <div className="flex flex-col items-center gap-4">
                  <h3 className="text-h2 text-white capitalize">
                    {step.title}
                  </h3>
                  <p className="text-body text-white/60">{step.description}</p>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
