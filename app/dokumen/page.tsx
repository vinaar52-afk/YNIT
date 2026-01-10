import Section from '@/components/Section';
import Card from '@/components/Card';
import CTA from '@/components/CTA';
import { dokumen } from '@/data/dokumen';

export default function DokumenPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-section pt-20">
        <div className="section-container text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-[#f7f7f7] mb-6">
            Document <span className="text-[#22D3EE] neon-glow">Services</span>
          </h1>
          <p className="text-xl text-[#b7b7b7] max-w-2xl mx-auto">
            Professional document processing and assistance
          </p>
        </div>
      </section>

      {/* Documents Grid */}
      <Section title="Our Document Services" subtitle="Fast, reliable, and professional document processing">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {dokumen.map((doc) => (
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
        </div>
      </Section>

      {/* Process Steps */}
      <Section className="bg-gradient-to-r from-[#111] via-[#0a0a0a] to-[#111]">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { step: '1', title: 'Consult', desc: 'Get expert advice on your requirements' },
            { step: '2', title: 'Prepare', desc: 'We help gather all necessary documents' },
            { step: '3', title: 'Process', desc: 'Fast and efficient processing' },
            { step: '4', title: 'Deliver', desc: 'Receive your documents on time' },
          ].map((item) => (
            <div key={item.step} className="card-dark text-center py-8">
              <div className="text-5xl font-bold text-[#22D3EE] mb-4">{item.step}</div>
              <h3 className="text-xl font-bold text-[#f7f7f7] mb-2">{item.title}</h3>
              <p className="text-[#b7b7b7] text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      <CTA
        title="Get Your Documents Ready"
        description="Our experts are ready to assist you with all document needs"
        buttonText="Start Process"
        buttonHref="/booking"
      />
    </>
  );
}
