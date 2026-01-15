'use client';

import Link from 'next/link';
import ContentLayout from '@/components/layouts/ContentLayout';

export default function Page4Dokumen() {
  return (
    <ContentLayout>
      <img src="/images/dokumen-page4.jpeg" alt="Bank Statement" className="w-full h-auto object-cover rounded-[12px] mb-8" />
      <h1 className="text-[20px] font-medium mb-4">Bukti Keuangan & Bank Statement untuk Visa</h1>
      <p className="text-[15px] leading-[1.75] text-neutral-700 mb-6">
        Bank statement yang kuat adalah kunci approval visa. Kami membantu menyiapkan dokumen keuangan dengan benar sesuai standar konsulat Turki.
      </p>
      <div className="space-y-6 mb-8">
        <div>
          <h3 className="text-[16px] font-medium mb-2">Dokumen yang Kami Siapkan</h3>
          <ul className="text-[15px] leading-[1.75] text-neutral-700 space-y-2">
            <li>• Bank statement 3-6 bulan terakhir</li>
            <li>• Surat referensi dari bank</li>
            <li>• Surat penjamin (jika diperlukan)</li>
            <li>• Notarized financial documents</li>
          </ul>
        </div>
        <div>
          <h3 className="text-[16px] font-medium mb-2">Persyaratan Minimum</h3>
          <p className="text-[15px] leading-[1.75] text-neutral-700">Saldo minimal USD 10,000-15,000 (bisa diatur dengan sponsor)</p>
        </div>
        <div>
          <h3 className="text-[16px] font-medium mb-2">Layanan Konsultasi</h3>
          <p className="text-[15px] leading-[1.75] text-neutral-700">Gratis konsultasi untuk strategi presentasi dokumen keuangan</p>
        </div>
      </div>
      <Link href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
        <button className="btn-primary">Konsultasi Keuangan</button>
      </Link>
    </ContentLayout>
  );
}
