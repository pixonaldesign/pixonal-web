/**
 * Label-width underline. Pair with `group/tab` on the interactive ancestor.
 * Visible on hover, or while `active` (the overlay item currently in preview).
 */
export default function NavTabUnderline({ active = false }: { active?: boolean }) {
  return (
    <span
      aria-hidden
      data-active={active ? 'true' : undefined}
      className="pointer-events-none absolute inset-x-0 -bottom-[6px] h-px origin-left scale-x-0 bg-white transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/tab:scale-x-100 data-[active=true]:scale-x-100"
    />
  );
}
