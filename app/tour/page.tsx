import Section from '@/components/Section';
import Card from '@/components/Card';
import CTA from '@/components/CTA';
import { tours } from '@/data/tours';
import Link from 'next/link';

export default function TourPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-section pt-20">
        <div className="section-container text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Discover Amazing <span className="text-red-600 warm-glow">Tours</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore the world with our expertly curated tour packages
          </p>
        </div>
      </section>

      {/* Tours Grid */}
      <Section title="Our Tour Packages" subtitle="Choose from our collection of unforgettable experiences">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tours.map((tour) => (
            <Card
              key={tour.id}
              title={tour.title}
              description={tour.shortDesc}
              href={`/tour/${tour.slug}`}
              price={tour.price}
              image={tour.image}
              badge={tour.duration}
            />
          ))}
        </div>
      </Section>

      {/* Why Choose Us */}
      <Section className="bg-gradient-to-r from-orange-50 via-white to-orange-50">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="card-light text-center py-8">
            <div className="text-4xl mb-4">🌍</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Worldwide Destinations</h3>
            <p className="text-gray-600">Access to the most beautiful and exotic locations around the globe</p>
          </div>
          <div className="card-light text-center py-8">
            <div className="text-4xl mb-4">👨‍🏫</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Expert Guides</h3>
            <p className="text-gray-600">Professional local guides with deep knowledge and cultural expertise</p>
          </div>
          <div className="card-light text-center py-8">
            <div className="text-4xl mb-4">🛡️</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">100% Safe</h3>
            <p className="text-gray-600">Full insurance coverage and 24/7 support throughout your journey</p>
          </div>
        </div>
      </Section>

      <CTA
        title="Start Your Adventure Today"
        description="Select a tour package and book your unforgettable experience"
        buttonText="Book a Tour"
        buttonHref="/booking"
      />
    </>
  );
}
