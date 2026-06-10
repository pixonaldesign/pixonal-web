import Link from 'next/link';

interface PrimaryButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  type?: 'button' | 'submit';
  className?: string;
}

const buttonClassName =
  'opacity-95 bg-white rounded-[10px] p-3 inline-flex items-center justify-center capitalize hover:opacity-90 transition-opacity';

const labelClassName = 'text-black text-button';

export default function PrimaryButton({
  children,
  href,
  onClick,
  type = 'button',
  className = '',
}: PrimaryButtonProps) {
  const classes = `${buttonClassName} ${className}`.trim();
  const label = <span className={labelClassName}>{children}</span>;

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
