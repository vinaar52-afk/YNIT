'use client';

import Link from 'next/link';
import ContentLayout from '@/components/layouts/ContentLayout';

export default function Page1Study() {
  return (
    <ContentLayout>
      <img src="/images/study-page1.jpeg" alt="Kursus Bahasa Turki" className="w-full h-auto object-cover rounded-[12px] mb-8" />
      <h1 className="text-[20px] font-medium mb-4">Kursus Bahasa Turki – Belajar dari Dasar hingga Mahir</h1>
      <p className="text-[15px] leading-[1.75] text-neutral-700 mb-6">
        Kuasai bahasa Turki dengan metode pembelajaran yang terbukti efektif. Program kami dirancang untuk semua level, dari pemula hingga advanced, dengan instruktur native dan berpengalaman.
      </p>
      <div className="space-y-6 mb-8">
        <div>
          <h3 className="text-[16px] font-medium mb-2">Level Program</h3>
          <ul className="text-[15px] leading-[1.75] text-neutral-700 space-y-2">
            <li>• Beginner (A1-A2)</li>
            <li>• Intermediate (B1-B2)</li>
            <li>• Advanced (C1-C2)</li>
            <li>• Conversation & Fluency</li>
          </ul>
        </div>
        <div>
          <h3 className="text-[16px] font-medium mb-2">Durasi Kursus</h3>
          <p className="text-[15px] leading-[1.75] text-neutral-700">3-6 bulan per level (dapat disesuaikan)</p>
        </div>
        <div>
          <h3 className="text-[16px] font-medium mb-2">Format Pembelajaran</h3>
          <p className="text-[15px] leading-[1.75] text-neutral-700">Offline di Ankara, Turki atau online dari mana saja</p>
        </div>
      </div>
      <Link href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
        <button className="btn-primary">Daftar Kursus</button>
      </Link>
    </ContentLayout>
  );
}
