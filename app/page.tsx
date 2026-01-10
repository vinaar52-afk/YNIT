import Section from '@/components/Section';
import Card from '@/components/Card';
import CTA from '@/components/CTA';

export default function Home() {
  return (
    <>
      <Section className="pt-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Selamat Datang di YNIT
          </h1>
          <p className="text-xl text-gray-600">
            Layanan profesional untuk kebutuhan Anda
          </p>
        </div>
      </Section>

      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card
            title="Tour"
            description="Jelajahi destinasi menarik dengan panduan profesional kami"
            href="/tour"
          />
          <Card
            title="Dokumen"
            description="Urus semua kebutuhan dokumen Anda dengan mudah dan cepat"
            href="/dokumen"
          />
          <Card
            title="Study"
            description="Program pendidikan berkualitas untuk pengembangan diri Anda"
            href="/study"
          />
          <Card
            title="Medical"
            description="Layanan kesehatan terpercaya untuk kesejahteraan Anda"
            href="/medical"
          />
        </div>
      </Section>

      <CTA />
    </>
  );
}
