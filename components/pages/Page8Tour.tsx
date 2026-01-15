import Link from 'next/link';
import ContentLayout from '@/components/layouts/ContentLayout';

export default function Page8Tour() {
  return (
    <ContentLayout>
      <img src="/images/tour-page8.jpeg" alt="Black Sea Tour" className="w-full h-auto object-cover rounded-[12px] mb-8" />
      <h1 className="text-[20px] font-medium mb-4">Black Sea: Alam Pegunungan, Hutan, & Budaya Pedesaan</h1>
      <p className="text-[15px] leading-[1.75] text-neutral-700 mb-6">
        Pantai Laut Hitam menawarkan pengalaman berbeda dengan hutan lebat, pegunungan, dan budaya pedesaan yang autentik. Sempurna untuk hiking, petualangan alam, dan mempelajari tradisi lokal Turki.
      </p>
      <div className="space-y-6 mb-8">
        <div>
          <h3 className="text-[16px] font-medium mb-2">Durasi & Harga</h3>
          <p className="text-[15px] leading-[1.75] text-neutral-700">3 hari - Rp 6.800.000 per orang (all-inclusive)</p>
        </div>
        <div>
          <h3 className="text-[16px] font-medium mb-2">Highlights</h3>
          <ul className="text-[15px] leading-[1.75] text-neutral-700 space-y-2">
            <li>• Mountain Trekking</li>
            <li>• Tea Plantations</li>
            <li>• Rize & Local Villages</li>
            <li>• Black Sea Beaches</li>
            <li>• Traditional Turkish Meals</li>
          </ul>
        </div>
        <div>
          <h3 className="text-[16px] font-medium mb-2">Termasuk</h3>
          <p className="text-[15px] leading-[1.75] text-neutral-700">Hotel, meals, trekking guide, tour guide, transport</p>
        </div>
      </div>
      <Link href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
        <button className="btn-primary">Booking Sekarang</button>
      </Link>
    </ContentLayout>
  );
}
