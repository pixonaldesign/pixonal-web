interface SectionHeadingProps {
  /** id for aria-labelledby on the parent section. */
  id?: string;
  title: string;
  /** Optional white lead phrase that opens the supporting paragraph. */
  lead?: string;
  /** Optional muted continuation of the supporting paragraph. */
  description?: string;
  /** Max width of the header column. */
  className?: string;
}

/**
 * Shared section title used across the Advisory page (and reusable beyond).
 * Stacked layout: `text-display` capitalized heading + an optional supporting
 * paragraph with a white lead phrase and muted continuation — the exact
 * treatment used by "The execution engine that powers outcomes".
 */
export default function SectionHeading({
  id,
  title,
  lead,
  description,
  className = 'max-w-[909px]',
}: SectionHeadingProps) {
  return (
    <header className={`flex flex-col gap-stack ${className}`}>
      <h2 id={id} className="text-display text-white capitalize">
        {title}
      </h2>
      {(lead || description) && (
        <p className="text-body text-white/40 max-w-[670px]">
          {lead && <span className="text-white">{lead} </span>}
          {description}
        </p>
      )}
    </header>
  );
}
