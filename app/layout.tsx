import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import '@/styles/globals.css';

export const metadata: Metadata = {
  title: 'YNIT - Layanan Profesional',
  description: 'YNIT menyediakan layanan tour, dokumen, study, dan medical terpercaya',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
