import Link from 'next/link';
import ContentLayout from '@/components/layouts/ContentLayout';

export default function Page1Tour() {
  return (
    <ContentLayout>
      <img src="/images/tour-page1.jpeg" alt="Istanbul Tour" className="w-full h-auto object-cover rounded-[12px] mb-8" />
      <h1 className="text-[20px] font-medium mb-4">Jelajahi Istanbul: Sejarah, Budaya, dan Keindahan Dua Benua</h1>
      <p className="text-[15px] leading-[1.75] text-neutral-700 mb-6">
        Istanbul adalah kota yang memukau dengan perpaduan sempurna antara Timur dan Barat. Nikmati pengalaman wisata tak terlupakan dengan mengunjungi landmark ikonik, pasar tradisional, dan kuliner autentik Turki.
      </p>
      <div className="space-y-6 mb-8">
        <div>
          <h3 className="text-[16px] font-medium mb-2">Durasi & Harga</h3>
          <p className="text-[15px] leading-[1.75] text-neutral-700">4 hari - Rp 8.500.000 per orang (all-inclusive)</p>
        </div>
        <div>
          <h3 className="text-[16px] font-medium mb-2">Highlights</h3>
          <ul className="text-[15px] leading-[1.75] text-neutral-700 space-y-2">
            <li>• Hagia Sophia dan Blue Mosque</li>
            <li>• Galata Tower & Karakoy District</li>
            <li>• Grand Bazaar & Spice Market</li>
            <li>• Bosphorus Sunset Cruise</li>
            <li>• Topkapi Palace</li>
          </ul>
        </div>
        <div>
          <h3 className="text-[16px] font-medium mb-2">Termasuk</h3>
          <p className="text-[15px] leading-[1.75] text-neutral-700">Hotel bintang 4, meals, tour guide, transport</p>
        </div>
      </div>
      <Link href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
        <button className="btn-primary">Booking Sekarang</button>
      </Link>
    </ContentLayout>
  );
}
