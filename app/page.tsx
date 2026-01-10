import Section from '@/components/Section';
import Card from '@/components/Card';
import CTA from '@/components/CTA';
import { tours } from '@/data/tours';
import { dokumen } from '@/data/dokumen';
import { study } from '@/data/study';
import { medical } from '@/data/medical';
import Link from 'next/link';

export default function Home() {
  const featuredTours = tours.slice(0, 2);
  const featuredDokumen = dokumen.slice(0, 2);
  const featuredStudy = study.slice(0, 2);
  const featuredMedical = medical.slice(0, 2);

  return (
    <>
      {/* Hero Section */}
      <section className="hero-section pt-20">
        <div className="section-container text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Welcome to <span className="text-red-600 warm-glow">YNIT</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Your trusted partner for exceptional tour experiences, document services, educational programs, and premium medical care
          </p>
          <Link href="/booking">
            <button className="btn-primary text-lg">
              Get Started
            </button>
          </Link>
        </div>
      </section>

      {/* Service Categories */}
      <Section title="Our Services" subtitle="Explore our comprehensive range of professional services">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Link href="/tour">
            <div className="card-light cursor-pointer h-full flex flex-col items-center justify-center py-8 text-center">
              <div className="text-5xl mb-4">✈️</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Tour</h3>
              <p className="text-gray-600 text-sm">Explore amazing destinations</p>
            </div>
          </Link>

          <Link href="/dokumen">
            <div className="card-light cursor-pointer h-full flex flex-col items-center justify-center py-8 text-center">
              <div className="text-5xl mb-4">📄</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Dokumen</h3>
              <p className="text-gray-600 text-sm">Professional document services</p>
            </div>
          </Link>

          <Link href="/study">
            <div className="card-light cursor-pointer h-full flex flex-col items-center justify-center py-8 text-center">
              <div className="text-5xl mb-4">📚</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Study</h3>
              <p className="text-gray-600 text-sm">Quality education programs</p>
            </div>
          </Link>

          <Link href="/medical">
            <div className="card-light cursor-pointer h-full flex flex-col items-center justify-center py-8 text-center">
              <div className="text-5xl mb-4">⚕️</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Medical</h3>
              <p className="text-gray-600 text-sm">Premium healthcare services</p>
            </div>
          </Link>
        </div>
      </Section>

      {/* Featured Tours */}
      <Section title="Featured Tours" subtitle="Discover our most popular tour packages">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredTours.map((tour) => (
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
          {featuredTours.map((tour) => (
            <Card
              key={`alt-${tour.id}`}
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

      {/* Featured Documents */}
      <Section title="Document Services" subtitle="Professional document processing made easy">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredDokumen.map((doc) => (
            <Card
              key={doc.id}
              title={doc.title}
              description={doc.shortDesc}
              href={`/dokumen/${doc.slug}`}
              price={doc.price}
              image={doc.image}
              badge={doc.processingTime}
            />
          ))}
          {featuredDokumen.map((doc) => (
            <Card
              key={`alt-${doc.id}`}
              title={doc.title}
              description={doc.shortDesc}
              href={`/dokumen/${doc.slug}`}
              price={doc.price}
              image={doc.image}
              badge={doc.processingTime}
            />
          ))}
        </div>
      </Section>

      {/* Featured Study Programs */}
      <Section title="Study Programs" subtitle="Invest in your education and future">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredStudy.map((prog) => (
            <Card
              key={prog.id}
              title={prog.title}
              description={prog.shortDesc}
              href={`/study/${prog.slug}`}
              price={prog.price}
              image={prog.image}
              badge={prog.duration}
            />
          ))}
          {featuredStudy.map((prog) => (
            <Card
              key={`alt-${prog.id}`}
              title={prog.title}
              description={prog.shortDesc}
              href={`/study/${prog.slug}`}
              price={prog.price}
              image={prog.image}
              badge={prog.duration}
            />
          ))}
        </div>
      </Section>

      {/* Featured Medical */}
      <Section title="Medical Services" subtitle="Your health and wellness is our priority">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredMedical.map((med) => (
            <Card
              key={med.id}
              title={med.title}
              description={med.shortDesc}
              href={`/medical/${med.slug}`}
              price={med.price}
              image={med.image}
              badge={med.duration}
            />
          ))}
          {featuredMedical.map((med) => (
            <Card
              key={`alt-${med.id}`}
              title={med.title}
              description={med.shortDesc}
              href={`/medical/${med.slug}`}
              price={med.price}
              image={med.image}
              badge={med.duration}
            />
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <CTA
        title="Ready to Experience Excellence?"
        description="Join thousands of satisfied customers who trust YNIT for their needs"
        buttonText="Book Your Service"
        buttonHref="/booking"
      />
    </>
  );
}
