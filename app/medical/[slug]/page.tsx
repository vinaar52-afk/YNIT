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

      {/* Details Section */}
      <Section className="bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            {/* Description */}
            <div className="card-light mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Service Description</h2>
              <p className="text-gray-600 leading-relaxed text-lg mb-6">{service.description}</p>
            </div>

            {/* Includes */}
            <div className="card-light">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">What&apos;s Included</h2>
              <ul className="space-y-3">
                {service.includes.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-red-600 text-xl mt-1">✓</span>
                    <span className="text-gray-600 text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Booking Card */}
          <div>
            <div className="card-light sticky top-32 p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Book Service</h3>
              <div className="space-y-4 mb-6">
                <div>
                  <p className="text-gray-600 text-sm mb-1">Duration</p>
                  <p className="text-gray-900 font-semibold text-lg">{service.duration}</p>
                </div>
                <div>
                  <p className="text-gray-600 text-sm mb-1">Price</p>
                  <p className="text-red-600 font-bold text-2xl">{formatCurrency(service.price)}</p>
                </div>
              </div>
              <Link href="/booking">
                <button className="btn-primary w-full mb-4">Schedule Now</button>
              </Link>
              <button className="btn-outline w-full">Call Us</button>
            </div>
          </div>
        </div>
      </Section>

      {/* Related Services */}
      {relatedServices.length > 0 && (
        <Section title="Other Services" subtitle="Explore our other healthcare solutions">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedServices.map((relatedService) => (
              <Card
                key={relatedService.id}
                title={relatedService.title}
                description={relatedService.shortDesc}
                href={`/medical/${relatedService.slug}`}
                price={relatedService.price}
                image={relatedService.image}
                badge={relatedService.duration}
              />
            ))}
          </div>
        </Section>
      )}

      <CTA
        title="Prioritize Your Health"
        description="Schedule your service today with our healthcare professionals"
        buttonText="Book Appointment"
        buttonHref="/booking"
      />
    </>
  );
}
