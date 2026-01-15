'use client';

import Link from 'next/link';
import ContentLayout from '@/components/layouts/ContentLayout';

export default function Page5Study() {
  return (
    <ContentLayout>
      <img src="/images/study-page5.jpeg" alt="Dokumen & Persiapan Study Visa" className="w-full h-auto object-cover rounded-[12px] mb-8" />
      <h1 className="text-[20px] font-medium mb-4">Dokumen & Persiapan Study Visa – Sukses dari Awal</h1>
      <p className="text-[15px] leading-[1.75] text-neutral-700 mb-6">
        Persiapan dokumen studi visa yang tepat adalah kunci kesuksesan. Kami membimbing setiap langkah dari pemilihan universitas hingga approval visa.
      </p>
      <div className="space-y-6 mb-8">
        <div>
          <h3 className="text-[16px] font-medium mb-2">Dokumen yang Kami Siapkan</h3>
          <ul className="text-[15px] leading-[1.75] text-neutral-700 space-y-2">
            <li>• University Application</li>
            <li>• LOA (Letter of Acceptance)</li>
            <li>• Student Visa Documents</li>
            <li>• Financial Proof & Bank Statement</li>
            <li>• Health Certificate & Insurance</li>
          </ul>
        </div>
        <div>
          <h3 className="text-[16px] font-medium mb-2">Timeline Lengkap</h3>
          <p className="text-[15px] leading-[1.75] text-neutral-700">3-4 bulan dari aplikasi hingga visa approval</p>
        </div>
        <div>
          <h3 className="text-[16px] font-medium mb-2">Dukungan Penuh</h3>
          <p className="text-[15px] leading-[1.75] text-neutral-700">Konsultasi gratis + follow-up hingga berangkat</p>
        </div>
      </div>
      <Link href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
        <button className="btn-primary">Mulai Persiapan</button>
      </Link>
    </ContentLayout>
  );
}
