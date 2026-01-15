'use client';

import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link';

/**
 * Page5Info - FAQ (Frequently Asked Questions)
 * Customer support page with expandable accordion
 * Contains 7 common questions about tour services
 */
export default function Page5Info() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'Apakah harga dihitung per orang atau per mobil?',
      answer: 'Semua paket kami dihitung per mobil, bukan per orang. Ini berarti Anda dapat berbagi biaya dengan keluarga atau teman, semakin banyak penumpang, semakin hemat per orang. Paket dengan guide tertentu mungkin ada biaya tambahan yang akan dijelaskan saat booking.'
    },
    {
      question: 'Apakah bisa request destinasi tertentu atau customize rute?',
      answer: 'Tentu saja! Semua tur kami bersifat privat dan fleksibel. Anda dapat menyesuaikan rute, menambah/mengurangi destinasi, atau meminta aktivitas khusus. Biaya akan disesuaikan tergantung perubahan yang diminta. Hubungi tim kami untuk diskusi lebih detail.'
    },
    {
      question: 'Bagaimana jika tur mengalami keterlambatan karena macet atau cuaca?',
      answer: 'Keterlambatan karena kondisi di luar kendali adalah risiko normal dalam perjalanan. Overtime akan dikenakan biaya tambahan per jam, tetapi driver kami akan proaktif menyesuaikan rute agar semua destinasi utama tetap bisa dikunjungi. Kami prioritaskan kepuasan Anda.'
    },
    {
      question: 'Apakah guide tersedia berbahasa Indonesia?',
      answer: 'Ya, kami menyediakan opsi guide dengan berbagai bahasa termasuk Indonesia. Pilihan mencakup guide mahasiswa Indonesia lokal atau guide Turki yang fasih bahasa Indonesia, tergantung paket yang Anda pilih. Anda bisa memilih preferensi saat booking.'
    },
    {
      question: 'Bagaimana jika saya memerlukan layanan fotografer profesional?',
      answer: 'Fotografer profesional dapat dipesan terpisah dengan biaya tambahan. Paket fotografi kami tersedia dalam durasi 5 jam atau 10 jam, termasuk raw file, 7 foto hasil edit profesional, dan video highlight yang bisa langsung dibagikan di media sosial.'
    },
    {
      question: 'Apakah ada minimum order atau minimum durasi tur?',
      answer: 'Tidak ada minimum durasi ketat, tetapi kebanyakan paket dirancang untuk 8-10 jam. Tur yang lebih singkat dapat diakomodasi dengan biaya yang disesuaikan. Hubungi kami untuk detail lebih lanjut tentang opsi custom.'
    },
    {
      question: 'Apa yang termasuk dalam harga paket?',
      answer: 'Harga sudah termasuk transportasi (kendaraan + bahan bakar + parkir), driver profesional, dan guide (jika paket yang dipilih). Tiket masuk wisata, makanan, dan layanan tambahan bersifat terpisah dan optional sesuai preferensi Anda.'
    }
  ];

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="relative h-80 w-full bg-gradient-to-r from-orange-50 to-white">
        <Image src="/images/faq.jpeg" alt="Pertanyaan Umum" fill className="object-cover opacity-30" />
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-sans font-bold text-gray-900 mb-4 leading-tight tracking-tight">
              Pertanyaan yang Sering Diajukan
            </h1>
            <p className="text-lg md:text-xl text-gray-700 font-medium leading-relaxed max-w-3xl">
              FAQ - Temukan Jawaban Atas Pertanyaan Anda
            </p>
          </div>
        </div>
      </div>

      <div className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 pb-12 border-b border-gray-200">
            <p className="text-lg text-gray-700 leading-relaxed font-normal">
              Temukan jawaban atas pertanyaan-pertanyaan umum tentang layanan private tour kami. 
              Jika pertanyaan Anda belum terjawab, hubungi tim kami kapan saja untuk mendapatkan bantuan lebih lanjut.
            </p>
          </div>

          <section className="space-y-4 mb-12">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-lg overflow-hidden hover:border-red-300 transition-colors"
              >
                <button
                  onClick={() => toggleExpand(index)}
                  className="w-full px-6 py-5 bg-white hover:bg-orange-50 transition-colors text-left flex items-center justify-between"
                >
                  <span className="text-lg md:text-xl font-sans font-bold text-gray-900 pr-4">
                    {faq.question}
                  </span>
                  <span className="text-2xl text-red-600 font-bold flex-shrink-0">
                    {expandedIndex === index ? '−' : '+'}
                  </span>
                </button>

                {expandedIndex === index && (
                  <div className="px-6 py-5 bg-gradient-to-r from-orange-50 to-white border-t border-gray-200">
                    <p className="text-base md:text-lg text-gray-700 leading-relaxed font-normal">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </section>

          <div className="bg-red-50 border border-red-200 rounded-lg p-8 text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-sans font-bold text-gray-900 mb-4">
              Masih Ada Pertanyaan?
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed font-normal mb-6">
              Tim dukungan pelanggan kami siap membantu Anda dengan senang hati. Hubungi kami kapan saja 
              melalui saluran yang tersedia.
            </p>
            <Link href="/info/page6">
              <button className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-200 text-base md:text-lg">
                Hubungi Kami Sekarang
              </button>
            </Link>
          </div>

          <div className="py-12 text-center border-t border-gray-200">
            <Link href="/tour">
              <button className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-lg transition-colors duration-200 text-base md:text-lg">
                Lihat Semua Paket Tur Lengkap
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
