import Link from 'next/link';

interface PrimaryButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  type?: 'button' | 'submit';
  className?: string;
}

const buttonClassName =
  'group/btn opacity-95 bg-white rounded-[10px] p-3 inline-flex items-center justify-center hover:opacity-100 transition-opacity';

const labelClassName = 'button-mask-slot text-black text-button normal-case';

export default function PrimaryButton({
  children,
  href,
  onClick,
  type = 'button',
  className = '',
}: PrimaryButtonProps) {
  const classes = `${buttonClassName} ${className}`.trim();
  const label = (
    <span className={labelClassName}>
      <span className="button-mask-out">{children}</span>
      <span className="button-mask-in" aria-hidden>
        {children}
      </span>
    </span>
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
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
