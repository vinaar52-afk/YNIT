/**
 * app/study/page5/page.tsx
 * Next.js page route for Page5Study component
 * Route: /study/page5
 * Title: Dokumen & Persiapan Visa Pendidikan
 */

import Page5Study from '@/components/study/Page5Study';

// Metadata for SEO
export const metadata = {
  title: 'Panduan Dokumen & Persiapan Study Visa Turki | YNIT',
  description: 'Panduan lengkap dokumen study visa Turki, persyaratan, timeline pengajuan, tips sukses. Konsultasi gratis & support penuh dari tim YNIT.',
};

export default function Page5() {
  return <Page5Study />;
}
