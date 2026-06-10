interface AboutSectionHeaderProps {
  id: string;
  title: string;
  /** Bold white lead-in sentence before the muted continuation. */
  lead: string;
  subtitle: string;
}

/**
 * Shared About section header — display title + bold lead + muted subtitle.
 * Used by every About narrative section so titles and supporting copy align
 * identically (the title fills the content width; the body caps at 640px).
 */
export default function AboutSectionHeader({
  id,
  title,
  lead,
  subtitle,
}: AboutSectionHeaderProps) {
  return (
    <div className="flex w-full flex-col gap-block items-start">
      <h2 id={id} className="text-display text-primary-50">
        {title}
      </h2>
      <p className="text-body text-primary-50/40 max-w-[640px]">
        <span className="text-primary-50">{lead} </span>
        {subtitle}
      </p>
    </div>
  );
}
