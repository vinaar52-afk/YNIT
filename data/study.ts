export interface Study {
  id: string;
  slug: string;
  title: string;
  description: string;
  shortDesc: string;
  price: number;
  duration: string;
  image: string;
  subjects: string[];
}

export const study: Study[] = [
  {
    id: "1",
    slug: "kursus-bahasa-turki",
    title: "Kursus Bahasa Turki – Belajar dari Dasar hingga Mahir",
    description: "Kuasai bahasa Turki dengan metode pembelajaran yang terbukti efektif. Program kami dirancang untuk semua level, dari pemula hingga advanced, dengan instruktur native dan berpengalaman.",
    shortDesc: "Kursus bahasa Turki semua level",
    price: 4500000,
    duration: "3-6 bulan",
    image: "/images/study-page1.jpeg",
    subjects: ["Beginner (A1-A2)", "Intermediate (B1-B2)", "Advanced (C1-C2)", "Conversation & Fluency"],
  },
  {
    id: "2",
    slug: "kursus-keahlian-khusus",
    title: "Kursus Keahlian Khusus – Tingkatkan Skill Profesional",
    description: "Pelajari skills khusus yang relevan dengan industri, mulai dari IT, bisnis, desain, hingga marketing. Kursus kami didesain sesuai kebutuhan pasar kerja Turki dan internasional.",
    shortDesc: "Skills profesional & keahlian khusus",
    price: 6500000,
    duration: "2-4 bulan",
    image: "/images/study-page2.jpeg",
    subjects: ["IT & Programming", "Digital Marketing & Social Media", "Graphic Design & UI/UX", "Business Management & Leadership"],
  },
  {
    id: "3",
    slug: "bimbingan-kuliah-mandiri",
    title: "Bimbingan Kuliah Mandiri – Studi Fleksibel",
    description: "Melanjutkan studi sambil bekerja? Program kuliah mandiri kami memungkinkan Anda belajar dengan jadwal fleksibel, tetap mendapat gelar Turki yang diakui internasional.",
    shortDesc: "Program studi fleksibel & part-time",
    price: 8500000,
    duration: "2-4 tahun",
    image: "/images/study-page3.jpeg",
    subjects: ["Associate Degree (2 tahun)", "Bachelor (4 tahun)", "Master (2 tahun)", "Online & Offline Mix"],
  },
  {
    id: "4",
    slug: "internship-work-experience",
    title: "Internship & Work Experience – Bangun Karir di Turki",
    description: "Dapatkan pengalaman kerja profesional melalui program internship di perusahaan-perusahaan terkemuka Turki. Sempurna untuk membangun CV dan networking.",
    shortDesc: "Program internship profesional",
    price: 5500000,
    duration: "3-12 bulan",
    image: "/images/study-page4.jpeg",
    subjects: ["Summer Internship (3 bulan)", "Regular Internship (6 bulan)", "Full-time Traineeship (12 bulan)", "Corporate Training Programs"],
  },
  {
    id: "5",
    slug: "dokumen-persiapan-study-visa",
    title: "Dokumen & Persiapan Study Visa – Sukses dari Awal",
    description: "Persiapan dokumen studi visa yang tepat adalah kunci kesuksesan. Kami membimbing setiap langkah dari pemilihan universitas hingga approval visa.",
    shortDesc: "Persiapan dokumen & study visa",
    price: 3500000,
    duration: "3-4 bulan",
    image: "/images/study-page5.jpeg",
    subjects: ["University Application", "LOA (Letter of Acceptance)", "Student Visa Documents", "Financial Proof & Bank Statement", "Health Certificate & Insurance"],
  },
];
