/**
 * app/medicalestetica/page2/page.tsx
 * Next.js page route for Page2Medical component
 * Route: /medicalestetica/page2
 * Title: Rhinoplasty – Hidung Proporsional & Percaya Diri
 */

import Page2Medical from '@/components/medicalestetica/Page2Medical';

// Metadata for SEO
export const metadata = {
  title: 'Rhinoplasty di Turki | Operasi Hidung Proporsional | YNIT Medical',
  description: 'Rhinoplasty dengan dokter bedah plastik berpengalaman internasional. Hasil natural & sesuai proporsi wajah. Teknologi 3D imaging. Konsultasi gratis.',
};

export default function Page2() {
  return <Page2Medical />;
}
