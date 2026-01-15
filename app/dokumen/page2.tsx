import React from 'react';
import Page2Dokumen from '../../components/dokumen/Page2Dokumen';

// /app/dokumen/page2.tsx
// Page route that renders the Page2Dokumen component
export default function Page() {
  return (
    <main className="min-h-screen">
      {/* Render component for Visa Pendidikan & Kursus */}
      <Page2Dokumen />
    </main>
  );
}
