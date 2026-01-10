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
    slug: "health-checkup",
    title: "Comprehensive Health Checkup",
    description: "Full body health screening including blood tests, imaging, and consultation with specialist doctors.",
    shortDesc: "Complete health screening",
    price: 1299000,
    duration: "2-3 hours",
    image: "/placeholder.png",
    includes: ["Blood tests", "ECG", "Ultrasound", "Doctor consultation"],
  },
  {
    id: "2",
    slug: "dental-care",
    title: "Dental Care Package",
    description: "Professional dental services including cleaning, checkup, and treatment options. Expert dentists available.",
    shortDesc: "Professional dental services",
    price: 599000,
    duration: "1-2 hours",
    image: "/placeholder.png",
    includes: ["Cleaning", "Checkup", "X-rays", "Consultation"],
  },
  {
    id: "3",
    slug: "wellness-retreat",
    title: "Wellness Retreat",
    description: "Holistic wellness program combining fitness, nutrition, and mental health counseling for complete health optimization.",
    shortDesc: "Holistic wellness program",
    price: 3999000,
    duration: "7 days",
    image: "/placeholder.png",
    includes: ["Fitness coaching", "Nutrition plan", "Spa", "Meditation"],
  },
  {
    id: "4",
    slug: "vaccination-program",
    title: "Vaccination Program",
    description: "Complete vaccination packages for travel and routine immunization. Safe and certified vaccines.",
    shortDesc: "Travel & routine vaccines",
    price: 899000,
    duration: "30 minutes",
    image: "/placeholder.png",
    includes: ["Consultation", "Vaccination", "Certificate", "Follow-up"],
  },
];
