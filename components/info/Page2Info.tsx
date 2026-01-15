'use client';

import Image from 'next/image';
import Link from 'next/link';

/**
 * Page2Info - Panduan Perjalanan & Travel Guide
 * Customer support page with travel tips and destination recommendations
 * Includes preparation checklist and popular destinations
 */
export default function Page2Info() {
  const destinations = [
    { city: 'Istanbul', spots: 'Hagia Sophia, Blue Mosque, Grand Bazaar, Taksim Square, galeri seni, dan kawasan modern' },
    { city: 'Bursa', spots: 'Gunung Uludağ, Green Mosque, Grand Bazaar lokal, pemandian termal' },
    { city: 'Antalya', spots: 'Old Town (Kaleiçi), Hadrian Gate, waterfront marina, pantai indah' },
    { city: 'Trabzon', spots: 'Danau Uzungöl, Sumela Monastery, pemandangan alam spektakuler' },
    { city: 'Sapanca', spots: 'Danau Sapanca, hutan Kartepe, area hijau untuk relaksasi' }
  ];

  const preparationTips = [
    'Kenakan pakaian nyaman dan sesuai dengan cuaca/musim',
    'Bawa air minum, topi, sunscreen, dan kamera untuk dokumentasi',
    'Siapkan tiket masuk wisata atau dokumen identitas jika diperlukan untuk destinasi tertentu',
    'Informasikan kebutuhan khusus, alergi makanan, atau kondisi kesehatan sebelumnya',
    'Hormati budaya dan tradisi lokal di setiap destinasi yang Anda kunjungi'
  ];

  const additionalTips = [
    'Tiba 15 menit lebih awal sebelum tur dimulai untuk persiapan yang lebih baik',
    'Bawa powerbank untuk memastikan perangkat selalu terisi saat berfoto',
    'Tanyakan kepada guide tentang spot foto terbaik dan rekomendasi makan lokal',
    'Nikmati setiap momen dan buat kenangan indah bersama kami tanpa terburu-buru'
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="relative h-80 w-full bg-gradient-to-r from-orange-50 to-white">
        <Image src="/images/travel-guide.jpeg" alt="Panduan Perjalanan" fill className="object-cover opacity-30" />
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-sans font-bold text-gray-900 mb-4 leading-tight tracking-tight">
              Panduan Perjalanan
            </h1>
            <p className="text-lg md:text-xl text-gray-700 font-medium leading-relaxed max-w-3xl">
              Tips &amp; Rekomendasi untuk Pengalaman Tour Terbaik
            </p>
          </div>
        </div>
      </div>

      <div className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 pb-12 border-b border-gray-200">
            <p className="text-lg text-gray-700 leading-relaxed font-normal">
              Buat perjalanan Anda lebih nyaman dan berkesan dengan panduan praktis kami. 
              Ikuti tips berikut untuk pengalaman tour yang optimal dan memorable.
            </p>
          </div>

          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-sans font-bold text-gray-900 mb-6 leading-tight">
              Persiapan Sebelum Tur
            </h2>
            <ul className="space-y-4">
              {preparationTips.map((tip, idx) => (
                <li key={idx} className="flex gap-4">
                  <span className="text-red-600 font-bold text-xl mt-1">✓</span>
                  <p className="text-base md:text-lg text-gray-700 leading-relaxed font-normal">{tip}</p>
                </li>
              ))}
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-sans font-bold text-gray-900 mb-6 leading-tight">
              Destinasi Populer yang Dapat Dikunjungi
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {destinations.map((destination, idx) => (
                <div key={idx} className="bg-gradient-to-br from-orange-50 to-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                  <h3 className="text-xl md:text-2xl font-sans font-bold text-gray-900 mb-3">{destination.city}</h3>
                  <p className="text-base text-gray-700 leading-relaxed font-normal">{destination.spots}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-12 pb-12 border-b border-gray-200">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-sans font-bold text-gray-900 mb-6 leading-tight">
              Tips Tambahan untuk Pengalaman Maksimal
            </h2>
            <ul className="space-y-4">
              {additionalTips.map((tip, idx) => (
                <li key={idx} className="flex gap-4">
                  <span className="text-red-600 font-bold text-xl mt-1">💡</span>
                  <p className="text-base md:text-lg text-gray-700 leading-relaxed font-normal">{tip}</p>
                </li>
              ))}
            </ul>
          </section>

          <div className="py-12 text-center">
            <Link href="/info/page3">
              <button className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-lg transition-colors duration-200 text-base md:text-lg">
                Pesan Tour Anda Sekarang
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
