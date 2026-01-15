export interface Tour {
  id: string;
  slug: string;
  title: string;
  description: string;
  shortDesc: string;
  price: number;
  duration: string;
  image: string;
  highlights: string[];
}

export const tours: Tour[] = [
  {
    id: "1",
    slug: "jelajahi-istanbul",
    title: "Jelajahi Istanbul: Sejarah, Budaya, dan Keindahan Dua Benua",
    description: "Istanbul adalah kota yang memukau dengan perpaduan sempurna antara Timur dan Barat. Nikmati pengalaman wisata tak terlupakan dengan mengunjungi landmark ikonik, pasar tradisional, dan kuliner autentik Turki.",
    shortDesc: "Jelajahi Istanbul dengan sejarah dan budaya",
    price: 8500000,
    duration: "4 Hari",
    image: "/images/tour-page1.jpeg",
    highlights: ["Hagia Sophia dan Blue Mosque", "Galata Tower & Karakoy District", "Grand Bazaar & Spice Market", "Bosphorus Sunset Cruise", "Topkapi Palace"],
  },
  {
    id: "2",
    slug: "cappadocia-petualangan",
    title: "Cappadocia: Petualangan di Bumi Dongeng dengan Hot Air Balloon",
    description: "Cappadocia adalah destinasi unik dengan pemandangan surreal, gua bawah tanah, dan pengalaman naik balon udara paling indah di dunia. Jangan lewatkan sunset yang spektakuler dari atas langit.",
    shortDesc: "Petualangan Cappadocia dengan hot air balloon",
    price: 7200000,
    duration: "3 Hari",
    image: "/images/tour-page2.jpeg",
    highlights: ["Hot Air Balloon Ride (sunrise)", "Derinkuyu Underground City", "Rose Valley Hiking", "Göreme Open Air Museum", "Turkish Carpet Workshop"],
  },
  {
    id: "3",
    slug: "ephesus-warisan-dunia",
    title: "Ephesus: Jelajahi Situs Warisan Dunia & Rumah Bunda Maria",
    description: "Ephesus adalah salah satu kota Yunani-Romawi paling penting dengan reruntuhan yang menakjubkan. Kunjungi Temple of Artemis, Library of Celsus, dan rumah bersejarah Bunda Maria.",
    shortDesc: "Situs warisan dunia Ephesus yang menakjubkan",
    price: 5500000,
    duration: "2 Hari",
    image: "/images/tour-page3.jpeg",
    highlights: ["Ephesus Archaeological Site", "Library of Celsus", "House of Virgin Mary", "Temple of Artemis", "Şirince Village"],
  },
  {
    id: "4",
    slug: "pamukkale-kolam-mineral",
    title: "Pamukkale: Berenang di Kolam Mineral Putih & Hierapolis",
    description: "Pamukkale adalah keajaiban alam dengan travertine putih yang terlihat seperti kastil di atas gunung. Berenang di kolam air panas mineral yang menyembuhkan sambil menikmati pemandangan lembah yang spektakuler.",
    shortDesc: "Kolam mineral putih Pamukkale yang indah",
    price: 6000000,
    duration: "2 Hari",
    image: "/images/tour-page4.jpeg",
    highlights: ["Pamukkale Travertine Pools", "Hierapolis Ancient City", "Mineral Hot Water Pools", "Sunset from Travertines", "Local Turkish Bath"],
  },
  {
    id: "5",
    slug: "antalya-pantai-indah",
    title: "Antalya: Pantai Indah, Waterfall, & Petualangan Laut",
    description: "Antalya adalah surga pantai di pantai Mediterania dengan pasir putih, air kristal, dan pemandangan pegunungan. Sempurna untuk berenang, snorkeling, dan relaxation di resort mewah.",
    shortDesc: "Pantai Antalya yang indah dan mewah",
    price: 9500000,
    duration: "5 Hari",
    image: "/images/tour-page5.jpeg",
    highlights: ["Duden Waterfall", "Konyaalti Beach", "Mediterranean Yacht Cruise", "Old Town (Kaleiçi)", "Water Sports Activities"],
  },
  {
    id: "6",
    slug: "aegean-islands-eksotis",
    title: "Aegean Islands: Pulau-Pulau Eksotis & Budaya Yunani-Turki",
    description: "Jelajahi pulau-pulau Aegean yang indah dengan budaya unik, pantai tersembunyi, dan kehidupan malam yang vibrant. Dari Fethiye hingga Bodrum, setiap pulau menawarkan pengalaman yang berbeda.",
    shortDesc: "Pulau-pulau Aegean yang eksotis",
    price: 8800000,
    duration: "4 Hari",
    image: "/images/tour-page6.jpeg",
    highlights: ["Fethiye & Blue Lagoon", "Bodrum Castle", "Butterfly Valley", "Island Hopping Cruise", "Fresh Seafood Dinner"],
  },
  {
    id: "7",
    slug: "gallipoli-sejarah",
    title: "Gallipoli: Sejarah, Perang Dunia, & Pemandangan Laut",
    description: "Gallipoli adalah situs bersejarah penting dengan museum dan monumen perang. Nikmati pemandangan Selat Dardanella yang menakjubkan sambil belajar tentang sejarah perang dunia pertama.",
    shortDesc: "Gallipoli dengan sejarah perang dunia",
    price: 5200000,
    duration: "2 Hari",
    image: "/images/tour-page7.jpeg",
    highlights: ["Gallipoli War Memorials", "War Museum", "Anzac Sites", "Dardanelles Strait Views", "Historical Cemeteries"],
  },
  {
    id: "8",
    slug: "black-sea-petualangan",
    title: "Black Sea: Alam Pegunungan, Hutan, & Budaya Pedesaan",
    description: "Pantai Laut Hitam menawarkan pengalaman berbeda dengan hutan lebat, pegunungan, dan budaya pedesaan yang autentik. Sempurna untuk hiking, petualangan alam, dan mempelajari tradisi lokal Turki.",
    shortDesc: "Petualangan di Laut Hitam yang alami",
    price: 6800000,
    duration: "3 Hari",
    image: "/images/tour-page8.jpeg",
    highlights: ["Mountain Trekking", "Tea Plantations", "Rize & Local Villages", "Black Sea Beaches", "Traditional Turkish Meals"],
  },
];
