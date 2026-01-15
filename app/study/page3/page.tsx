/**
 * app/study/page3/page.tsx
 * Next.js page route for Page3Study component
 * Route: /study/page3
 * Title: Bimbingan Kuliah Mandiri ke Turki
 */

import Page3Study from '@/components/study/Page3Study';

// Metadata for SEO
export const metadata = {
  title: 'Bimbingan Kuliah Mandiri ke Turki | YNIT Study Programs',
  description: 'Bantuan lengkap kuliah di Turki dari pendaftaran hingga adaptasi. Konsultasi jurusan, persiapan dokumen, support dari tim berpengalaman. Paket mulai Rp 2.5 juta.',
};

export default function Page3() {
  return <Page3Study />;
}
