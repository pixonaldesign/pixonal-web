'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export default function NavLink({ href, children, className = "" }: NavLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === href;
  
  // Special styling for Get In Touch button
  const isContactButton = href === '/contact';
  
  return (
    <Link 
      href={href} 
      className={`${className} ${
        isActive 
          ? (isContactButton 
              ? 'ring-2 ring-white ring-opacity-50' 
              : 'border-b-2 border-white')
          : ''
      }`}
    >
      {children}
    </Link>
  );
}
