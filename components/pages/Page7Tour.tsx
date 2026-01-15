import Link from 'next/link';
import ContentLayout from '@/components/layouts/ContentLayout';

export default function Page7Tour() {
  return (
    <ContentLayout>
      <img src="/images/tour-page7.jpeg" alt="Gallipoli Tour" className="w-full h-auto object-cover rounded-[12px] mb-8" />
      <h1 className="text-[20px] font-medium mb-4">Gallipoli: Sejarah, Perang Dunia, & Pemandangan Laut</h1>
      <p className="text-[15px] leading-[1.75] text-neutral-700 mb-6">
        Gallipoli adalah situs bersejarah penting dengan museum dan monumen perang. Nikmati pemandangan Selat Dardanella yang menakjubkan sambil belajar tentang sejarah perang dunia pertama.
      </p>
      <div className="space-y-6 mb-8">
        <div>
          <h3 className="text-[16px] font-medium mb-2">Durasi & Harga</h3>
          <p className="text-[15px] leading-[1.75] text-neutral-700">2 hari - Rp 5.200.000 per orang (all-inclusive)</p>
        </div>
        <div>
          <h3 className="text-[16px] font-medium mb-2">Highlights</h3>
          <ul className="text-[15px] leading-[1.75] text-neutral-700 space-y-2">
            <li>• Gallipoli War Memorials</li>
            <li>• War Museum</li>
            <li>• Anzac Sites</li>
            <li>• Dardanelles Strait Views</li>
            <li>• Historical Cemeteries</li>
          </ul>
        </div>
        <div>
          <h3 className="text-[16px] font-medium mb-2">Termasuk</h3>
          <p className="text-[15px] leading-[1.75] text-neutral-700">Hotel, meals, museum access, tour guide, transport</p>
        </div>
      </div>
      <Link href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
        <button className="btn-primary">Booking Sekarang</button>
      </Link>
    </ContentLayout>
  );
}
