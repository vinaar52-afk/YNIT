'use client';

import Image from 'next/image';
import Link from 'next/link';

/**
 * Page6Info - Kontak & Dukungan Pelanggan
 * Customer support page with contact information
 * Includes WhatsApp, Email, social media, and quick message form
 */
export default function Page6Info() {
  const socialMedia = [
    {
      name: 'Instagram',
      handle: '@yourneedinturkey',
      icon: '📸',
      url: 'https://instagram.com/yourneedinturkey',
      description: 'Galeri foto destinasi, tips travel, dan behind-the-scenes'
    },
    {
      name: 'Facebook',
      handle: 'YourNeedinTurkey Official',
      icon: '👥',
      url: 'https://facebook.com/yourneedinturkey',
      description: 'Update terbaru, promo, dan testimoni pelanggan'
    },
    {
      name: 'TikTok',
      handle: '@yourneedinturkey',
      icon: '🎬',
      url: 'https://tiktok.com/@yourneedinturkey',
      description: 'Video petualangan, tips praktis, dan konten viral'
    }
  ];

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert('Pesan Anda telah terkirim. Tim kami akan menghubungi Anda segera!');
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="relative h-80 w-full bg-gradient-to-r from-orange-50 to-white">
        <Image src="/images/contact-support.jpeg" alt="Kontak & Bantuan" fill className="object-cover opacity-30" />
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-sans font-bold text-gray-900 mb-4 leading-tight tracking-tight">
              Kontak &amp; Dukungan Pelanggan
            </h1>
            <p className="text-lg md:text-xl text-gray-700 font-medium leading-relaxed max-w-3xl">
              Tim Kami Siap Membantu Anda 24/7
            </p>
          </div>
        </div>
      </div>

      <div className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 pb-12 border-b border-gray-200">
            <p className="text-lg text-gray-700 leading-relaxed font-normal">
              Tim kami siap membantu Anda 24/7 untuk menjawab pertanyaan, memberikan rekomendasi, 
              atau menangani kebutuhan khusus. Jangan ragu untuk menghubungi kami melalui saluran berikut. 
              Respons cepat dalam 30 menit (jam kerja) dijamin!
            </p>
          </div>

          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-sans font-bold text-gray-900 mb-8 leading-tight">
              Informasi Kontak Utama
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="bg-gradient-to-br from-green-50 to-white border border-green-200 rounded-lg p-8 hover:shadow-lg transition-shadow">
                <div className="text-5xl mb-4">💬</div>
                <h3 className="text-2xl font-sans font-bold text-gray-900 mb-3">WhatsApp</h3>
                <p className="text-gray-600 text-sm font-semibold mb-3">FASTEST RESPONSE</p>
                <p className="text-3xl font-bold text-green-600 mb-4">+62 ...</p>
                <p className="text-base text-gray-700 leading-relaxed font-normal mb-4">
                  Chat langsung dengan tim kami untuk pertanyaan cepat dan booking instant.
                </p>
                <a
                  href="https://wa.me/62"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-green-600 font-bold hover:text-green-700 transition-colors"
                >
                  Buka WhatsApp →
                </a>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-white border border-blue-200 rounded-lg p-8 hover:shadow-lg transition-shadow">
                <div className="text-5xl mb-4">✉️</div>
                <h3 className="text-2xl font-sans font-bold text-gray-900 mb-3">Email</h3>
                <p className="text-gray-600 text-sm font-semibold mb-3">UNTUK PERTANYAAN DETAIL</p>
                <p className="text-xl font-bold text-blue-600 mb-4 break-all">info@yourneedinturkey.com</p>
                <p className="text-base text-gray-700 leading-relaxed font-normal mb-4">
                  Untuk pertanyaan detail, feedback, atau keluhan formal. Response dalam 2-4 jam.
                </p>
                <a
                  href="mailto:info@yourneedinturkey.com"
                  className="inline-block text-blue-600 font-bold hover:text-blue-700 transition-colors"
                >
                  Kirim Email →
                </a>
              </div>
            </div>

            <div className="bg-orange-50 border border-orange-200 rounded-lg p-8">
              <h4 className="text-xl font-sans font-bold text-gray-900 mb-4">Jam Operasional</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <p className="text-lg font-bold text-gray-900 mb-2">Senin – Minggu</p>
                  <p className="text-2xl font-bold text-red-600">08:00 – 20:00 WIB</p>
                </div>
                <div>
                  <p className="text-lg font-bold text-gray-900 mb-2">Untuk Emergency</p>
                  <p className="text-base text-gray-700">Support 24/7 tersedia via WhatsApp</p>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-12 pb-12 border-b border-gray-200">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-sans font-bold text-gray-900 mb-8 leading-tight">
              Ikuti Kami di Media Sosial
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {socialMedia.map((social, idx) => (
                <a
                  key={idx}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg hover:border-red-300 transition-all"
                >
                  <div className="text-5xl mb-4">{social.icon}</div>
                  <h3 className="text-xl font-sans font-bold text-gray-900 mb-2">{social.name}</h3>
                  <p className="text-gray-600 font-semibold mb-4">{social.handle}</p>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {social.description}
                  </p>
                </a>
              ))}
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-sans font-bold text-gray-900 mb-8 leading-tight">
              Kirim Pesan Cepat
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6 bg-gray-50 border border-gray-200 rounded-lg p-8">
              <div>
                <label className="block text-lg font-sans font-bold text-gray-900 mb-3">
                  Nama Anda
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent outline-none text-base"
                  placeholder="Masukkan nama Anda"
                />
              </div>

              <div>
                <label className="block text-lg font-sans font-bold text-gray-900 mb-3">
                  Email
                </label>
                <input
                  type="email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent outline-none text-base"
                  placeholder="Masukkan email Anda"
                />
              </div>

              <div>
                <label className="block text-lg font-sans font-bold text-gray-900 mb-3">
                  Pesan
                </label>
                <textarea
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent outline-none text-base resize-none"
                  placeholder="Jelaskan pertanyaan atau kebutuhan Anda..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-6 rounded-lg transition-colors duration-200 text-base md:text-lg"
              >
                Kirim Pesan
              </button>
            </form>
          </section>

          <div className="py-12 text-center border-t border-gray-200">
            <Link href="/booking">
              <button className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-lg transition-colors duration-200 text-base md:text-lg">
                Hubungi Kami Sekarang
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
