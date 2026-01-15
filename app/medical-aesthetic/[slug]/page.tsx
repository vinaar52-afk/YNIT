import Section from '@/components/Section';
import Card from '@/components/Card';
import CTA from '@/components/CTA';
import { medical } from '@/data/medical';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { formatCurrency } from '@/lib/format';

interface MedicalDetailPageProps {
  params: {
    slug: string;
  };
}

export default function MedicalDetailPage({ params }: MedicalDetailPageProps) {
  const service = medical.find((m) => m.slug === params.slug);

  if (!service) {
    notFound();
  }

  const relatedServices = medical.filter((m) => m.id !== service.id).slice(0, 3);

  return (
    <>
      {/* Hero with Image */}
      <section className="relative w-full h-96 bg-gradient-to-b from-orange-50 to-white">
        <div className="absolute inset-0">
          <Image
            src={service.image}
            alt={service.title}
            fill
            className="object-cover opacity-30"
            onError={(e) => {
              const img = e.target as HTMLImageElement;
              img.src = '/placeholder.png';
            }}
          />
        </div>
        <div className="relative z-10 h-full flex items-end pt-20">
          <div className="section-container w-full">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">{service.title}</h1>
            <div className="flex flex-wrap gap-4 items-center">
              <span className="bg-red-600 text-white px-4 py-2 rounded-lg font-semibold">
                {service.duration}
              </span>
              <span className="text-3xl font-bold text-red-600">{formatCurrency(service.price)}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <Section>
        <div className="max-w-3xl">
          <p className="text-lg text-gray-700 mb-8">{service.description}</p>

          <div className="space-y-8 mb-12">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Apa yang Termasuk</h2>
              <ul className="space-y-3">
                {service.includes.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-red-600 font-bold mt-1">✓</span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-bold text-gray-900 mb-2">Durasi Prosedur</h3>
                <p className="text-gray-700">{service.duration}</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-bold text-gray-900 mb-2">Harga</h3>
                <p className="text-2xl font-bold text-red-600">{formatCurrency(service.price)}</p>
              </div>
            </div>
          </div>

          <Link href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
            <button className="btn-primary btn-lg">Konsultasi Gratis</button>
          </Link>
        </div>
      </Section>

      {/* Related Services */}
      {relatedServices.length > 0 && (
        <Section title="Layanan Terkait" subtitle="Jelajahi pilihan medical aesthetic lainnya">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedServices.map((relService) => (
              <Card
                key={relService.id}
                title={relService.title}
                description={relService.shortDesc}
                href={`/medical-aesthetic/${relService.slug}`}
                price={relService.price}
                image={relService.image}
                badge={relService.duration}
              />
            ))}
          </div>
        </Section>
      )}

      <CTA
        title="Siap untuk Transformasi?"
        description="Konsultasikan kebutuhan Anda dengan tim ahli kami yang berpengalaman internasional"
        buttonText="Hubungi Kami"
        buttonHref="https://wa.me/1234567890"
      />
    </>
  );
}
