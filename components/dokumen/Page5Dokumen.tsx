'use client';

import Link from 'next/link';
import ContentLayout from '@/components/layouts/ContentLayout';

export default function Page5Dokumen() {
  return (
    <ContentLayout>
      <img src="/images/dokumen-page5.jpeg" alt="IELTS Test" className="w-full h-auto object-cover rounded-[12px] mb-8" />
      <h1 className="text-[20px] font-medium mb-4">Tes Bahasa IELTS/TOEFL & Sertifikat Bahasa</h1>
      <p className="text-[15px] leading-[1.75] text-neutral-700 mb-6">
        Sertifikat bahasa Inggris diperlukan untuk studi atau work visa di Turki. Kami menyediakan kursus persiapan dan koordinasi tes bahasa internasional.
      </p>
      <div className="space-y-6 mb-8">
        <div>
          <h3 className="text-[16px] font-medium mb-2">Tes yang Kami Koordinasi</h3>
          <ul className="text-[15px] leading-[1.75] text-neutral-700 space-y-2">
            <li>• IELTS (Academic & General)</li>
            <li>• TOEFL iBT</li>
            <li>• Duolingo English Test</li>
            <li>• PTE Academic</li>
          </ul>
        </div>
        <div>
          <h3 className="text-[16px] font-medium mb-2">Skor Minimal yang Dibutuhkan</h3>
          <p className="text-[15px] leading-[1.75] text-neutral-700">IELTS 5.5-6.5, TOEFL iBT 70-80 (tergantung program)</p>
        </div>
        <div>
          <h3 className="text-[16px] font-medium mb-2">Layanan Kami</h3>
          <p className="text-[15px] leading-[1.75] text-neutral-700">Coaching intensif + jadwal tes + dokumen hasil</p>
        </div>
      </div>
      <Link href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
        <button className="btn-primary">Daftar Persiapan Tes</button>
      </Link>
    </ContentLayout>
  );
}
