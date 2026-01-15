'use client';

import Link from 'next/link';
import ContentLayout from '@/components/layouts/ContentLayout';

export default function Page3Medical() {
  return (
    <ContentLayout>
      <img src="/images/medical-page3.jpeg" alt="Hollywood Smile" className="w-full h-auto object-cover rounded-[12px] mb-8" />
      <h1 className="text-[20px] font-medium mb-4">Hollywood Smile – Senyum Putih & Sempurna</h1>
      <p className="text-[15px] leading-[1.75] text-neutral-700 mb-6">
        Transformasi senyum Anda dengan veneer premium atau crown berkualitas tinggi. Proses cepat, hasil instan, dan tahan bertahun-tahun.
      </p>
      <div className="space-y-6 mb-8">
        <div>
          <h3 className="text-[16px] font-medium mb-2">Material Pilihan</h3>
          <ul className="text-[15px] leading-[1.75] text-neutral-700 space-y-2">
            <li>• Porcelain Veneer</li>
            <li>• Zircon Crown</li>
            <li>• Composite Veneer</li>
            <li>• All-on-4 Implant</li>
          </ul>
        </div>
        <div>
          <h3 className="text-[16px] font-medium mb-2">Waktu Treatment</h3>
          <p className="text-[15px] leading-[1.75] text-neutral-700">3-5 hari untuk hasil sempurna</p>
        </div>
        <div>
          <h3 className="text-[16px] font-medium mb-2">Durasi Material</h3>
          <p className="text-[15px] leading-[1.75] text-neutral-700">10-15 tahun (maintenance berkala diperlukan)</p>
        </div>
      </div>
      <Link href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
        <button className="btn-primary">Desain Senyum Anda</button>
      </Link>
    </ContentLayout>
  );
}
