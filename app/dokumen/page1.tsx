import React from 'react';
import Page1Dokumen from '../../components/dokumen/Page1Dokumen';

// /app/dokumen/page1.tsx
// Page route that renders the Page1Dokumen component
export default function Page() {
  return (
    <main className="min-h-screen">
      {/* Render component for Visa Turis 3 Bulan */}
      <Page1Dokumen />
    </main>
  );
}
