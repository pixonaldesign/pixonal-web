import type { ReactNode } from 'react';

interface SectionHeaderProps {
  id?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  className?: string;
  titleClassName?: string;
  subtitleClassName?: string;
}

/**
 * Canonical section heading: figure title + lead subtitle.
 * Matches the Llumen Impact carousel header.
 */
export default function SectionHeader({
  id,
  title,
  subtitle,
  className = 'flex flex-col gap-stack',
  titleClassName = 'text-figure text-primary-50',
  subtitleClassName = 'text-lead text-primary-50/70 max-w-[840px]',
}: SectionHeaderProps) {
  return (
    <header className={className}>
      <h2 id={id} className={titleClassName}>
        {title}
      </h2>
      {subtitle ? <p className={subtitleClassName}>{subtitle}</p> : null}
    </header>
  );
}
