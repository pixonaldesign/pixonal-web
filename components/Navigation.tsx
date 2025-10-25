'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-5 left-1/2 transform -translate-x-1/2 z-50 w-[1400px] max-w-[calc(100vw-40px)]">
      <div className="backdrop-blur-[15px] bg-[rgba(44,44,44,0.2)] border border-[rgba(255,255,255,0.1)] rounded-[20px] flex items-center justify-between px-5 py-0 h-[66px]">
        {/* Logo */}
        <div className="flex items-center">
          <img 
            src="/images/logo.svg" 
            alt="Pixonal Logo" 
            className="h-[18px] w-[79.614px]"
          />
        </div>

        {/* Navigation Links */}
        <div className="flex items-center h-full">
          <div className="flex h-full items-center">
            {/* Llumen */}
            <Link 
              href="/llumen" 
              className="border-l border-[rgba(255,255,255,0.1)] h-full flex items-center justify-center w-[150px] group hover:bg-[rgba(255,255,255,0.05)] transition-colors"
            >
              <div className="flex flex-col items-center gap-0.5">
                <span className="font-inter text-[16px] text-white tracking-[-0.352px] capitalize">
                  Llumen®
                </span>
                <div className="flex items-center justify-center">
                  <div className="rotate-180">
                    <img 
                      src="/images/arrow-down.svg" 
                      alt="Dropdown" 
                      className="h-0 w-[64px]"
                    />
                  </div>
                </div>
              </div>
            </Link>

            {/* Industries */}
            <Link 
              href="/industries" 
              className="border-l border-[rgba(255,255,255,0.1)] h-full flex items-center justify-center w-[150px] group hover:bg-[rgba(255,255,255,0.05)] transition-colors"
            >
              <div className="flex flex-col items-center gap-0.5">
                <span className="font-inter text-[16px] text-white tracking-[-0.352px] capitalize">
                  Industries
                </span>
                <div className="flex items-center justify-center">
                  <div className="rotate-180">
                    <img 
                      src="/images/arrow-down-wide.svg" 
                      alt="Dropdown" 
                      className="h-0 w-[72px]"
                    />
                  </div>
                </div>
              </div>
            </Link>

            {/* Advisory */}
            <Link 
              href="/advisory" 
              className="border-l border-[rgba(255,255,255,0.1)] h-full flex items-center justify-center w-[150px] group hover:bg-[rgba(255,255,255,0.05)] transition-colors"
            >
              <div className="flex flex-col items-center gap-0.5">
                <span className="font-inter text-[16px] text-white tracking-[-0.352px] capitalize">
                  Advisory
                </span>
                <div className="flex items-center justify-center">
                  <div className="rotate-180">
                    <img 
                      src="/images/arrow-down.svg" 
                      alt="Dropdown" 
                      className="h-0 w-[64px]"
                    />
                  </div>
                </div>
              </div>
            </Link>

            {/* Newsroom */}
            <Link 
              href="/newsroom" 
              className="border-l border-r border-[rgba(255,255,255,0.1)] h-full flex items-center justify-center w-[150px] group hover:bg-[rgba(255,255,255,0.05)] transition-colors"
            >
              <div className="flex flex-col items-center gap-0.5">
                <span className="font-inter text-[16px] text-white tracking-[-0.352px] capitalize">
                  Newsroom
                </span>
                <div className="flex items-center justify-center">
                  <div className="rotate-180">
                    <img 
                      src="/images/arrow-down.svg" 
                      alt="Dropdown" 
                      className="h-0 w-[64px]"
                    />
                  </div>
                </div>
              </div>
            </Link>
          </div>

          {/* Get In Touch Button */}
          <div className="border-r border-[rgba(255,255,255,0.1)] h-full flex items-center justify-center w-[150px]">
            <div className="flex flex-col items-center justify-center w-full">
              <Link 
                href="/contact"
                className="bg-white bg-opacity-95 px-3 py-3 rounded-[10px] flex items-center justify-center hover:bg-opacity-100 transition-all"
              >
                <span className="font-inter text-[16px] text-black tracking-[-0.352px] capitalize leading-[1.2]">
                  Get In Touch
                </span>
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2.5 rounded-[10px] hover:bg-[rgba(255,255,255,0.05)] transition-colors"
          >
            <img 
              src="/images/menu-icon.svg" 
              alt="Menu" 
              className="w-6 h-6"
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 mt-2 backdrop-blur-[15px] bg-[rgba(44,44,44,0.9)] border border-[rgba(255,255,255,0.1)] rounded-[20px] p-4">
          <div className="flex flex-col space-y-2">
            <Link href="/llumen" className="text-white py-2 px-4 rounded-lg hover:bg-[rgba(255,255,255,0.1)]">
              Llumen®
            </Link>
            <Link href="/industries" className="text-white py-2 px-4 rounded-lg hover:bg-[rgba(255,255,255,0.1)]">
              Industries
            </Link>
            <Link href="/advisory" className="text-white py-2 px-4 rounded-lg hover:bg-[rgba(255,255,255,0.1)]">
              Advisory
            </Link>
            <Link href="/newsroom" className="text-white py-2 px-4 rounded-lg hover:bg-[rgba(255,255,255,0.1)]">
              Newsroom
            </Link>
            <Link href="/contact" className="text-white py-2 px-4 rounded-lg hover:bg-[rgba(255,255,255,0.1)]">
              Get In Touch
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}