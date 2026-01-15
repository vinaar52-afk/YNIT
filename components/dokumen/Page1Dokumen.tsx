'use client';

import Link from 'next/link';
import ContentLayout from '@/components/layouts/ContentLayout';

export default function Page1Dokumen(): JSX.Element {
  return (
    <ContentLayout>
      <img src="/images/dokumen-page1.jpeg" alt="Visa Turki" className="w-full h-auto object-cover rounded-[12px] mb-8" />
      <h1 className="text-[20px] font-medium mb-4">Visa Turki: Panduan Lengkap & Proses Aplikasi Mudah</h1>
      <p className="text-[15px] leading-[1.75] text-neutral-700 mb-6">
        Dapatkan visa Turki dengan mudah melalui proses aplikasi yang transparan dan cepat. Kami membantu persiapan dokumen, konsultasi, dan follow-up hingga visa Anda disetujui.
      </p>
      <div className="space-y-6 mb-8">
        <div>
          <h3 className="text-[16px] font-medium mb-2">Jenis Visa yang Kami Bantu</h3>
          <ul className="text-[15px] leading-[1.75] text-neutral-700 space-y-2">
            <li>• Tourist Visa</li>
            <li>• Student Visa</li>
            <li>• Work Visa</li>
            <li>• Residence Permit</li>
            <li>• Business Visa</li>
          </ul>
        </div>
        <div>
          <h3 className="text-[16px] font-medium mb-2">Waktu Proses</h3>
          <p className="text-[15px] leading-[1.75] text-neutral-700">5-10 hari kerja untuk sebagian besar aplikasi visa</p>
        </div>
        <div>
          <h3 className="text-[16px] font-medium mb-2">Biaya Layanan</h3>
          <p className="text-[15px] leading-[1.75] text-neutral-700">Mulai dari Rp 2.500.000 (belum termasuk visa fee resmi)</p>
        </div>
      </div>
      <Link href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
        <button className="btn-primary">Konsultasi Gratis</button>
      </Link>
    </ContentLayout>
  );
}
