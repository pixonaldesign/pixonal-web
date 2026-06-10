import Image from 'next/image';
import {
  advisoryServices,
  advisoryServicesIntro,
  advisoryServicesOutro,
  type AdvisoryService,
} from '@/lib/advisory';

function AdvisoryServiceCard({ service }: { service: AdvisoryService }) {
  return (
    <article
      className={`group relative flex min-h-[420px] lg:min-h-[460px] flex-col justify-between overflow-hidden rounded-card border border-black/10 p-5 ${
        service.span === 'wide' ? 'lg:col-span-3' : 'lg:col-span-1'
      }`}
    >
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <Image
          src={service.image}
          alt=""
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, (max-width: 1400px) 75vw, 1044px"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/0 to-black/90" />
      </div>

      <div className="relative z-10 flex flex-col gap-tight">
        <p className="text-label text-white/40">{service.number}</p>
        <h3 className="text-h1 text-white">{service.title}</h3>
      </div>

      <p className="relative z-10 text-body text-white">
        {service.description}
      </p>
    </article>
  );
}

/**
 * Advisory services suite — a large centered intro statement, a 2-row
 * mosaic of service cards (wide + narrow at lg+, stacked below), and a
 * closing statement. Mirrors the home/Llumen section rhythm via
 * `py-section`, `gap-section`, `px-gutter`, and `max-w-content`.
 */
export default function AdvisoryServices() {
  return (
    <section
      aria-label="Advisory services"
      className="bg-primary-900 py-section px-gutter"
    >
      <div className="mx-auto flex max-w-content flex-col gap-section">
        <p className="text-h1 text-white text-center max-w-[1051px] mx-auto">
          {advisoryServicesIntro}
        </p>

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-4">
          {advisoryServices.map((service) => (
            <AdvisoryServiceCard key={service.number} service={service} />
          ))}
        </div>

        <p className="text-h1 text-white text-center max-w-[1045px] mx-auto">
          {advisoryServicesOutro}
        </p>
      </div>
    </section>
  );
}
