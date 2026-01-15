'use client';

import Image from 'next/image';
import Link from 'next/link';

/**
 * Page4Info - Informasi Pembayaran & Metode
 * Customer support page for payment information
 * Includes 3 payment options and important notes
 */
export default function Page4Info() {
  const paymentMethods = [
    {
      title: 'Transfer Bank (Indonesia)',
      icon: '🏦',
      items: [
        'Bank lokal Indonesia dengan rekening terverifikasi',
        'Prosesnya cepat, aman, dan terpercaya',
        'Bukti transfer dikirim via email/WhatsApp untuk konfirmasi'
      ]
    },
    {
      title: 'Kartu Kredit / Debit',
      icon: '💳',
      items: [
        'Visa, Mastercard, JCB accepted',
        'Sistem pembayaran terenkripsi dan terpercaya',
        'Dapat langsung dikonfirmasi real-time'
      ]
    },
    {
      title: 'Payment Gateway Online',
      icon: '💻',
      items: [
        'Midtrans, PayPal, dan platform pembayaran digital lainnya',
        'Proses instant dan mudah dari mana saja',
        'Automatic confirmation setelah transaksi berhasil'
      ]
    }
  ];

  const importantNotes = [
    'Harap upload bukti pembayaran agar reservasi diproses lebih cepat dan akurat',
    'Pembayaran dianggap sah setelah diverifikasi oleh tim kami',
    'Konfirmasi pembayaran biasanya diterima dalam 1-2 jam kerja',
    'Jangan lupa simpan nomor referensi pembayaran Anda untuk keperluan tracking',
    'Semua transaksi dilindungi dengan enkripsi SSL 256-bit untuk keamanan maksimal'
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="relative h-80 w-full bg-gradient-to-r from-orange-50 to-white">
        <Image src="/images/payment-info.jpeg" alt="Informasi Pembayaran" fill className="object-cover opacity-30" />
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-sans font-bold text-gray-900 mb-4 leading-tight tracking-tight">
              Metode Pembayaran &amp; Prosedur
            </h1>
            <p className="text-lg md:text-xl text-gray-700 font-medium leading-relaxed max-w-3xl">
              Aman, Fleksibel, &amp; Terpercaya
            </p>
          </div>
        </div>
      </div>

      <div className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 pb-12 border-b border-gray-200">
            <p className="text-lg text-gray-700 leading-relaxed font-normal">
              Kami menyediakan berbagai metode pembayaran yang aman dan fleksibel untuk kemudahan Anda. 
              Setelah mengisi formulir pemesanan, lakukan pembayaran sesuai pilihan berikut. Semua metode 
              dilindungi dengan enkripsi tingkat tinggi untuk keamanan data Anda.
            </p>
          </div>

          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-sans font-bold text-gray-900 mb-8 leading-tight">
              Metode Pembayaran Tersedia
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {paymentMethods.map((method, idx) => (
                <div key={idx} className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-lg transition-shadow hover:border-red-200">
                  <div className="text-5xl mb-4">{method.icon}</div>
                  <h3 className="text-xl md:text-2xl font-sans font-bold text-gray-900 mb-6">{method.title}</h3>
                  <ul className="space-y-3">
                    {method.items.map((item, itemIdx) => (
                      <li key={itemIdx} className="flex gap-3">
                        <span className="text-red-600 font-bold mt-0.5">✓</span>
                        <p className="text-base text-gray-700 leading-relaxed font-normal">{item}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-12 pb-12 border-b border-gray-200">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-sans font-bold text-gray-900 mb-6 leading-tight">
              Catatan Penting
            </h2>
            <ul className="space-y-4">
              {importantNotes.map((note, idx) => (
                <li key={idx} className="flex gap-4">
                  <span className="text-red-600 font-bold text-xl mt-1">•</span>
                  <p className="text-base md:text-lg text-gray-700 leading-relaxed font-normal">{note}</p>
                </li>
              ))}
            </ul>
          </section>

          <div className="bg-red-50 border border-red-200 rounded-lg p-8 mb-12">
            <h3 className="text-xl md:text-2xl font-sans font-bold text-gray-900 mb-4">
              Pertanyaan tentang Pembayaran?
            </h3>
            <p className="text-base text-gray-700 leading-relaxed font-normal mb-4">
              Tim dukungan pelanggan kami siap membantu Anda 24/7. Hubungi kami melalui:
            </p>
            <ul className="space-y-2">
              <li className="flex gap-3">
                <span className="font-bold text-red-600">WhatsApp:</span>
                <span className="text-gray-700">+62 ...</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-red-600">Email:</span>
                <span className="text-gray-700">info@yourneedinturkey.com</span>
              </li>
            </ul>
          </div>

          <div className="py-12 text-center">
            <Link href="/info/page5">
              <button className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-lg transition-colors duration-200 text-base md:text-lg">
                Lihat Pertanyaan Umum
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
