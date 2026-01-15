'use client';

import Link from 'next/link';
import ContentLayout from '@/components/layouts/ContentLayout';

export default function Page2Medical() {
  return (
    <ContentLayout>
      <img src="/images/medical-page2.jpeg" alt="Rhinoplasty" className="w-full h-auto object-cover rounded-[12px] mb-8" />
      <h1 className="text-[20px] font-medium mb-4">Rhinoplasty – Hidung Proporsional & Percaya Diri</h1>
      <p className="text-[15px] leading-[1.75] text-neutral-700 mb-6">
        Perbaiki bentuk hidung dengan presisi tinggi oleh dokter bedah plastik berpengalaman. Hasil natural dan sesuai proporsi wajah Anda.
      </p>
      <div className="space-y-6 mb-8">
        <div>
          <h3 className="text-[16px] font-medium mb-2">Metode Operasi</h3>
          <ul className="text-[15px] leading-[1.75] text-neutral-700 space-y-2">
            <li>• Open Rhinoplasty</li>
            <li>• Closed Rhinoplasty</li>
            <li>• Revision Rhinoplasty</li>
            <li>• Non-Surgical (Filler)</li>
          </ul>
        </div>
        <div>
          <h3 className="text-[16px] font-medium mb-2">Durasi Operasi</h3>
          <p className="text-[15px] leading-[1.75] text-neutral-700">2-3 jam dengan anestesi lokal/umum</p>
        </div>
        <div>
          <h3 className="text-[16px] font-medium mb-2">Pemulihan</h3>
          <p className="text-[15px] leading-[1.75] text-neutral-700">1-2 minggu untuk aktivitas normal, hasil optimal 3 bulan</p>
        </div>
      </div>
      <Link href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
        <button className="btn-primary">Konsultasi Desain Hidung</button>
      </Link>
    </ContentLayout>
  );
}
