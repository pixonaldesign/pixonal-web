'use client';

import type { ReactNode } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
  labelClassName?: string;
}

export default function NavLink({
  href,
  children,
  className = '',
  labelClassName = 'text-center text-white text-nav',
}: NavLinkProps) {
  const pathname = usePathname();
  const isActive =
    pathname === href ||
    pathname === `${href}/` ||
    (href !== '/' && pathname.startsWith(`${href}/`));
  const isContactButton = href === '/contact';

  return (
    <Link
      href={href}
      className={className}
      aria-current={isActive ? 'page' : undefined}
    >
      <span
        className={`${labelClassName} ${
          isActive && !isContactButton ? 'border-b-2 border-white' : ''
        } ${isActive && isContactButton ? 'ring-2 ring-white/50 rounded-[6px]' : ''}`}
      >
        {children}
      </span>
    </Link>
  );
}
