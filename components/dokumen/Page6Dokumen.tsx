'use client';

import Link from 'next/link';
import ContentLayout from '@/components/layouts/ContentLayout';

export default function Page6Dokumen() {
  return (
    <ContentLayout>
      <img src="/images/dokumen-page6.jpeg" alt="Document Translation" className="w-full h-auto object-cover rounded-[12px] mb-8" />
      <h1 className="text-[20px] font-medium mb-4">Terjemahan & Notarisasi Dokumen Resmi</h1>
      <p className="text-[15px] leading-[1.75] text-neutral-700 mb-6">
        Semua dokumen harus diterjemahkan ke bahasa Turki atau Inggris dan dinotarisasi. Kami bekerja dengan penerjemah tersertifikasi dan notaris resmi.
      </p>
      <div className="space-y-6 mb-8">
        <div>
          <h3 className="text-[16px] font-medium mb-2">Dokumen yang Diterjemahkan</h3>
          <ul className="text-[15px] leading-[1.75] text-neutral-700 space-y-2">
            <li>• Diploma & Transkrip</li>
            <li>• Akta Kelahiran</li>
            <li>• Surat Nikah</li>
            <li>• Sertifikat Kesehatan</li>
            <li>• Dokumen Lainnya</li>
          </ul>
        </div>
        <div>
          <h3 className="text-[16px] font-medium mb-2">Waktu Proses</h3>
          <p className="text-[15px] leading-[1.75] text-neutral-700">2-5 hari sesuai volume dokumen</p>
        </div>
        <div>
          <h3 className="text-[16px] font-medium mb-2">Harga Per Halaman</h3>
          <p className="text-[15px] leading-[1.75] text-neutral-700">Rp 75,000 (terjemahan) + Rp 50,000 (notarisasi per halaman)</p>
        </div>
      </div>
      <Link href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
        <button className="btn-primary">Pesan Terjemahan</button>
      </Link>
    </ContentLayout>
  );
}
