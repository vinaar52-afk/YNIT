import React from 'react';
import Page5Dokumen from '../../components/dokumen/Page5Dokumen';

// /app/dokumen/page5.tsx
// Page route that renders the Page5Dokumen component
export default function Page() {
  return (
    <main className="min-h-screen">
      {/* Render component for Paspor & Akun Bank */}
      <Page5Dokumen />
    </main>
  );
}
