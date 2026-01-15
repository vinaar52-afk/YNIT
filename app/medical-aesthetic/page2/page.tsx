/**
 * app/medical-aesthetic/page2/page.tsx
 * Next.js page route for Medical Aesthetic Page2 (Rhinoplasty)
 * Route: /medical-aesthetic/page2
 * Redirect from old /medicalestetica/page2
 */

import Page2Medical from '@/components/medicalestetica/Page2Medical';

// Metadata for SEO
export const metadata = {
  title: 'Rhinoplasty di Turki | Operasi Hidung Natural & Aman | YNIT Medical',
  description: 'Operasi hidung (rhinoplasty) dengan hasil natural dan proporsional. Dokter spesialis berpengalaman internasional. Konsultasi dan perawatan lengkap.',
};

export default function Page2() {
  return <Page2Medical />;
}
