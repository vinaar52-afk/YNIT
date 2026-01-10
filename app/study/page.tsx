import Section from '@/components/Section';
import Card from '@/components/Card';
import CTA from '@/components/CTA';
import { study } from '@/data/study';

export default function StudyPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-section pt-20">
        <div className="section-container text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Learn & <span className="text-red-600 warm-glow">Grow</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Invest in your future with our premium education programs
          </p>
        </div>
      </section>

      {/* Study Programs Grid */}
      <Section title="Our Programs" subtitle="Comprehensive courses designed for your success">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {study.map((prog) => (
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
        </div>
      </Section>

      {/* Program Benefits */}
      <Section className="bg-gradient-to-r from-orange-50 via-white to-orange-50">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="card-light p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <span className="text-3xl">👨‍🎓</span> Expert Instructors
            </h3>
            <p className="text-gray-600">Learn from industry professionals with years of experience and proven track records.</p>
          </div>
          <div className="card-light p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <span className="text-3xl">🏆</span> Certification
            </h3>
            <p className="text-gray-600">Receive recognized certifications that enhance your professional credentials.</p>
          </div>
          <div className="card-light p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <span className="text-3xl">💼</span> Career Support
            </h3>
            <p className="text-gray-600">Get job placement assistance and career counseling to accelerate your growth.</p>
          </div>
          <div className="card-light p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <span className="text-3xl">🌐</span> Flexible Learning
            </h3>
            <p className="text-gray-600">Learn at your own pace with flexible schedules and online options.</p>
          </div>
        </div>
      </Section>

      <CTA
        title="Start Learning Today"
        description="Transform your career with our world-class education programs"
        buttonText="Enroll Now"
        buttonHref="/booking"
      />
    </>
  );
}
