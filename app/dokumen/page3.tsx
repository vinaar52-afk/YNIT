import React from 'react';
import Page3Dokumen from '../../components/dokumen/Page3Dokumen';

// /app/dokumen/page3.tsx
// Page route that renders the Page3Dokumen component
export default function Page() {
  return (
    <main className="min-h-screen">
      {/* Render component for LOA & Pendaftaran Kursus */}
      <Page3Dokumen />
    </main>
  );
}
