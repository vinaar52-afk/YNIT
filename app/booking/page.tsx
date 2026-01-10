import Section from '@/components/Section';

export default function BookingPage() {
  return (
    <Section className="pt-20">
      <div className="max-w-2xl">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Booking</h1>
        <p className="text-gray-600 mb-8">
          Pesan layanan YNIT dengan mudah dan cepat.
        </p>
        <div className="bg-gray-50 p-8 rounded-lg border border-gray-200">
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">
                Nama Lengkap
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Masukkan nama Anda"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">
                Email
              </label>
              <input
                type="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Masukkan email Anda"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">
                Layanan
              </label>
              <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>Pilih layanan</option>
                <option>Tour</option>
                <option>Dokumen</option>
                <option>Study</option>
                <option>Medical</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">
                Pesan
              </label>
              <textarea
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows={4}
                placeholder="Masukkan pesan Anda"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Kirim Booking
            </button>
          </form>
        </div>
      </div>
    </Section>
  );
}
