'use client';

import Link from 'next/link';
import Image from 'next/image';
import NavLink from '@/components/NavLink';
import PixonalIcon from '@/components/PixonalIcon';
import { contactCta, navMenuSurfaceClass, primaryNavLinks } from './nav-config';

interface NavBarShellProps {
  isMenuOpen: boolean;
  isIndustriesOpen: boolean;
  onMenuToggle: () => void;
  onIndustriesToggle: () => void;
  menuPanelId: string;
  industriesPanelId: string;
}

const INDUSTRIES_HREF = '/industries';

export default function NavBarShell({
  isMenuOpen,
  isIndustriesOpen,
  onMenuToggle,
  onIndustriesToggle,
  menuPanelId,
  industriesPanelId,
}: NavBarShellProps) {
  const isAnyOpen = isMenuOpen || isIndustriesOpen;
  return (
    <div
      className={`w-full h-[66px] pl-5 pr-3.5 flex justify-between items-center border border-white/10 transition-[border-radius,background,backdrop-filter] ${
        isAnyOpen
          ? `${navMenuSurfaceClass} rounded-t-[20px] rounded-b-none border-b border-white/10`
          : 'rounded-[20px] bg-[rgba(44,44,44,0.2)] backdrop-blur-[15px]'
      }`}
    >
      <Link href="/" className="shrink-0 pl-1" aria-label="Pixonal home">
        <Image
          src="/images/logo.svg"
          alt="Pixonal"
          width={80}
          height={18}
          className="h-[18px] w-[79.614px]"
          priority
        />
      </Link>

      <div className="flex h-full items-center self-stretch min-w-0">
        <ul className="hidden xl:flex h-full items-stretch" role="list">
          {primaryNavLinks.map((item, index) => {
            const isLast = index === primaryNavLinks.length - 1;
            const isIndustries = item.href === INDUSTRIES_HREF;
            const cellClass = `h-full w-[150px] border-l border-white/10 flex items-center justify-center shrink-0 ${
              isLast ? 'border-r border-white/10' : ''
            }`;
            return (
              <li key={item.href} className="flex h-full">
                {isIndustries ? (
                  // Keep a real <a href> in server HTML for SEO crawlability,
                  // but intercept clicks to open the dropdown instead.
                  <Link
                    href={item.href}
                    onClick={(event) => {
                      event.preventDefault();
                      onIndustriesToggle();
                    }}
                    className={cellClass}
                    aria-expanded={isIndustriesOpen}
                    aria-controls={industriesPanelId}
                    aria-haspopup="dialog"
                  >
                    <span className="text-center text-white text-body capitalize">
                      {item.label}
                    </span>
                  </Link>
                ) : (
                  <NavLink
                    href={item.href}
                    className={cellClass}
                    labelClassName="text-center text-white text-body capitalize"
                  >
                    {item.label}
                  </NavLink>
                )}
              </li>
            );
          })}
        </ul>

        <div className="flex h-full items-center gap-3 shrink-0">
          <div className="h-full w-[150px] border-r border-white/10 flex items-center justify-center">
            <NavLink
              href={contactCta.href}
              className="opacity-95 bg-white rounded-[10px] p-3 inline-flex items-center justify-center"
              labelClassName="text-center text-black text-body capitalize"
            >
              {contactCta.label}
            </NavLink>
          </div>

          <button
            type="button"
            className="opacity-95 p-2.5 rounded-[10px] flex items-center justify-center hover:bg-white/5 transition-colors"
            onClick={onMenuToggle}
            aria-expanded={isMenuOpen}
            aria-controls={menuPanelId}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMenuOpen ? (
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M19.2806 17.9693L11.9999 12.8102L5.78055 19.0306C5.63982 19.1713 5.44895 19.2503 5.24993 19.2503C5.05091 19.2503 4.86003 19.1713 4.7193 19.0306C4.57857 18.8898 4.49951 18.699 4.49951 18.4999C4.49951 18.3009 4.57857 18.11 4.7193 17.9693L10.9396 11.7499L4.7193 5.53055C4.57857 5.38982 4.49951 5.19895 4.49951 4.99993C4.49951 4.80091 4.57857 4.61003 4.7193 4.4693C4.86003 4.32857 5.05091 4.24951 5.24993 4.24951C5.44895 4.24951 5.63982 4.32857 5.78055 4.4693L11.9999 10.6896L18.2193 4.4693C18.36 4.32857 18.5509 4.24951 18.7499 4.24951C18.949 4.24951 19.1398 4.32857 19.2806 4.4693C19.4213 4.61003 19.5003 4.80091 19.5003 4.99993C19.5003 5.19895 19.4213 5.38982 19.2806 5.53055L13.0602 11.7499L19.2806 17.9693Z"
                  fill="white"
                />
              </svg>
            ) : (
              <PixonalIcon name="list" size={24} className="text-[#F6F6F6]" weight="regular" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
