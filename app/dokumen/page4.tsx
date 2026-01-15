import React from 'react';
import Page4Dokumen from '../../components/dokumen/Page4Dokumen';

// /app/dokumen/page4.tsx
// Page route that renders the Page4Dokumen component
export default function Page() {
  return (
    <main className="min-h-screen">
      {/* Render component for Ikamet Aile & Student */}
      <Page4Dokumen />
    </main>
  );
}
