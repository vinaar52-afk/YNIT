import Link from 'next/link';

export default function JasaKamiPage() {
  return (
    <main className="w-full bg-white">
      <section className="w-full py-12">
        <div className="max-w-[1040px] mx-auto px-4">
          <h1 className="text-[20px] font-medium mb-8 text-center">Layanan Kami di Turki</h1>
          
          {/* 2x2 Grid of Services */}
          <div className="flex flex-col md:flex-row md:flex-wrap md:gap-8">
            {/* Tour */}
            <div className="w-full md:w-[48%] mb-8">
              <img src="/images/tour-page1.jpeg" alt="Paket Tour" className="w-full h-auto object-cover rounded-[12px] mb-4" />
              <h2 className="text-[20px] font-medium mb-2">Paket Tour & Wisata</h2>
              <p className="text-[15px] leading-[1.75] text-neutral-700 mb-4">Jelajahi keindahan Turki dengan paket wisata yang disesuaikan. Dari Istanbul hingga Cappadocia.</p>
              <Link href="/tour" className="text-red-600 font-medium hover:underline">Lihat Paket Tour →</Link>
            </div>

            {/* Study */}
            <div className="w-full md:w-[48%] mb-8">
              <img src="/images/study-page1.jpeg" alt="Program Studi" className="w-full h-auto object-cover rounded-[12px] mb-4" />
              <h2 className="text-[20px] font-medium mb-2">Program Pendidikan & Kursus</h2>
              <p className="text-[15px] leading-[1.75] text-neutral-700 mb-4">Kursus bahasa, program beasiswa, dan bimbingan kuliah di universitas top Turki.</p>
              <Link href="/study" className="text-red-600 font-medium hover:underline">Lihat Program Studi →</Link>
            </div>

            {/* Dokumen */}
            <div className="w-full md:w-[48%] mb-8">
              <img src="/images/dokumen-page1.jpeg" alt="Layanan Dokumen" className="w-full h-auto object-cover rounded-[12px] mb-4" />
              <h2 className="text-[20px] font-medium mb-2">Visa & Dokumen</h2>
              <p className="text-[15px] leading-[1.75] text-neutral-700 mb-4">Bantuan lengkap untuk visa, dokumen, medical check-up, dan persiapan administrasi.</p>
              <Link href="/dokumen" className="text-red-600 font-medium hover:underline">Lihat Layanan Dokumen →</Link>
            </div>

            {/* Medical */}
            <div className="w-full md:w-[48%] mb-8">
              <img src="/images/medical-page1.jpeg" alt="Layanan Medis" className="w-full h-auto object-cover rounded-[12px] mb-4" />
              <h2 className="text-[20px] font-medium mb-2">Kesehatan & Estetika</h2>
              <p className="text-[15px] leading-[1.75] text-neutral-700 mb-4">Hair transplant, rhinoplasty, perawatan gigi, dan layanan estetika berkualitas dunia.</p>
              <Link href="/medical-aesthetic" className="text-red-600 font-medium hover:underline">Lihat Layanan Medis →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full py-12 bg-neutral-50">
        <div className="max-w-[720px] mx-auto px-4 text-center">
          <h2 className="text-[20px] font-medium mb-4">Butuh Bantuan?</h2>
          <p className="text-[15px] leading-[1.75] text-neutral-700 mb-6">Hubungi tim kami untuk konsultasi gratis tentang layanan apa yang sesuai dengan kebutuhan Anda.</p>
          <Link href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
            <button className="btn-primary">Hubungi Sekarang</button>
          </Link>
        </div>
      </section>
    </main>
  );
}
