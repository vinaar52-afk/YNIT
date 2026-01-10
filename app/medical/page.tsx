import Section from '@/components/Section';
import Card from '@/components/Card';
import CTA from '@/components/CTA';
import { medical } from '@/data/medical';

export default function MedicalPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-section pt-20">
        <div className="section-container text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Your <span className="text-red-600 warm-glow">Health</span> Matters
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Premium healthcare services for your wellbeing
          </p>
        </div>
      </section>

      {/* Medical Services Grid */}
      <Section title="Our Services" subtitle="Comprehensive healthcare solutions tailored for you">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {medical.map((service) => (
            <Card
              key={service.id}
              title={service.title}
              description={service.shortDesc}
              href={`/medical/${service.slug}`}
              price={service.price}
              image={service.image}
              badge={service.duration}
            />
          ))}
        </div>
      </Section>

      {/* Why Choose Us */}
      <Section className="bg-gradient-to-r from-orange-50 via-white to-orange-50">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="card-light text-center py-8">
            <div className="text-4xl mb-4">🏥</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Modern Facilities</h3>
            <p className="text-gray-600">State-of-the-art medical equipment and comfortable care environment</p>
          </div>
          <div className="card-light text-center py-8">
            <div className="text-4xl mb-4">👨‍⚕️</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Expert Doctors</h3>
            <p className="text-gray-600">Board-certified physicians with extensive experience in their fields</p>
          </div>
          <div className="card-light text-center py-8">
            <div className="text-4xl mb-4">⏰</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">24/7 Available</h3>
            <p className="text-gray-600">Round-the-clock emergency support and consultation services</p>
          </div>
        </div>
      </Section>

      <CTA
        title="Schedule Your Appointment"
        description="Take the first step towards better health today"
        buttonText="Book Appointment"
        buttonHref="/booking"
      />
    </>
  );
}
