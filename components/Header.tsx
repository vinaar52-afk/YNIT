'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#111]/95 backdrop-blur-sm border-b border-[#2a2a2a]' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-[#22D3EE] hover:text-[#06B6D4] transition-colors">
          YNIT
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8">
          <Link href="/tour" className="text-[#f7f7f7] hover:text-[#22D3EE] transition-colors font-medium">
            Tour
          </Link>
          <Link href="/dokumen" className="text-[#f7f7f7] hover:text-[#22D3EE] transition-colors font-medium">
            Dokumen
          </Link>
          <Link href="/study" className="text-[#f7f7f7] hover:text-[#22D3EE] transition-colors font-medium">
            Study
          </Link>
          <Link href="/medical" className="text-[#f7f7f7] hover:text-[#22D3EE] transition-colors font-medium">
            Medical
          </Link>
        </div>

        <div className="hidden md:flex gap-4">
          <Link href="/booking" className="btn-neon text-sm">
            Booking
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-[#22D3EE]"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#111]/95 border-t border-[#2a2a2a]">
          <div className="px-4 sm:px-6 py-4 space-y-4">
            <Link href="/tour" className="block text-[#f7f7f7] hover:text-[#22D3EE] transition-colors">
              Tour
            </Link>
            <Link href="/dokumen" className="block text-[#f7f7f7] hover:text-[#22D3EE] transition-colors">
              Dokumen
            </Link>
            <Link href="/study" className="block text-[#f7f7f7] hover:text-[#22D3EE] transition-colors">
              Study
            </Link>
            <Link href="/medical" className="block text-[#f7f7f7] hover:text-[#22D3EE] transition-colors">
              Medical
            </Link>
            <Link href="/booking" className="block btn-neon text-sm inline-block">
              Booking
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
