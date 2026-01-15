'use client';

import Link from 'next/link';
import ContentLayout from '@/components/layouts/ContentLayout';

export default function Page1Medical() {
  return (
    <ContentLayout>
      <img src="/images/medical-page1.jpeg" alt="Hair Transplant" className="w-full h-auto object-cover rounded-[12px] mb-8" />
      <h1 className="text-[20px] font-medium mb-4">Hair Transplant – Rambut Lebat & Natural Seumur Hidup</h1>
      <p className="text-[15px] leading-[1.75] text-neutral-700 mb-6">
        Transplantasi rambut dengan teknologi FUE terdepan dari dokter spesialis berpengalaman internasional. Hasil natural, permanent, dan dapat Anda gaya sesuai keinginan.
      </p>
      <div className="space-y-6 mb-8">
        <div>
          <h3 className="text-[16px] font-medium mb-2">Teknologi yang Digunakan</h3>
          <ul className="text-[15px] leading-[1.75] text-neutral-700 space-y-2">
            <li>• FUE (Follicular Unit Extraction)</li>
            <li>• DHI (Direct Hair Implantation)</li>
            <li>• Robotic-Assisted Transplant</li>
          </ul>
        </div>
        <div>
          <h3 className="text-[16px] font-medium mb-2">Durasi Prosedur</h3>
          <p className="text-[15px] leading-[1.75] text-neutral-700">4-8 jam tergantung grafts yang diperlukan</p>
        </div>
        <div>
          <h3 className="text-[16px] font-medium mb-2">Hasil Terlihat</h3>
          <p className="text-[15px] leading-[1.75] text-neutral-700">3-4 bulan mulai tumbuh, hasil optimal 12 bulan</p>
        </div>
      </div>
      <Link href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
        <button className="btn-primary">Konsultasi Gratis</button>
      </Link>
    </ContentLayout>
  );
}
