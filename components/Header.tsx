'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useCart } from '@/lib/useCart';
import { useAuth } from '@/lib/useAuth';
import { generateWhatsAppLink } from '@/lib/whatsapp';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isHelpDropdownOpen, setIsHelpDropdownOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const router = useRouter();
  const { user, logout } = useAuth();
  const { itemCount } = useCart(user?.id);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogout = async () => {
    await logout();
    router.push('/');
  };

  const whatsappLink = generateWhatsAppLink(
    '62123456789',
    'Halo, saya ingin tahu lebih lanjut tentang layanan YNIT'
  );

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-sm border-b border-warmGray-200 shadow-soft' : 'bg-white'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <img src="/images/ynit-logo.jpeg" alt="YNIT Logo" className="h-10 w-auto" />
        </Link>

        <div className="hidden md:flex gap-8 items-center">
          <div className="relative group">
            <button 
              onClick={() => setIsServicesDropdownOpen(!isServicesDropdownOpen)}
              className="text-warmBlack hover:text-warmRed transition-colors font-medium text-sm flex items-center gap-1"
            >
              Jasa Kami
              <svg className={`w-4 h-4 transition-transform ${isServicesDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </button>
            {isServicesDropdownOpen && (
              <div className="absolute left-0 mt-2 w-56 bg-white rounded-2xl shadow-soft border border-warmGray-200 py-2 z-50">
                <Link href="/tour" className="block px-4 py-2.5 text-warmBlack hover:bg-warmGray-50 hover:text-warmRed transition-colors border-l-4 border-transparent hover:border-warmRed font-medium text-sm">
                  Tur & Travel
                </Link>
                <Link href="/study" className="block px-4 py-2.5 text-warmBlack hover:bg-warmGray-50 hover:text-warmRed transition-colors border-l-4 border-transparent hover:border-warmRed font-medium text-sm">
                  Study di Turki
                </Link>
                <Link href="/dokumen" className="block px-4 py-2.5 text-warmBlack hover:bg-warmGray-50 hover:text-warmRed transition-colors border-l-4 border-transparent hover:border-warmRed font-medium text-sm">
                  Dokumen & Visa
                </Link>
                <Link href="/medical-aesthetic" className="block px-4 py-2.5 text-warmBlack hover:bg-warmGray-50 hover:text-warmRed transition-colors border-l-4 border-transparent hover:border-warmRed font-medium text-sm">
                  Medical Aesthetic
                </Link>
              </div>
            )}
          </div>

          <div className="relative group">
            <button 
              onClick={() => setIsHelpDropdownOpen(!isHelpDropdownOpen)}
              className="text-warmBlack hover:text-warmRed transition-colors font-medium text-sm flex items-center gap-1"
            >
              Bantuan
              <svg className={`w-4 h-4 transition-transform ${isHelpDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </button>
            {isHelpDropdownOpen && (
              <div className="absolute right-0 mt-2 w-64 bg-white rounded-2xl shadow-soft border border-warmGray-200 py-2 z-50">
                <Link href="/info/page1" className="block px-4 py-2.5 text-warmBlack hover:bg-blue-50 hover:text-blue-600 transition-colors border-l-4 border-transparent hover:border-blue-400">
                  <div className="font-semibold text-sm">Syarat & Ketentuan</div>
                  <div className="text-xs text-warmGray-600">Persyaratan layanan</div>
                </Link>
                <Link href="/info/page2" className="block px-4 py-2.5 text-warmBlack hover:bg-blue-50 hover:text-blue-600 transition-colors border-l-4 border-transparent hover:border-blue-400">
                  <div className="font-semibold text-sm">Panduan Perjalanan</div>
                  <div className="text-xs text-warmGray-600">Tips & destinasi wisata</div>
                </Link>
                <Link href="/info/page3" className="block px-4 py-2.5 text-warmBlack hover:bg-blue-50 hover:text-blue-600 transition-colors border-l-4 border-transparent hover:border-blue-400">
                  <div className="font-semibold text-sm">Formulir Pemesanan</div>
                  <div className="text-xs text-warmGray-600">Cara memesan</div>
                </Link>
                <Link href="/info/page4" className="block px-4 py-2.5 text-warmBlack hover:bg-blue-50 hover:text-blue-600 transition-colors border-l-4 border-transparent hover:border-blue-400">
                  <div className="font-semibold text-sm">Informasi Pembayaran</div>
                  <div className="text-xs text-warmGray-600">Metode pembayaran</div>
                </Link>
                <Link href="/info/page5" className="block px-4 py-2.5 text-warmBlack hover:bg-blue-50 hover:text-blue-600 transition-colors border-l-4 border-transparent hover:border-blue-400">
                  <div className="font-semibold text-sm">FAQ</div>
                  <div className="text-xs text-warmGray-600">Pertanyaan umum</div>
                </Link>
                <Link href="/info/page6" className="block px-4 py-2.5 text-warmBlack hover:bg-blue-50 hover:text-blue-600 transition-colors border-l-4 border-transparent hover:border-blue-400">
                  <div className="font-semibold text-sm">Kontak & Dukungan</div>
                  <div className="text-xs text-warmGray-600">Hubungi kami</div>
                </Link>
              </div>
            )}
          </div>
        </div>

        <div className="flex items-center gap-4">
          {mounted && (
            <Link href="/pesanan-saya" className="relative">
              <button className="p-2 hover:bg-neutral-100 rounded-full transition-colors">
                <svg className="w-6 h-6 text-neutral-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
                {itemCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-600 text-white text-[11px] font-medium w-5 h-5 rounded-full flex items-center justify-center">
                    {itemCount}
                  </span>
                )}
              </button>
            </Link>
          )}

          {mounted && (
            user ? (
              <div className="flex items-center gap-3">
                <Link href="/pesanan-saya" className="text-[14px] font-medium text-neutral-700 hover:text-neutral-900">
                  {user.email.split('@')[0]}
                </Link>
                <button onClick={handleLogout} className="text-[14px] font-medium text-red-600 hover:text-red-800">
                  Keluar
                </button>
              </div>
            ) : (
              <Link href="/login">
                <button className="btn-secondary text-[14px] px-4 py-2">Masuk</button>
              </Link>
            )
          )}

          <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
            <button className="btn-primary text-sm px-4 py-2">💬 Chat dengan Kami</button>
          </a>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 hover:bg-warmGray-50 rounded-lg transition-colors"
          >
            <svg className="w-6 h-6 text-warmBlack" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-warmGray-200 shadow-soft">
          <div className="max-w-7xl mx-auto px-4 py-4 space-y-3">
            <div>
              <button 
                onClick={() => setIsServicesDropdownOpen(!isServicesDropdownOpen)}
                className="w-full text-left text-warmBlack hover:text-warmRed transition-colors font-medium text-sm flex items-center justify-between"
              >
                Jasa Kami
                <svg className={`w-4 h-4 transition-transform ${isServicesDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </button>
              {isServicesDropdownOpen && (
                <div className="mt-2 ml-4 space-y-2 border-l-4 border-warmRed pl-4">
                  <Link href="/tour" className="block text-warmBlack hover:text-warmRed transition-colors text-xs font-medium">
                    Tur & Travel
                  </Link>
                  <Link href="/study" className="block text-warmBlack hover:text-warmRed transition-colors text-xs font-medium">
                    Study di Turki
                  </Link>
                  <Link href="/dokumen" className="block text-warmBlack hover:text-warmRed transition-colors text-xs font-medium">
                    Dokumen & Visa
                  </Link>
                  <Link href="/medical-aesthetic" className="block text-warmBlack hover:text-warmRed transition-colors text-xs font-medium">
                    Medical Aesthetic
                  </Link>
                </div>
              )}
            </div>

            <Link href="/pesanan-saya" className="block text-warmBlack hover:text-warmRed transition-colors font-medium text-sm">
              Pesanan Saya
            </Link>

            <div>
              <button 
                onClick={() => setIsHelpDropdownOpen(!isHelpDropdownOpen)}
                className="w-full text-left text-warmBlack hover:text-warmRed transition-colors font-medium text-sm flex items-center justify-between"
              >
                Bantuan
                <svg className={`w-4 h-4 transition-transform ${isHelpDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </button>
              {isHelpDropdownOpen && (
                <div className="mt-2 ml-4 space-y-2 border-l-4 border-blue-400 pl-4">
                  <Link href="/info/page1" className="block text-warmBlack hover:text-blue-600 transition-colors text-xs font-medium">
                    Syarat & Ketentuan
                  </Link>
                  <Link href="/info/page2" className="block text-warmBlack hover:text-blue-600 transition-colors text-xs font-medium">
                    Panduan Perjalanan
                  </Link>
                  <Link href="/info/page3" className="block text-warmBlack hover:text-blue-600 transition-colors text-xs font-medium">
                    Formulir Pemesanan
                  </Link>
                  <Link href="/info/page4" className="block text-warmBlack hover:text-blue-600 transition-colors text-xs font-medium">
                    Informasi Pembayaran
                  </Link>
                  <Link href="/info/page5" className="block text-warmBlack hover:text-blue-600 transition-colors text-xs font-medium">
                    FAQ
                  </Link>
                  <Link href="/info/page6" className="block text-warmBlack hover:text-blue-600 transition-colors text-xs font-medium">
                    Kontak & Dukungan
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
