import Link from 'next/link';
import ContentLayout from '@/components/layouts/ContentLayout';

export default function Page5Tour() {
  return (
    <ContentLayout>
      <img src="/images/tour-page5.jpeg" alt="Antalya Tour" className="w-full h-auto object-cover rounded-[12px] mb-8" />
      <h1 className="text-[20px] font-medium mb-4">Antalya: Pantai Indah, Waterfall, & Petualangan Laut</h1>
      <p className="text-[15px] leading-[1.75] text-neutral-700 mb-6">
        Antalya adalah surga pantai di pantai Mediterania dengan pasir putih, air kristal, dan pemandangan pegunungan. Sempurna untuk berenang, snorkeling, dan relaxation di resort mewah.
      </p>
      <div className="space-y-6 mb-8">
        <div>
          <h3 className="text-[16px] font-medium mb-2">Durasi & Harga</h3>
          <p className="text-[15px] leading-[1.75] text-neutral-700">5 hari - Rp 9.500.000 per orang (all-inclusive)</p>
        </div>
        <div>
          <h3 className="text-[16px] font-medium mb-2">Highlights</h3>
          <ul className="text-[15px] leading-[1.75] text-neutral-700 space-y-2">
            <li>• Duden Waterfall</li>
            <li>• Konyaalti Beach</li>
            <li>• Mediterranean Yacht Cruise</li>
            <li>• Old Town (Kaleiçi)</li>
            <li>• Water Sports Activities</li>
          </ul>
        </div>
        <div>
          <h3 className="text-[16px] font-medium mb-2">Termasuk</h3>
          <p className="text-[15px] leading-[1.75] text-neutral-700">Resort stay, meals, yacht tour, tour guide, transport</p>
        </div>
      </div>
      <Link href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
        <button className="btn-primary">Booking Sekarang</button>
      </Link>
    </ContentLayout>
  );
}
