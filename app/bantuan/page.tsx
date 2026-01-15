import Link from 'next/link';
import ContentLayout from '@/components/layouts/ContentLayout';

export default function BantuanPage() {
  return (
    <>
      <ContentLayout>
        <h1 className="text-[20px] font-medium mb-8">Pusat Bantuan</h1>
        
        <div className="space-y-8">
          {/* FAQ 1 */}
          <div className="border-b border-neutral-200 pb-8">
            <h2 className="text-[16px] font-medium mb-3">Bagaimana cara memulai?</h2>
            <p className="text-[15px] leading-[1.75] text-neutral-700">Mulai dengan konsultasi gratis via WhatsApp. Tim kami akan membantu Anda memilih paket yang sesuai dengan kebutuhan dan budget Anda.</p>
          </div>

          {/* FAQ 2 */}
          <div className="border-b border-neutral-200 pb-8">
            <h2 className="text-[16px] font-medium mb-3">Berapa lama proses visa?</h2>
            <p className="text-[15px] leading-[1.75] text-neutral-700">Proses visa reguler biasanya 3-4 minggu kerja. Kami juga menyediakan layanan express untuk proses lebih cepat dengan biaya tambahan.</p>
          </div>

          {/* FAQ 3 */}
          <div className="border-b border-neutral-200 pb-8">
            <h2 className="text-[16px] font-medium mb-3">Apakah ada jaminan uang kembali?</h2>
            <p className="text-[15px] leading-[1.75] text-neutral-700">Untuk visa yang ditolak, kami memberikan pengembalian 50% dari biaya layanan. Syarat dan ketentuan berlaku.</p>
          </div>

          {/* FAQ 4 */}
          <div className="pb-8">
            <h2 className="text-[16px] font-medium mb-3">Bagaimana cara menghubungi support?</h2>
            <p className="text-[15px] leading-[1.75] text-neutral-700 mb-4">Hubungi kami melalui WhatsApp, email, atau datang langsung ke kantor kami. Tim kami siap membantu 24/7.</p>
            <Link href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="text-red-600 font-medium hover:underline">
              Chat dengan Kami →
            </Link>
          </div>
        </div>
      </ContentLayout>

      {/* CTA */}
      <section className="w-full py-12 bg-neutral-50">
        <div className="max-w-[720px] mx-auto px-4 text-center">
          <h2 className="text-[20px] font-medium mb-4">Masih Ada Pertanyaan?</h2>
          <p className="text-[15px] leading-[1.75] text-neutral-700 mb-6">Hubungi tim support kami, kami siap membantu!</p>
          <Link href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
            <button className="btn-primary">Hubungi Support</button>
          </Link>
        </div>
      </section>
    </>
  );
}
