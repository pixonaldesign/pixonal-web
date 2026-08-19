'use client';

import type { ReactNode } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
}

export default function NavLink({
  href,
  children,
  className = '',
}: NavLinkProps) {
  const pathname = usePathname();
  const isActive =
    pathname === href ||
    pathname === `${href}/` ||
    (href !== '/' && pathname.startsWith(`${href}/`));

  return (
    <Link
      href={href}
      className={className}
      aria-current={isActive ? 'page' : undefined}
    >
      {children}
    </Link>
  );
}
