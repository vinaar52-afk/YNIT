'use client';

import Link from 'next/link';
import ContentLayout from '@/components/layouts/ContentLayout';

export default function Page4Study() {
  return (
    <ContentLayout>
      <img src="/images/study-page4.jpeg" alt="Internship & Work Experience" className="w-full h-auto object-cover rounded-[12px] mb-8" />
      <h1 className="text-[20px] font-medium mb-4">Internship & Work Experience – Bangun Karir di Turki</h1>
      <p className="text-[15px] leading-[1.75] text-neutral-700 mb-6">
        Dapatkan pengalaman kerja profesional melalui program internship di perusahaan-perusahaan terkemuka Turki. Sempurna untuk membangun CV dan networking.
      </p>
      <div className="space-y-6 mb-8">
        <div>
          <h3 className="text-[16px] font-medium mb-2">Jenis Internship</h3>
          <ul className="text-[15px] leading-[1.75] text-neutral-700 space-y-2">
            <li>• Summer Internship (3 bulan)</li>
            <li>• Regular Internship (6 bulan)</li>
            <li>• Full-time Traineeship (12 bulan)</li>
            <li>• Corporate Training Programs</li>
          </ul>
        </div>
        <div>
          <h3 className="text-[16px] font-medium mb-2">Industri Partner</h3>
          <p className="text-[15px] leading-[1.75] text-neutral-700">Perusahaan multinasional, startup, dan BUMN Turki</p>
        </div>
        <div>
          <h3 className="text-[16px] font-medium mb-2">Tunjangan</h3>
          <p className="text-[15px] leading-[1.75] text-neutral-700">Gaji, akomodasi, visa sponsorship tersedia</p>
        </div>
      </div>
      <Link href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
        <button className="btn-primary">Cari Internship</button>
      </Link>
    </ContentLayout>
  );
}
