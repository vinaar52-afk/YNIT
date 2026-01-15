import Link from 'next/link';
import ContentLayout from '@/components/layouts/ContentLayout';

export default function Page2Tour() {
  return (
    <ContentLayout>
      <img src="/images/tour-page2.jpeg" alt="Cappadocia Tour" className="w-full h-auto object-cover rounded-[12px] mb-8" />
      <h1 className="text-[20px] font-medium mb-4">Cappadocia: Petualangan di Bumi Dongeng dengan Hot Air Balloon</h1>
      <p className="text-[15px] leading-[1.75] text-neutral-700 mb-6">
        Cappadocia adalah destinasi unik dengan pemandangan surreal, gua bawah tanah, dan pengalaman naik balon udara paling indah di dunia. Jangan lewatkan sunset yang spektakuler dari atas langit.
      </p>
      <div className="space-y-6 mb-8">
        <div>
          <h3 className="text-[16px] font-medium mb-2">Durasi & Harga</h3>
          <p className="text-[15px] leading-[1.75] text-neutral-700">3 hari - Rp 7.200.000 per orang (all-inclusive)</p>
        </div>
        <div>
          <h3 className="text-[16px] font-medium mb-2">Highlights</h3>
          <ul className="text-[15px] leading-[1.75] text-neutral-700 space-y-2">
            <li>• Hot Air Balloon Ride (sunrise)</li>
            <li>• Derinkuyu Underground City</li>
            <li>• Rose Valley Hiking</li>
            <li>• Göreme Open Air Museum</li>
            <li>• Turkish Carpet Workshop</li>
          </ul>
        </div>
        <div>
          <h3 className="text-[16px] font-medium mb-2">Termasuk</h3>
          <p className="text-[15px] leading-[1.75] text-neutral-700">Hotel boutique, meals, balloon ride, tour guide, transport</p>
        </div>
      </div>
      <Link href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
        <button className="btn-primary">Booking Sekarang</button>
      </Link>
    </ContentLayout>
  );
}
