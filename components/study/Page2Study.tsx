'use client';

import Link from 'next/link';
import ContentLayout from '@/components/layouts/ContentLayout';

export default function Page2Study() {
  return (
    <ContentLayout>
      <img src="/images/study-page2.jpeg" alt="Kursus Keahlian Khusus" className="w-full h-auto object-cover rounded-[12px] mb-8" />
      <h1 className="text-[20px] font-medium mb-4">Kursus Keahlian Khusus – Tingkatkan Skill Profesional</h1>
      <p className="text-[15px] leading-[1.75] text-neutral-700 mb-6">
        Pelajari skills khusus yang relevan dengan industri, mulai dari IT, bisnis, desain, hingga marketing. Kursus kami didesain sesuai kebutuhan pasar kerja Turki dan internasional.
      </p>
      <div className="space-y-6 mb-8">
        <div>
          <h3 className="text-[16px] font-medium mb-2">Bidang Kursus</h3>
          <ul className="text-[15px] leading-[1.75] text-neutral-700 space-y-2">
            <li>• IT & Programming</li>
            <li>• Digital Marketing & Social Media</li>
            <li>• Graphic Design & UI/UX</li>
            <li>• Business Management & Leadership</li>
          </ul>
        </div>
        <div>
          <h3 className="text-[16px] font-medium mb-2">Sertifikasi</h3>
          <p className="text-[15px] leading-[1.75] text-neutral-700">Sertifikat resmi setelah menyelesaikan program</p>
        </div>
        <div>
          <h3 className="text-[16px] font-medium mb-2">Penempatan Kerja</h3>
          <p className="text-[15px] leading-[1.75] text-neutral-700">Bantuan job placement setelah lulus</p>
        </div>
      </div>
      <Link href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
        <button className="btn-primary">Lihat Program</button>
      </Link>
    </ContentLayout>
  );
}
