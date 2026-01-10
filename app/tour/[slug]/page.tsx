import Section from '@/components/Section';
import Card from '@/components/Card';
import CTA from '@/components/CTA';
import { tours } from '@/data/tours';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { formatCurrency } from '@/lib/format';

interface TourDetailPageProps {
  params: {
    slug: string;
  };
}

export default function TourDetailPage({ params }: TourDetailPageProps) {
  const tour = tours.find((t) => t.slug === params.slug);

  if (!tour) {
    notFound();
  }

  const relatedTours = tours.filter((t) => t.id !== tour.id).slice(0, 3);

  return (
    <>
      {/* Hero with Image */}
      <section className="relative w-full h-96 bg-gradient-to-b from-orange-50 to-white">
        <div className="absolute inset-0">
          <Image
            src={tour.image}
            alt={tour.title}
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
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">{tour.title}</h1>
            <div className="flex flex-wrap gap-4 items-center">
              <span className="bg-red-600 text-white px-4 py-2 rounded-lg font-semibold">
                {tour.duration}
              </span>
              <span className="text-3xl font-bold text-red-600">{formatCurrency(tour.price)}</span>
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
              <h2 className="text-2xl font-bold text-gray-900 mb-4">About This Tour</h2>
              <p className="text-gray-600 leading-relaxed text-lg mb-6">{tour.description}</p>
            </div>

            {/* Highlights */}
            <div className="card-light">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Tour Highlights</h2>
              <ul className="space-y-3">
                {tour.highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-red-600 text-xl mt-1">✓</span>
                    <span className="text-gray-600 text-lg">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Booking Card */}
          <div>
            <div className="card-light sticky top-32 p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Book This Tour</h3>
              <div className="space-y-4 mb-6">
                <div>
                  <p className="text-gray-600 text-sm mb-1">Duration</p>
                  <p className="text-gray-900 font-semibold text-lg">{tour.duration}</p>
                </div>
                <div>
                  <p className="text-gray-600 text-sm mb-1">Price</p>
                  <p className="text-red-600 font-bold text-2xl">{formatCurrency(tour.price)}</p>
                </div>
              </div>
              <Link href="/booking">
                <button className="btn-primary w-full mb-4">Book Now</button>
              </Link>
              <button className="btn-outline w-full">Contact Us</button>
            </div>
          </div>
        </div>
      </Section>

      {/* Related Tours */}
      {relatedTours.length > 0 && (
        <Section title="Similar Tours" subtitle="You might also be interested in these">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedTours.map((relatedTour) => (
              <Card
                key={relatedTour.id}
                title={relatedTour.title}
                description={relatedTour.shortDesc}
                href={`/tour/${relatedTour.slug}`}
                price={relatedTour.price}
                image={relatedTour.image}
                badge={relatedTour.duration}
              />
            ))}
          </div>
        </Section>
      )}

      <CTA
        title="Ready to Explore?"
        description="Secure your spot on this incredible tour today"
        buttonText="Book This Tour"
        buttonHref="/booking"
      />
    </>
  );
}
