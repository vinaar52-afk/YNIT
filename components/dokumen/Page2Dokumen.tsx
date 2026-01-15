'use client';

import Link from 'next/link';
import ContentLayout from '@/components/layouts/ContentLayout';

export default function Page2Dokumen() {
  return (
    <ContentLayout>
      <img src="/images/dokumen-page2.jpeg" alt="Surat Undangan" className="w-full h-auto object-cover rounded-[12px] mb-8" />
      <h1 className="text-[20px] font-medium mb-4">Surat Undangan (Davetiye) dari Perusahaan/Universitas Turki</h1>
      <p className="text-[15px] leading-[1.75] text-neutral-700 mb-6">
        Surat undangan resmi dari institusi Turki adalah syarat penting untuk visa. Kami memiliki jaringan universitas dan perusahaan partner untuk memudahkan proses davetiye.
      </p>
      <div className="space-y-6 mb-8">
        <div>
          <h3 className="text-[16px] font-medium mb-2">Untuk Apa Digunakan</h3>
          <ul className="text-[15px] leading-[1.75] text-neutral-700 space-y-2">
            <li>• Persyaratan utama visa pelajar</li>
            <li>• Persyaratan visa bisnis/work</li>
            <li>• Dokumen pendukung aplikasi universitas</li>
          </ul>
        </div>
        <div>
          <h3 className="text-[16px] font-medium mb-2">Waktu Proses</h3>
          <p className="text-[15px] leading-[1.75] text-neutral-700">3-7 hari setelah data lengkap</p>
        </div>
        <div>
          <h3 className="text-[16px] font-medium mb-2">Biaya Layanan</h3>
          <p className="text-[15px] leading-[1.75] text-neutral-700">Rp 1.500.000 (termasuk konsultasi)</p>
        </div>
      </div>
      <Link href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
        <button className="btn-primary">Pesan Sekarang</button>
      </Link>
    </ContentLayout>
  );
}
