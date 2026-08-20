import SectionHeader from '@/components/SectionHeader';

interface AboutSectionHeaderProps {
  id: string;
  title: string;
  /** First sentence of the supporting copy. */
  lead: string;
  subtitle: string;
}

/**
 * Shared About section header — figure title + lead subtitle.
 */
export default function AboutSectionHeader({
  id,
  title,
  lead,
  subtitle,
}: AboutSectionHeaderProps) {
  return (
    <SectionHeader
      id={id}
      title={title}
      subtitle={`${lead} ${subtitle}`}
    />
  );
}
