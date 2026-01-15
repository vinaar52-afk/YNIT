import Link from 'next/link';
import ContentLayout from '@/components/layouts/ContentLayout';

export default function Page4Tour() {
  return (
    <ContentLayout>
      <img src="/images/tour-page4.jpeg" alt="Pamukkale Tour" className="w-full h-auto object-cover rounded-[12px] mb-8" />
      <h1 className="text-[20px] font-medium mb-4">Pamukkale: Berenang di Kolam Mineral Putih & Hierapolis</h1>
      <p className="text-[15px] leading-[1.75] text-neutral-700 mb-6">
        Pamukkale adalah keajaiban alam dengan travertine putih yang terlihat seperti kastil di atas gunung. Berenang di kolam air panas mineral yang menyembuhkan sambil menikmati pemandangan lembah yang spektakuler.
      </p>
      <div className="space-y-6 mb-8">
        <div>
          <h3 className="text-[16px] font-medium mb-2">Durasi & Harga</h3>
          <p className="text-[15px] leading-[1.75] text-neutral-700">2 hari - Rp 6.000.000 per orang (all-inclusive)</p>
        </div>
        <div>
          <h3 className="text-[16px] font-medium mb-2">Highlights</h3>
          <ul className="text-[15px] leading-[1.75] text-neutral-700 space-y-2">
            <li>• Pamukkale Travertine Pools</li>
            <li>• Hierapolis Ancient City</li>
            <li>• Mineral Hot Water Pools</li>
            <li>• Sunset from Travertines</li>
            <li>• Local Turkish Bath</li>
          </ul>
        </div>
        <div>
          <h3 className="text-[16px] font-medium mb-2">Termasuk</h3>
          <p className="text-[15px] leading-[1.75] text-neutral-700">Hotel, meals, spa access, tour guide, transport</p>
        </div>
      </div>
      <Link href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
        <button className="btn-primary">Booking Sekarang</button>
      </Link>
    </ContentLayout>
  );
}
