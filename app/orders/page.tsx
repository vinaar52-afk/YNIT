'use client';

import Link from 'next/link';

/**
 * /app/orders/page.tsx
 * Pesanan Saya (My Orders) page
 * Placeholder for tracking customer orders
 * Siap untuk integrasi login dan tracking nanti
 */

export default function OrdersPage() {
  return (
    <main className="min-h-screen bg-white pt-20">
      {/* Hero Section */}
      <section className="py-12 md:py-20 px-4 md:px-8 bg-gradient-to-b from-red-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Pesanan <span className="text-red-600">Saya</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Kelola dan pantau semua pesanan Anda di satu tempat
          </p>
        </div>
      </section>

      {/* Empty State / Login Prompt */}
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-2xl mx-auto">
          <div className="bg-gray-50 rounded-lg border-2 border-dashed border-gray-300 p-12 text-center">
            <div className="text-6xl mb-4">📦</div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Belum Ada Pesanan</h2>
            <p className="text-gray-600 mb-8">
              Silakan login untuk melihat riwayat pesanan dan melacak status pengiriman Anda.
            </p>
            
            <div className="space-y-3">
              <p className="text-sm text-gray-500 mb-6">Fitur login dan tracking sedang dalam pengembangan.</p>
              <Link href="/">
                <button className="btn-primary">
                  Kembali ke Beranda
                </button>
              </Link>
            </div>
          </div>

          {/* Info Box */}
          <div className="mt-12 bg-blue-50 rounded-lg border border-blue-200 p-8">
            <h3 className="text-lg font-bold text-gray-900 mb-3">Fitur Coming Soon</h3>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li>✅ Pantau status pesanan real-time</li>
              <li>✅ Riwayat pembelian lengkap</li>
              <li>✅ Notifikasi update pesanan</li>
              <li>✅ Customer support chat</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
