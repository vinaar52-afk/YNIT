import Link from 'next/link';
import Card from '@/components/Card';
import { medical } from '@/data/medical';

export default function MedicalAestheticPage() {
  return (
    <main className="w-full bg-white">
      {/* Hero Section */}
      <section className="w-full py-12">
        <div className="max-w-[720px] mx-auto px-4">
          <img src="/images/medical-hero.jpeg" alt="Medical & Aesthetic Services" className="w-full h-auto object-cover rounded-[12px] mb-8" />
          <h1 className="text-[20px] font-medium mb-4">Layanan Kesehatan & Estetika Berkualitas Dunia</h1>
          <p className="text-[15px] leading-[1.75] text-neutral-700 mb-6">
            Turki adalah destinasi terkemuka untuk prosedur medis & estetika berkualitas tinggi dengan biaya terjangkau. Dokter kami tersertifikasi internasional dengan pengalaman puluhan tahun.
          </p>
        </div>
      </section>

      {/* Medical Services Grid */}
      <section className="w-full py-12">
        <div className="max-w-[1040px] mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {medical.map((service, index) => (
              <Card
                key={service.id}
                title={service.title}
                description={service.shortDesc}
                href={`/medical-aesthetic/page${index + 1}`}
                price={service.price}
                image={service.image}
                badge={service.duration}
                type="medical"
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 bg-neutral-50">
        <div className="max-w-[720px] mx-auto px-4 text-center">
          <h2 className="text-[20px] font-medium mb-4">Konsultasi Gratis dengan Dokter</h2>
          <p className="text-[15px] leading-[1.75] text-neutral-700 mb-6">Diskusikan kebutuhan Anda dan dapatkan rekomendasi dari tim ahli kami.</p>
          <Link href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
            <button className="btn-primary">Chat dengan Kami</button>
          </Link>
        </div>
      </section>
    </main>
  );
}
