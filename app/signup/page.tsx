'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useAuth } from '@/lib/useAuth';

export default function SignupPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();
  const { signup, isLoggedIn, isLoading } = useAuth();

  useEffect(() => {
    if (!isLoading && isLoggedIn) {
      router.push('/pesanan-saya');
    }
  }, [isLoggedIn, isLoading, router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (!email || !password || !confirmPassword) {
      setError('Semua field harus diisi');
      return;
    }

    if (!email.includes('@')) {
      setError('Format email tidak valid');
      return;
    }

    if (password.length < 6) {
      setError('Password minimal 6 karakter');
      return;
    }

    if (password !== confirmPassword) {
      setError('Password tidak sama');
      return;
    }

    setIsSubmitting(true);

    try {
      const result = await signup(email, password);
      
      if (result.success) {
        setSuccess(result.message || 'Akun berhasil dibuat!');
        
        // If email confirmation is needed, show message
        if (result.needsConfirmation) {
          setEmail('');
          setPassword('');
          setConfirmPassword('');
        } else {
          // Auto-login successful, redirect
          setTimeout(() => {
            router.push('/pesanan-saya');
          }, 1500);
        }
      } else {
        setError(result.error || 'Gagal membuat akun');
      }
    } catch (err: any) {
      setError(err.message || 'Terjadi kesalahan');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isLoading) {
    return null;
  }

  return (
    <main className="w-full bg-white min-h-screen flex items-center justify-center py-12">
      <div className="max-w-[480px] w-full mx-auto px-4">
        <h1 className="text-[28px] font-medium mb-2 text-center">Daftar</h1>
        <p className="text-[15px] leading-[1.75] text-neutral-700 mb-8 text-center">
          Buat akun untuk memesan layanan kami
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-[12px] text-[15px]">
              {error}
            </div>
          )}

          {success && (
            <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-[12px] text-[15px]">
              {success}
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
              disabled={isSubmitting}
              className="w-full px-4 py-3 border border-neutral-300 rounded-[12px] text-[15px] focus:outline-none focus:ring-2 focus:ring-red-600 disabled:opacity-50"
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
              disabled={isSubmitting}
              className="w-full px-4 py-3 border border-neutral-300 rounded-[12px] text-[15px] focus:outline-none focus:ring-2 focus:ring-red-600 disabled:opacity-50"
              placeholder="Minimal 6 karakter"
            />
          </div>

          <div>
            <label htmlFor="confirmPassword" className="block text-[15px] font-medium mb-2">
              Konfirmasi Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              disabled={isSubmitting}
              className="w-full px-4 py-3 border border-neutral-300 rounded-[12px] text-[15px] focus:outline-none focus:ring-2 focus:ring-red-600 disabled:opacity-50"
              placeholder="Ketik ulang password"
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="btn-primary w-full disabled:opacity-50"
          >
            {isSubmitting ? 'Mendaftar...' : 'Daftar'}
          </button>
        </form>

        <p className="text-[15px] text-center mt-6 text-neutral-700">
          Sudah punya akun?{' '}
          <Link href="/login" className="text-red-600 font-medium hover:underline">
            Masuk
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
