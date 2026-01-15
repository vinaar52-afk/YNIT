/**
 * app/medical-aesthetic/page1/page.tsx
 * Next.js page route for Medical Aesthetic Page1 (Hair Transplant)
 * Route: /medical-aesthetic/page1
 * Redirect from old /medicalestetica/page1
 */

import Page1Medical from '@/components/medicalestetica/Page1Medical';

// Metadata for SEO
export const metadata = {
  title: 'Hair Transplant di Turki | Solusi Rambut Rontok & Kebotakan | YNIT Medical',
  description: 'Hair transplant dengan teknologi FUE/DHI dari dokter berpengalaman internasional. Hasil natural & permanent. Harga kompetitif. Konsultasi gratis.',
};

export default function Page1() {
  return <Page1Medical />;
}
