'use client';

import IndustryCard from './IndustryCard';
import {
  industriesMenu,
  industriesMenuItems,
  navMenuSurfaceClass,
} from './nav-config';

interface IndustriesOverlayProps {
  id: string;
  isOpen: boolean;
  onClose: () => void;
}

/**
 * Industries dropdown — same crawlable-in-DOM strategy as NavOverlay.
 * Figma node 437:421.
 */
export default function IndustriesOverlay({
  id,
  isOpen,
  onClose,
}: IndustriesOverlayProps) {
  return (
    <>
      <div
        id={id}
        role="dialog"
        aria-modal={isOpen}
        aria-label="Industries menu"
        aria-hidden={!isOpen}
        hidden={!isOpen}
        className={`absolute left-0 right-0 top-full z-50 w-full rounded-b-[20px] rounded-t-none border border-white/10 border-t-0 shadow-[0px_8px_32px_rgba(0,0,0,0.4)] max-h-[calc(100dvh-1.25rem-66px-1.25rem)] overflow-x-hidden overflow-y-auto overscroll-contain nav-menu-scroll ${navMenuSurfaceClass}`}
        tabIndex={isOpen ? 0 : -1}
      >
        <div className="flex flex-col gap-10 px-5 py-8 md:px-8">
          <div className="flex w-full max-w-[520px] flex-col gap-2">
            <p className="text-label text-primary-100/40">
              {industriesMenu.eyebrow}
            </p>
            <p className="text-body-tight text-white">
              {industriesMenu.description}
            </p>
          </div>

          <ul
            role="list"
            className="grid w-full max-w-[1360px] grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
          >
            {industriesMenuItems.map((item) => (
              <li key={item.label} className="flex min-w-0">
                <IndustryCard item={item} onNavigate={onClose} />
              </li>
            ))}
          </ul>
        </div>
      </div>

      {isOpen && (
        <button
          type="button"
          className="fixed inset-0 z-40 cursor-default bg-transparent"
          onClick={onClose}
          aria-label="Close industries menu"
        />
      )}
    </>
  );
}
