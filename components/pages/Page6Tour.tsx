import Link from 'next/link';
import ContentLayout from '@/components/layouts/ContentLayout';

export default function Page6Tour() {
  return (
    <ContentLayout>
      <img src="/images/tour-page6.jpeg" alt="Aegean Islands Tour" className="w-full h-auto object-cover rounded-[12px] mb-8" />
      <h1 className="text-[20px] font-medium mb-4">Aegean Islands: Pulau-Pulau Eksotis & Budaya Yunani-Turki</h1>
      <p className="text-[15px] leading-[1.75] text-neutral-700 mb-6">
        Jelajahi pulau-pulau Aegean yang indah dengan budaya unik, pantai tersembunyi, dan kehidupan malam yang vibrant. Dari Fethiye hingga Bodrum, setiap pulau menawarkan pengalaman yang berbeda.
      </p>
      <div className="space-y-6 mb-8">
        <div>
          <h3 className="text-[16px] font-medium mb-2">Durasi & Harga</h3>
          <p className="text-[15px] leading-[1.75] text-neutral-700">4 hari - Rp 8.800.000 per orang (all-inclusive)</p>
        </div>
        <div>
          <h3 className="text-[16px] font-medium mb-2">Highlights</h3>
          <ul className="text-[15px] leading-[1.75] text-neutral-700 space-y-2">
            <li>• Fethiye & Blue Lagoon</li>
            <li>• Bodrum Castle</li>
            <li>• Butterfly Valley</li>
            <li>• Island Hopping Cruise</li>
            <li>• Fresh Seafood Dinner</li>
          </ul>
        </div>
        <div>
          <h3 className="text-[16px] font-medium mb-2">Termasuk</h3>
          <p className="text-[15px] leading-[1.75] text-neutral-700">Hotel, meals, cruise, tour guide, transport</p>
        </div>
      </div>
      <Link href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
        <button className="btn-primary">Booking Sekarang</button>
      </Link>
    </ContentLayout>
  );
}
