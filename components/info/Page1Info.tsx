'use client';

import Image from 'next/image';
import Link from 'next/link';

/**
 * Page1Info - Syarat & Ketentuan Layanan
 * Customer support page for terms and conditions
 * Displays 5 main sections with detailed information
 */
export default function Page1Info() {
  const sections = [
    {
      number: 1,
      title: 'Reservasi & Pembayaran',
      items: [
        'Pemesanan dianggap valid setelah pembayaran diterima dan dikonfirmasi',
        'Tersedia berbagai metode pembayaran: transfer bank, kartu kredit, atau payment gateway',
        'Pembatalan 7 hari sebelum tur: refund 50%',
        'Pembatalan kurang dari 7 hari: non-refundable',
        'Perubahan jadwal tur harus dikonfirmasi minimal 3 hari sebelumnya'
      ]
    },
    {
      number: 2,
      title: 'Durasi & Jadwal',
      items: [
        'Jam mulai tur dapat disesuaikan sesuai kesepakatan saat booking',
        'Durasi tur dapat berubah tergantung kondisi lalu lintas, cuaca, atau permintaan khusus',
        'Overtime dikenakan biaya tambahan per jam sesuai tarif yang berlaku'
      ]
    },
    {
      number: 3,
      title: 'Transportasi',
      items: [
        'Kendaraan sesuai paket disediakan lengkap dengan bahan bakar dan biaya parkir',
        'Pengemudi berpengalaman dan profesional siap melayani perjalanan Anda',
        'Overtime atau penggunaan kendaraan di luar jam normal akan dikenakan biaya tambahan'
      ]
    },
    {
      number: 4,
      title: 'Guide & Layanan Tambahan',
      items: [
        'Guide berbahasa Indonesia tersedia sesuai paket yang dipilih',
        'Fotografer profesional dapat dipesan terpisah dengan biaya tambahan',
        'Layanan khusus lainnya dapat didiskusikan sebelum booking'
      ]
    },
    {
      number: 5,
      title: 'Tanggung Jawab',
      items: [
        'Penumpang bertanggung jawab atas keselamatan diri sendiri dan barang pribadi',
        'Operator tidak bertanggung jawab atas kerugian akibat keadaan di luar kendali (force majeure)',
        'Asuransi perjalanan direkomendasikan untuk perlindungan maksimal'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-80 w-full bg-gradient-to-r from-orange-50 to-white">
        <Image 
          src="/images/terms-condition.jpeg" 
          alt="Syarat & Ketentuan" 
          fill 
          className="object-cover opacity-30" 
        />
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-sans font-bold text-gray-900 mb-4 leading-tight tracking-tight">
              Syarat &amp; Ketentuan Layanan
            </h1>
            <p className="text-lg md:text-xl text-gray-700 font-medium leading-relaxed max-w-3xl">
              Private Tour
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Introduction */}
          <div className="mb-12 pb-12 border-b border-gray-200">
            <p className="text-lg text-gray-700 leading-relaxed font-normal">
              Terima kasih telah memilih layanan private tour kami. Sebelum memulai perjalanan impian Anda, 
              harap membaca dan memahami syarat &amp; ketentuan berikut. Dengan melakukan pemesanan, 
              Anda setuju untuk mematuhi semua ketentuan yang berlaku.
            </p>
          </div>

          {/* Terms Sections */}
          {sections.map((section) => (
            <section key={section.number} className="mb-12">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-sans font-bold text-gray-900 mb-6 leading-tight">
                {section.number}. {section.title}
              </h2>
              <ul className="space-y-4">
                {section.items.map((item, idx) => (
                  <li key={idx} className="flex gap-4">
                    <span className="text-red-600 font-bold text-xl mt-1">•</span>
                    <p className="text-base md:text-lg text-gray-700 leading-relaxed font-normal">
                      {item}
                    </p>
                  </li>
                ))}
              </ul>
            </section>
          ))}

          {/* CTA Button */}
          <div className="py-12 text-center border-t border-gray-200 mt-12">
            <Link href="/booking">
              <button className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-lg transition-colors duration-200 text-base md:text-lg">
                Saya Mengerti &amp; Setuju dengan Syarat
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
