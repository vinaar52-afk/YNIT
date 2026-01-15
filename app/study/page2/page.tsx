/**
 * app/study/page2/page.tsx
 * Next.js page route for Page2Study component
 * Route: /study/page2
 * Title: Kursus Private Online Bahasa Turki
 */

import Page2Study from '@/components/study/Page2Study';

// Metadata for SEO
export const metadata = {
  title: 'Kursus Private Online Bahasa Turki | YNIT Study Programs',
  description: 'Kelas private 1-on-1 fokus pada speaking & mendengarkan. Jadwal fleksibel, instruktur native speaker, trial gratis 30 menit. Mulai dari Rp 800.000.',
};

export default function Page2() {
  return <Page2Study />;
}
