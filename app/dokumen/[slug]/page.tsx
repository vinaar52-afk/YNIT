import Section from '@/components/Section';
import Card from '@/components/Card';
import CTA from '@/components/CTA';
import { dokumen } from '@/data/dokumen';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { formatCurrency } from '@/lib/format';

interface DokumenDetailPageProps {
  params: {
    slug: string;
  };
}

export default function DokumenDetailPage({ params }: DokumenDetailPageProps) {
  const doc = dokumen.find((d) => d.slug === params.slug);

  if (!doc) {
    notFound();
  }

  const relatedDocs = dokumen.filter((d) => d.id !== doc.id).slice(0, 3);

  return (
    <>
      {/* Hero with Image */}
      <section className="relative w-full h-96 bg-gradient-to-b from-orange-50 to-white">
        <div className="absolute inset-0">
          <Image
            src={doc.image}
            alt={doc.title}
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
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">{doc.title}</h1>
            <div className="flex flex-wrap gap-4 items-center">
              <span className="bg-red-600 text-white px-4 py-2 rounded-lg font-semibold">
                {doc.processingTime}
              </span>
              <span className="text-3xl font-bold text-red-600">{formatCurrency(doc.price)}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Details Section */}
      <Section className="bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            {/* Description */}
            <div className="card-light mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Service Details</h2>
              <p className="text-gray-600 leading-relaxed text-lg mb-6">{doc.description}</p>
            </div>

            {/* Requirements */}
            <div className="card-light">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Required Documents</h2>
              <ul className="space-y-3">
                {doc.requirements.map((req, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-red-600 text-xl mt-1">📋</span>
                    <span className="text-gray-600 text-lg">{req}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Booking Card */}
          <div>
            <div className="card-light sticky top-32 p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Get This Service</h3>
              <div className="space-y-4 mb-6">
                <div>
                  <p className="text-gray-600 text-sm mb-1">Processing Time</p>
                  <p className="text-gray-900 font-semibold text-lg">{doc.processingTime}</p>
                </div>
                <div>
                  <p className="text-gray-600 text-sm mb-1">Price</p>
                  <p className="text-red-600 font-bold text-2xl">{formatCurrency(doc.price)}</p>
                </div>
              </div>
              <Link href="/booking">
                <button className="btn-primary w-full mb-4">Start Now</button>
              </Link>
              <button className="btn-outline w-full">Get Consultation</button>
            </div>
          </div>
        </div>
      </Section>

      {/* Related Services */}
      {relatedDocs.length > 0 && (
        <Section title="Other Services" subtitle="Explore our other document services">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedDocs.map((relatedDoc) => (
              <Card
                key={relatedDoc.id}
                title={relatedDoc.title}
                description={relatedDoc.shortDesc}
                href={`/dokumen/${relatedDoc.slug}`}
                price={relatedDoc.price}
                image={relatedDoc.image}
                badge={relatedDoc.processingTime}
              />
            ))}
          </div>
        </Section>
      )}

      <CTA
        title="Ready to Get Started?"
        description="Let our experts handle your document needs professionally"
        buttonText="Apply Now"
        buttonHref="/booking"
      />
    </>
  );
}
