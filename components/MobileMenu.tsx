'use client';

import { useState } from 'react';
import Link from 'next/link';
import PixonalIcon from './PixonalIcon';

export default function MobileMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="relative">
      {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2.5 rounded-[10px] hover:bg-[rgba(255,255,255,0.05)] transition-colors"
            title="Toggle menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M21 11.75C21 11.9489 20.921 12.1397 20.7803 12.2803C20.6397 12.421 20.4489 12.5 20.25 12.5H3.75C3.55109 12.5 3.36032 12.421 3.21967 12.2803C3.07902 12.1397 3 11.9489 3 11.75C3 11.5511 3.07902 11.3603 3.21967 11.2197C3.36032 11.079 3.55109 11 3.75 11H20.25C20.4489 11 20.6397 11.079 20.7803 11.2197C20.921 11.3603 21 11.5511 21 11.75ZM20.25 17H3.75C3.55109 17 3.36032 17.079 3.21967 17.2197C3.07902 17.3603 3 17.5511 3 17.75C3 17.9489 3.07902 18.1397 3.21967 18.2803C3.36032 18.421 3.55109 18.5 3.75 18.5H20.25C20.4489 18.5 20.6397 18.421 20.7803 18.2803C20.921 18.1397 21 17.9489 21 17.75C21 17.5511 20.921 17.3603 20.7803 17.2197C20.6397 17.079 20.4489 17 20.25 17Z" fill="#F6F6F6"/>
              <path d="M21 5.75C21 5.94891 20.921 6.13968 20.7803 6.28033C20.6397 6.42098 20.4489 6.5 20.25 6.5H3.75C3.55109 6.5 3.36032 6.42098 3.21967 6.28033C3.07902 6.13968 3 5.94891 3 5.75C3 5.55109 3.07902 5.36032 3.21967 5.21967C3.36032 5.07902 3.55109 5 3.75 5H20.25C20.4489 5 20.6397 5.07902 20.7803 5.21967C20.921 5.36032 21 5.55109 21 5.75ZM20.25 11H3.75C3.55109 11 3.36032 11.079 3.21967 11.2197C3.07902 11.3603 3 11.5511 3 11.75C3 11.9489 3.07902 12.1397 3.21967 12.2803C3.36032 12.421 3.55109 12.5 3.75 12.5H20.25C20.4489 12.5 20.6397 12.421 20.7803 12.2803C20.921 12.1397 21 11.9489 21 11.75C21 11.5511 20.921 11.3603 20.7803 11.2197C20.6397 11.079 20.4489 11 20.25 11Z" fill="#F6F6F6"/>
            </svg>
          </button>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-full right-0 mt-2 backdrop-blur-[15px] bg-[rgba(44,44,44,0.95)] border border-[rgba(255,255,255,0.1)] rounded-[20px] p-6 min-w-[200px] shadow-2xl">
          <div className="flex flex-col space-y-3">
            <Link 
              href="/llumen" 
              className="text-white py-3 px-4 rounded-lg hover:bg-[rgba(255,255,255,0.1)] transition-colors font-untitled-sans text-[16px]"
            >
              Llumen®
            </Link>
            <Link 
              href="/industries" 
              className="text-white py-3 px-4 rounded-lg hover:bg-[rgba(255,255,255,0.1)] transition-colors font-untitled-sans text-[16px]"
            >
              Industries
            </Link>
            <Link 
              href="/advisory" 
              className="text-white py-3 px-4 rounded-lg hover:bg-[rgba(255,255,255,0.1)] transition-colors font-untitled-sans text-[16px]"
            >
              Advisory
            </Link>
            <Link 
              href="/newsroom" 
              className="text-white py-3 px-4 rounded-lg hover:bg-[rgba(255,255,255,0.1)] transition-colors font-untitled-sans text-[16px]"
            >
              Newsroom
            </Link>
            <div className="border-t border-[rgba(255,255,255,0.1)] my-2"></div>
            <Link 
              href="/contact" 
              className="bg-white text-black py-3 px-4 rounded-lg hover:bg-opacity-90 transition-colors font-untitled-sans text-[16px] text-center"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
