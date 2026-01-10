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
        isScrolled ? 'bg-white/95 backdrop-blur-sm border-b border-gray-200' : 'bg-white'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-red-600 hover:text-red-700 transition-colors">
          YNIT
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8">
          <Link href="/tour" className="text-gray-900 hover:text-red-600 transition-colors font-medium border-b-2 border-transparent hover:border-red-600">
            Tour
          </Link>
          <Link href="/dokumen" className="text-gray-900 hover:text-red-600 transition-colors font-medium border-b-2 border-transparent hover:border-red-600">
            Dokumen
          </Link>
          <Link href="/study" className="text-gray-900 hover:text-red-600 transition-colors font-medium border-b-2 border-transparent hover:border-red-600">
            Study
          </Link>
          <Link href="/medical" className="text-gray-900 hover:text-red-600 transition-colors font-medium border-b-2 border-transparent hover:border-red-600">
            Medical
          </Link>
        </div>

        <div className="hidden md:flex gap-4">
          <Link href="/booking" className="btn-primary text-sm">
            Booking
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-red-600"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-4 sm:px-6 py-4 space-y-4">
            <Link href="/tour" className="block text-gray-900 hover:text-red-600 transition-colors">
              Tour
            </Link>
            <Link href="/dokumen" className="block text-gray-900 hover:text-red-600 transition-colors">
              Dokumen
            </Link>
            <Link href="/study" className="block text-gray-900 hover:text-red-600 transition-colors">
              Study
            </Link>
            <Link href="/medical" className="block text-gray-900 hover:text-red-600 transition-colors">
              Medical
            </Link>
            <Link href="/booking" className="block btn-primary text-sm inline-block">
              Booking
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
