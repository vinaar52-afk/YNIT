'use client';

import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link';

/**
 * Page3Info - Formulir Pemesanan
 * Customer booking form for tour reservations
 * Includes all necessary fields for customer information and tour selection
 */
export default function Page3Info() {
  const [formData, setFormData] = useState({
    namaLengkap: '',
    email: '',
    nomorHP: '',
    paketPilihan: '',
    jumlahPenumpang: '',
    tanggalJam: '',
    durasiDiinginkan: '',
    catatanKhusus: ''
  });

  const paketOptions = [
    'Istanbul Private Tour – Hanya Transportasi',
    'Istanbul + Guide Mahasiswa Indonesia',
    'Istanbul + Guide Lokal Turki',
    'Bursa – Uludağ Full Day',
    'Antalya Private City Tour',
    'Trabzon – Uzungöl 2D1N',
    'Sapanca – Kartepe Full Day',
    'Airport Transfer & Fotografer Profesional'
  ];

  const durasiOptions = ['4 Jam', '8 Jam', '10 Jam', '12 Jam', 'Full Day', 'Custom / Lainnya'];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Terima kasih! Kami akan menghubungi Anda segera.');
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="relative h-80 w-full bg-gradient-to-r from-orange-50 to-white">
        <Image src="/images/booking-form.jpeg" alt="Formulir Pemesanan" fill className="object-cover opacity-30" />
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-sans font-bold text-gray-900 mb-4 leading-tight tracking-tight">
              Pesan Private Tour Anda
            </h1>
            <p className="text-lg md:text-xl text-gray-700 font-medium leading-relaxed max-w-3xl">Sekarang</p>
          </div>
        </div>
      </div>

      <div className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 pb-12 border-b border-gray-200">
            <p className="text-lg text-gray-700 leading-relaxed font-normal">
              Isi formulir berikut untuk memesan pengalaman tour privat yang disesuaikan dengan kebutuhan Anda. 
              Pastikan semua data terisi dengan benar agar proses reservasi berjalan lancar dan tim kami dapat menghubungi Anda dengan informasi lengkap.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            <div>
              <label htmlFor="namaLengkap" className="block text-lg font-sans font-bold text-gray-900 mb-3">
                Nama Lengkap
              </label>
              <input
                type="text"
                id="namaLengkap"
                name="namaLengkap"
                value={formData.namaLengkap}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent outline-none transition-colors text-base"
                placeholder="Masukkan nama lengkap Anda"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-lg font-sans font-bold text-gray-900 mb-3">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent outline-none transition-colors text-base"
                placeholder="Masukkan alamat email Anda"
              />
            </div>

            <div>
              <label htmlFor="nomorHP" className="block text-lg font-sans font-bold text-gray-900 mb-3">
                Nomor HP / WhatsApp
              </label>
              <input
                type="tel"
                id="nomorHP"
                name="nomorHP"
                value={formData.nomorHP}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent outline-none transition-colors text-base"
                placeholder="+62 81234567890"
              />
            </div>

            <div>
              <label htmlFor="paketPilihan" className="block text-lg font-sans font-bold text-gray-900 mb-3">
                Paket Pilihan
              </label>
              <select
                id="paketPilihan"
                name="paketPilihan"
                value={formData.paketPilihan}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent outline-none transition-colors text-base bg-white"
              >
                <option value="">-- Pilih Paket --</option>
                {paketOptions.map((paket, idx) => (
                  <option key={idx} value={paket}>{paket}</option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="jumlahPenumpang" className="block text-lg font-sans font-bold text-gray-900 mb-3">
                Jumlah Penumpang
              </label>
              <input
                type="number"
                id="jumlahPenumpang"
                name="jumlahPenumpang"
                value={formData.jumlahPenumpang}
                onChange={handleChange}
                required
                min="1"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent outline-none transition-colors text-base"
                placeholder="Contoh: 4"
              />
            </div>

            <div>
              <label htmlFor="tanggalJam" className="block text-lg font-sans font-bold text-gray-900 mb-3">
                Tanggal &amp; Jam Tur
              </label>
              <input
                type="datetime-local"
                id="tanggalJam"
                name="tanggalJam"
                value={formData.tanggalJam}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent outline-none transition-colors text-base"
              />
            </div>

            <div>
              <label htmlFor="durasiDiinginkan" className="block text-lg font-sans font-bold text-gray-900 mb-3">
                Durasi yang Diinginkan
              </label>
              <select
                id="durasiDiinginkan"
                name="durasiDiinginkan"
                value={formData.durasiDiinginkan}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent outline-none transition-colors text-base bg-white"
              >
                <option value="">-- Pilih Durasi --</option>
                {durasiOptions.map((durasi, idx) => (
                  <option key={idx} value={durasi}>{durasi}</option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="catatanKhusus" className="block text-lg font-sans font-bold text-gray-900 mb-3">
                Catatan Khusus / Permintaan Spesial
              </label>
              <textarea
                id="catatanKhusus"
                name="catatanKhusus"
                value={formData.catatanKhusus}
                onChange={handleChange}
                rows={5}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent outline-none transition-colors text-base resize-none"
                placeholder="Jelaskan kebutuhan khusus, preferensi destinasi, alergi makanan, atau permintaan lainnya..."
              ></textarea>
            </div>

            <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
              <p className="text-base text-gray-700 leading-relaxed font-normal">
                <span className="font-bold text-gray-900">Instruksi:</span> Setelah formulir diisi, Anda akan menerima 
                konfirmasi pemesanan melalui email dan WhatsApp. Tim kami akan menghubungi untuk meng-confirm detail 
                dan metode pembayaran dalam waktu 1-2 jam kerja.
              </p>
            </div>

            <button
              type="submit"
              className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-6 rounded-lg transition-colors duration-200 text-base md:text-lg"
            >
              Kirim Pemesanan
            </button>
          </form>

          <div className="mt-12 pt-12 border-t border-gray-200">
            <p className="text-center text-gray-600 font-normal text-base">
              Butuh bantuan? Hubungi kami di <span className="font-bold">WhatsApp: +62 ...</span> atau{' '}
              <span className="font-bold">Email: info@yourneedinturkey.com</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
