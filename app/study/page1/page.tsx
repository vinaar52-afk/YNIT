/**
 * app/study/page1/page.tsx
 * Next.js page route for Page1Study component
 * Route: /study/page1
 * Title: Kursus Bahasa Turki di Universitas
 */

import Page1Study from '@/components/study/Page1Study';

// Metadata for SEO
export const metadata = {
  title: 'Kursus Bahasa Turki di Universitas | YNIT Study Programs',
  description: 'Belajar bahasa Turki langsung dari mahasiswa universitas dengan metode pengajaran modern. 8 pertemuan/bulan, sertifikat resmi, jadwal fleksibel via Zoom/Google Meet.',
};

export default function Page1() {
  return <Page1Study />;
}
