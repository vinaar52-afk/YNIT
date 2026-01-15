'use client';

import Link from 'next/link';
import ContentLayout from '@/components/layouts/ContentLayout';

export default function Page3Dokumen() {
  return (
    <ContentLayout>
      <img src="/images/dokumen-page3.jpeg" alt="Medical Check-up" className="w-full h-auto object-cover rounded-[12px] mb-8" />
      <h1 className="text-[20px] font-medium mb-4">Medical Check-up & Sertifikat Kesehatan Turki</h1>
      <p className="text-[15px] leading-[1.75] text-neutral-700 mb-6">
        Sertifikat kesehatan resmi dari rumah sakit Turki diperlukan untuk visa pelajar. Kami mengatur medical check-up dengan dokter berlisensi di Turki.
      </p>
      <div className="space-y-6 mb-8">
        <div>
          <h3 className="text-[16px] font-medium mb-2">Termasuk Pemeriksaan</h3>
          <ul className="text-[15px] leading-[1.75] text-neutral-700 space-y-2">
            <li>• Medical examination lengkap</li>
            <li>• X-ray & tes darah</li>
            <li>• Sertifikat resmi dari rumah sakit</li>
            <li>• Terjemahan ke bahasa Inggris/Indonesia</li>
          </ul>
        </div>
        <div>
          <h3 className="text-[16px] font-medium mb-2">Waktu Proses</h3>
          <p className="text-[15px] leading-[1.75] text-neutral-700">2-3 hari untuk hasil lengkap</p>
        </div>
        <div>
          <h3 className="text-[16px] font-medium mb-2">Biaya Layanan</h3>
          <p className="text-[15px] leading-[1.75] text-neutral-700">Rp 2.000.000 (termasuk semua tes)</p>
        </div>
      </div>
      <Link href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
        <button className="btn-primary">Jadwalkan Check-up</button>
      </Link>
    </ContentLayout>
  );
}
