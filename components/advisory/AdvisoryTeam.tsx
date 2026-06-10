import Image from 'next/image';
import SectionHeading from '@/components/advisory/SectionHeading';
import {
  advisoryTeam,
  advisoryTeamIntro,
  type AdvisoryTeamMember,
} from '@/lib/advisory';

function TeamCard({ member }: { member: AdvisoryTeamMember }) {
  return (
    <article className="relative flex aspect-[333/392] w-full flex-col justify-end overflow-hidden rounded-[12px]">
      <Image
        src={member.image}
        alt={member.name}
        fill
        className="object-cover"
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
      />

      {/* Progressive blur — intensifies toward the bottom so the caption stays legible. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-2/3 backdrop-blur-[15px] [mask-image:linear-gradient(to_top,#000_45%,transparent)] [-webkit-mask-image:linear-gradient(to_top,#000_45%,transparent)]"
      />
      {/* 40% black overlay fading upward. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/40 to-transparent"
      />

      <div className="relative z-10 flex w-full flex-col gap-tight p-4">
        <p className="text-h2 text-white">{member.name}</p>
        <p className="text-body text-white">{member.role}</p>
      </div>
    </article>
  );
}

/**
 * Advisory team grid — "The architects of decision confidence". Responsive
 * profile grid: 4 columns at lg+, 2 at sm, 1 below. Each card shows a
 * portrait with a frosted caption block (name + role) anchored to the
 * bottom, matching the Figma profile component.
 */
export default function AdvisoryTeam() {
  return (
    <section
      aria-labelledby="advisory-team-heading"
      className="bg-primary-900 py-section px-gutter"
    >
      <div className="mx-auto flex max-w-content flex-col gap-section">
        <SectionHeading
          id="advisory-team-heading"
          title={advisoryTeamIntro.title}
          description={advisoryTeamIntro.description}
          className="max-w-[1239px]"
        />

        <ul
          role="list"
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {advisoryTeam.map((member, index) => (
            <li key={`${member.name}-${index}`} className="flex">
              <TeamCard member={member} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
