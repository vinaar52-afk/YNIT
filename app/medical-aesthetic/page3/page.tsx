/**
 * app/medical-aesthetic/page3/page.tsx
 * Next.js page route for Medical Aesthetic Page3 (Teeth Whitening)
 * Route: /medical-aesthetic/page3
 * Redirect from old /medicalestetica/page3
 */

import Page3Medical from '@/components/medicalestetica/Page3Medical';

// Metadata for SEO
export const metadata = {
  title: 'Teeth Whitening di Turki | Pemutihan Gigi Profesional & Aman | YNIT Medical',
  description: 'Pemutihan gigi profesional dengan hasil cerah tahan lama. Teknologi laser terbaru dan dokter berpengalaman. Hasil natural dan gigi sehat.',
};

export default function Page3() {
  return <Page3Medical />;
}
