import Link from 'next/link';

export default function ChatPage() {
  return (
    <main className="w-full bg-white">
      <section className="w-full py-12">
        <div className="max-w-[720px] mx-auto px-4 text-center">
          <h1 className="text-[20px] font-medium mb-8">Mari Berbicara Dengan Tim Kami</h1>
          <p className="text-[15px] leading-[1.75] text-neutral-700 mb-12">
            Hubungi kami sekarang untuk konsultasi gratis tentang paket tour, program studi, atau layanan kesehatan di Turki.
          </p>
          
          <div className="space-y-6">
            <Link href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
              <button className="btn-primary w-full">Chat di WhatsApp</button>
            </Link>
            
            <div className="border border-neutral-200 rounded-[12px] p-6">
              <h2 className="text-[16px] font-medium mb-2">Jam Operasional</h2>
              <p className="text-[15px] leading-[1.75] text-neutral-700">Senin - Jumat: 09:00 - 18:00 WIB</p>
              <p className="text-[15px] leading-[1.75] text-neutral-700">Sabtu - Minggu: 10:00 - 16:00 WIB</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
