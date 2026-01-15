'use client';

import Link from 'next/link';
import ContentLayout from '@/components/layouts/ContentLayout';

export default function Page3Study() {
  return (
    <ContentLayout>
      <img src="/images/study-page3.jpeg" alt="Bimbingan Kuliah Mandiri" className="w-full h-auto object-cover rounded-[12px] mb-8" />
      <h1 className="text-[20px] font-medium mb-4">Bimbingan Kuliah Mandiri – Studi Fleksibel</h1>
      <p className="text-[15px] leading-[1.75] text-neutral-700 mb-6">
        Melanjutkan studi sambil bekerja? Program kuliah mandiri kami memungkinkan Anda belajar dengan jadwal fleksibel, tetap mendapat gelar Turki yang diakui internasional.
      </p>
      <div className="space-y-6 mb-8">
        <div>
          <h3 className="text-[16px] font-medium mb-2">Jenjang Program</h3>
          <ul className="text-[15px] leading-[1.75] text-neutral-700 space-y-2">
            <li>• Associate Degree (2 tahun)</li>
            <li>• Bachelor (4 tahun)</li>
            <li>• Master (2 tahun)</li>
            <li>• Online & Offline Mix</li>
          </ul>
        </div>
        <div>
          <h3 className="text-[16px] font-medium mb-2">Keuntungan</h3>
          <p className="text-[15px] leading-[1.75] text-neutral-700">Belajar sambil bekerja, biaya terjangkau, gelar resmi</p>
        </div>
        <div>
          <h3 className="text-[16px] font-medium mb-2">Universitas Partner</h3>
          <p className="text-[15px] leading-[1.75] text-neutral-700">Kerjasama dengan universitas top di Turki</p>
        </div>
      </div>
      <Link href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
        <button className="btn-primary">Info Universitas</button>
      </Link>
    </ContentLayout>
  );
}
