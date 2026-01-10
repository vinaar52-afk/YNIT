import Link from 'next/link';

export default function CTA() {
  return (
    <section className="bg-blue-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Siap untuk memulai?</h2>
        <p className="text-gray-600 mb-8">Hubungi kami hari ini untuk konsultasi gratis</p>
        <Link href="/booking">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
            Booking Sekarang
          </button>
        </Link>
      </div>
    </section>
  );
}
