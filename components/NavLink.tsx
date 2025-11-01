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
        (c: React.ReactNode): c is React.ReactElement<{ className?: string }> => 
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          React.isValidElement(c) && c.type === 'div' && (c.props as any)?.className?.includes('text-center')
      );
      
      if (textDiv) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return React.cloneElement(child as React.ReactElement<any>, {
          children: React.Children.map(childProps.children, (c: React.ReactNode) => {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            if (React.isValidElement(c) && c.type === 'div' && (c.props as any)?.className?.includes('text-center')) {
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              return React.cloneElement(c as React.ReactElement<any>, {
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                className: `${(c.props as any).className} border-b-2 border-white`
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
