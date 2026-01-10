import Section from '@/components/Section';
import Card from '@/components/Card';
import CTA from '@/components/CTA';
import { study } from '@/data/study';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { formatCurrency } from '@/lib/format';

interface StudyDetailPageProps {
  params: {
    slug: string;
  };
}

export default function StudyDetailPage({ params }: StudyDetailPageProps) {
  const program = study.find((s) => s.slug === params.slug);

  if (!program) {
    notFound();
  }

  const relatedPrograms = study.filter((s) => s.id !== program.id).slice(0, 3);

  return (
    <>
      {/* Hero with Image */}
      <section className="relative w-full h-96 bg-gradient-to-b from-orange-50 to-white">
        <div className="absolute inset-0">
          <Image
            src={program.image}
            alt={program.title}
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
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">{program.title}</h1>
            <div className="flex flex-wrap gap-4 items-center">
              <span className="bg-red-600 text-white px-4 py-2 rounded-lg font-semibold">
                {program.duration}
              </span>
              <span className="text-3xl font-bold text-red-600">{formatCurrency(program.price)}</span>
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
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Program Overview</h2>
              <p className="text-gray-600 leading-relaxed text-lg mb-6">{program.description}</p>
            </div>

            {/* Subjects */}
            <div className="card-light">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">What You&apos;ll Learn</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {program.subjects.map((subject, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-orange-50 rounded-lg">
                    <span className="text-red-600 text-xl">→</span>
                    <span className="text-gray-600 text-lg">{subject}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Enrollment Card */}
          <div>
            <div className="card-light sticky top-32 p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Enroll Now</h3>
              <div className="space-y-4 mb-6">
                <div>
                  <p className="text-gray-600 text-sm mb-1">Program Duration</p>
                  <p className="text-gray-900 font-semibold text-lg">{program.duration}</p>
                </div>
                <div>
                  <p className="text-gray-600 text-sm mb-1">Investment</p>
                  <p className="text-red-600 font-bold text-2xl">{formatCurrency(program.price)}</p>
                </div>
              </div>
              <Link href="/booking">
                <button className="btn-primary w-full mb-4">Enroll Today</button>
              </Link>
              <button className="btn-outline w-full">Ask Questions</button>
            </div>
          </div>
        </div>
      </Section>

      {/* Related Programs */}
      {relatedPrograms.length > 0 && (
        <Section title="Other Programs" subtitle="Check out our other learning opportunities">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedPrograms.map((relatedProg) => (
              <Card
                key={relatedProg.id}
                title={relatedProg.title}
                description={relatedProg.shortDesc}
                href={`/study/${relatedProg.slug}`}
                price={relatedProg.price}
                image={relatedProg.image}
                badge={relatedProg.duration}
              />
            ))}
          </div>
        </Section>
      )}

      <CTA
        title="Invest in Your Future"
        description="Take the first step towards career advancement today"
        buttonText="Start Learning"
        buttonHref="/booking"
      />
    </>
  );
}
