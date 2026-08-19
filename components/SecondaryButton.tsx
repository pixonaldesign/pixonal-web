import Link from 'next/link';
import PixonalIcon from './PixonalIcon';

type SecondaryButtonVariant = 'on-dark' | 'on-light';

interface SecondaryButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  type?: 'button' | 'submit';
  className?: string;
  showArrow?: boolean;
  variant?: SecondaryButtonVariant;
}

const variantStyles: Record<
  SecondaryButtonVariant,
  { button: string; label: string; icon: string }
> = {
  'on-dark': {
    button: 'border-white bg-black/20 hover:bg-white/10',
    label: 'text-white',
    icon: 'text-white',
  },
  'on-light': {
    button: 'border-black bg-transparent hover:bg-black/5',
    label: 'text-black',
    icon: 'text-black',
  },
};

const baseButtonClassName =
  'inline-flex items-center justify-center gap-tight h-12 px-button rounded-xl border backdrop-blur-2xl transition-colors';

export default function SecondaryButton({
  children,
  href,
  onClick,
  type = 'button',
  className = '',
  showArrow = false,
  variant = 'on-dark',
}: SecondaryButtonProps) {
  const styles = variantStyles[variant];
  const classes = `${baseButtonClassName} ${styles.button} ${className}`.trim();
  const label = (
    <span className={`text-button inline-flex items-center gap-tight ${styles.label}`}>
      <span>{children}</span>
      {showArrow && (
        <PixonalIcon name="arrow-right" size={24} className={styles.icon} />
      )}
    </span>
  );

  if (href) {
    return (
      <Link href={href} className={classes} onClick={onClick}>
        {label}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {label}
    </button>
  );
}
