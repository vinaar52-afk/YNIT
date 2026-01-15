'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useAuth } from '@/lib/useAuth';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();
  const { login, isLoggedIn, isLoading } = useAuth();

  useEffect(() => {
    if (!isLoading && isLoggedIn) {
      router.push('/pesanan-saya');
    }
  }, [isLoggedIn, isLoading, router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!email || !password) {
      setError('Email dan password harus diisi');
      return;
    }

    if (!email.includes('@')) {
      setError('Format email tidak valid');
      return;
    }

    const result = await login(email, password);
    
    if (result.success) {
      router.push('/pesanan-saya');
    } else {
      setError(result.error || 'Login gagal');
    }
  };

  if (isLoading) {
    return null;
  }

  return (
    <main className="w-full bg-white min-h-screen flex items-center justify-center py-12">
      <div className="max-w-[480px] w-full mx-auto px-4">
        <h1 className="text-[28px] font-medium mb-2 text-center">Masuk</h1>
        <p className="text-[15px] leading-[1.75] text-neutral-700 mb-8 text-center">
          Masuk untuk melihat pesanan dan keranjang Anda
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-[12px] text-[15px]">
              {error}
            </div>
          )}

          <div>
            <label htmlFor="email" className="block text-[15px] font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 border border-neutral-300 rounded-[12px] text-[15px] focus:outline-none focus:ring-2 focus:ring-red-600"
              placeholder="email@contoh.com"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-[15px] font-medium mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 border border-neutral-300 rounded-[12px] text-[15px] focus:outline-none focus:ring-2 focus:ring-red-600"
              placeholder="Masukkan password"
            />
          </div>

          <button
            type="submit"
            className="btn-primary w-full"
          >
            Masuk
          </button>
        </form>

        <p className="text-[15px] text-center mt-6 text-neutral-700">
          Belum punya akun?{' '}
          <Link href="/signup" className="text-red-600 font-medium hover:underline">
            Daftar sekarang
          </Link>
        </p>

        <div className="mt-8 text-center">
          <Link href="/" className="text-[15px] text-neutral-600 hover:text-neutral-900">
            ← Kembali ke beranda
          </Link>
        </div>
      </div>
    </main>
  );
}
