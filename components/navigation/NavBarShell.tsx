'use client';

import Link from 'next/link';
import Image from '@/components/PrefixedImage';
import NavLink from '@/components/NavLink';
import PixonalIcon from '@/components/PixonalIcon';
import PrimaryButton from '@/components/PrimaryButton';
import {
  COMPANY_HREF,
  contactCta,
  INDUSTRIES_HREF,
  LLUMEN_HREF,
  llumenOverlayEnabled,
  navMenuSurfaceClass,
  primaryNavLinks,
} from './nav-config';
import NavTabUnderline from './NavTabUnderline';

const tabCellClass =
  'h-full w-[150px] border-l border-white/10 flex items-center justify-center shrink-0';
const tabLinkClass = `${tabCellClass} group/tab`;

function NavTabLabel({
  label,
  isOpen = false,
  showToggle = false,
}: {
  label: string;
  isOpen?: boolean;
  showToggle?: boolean;
}) {
  return (
    <span className="relative inline-flex items-center gap-1.5 text-center text-white text-body capitalize">
      {label}
      {showToggle ? (
        <PixonalIcon
          name={isOpen ? 'minus' : 'plus'}
          size={14}
          weight="regular"
          className="text-white"
        />
      ) : null}
      <NavTabUnderline />
    </span>
  );
}

interface NavBarShellProps {
  isMenuOpen: boolean;
  isLlumenOpen: boolean;
  isIndustriesOpen: boolean;
  isCompanyOpen: boolean;
  onMenuToggle: () => void;
  onLlumenOpen: () => void;
  onIndustriesOpen: () => void;
  onCompanyOpen: () => void;
  onLlumenToggle: () => void;
  onIndustriesToggle: () => void;
  onCompanyToggle: () => void;
  onHoverDismiss: () => void;
  menuPanelId: string;
  llumenPanelId: string;
  industriesPanelId: string;
  companyPanelId: string;
}

export default function NavBarShell({
  isMenuOpen,
  isLlumenOpen,
  isIndustriesOpen,
  isCompanyOpen,
  onMenuToggle,
  onLlumenOpen,
  onIndustriesOpen,
  onCompanyOpen,
  onLlumenToggle,
  onIndustriesToggle,
  onCompanyToggle,
  onHoverDismiss,
  menuPanelId,
  llumenPanelId,
  industriesPanelId,
  companyPanelId,
}: NavBarShellProps) {
  return (
    <div
      className={`w-full h-[66px] pl-5 pr-3.5 lg:pr-0 flex justify-between items-center border border-white/10 transition-[border-radius,background,backdrop-filter] relative z-[60] ${
        isMenuOpen
          ? `${navMenuSurfaceClass} rounded-t-card rounded-b-none border-b border-white/10`
          : `rounded-card ${navMenuSurfaceClass}`
      }`}
    >
      <Link
        href="/"
        className="shrink-0 pl-1"
        aria-label="Pixonal home"
        onMouseEnter={onHoverDismiss}
      >
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
        <ul className="hidden lg:flex h-full items-stretch" role="list">
          {primaryNavLinks.map((item) => {
            const isLlumen = item.href === LLUMEN_HREF;
            const isIndustries = item.href === INDUSTRIES_HREF;

            if (isLlumen && llumenOverlayEnabled) {
              return (
                <li key={item.href} className="flex h-full">
                  <Link
                    href={item.href}
                    onMouseEnter={onLlumenOpen}
                    onClick={(event) => {
                      event.preventDefault();
                      onLlumenToggle();
                    }}
                    className={tabLinkClass}
                    aria-expanded={isLlumenOpen}
                    aria-controls={llumenPanelId}
                    aria-haspopup="dialog"
                  >
                    <NavTabLabel
                      label={item.label}
                      isOpen={isLlumenOpen}
                      showToggle
                    />
                  </Link>
                </li>
              );
            }

            if (isIndustries) {
              return (
                <li key={item.href} className="flex h-full">
                  <Link
                    href={item.href}
                    onMouseEnter={onIndustriesOpen}
                    onClick={(event) => {
                      event.preventDefault();
                      onIndustriesToggle();
                    }}
                    className={tabLinkClass}
                    aria-expanded={isIndustriesOpen}
                    aria-controls={industriesPanelId}
                    aria-haspopup="dialog"
                  >
                    <NavTabLabel
                      label={item.label}
                      isOpen={isIndustriesOpen}
                      showToggle
                    />
                  </Link>
                </li>
              );
            }

            return (
              <li
                key={item.href}
                className="flex h-full"
                onMouseEnter={onHoverDismiss}
              >
                <NavLink href={item.href} className={tabLinkClass}>
                  <NavTabLabel label={item.label} />
                </NavLink>
              </li>
            );
          })}

          <li className="flex h-full">
            <Link
              href={COMPANY_HREF}
              onMouseEnter={onCompanyOpen}
              onClick={(event) => {
                event.preventDefault();
                onCompanyToggle();
              }}
              className={tabLinkClass}
              aria-expanded={isCompanyOpen}
              aria-controls={companyPanelId}
              aria-haspopup="dialog"
            >
              <NavTabLabel label="Company" isOpen={isCompanyOpen} showToggle />
            </Link>
          </li>
        </ul>

        <div className="flex h-full items-center shrink-0">
          <div className={tabCellClass} onMouseEnter={onHoverDismiss}>
            <PrimaryButton href={contactCta.href} className="normal-case">
              {contactCta.label}
            </PrimaryButton>
          </div>

          <button
            type="button"
            className="lg:hidden opacity-95 p-2.5 rounded-[10px] flex items-center justify-center hover:bg-white/5 transition-colors"
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
