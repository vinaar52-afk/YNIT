export interface Medical {
  id: string;
  slug: string;
  title: string;
  description: string;
  shortDesc: string;
  price: number;
  duration: string;
  image: string;
  includes: string[];
}

export const medical: Medical[] = [
  {
    id: "1",
    slug: "hair-transplant",
    title: "Hair Transplant – Rambut Lebat & Natural Seumur Hidup",
    description: "Transplantasi rambut dengan teknologi FUE terdepan dari dokter spesialis berpengalaman internasional. Hasil natural, permanent, dan dapat Anda gaya sesuai keinginan.",
    shortDesc: "Transplantasi rambut natural & permanen",
    price: 12500000,
    duration: "4-8 jam",
    image: "/images/medical-page1.jpeg",
    includes: ["FUE (Follicular Unit Extraction)", "DHI (Direct Hair Implantation)", "Robotic-Assisted Transplant"],
  },
  {
    id: "2",
    slug: "rhinoplasty",
    title: "Rhinoplasty – Hidung Proporsional & Percaya Diri",
    description: "Perbaiki bentuk hidung dengan presisi tinggi oleh dokter bedah plastik berpengalaman. Hasil natural dan sesuai proporsi wajah Anda.",
    shortDesc: "Operasi hidung natural & proporsional",
    price: 8500000,
    duration: "2-3 jam",
    image: "/images/medical-page2.jpeg",
    includes: ["Open Rhinoplasty", "Closed Rhinoplasty", "Revision Rhinoplasty", "Non-Surgical (Filler)"],
  },
  {
    id: "3",
    slug: "hollywood-smile",
    title: "Hollywood Smile – Senyum Putih & Sempurna",
    description: "Transformasi senyum Anda dengan veneer premium atau crown berkualitas tinggi. Proses cepat, hasil instan, dan tahan bertahun-tahun.",
    shortDesc: "Senyum putih sempurna dengan veneer",
    price: 9500000,
    duration: "3-5 hari",
    image: "/images/medical-page3.jpeg",
    includes: ["Porcelain Veneer", "Zircon Crown", "Composite Veneer", "All-on-4 Implant"],
  },
];
