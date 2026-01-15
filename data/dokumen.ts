export interface Dokumen {
  id: string;
  slug: string;
  title: string;
  description: string;
  shortDesc: string;
  price: number;
  processingTime: string;
  image: string;
  requirements: string[];
}

export const dokumen: Dokumen[] = [
  {
    id: "1",
    slug: "visa-turki",
    title: "Visa Turki: Panduan Lengkap & Proses Aplikasi Mudah",
    description: "Dapatkan visa Turki dengan mudah melalui proses aplikasi yang transparan dan cepat. Kami membantu persiapan dokumen, konsultasi, dan follow-up hingga visa Anda disetujui.",
    shortDesc: "Layanan visa Turki mudah & cepat",
    price: 2500000,
    processingTime: "5-10 hari kerja",
    image: "/images/dokumen-page1.jpeg",
    requirements: ["Tourist Visa", "Student Visa", "Work Visa", "Residence Permit", "Business Visa"],
  },
  {
    id: "2",
    slug: "surat-undangan-davetiye",
    title: "Surat Undangan (Davetiye) dari Perusahaan/Universitas Turki",
    description: "Surat undangan resmi dari institusi Turki adalah syarat penting untuk visa. Kami memiliki jaringan universitas dan perusahaan partner untuk memudahkan proses davetiye.",
    shortDesc: "Surat undangan resmi untuk visa",
    price: 1500000,
    processingTime: "3-7 hari",
    image: "/images/dokumen-page2.jpeg",
    requirements: ["Persyaratan utama visa pelajar", "Persyaratan visa bisnis/work", "Dokumen pendukung aplikasi universitas"],
  },
  {
    id: "3",
    slug: "medical-check-sertifikat-kesehatan",
    title: "Medical Check-up & Sertifikat Kesehatan Turki",
    description: "Sertifikat kesehatan resmi dari rumah sakit Turki diperlukan untuk visa pelajar. Kami mengatur medical check-up dengan dokter berlisensi di Turki.",
    shortDesc: "Medical check-up & sertifikat kesehatan",
    price: 2000000,
    processingTime: "2-3 hari",
    image: "/images/dokumen-page3.jpeg",
    requirements: ["Medical examination lengkap", "X-ray & tes darah", "Sertifikat resmi dari rumah sakit", "Terjemahan ke bahasa Inggris/Indonesia"],
  },
  {
    id: "4",
    slug: "bukti-keuangan-bank-statement",
    title: "Bukti Keuangan & Bank Statement untuk Visa",
    description: "Bank statement yang kuat adalah kunci approval visa. Kami membantu menyiapkan dokumen keuangan dengan benar sesuai standar konsulat Turki.",
    shortDesc: "Bukti keuangan & bank statement",
    price: 3500000,
    processingTime: "Konsultasi gratis",
    image: "/images/dokumen-page4.jpeg",
    requirements: ["Bank statement 3-6 bulan terakhir", "Surat referensi dari bank", "Surat penjamin (jika diperlukan)", "Notarized financial documents"],
  },
  {
    id: "5",
    slug: "tes-bahasa-ielts-toefl",
    title: "Tes Bahasa IELTS/TOEFL & Sertifikat Bahasa",
    description: "Sertifikat bahasa Inggris diperlukan untuk studi atau work visa di Turki. Kami menyediakan kursus persiapan dan koordinasi tes bahasa internasional.",
    shortDesc: "Tes bahasa internasional & sertifikat",
    price: 4500000,
    processingTime: "Tergantung jadwal tes",
    image: "/images/dokumen-page5.jpeg",
    requirements: ["IELTS (Academic & General)", "TOEFL iBT", "Duolingo English Test", "PTE Academic"],
  },
  {
    id: "6",
    slug: "terjemahan-notarisasi-dokumen",
    title: "Terjemahan & Notarisasi Dokumen Resmi",
    description: "Semua dokumen harus diterjemahkan ke bahasa Turki atau Inggris dan dinotarisasi. Kami bekerja dengan penerjemah tersertifikasi dan notaris resmi.",
    shortDesc: "Terjemahan & notarisasi dokumen",
    price: 750000,
    processingTime: "2-5 hari",
    image: "/images/dokumen-page6.jpeg",
    requirements: ["Diploma & Transkrip", "Akta Kelahiran", "Surat Nikah", "Sertifikat Kesehatan", "Dokumen Lainnya"],
  },
];
