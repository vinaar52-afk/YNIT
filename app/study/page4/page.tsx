/**
 * app/study/page4/page.tsx
 * Next.js page route for Page4Study component
 * Route: /study/page4
 * Title: Konsultasi Beasiswa ke Turki
 */

import Page4Study from '@/components/study/Page4Study';

// Metadata for SEO
export const metadata = {
  title: 'Konsultasi Beasiswa ke Turki | YNIT Study Programs',
  description: 'Analisa peluang beasiswa Turki sesuai profil Anda. Panduan dokumen, tips pengajuan, interview preparation. Konsultasi dari Rp 1.5 juta dengan track record sukses.',
};

export default function Page4() {
  return <Page4Study />;
}
