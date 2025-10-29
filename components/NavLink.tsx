'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export default function NavLink({ href, children, className = "" }: NavLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === href || pathname === `${href}/` || pathname.startsWith(`${href}/`);
  
  // Special styling for Get In Touch button
  const isContactButton = href === '/contact';
  
  // Clone children to add underline to text
  const childrenWithUnderline = React.Children.map(children, (child) => {
    if (isActive && !isContactButton && React.isValidElement(child)) {
      // Find the text div and add border-b class
      const childProps = child.props as { children?: React.ReactNode };
      const textDiv = React.Children.toArray(childProps.children).find(
        (c: any) => c && c.type === 'div' && c.props?.className?.includes('text-center')
      );
      
      if (textDiv) {
        return React.cloneElement(child as any, {
          children: React.Children.map(childProps.children, (c: any) => {
            if (c && c.type === 'div' && c.props?.className?.includes('text-center')) {
              return React.cloneElement(c, {
                className: `${c.props.className} border-b-2 border-white`
              });
            }
            return c;
          })
        });
      }
    }
    return child;
  });
  
  return (
    <Link 
      href={href} 
      className={`${className} ${
        isActive && isContactButton
          ? 'ring-2 ring-white ring-opacity-50' 
          : ''
      }`}
    >
      {childrenWithUnderline || children}
    </Link>
  );
}
