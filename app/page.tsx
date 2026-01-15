import Section from '@/components/Section';
import Card from '@/components/Card';
import CTA from '@/components/CTA';
import { tours } from '@/data/tours';
import { dokumen } from '@/data/dokumen';
import { study } from '@/data/study';
import { medical } from '@/data/medical';
import Link from 'next/link';
import { generateWhatsAppLink } from '@/lib/whatsapp';

export default function Home() {
  const featuredTours = tours.slice(0, 2);
  const featuredDokumen = dokumen.slice(0, 2);
  const featuredStudy = study.slice(0, 2);
  const featuredMedical = medical.slice(0, 2);
  const whatsappLink = generateWhatsAppLink('62123456789', 'Halo, saya ingin tanya dulu tentang layanan YNIT');

  return (
    <>
      {/* Hero Section */}
      <section className="hero-section pt-20">
        <div className="section-container text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Semua rencana pentingmu, kami bantu urus.
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Dari perjalanan, dokumen, studi, sampai layanan medical aesthetic — YNIT ada buat nemenin prosesnya, pelan tapi pasti.
          </p>
          <div className="flex gap-4 justify-center">
            <Link href="/tour">
              <button className="btn-primary text-lg">
                Lihat layanan
              </button>
            </Link>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <button className="btn-secondary text-lg">
                Tanya dulu →
              </button>
            </a>
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <Section title="Pilih kebutuhanmu." subtitle="Kamu fokus ke tujuanmu. Urusan teknis, biar kami yang bantu.">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Link href="/tour">
            <div className="card-light cursor-pointer h-full flex flex-col items-center justify-center py-8 text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Tour</h3>
              <p className="text-gray-600 text-sm">Liburan tanpa ribet. Tinggal berangkat.</p>
            </div>
          </Link>

          <Link href="/dokumen">
            <div className="card-light cursor-pointer h-full flex flex-col items-center justify-center py-8 text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Dokumen</h3>
              <p className="text-gray-600 text-sm">Visa, paspor, dan dokumen lain — jelas alurnya, jelas biayanya.</p>
            </div>
          </Link>

          <Link href="/study">
            <div className="card-light cursor-pointer h-full flex flex-col items-center justify-center py-8 text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Study</h3>
              <p className="text-gray-600 text-sm">Program belajar yang masuk akal dan bisa dijalani.</p>
            </div>
          </Link>

          <Link href="/medical-aesthetic">
            <div className="card-light cursor-pointer h-full flex flex-col items-center justify-center py-8 text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Medical Aesthetic</h3>
              <p className="text-gray-600 text-sm">Perawatan dan layanan estetika dengan proses yang transparan.</p>
            </div>
          </Link>
        </div>
      </Section>

      {/* Featured Tours */}
      <Section title="Perjalanan yang sering dipilih" subtitle="Beberapa opsi yang biasanya jadi awal cerita orang-orang.">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredTours.map((tour, index) => (
            <Card
              key={tour.id}
              title={tour.title}
              description={tour.shortDesc}
              href={`/tour/page${index + 1}`}
              price={tour.price}
              image={tour.image}
              badge={tour.duration}
              type="tour"
            />
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link href="/tour">
            <button className="btn-secondary">Lihat semua perjalanan →</button>
          </Link>
        </div>
      </Section>

      {/* Featured Documents */}
      <Section title="Urusan dokumen, tanpa drama" subtitle="Proses rapi, info jelas, dan bisa dipantau.">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredDokumen.map((doc, index) => (
            <Card
              key={doc.id}
              title={doc.title}
              description={doc.shortDesc}
              href={`/dokumen/page${index + 1}`}
              price={doc.price}
              image={doc.image}
              badge={doc.processingTime}
              type="dokumen"
            />
          ))}
        </div>
      </Section>

      {/* Featured Study Programs */}
      <Section title="Belajar buat naik level" subtitle="Bukan sekadar ikut tren, tapi benar-benar kepakai.">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredStudy.map((prog, index) => (
            <Card
              key={prog.id}
              title={prog.title}
              description={prog.shortDesc}
              href={`/study/page${index + 1}`}
              price={prog.price}
              image={prog.image}
              badge={prog.duration}
              type="study"
            />
          ))}
        </div>
      </Section>

      {/* Featured Medical */}
      <Section title="Perawatan yang bikin lebih percaya diri" subtitle="Kami bantu carikan layanan yang jelas dan masuk akal.">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredMedical.map((med, index) => (
            <Card
              key={med.id}
              title={med.title}
              description={med.shortDesc}
              href={`/medical-aesthetic/page${index + 1}`}
              price={med.price}
              image={med.image}
              badge={med.duration}
              type="medical"
            />
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <CTA
        title="Mulai dari yang kamu butuhkan sekarang."
        description="Kamu nggak harus langsung pesan. Lihat-lihat dulu juga nggak apa-apa."
        buttonText="Lihat semua layanan"
        buttonHref="/tour"
      />
    </>
  );
}
