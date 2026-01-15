import Link from 'next/link';
import ContentLayout from '@/components/layouts/ContentLayout';

export default function Page3Tour() {
  return (
    <ContentLayout>
      <img src="/images/tour-page3.jpeg" alt="Ephesus Tour" className="w-full h-auto object-cover rounded-[12px] mb-8" />
      <h1 className="text-[20px] font-medium mb-4">Ephesus: Jelajahi Situs Warisan Dunia & Rumah Bunda Maria</h1>
      <p className="text-[15px] leading-[1.75] text-neutral-700 mb-6">
        Ephesus adalah salah satu kota Yunani-Romawi paling penting dengan reruntuhan yang menakjubkan. Kunjungi Temple of Artemis, Library of Celsus, dan rumah bersejarah Bunda Maria.
      </p>
      <div className="space-y-6 mb-8">
        <div>
          <h3 className="text-[16px] font-medium mb-2">Durasi & Harga</h3>
          <p className="text-[15px] leading-[1.75] text-neutral-700">2 hari - Rp 5.500.000 per orang (all-inclusive)</p>
        </div>
        <div>
          <h3 className="text-[16px] font-medium mb-2">Highlights</h3>
          <ul className="text-[15px] leading-[1.75] text-neutral-700 space-y-2">
            <li>• Ephesus Archaeological Site</li>
            <li>• Library of Celsus</li>
            <li>• House of Virgin Mary</li>
            <li>• Temple of Artemis</li>
            <li>• Şirince Village</li>
          </ul>
        </div>
        <div>
          <h3 className="text-[16px] font-medium mb-2">Termasuk</h3>
          <p className="text-[15px] leading-[1.75] text-neutral-700">Hotel, meals, tour guide, transport, entrance fees</p>
        </div>
      </div>
      <Link href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
        <button className="btn-primary">Booking Sekarang</button>
      </Link>
    </ContentLayout>
  );
}
