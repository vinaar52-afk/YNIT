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
    slug: "visa-processing",
    title: "Visa Processing",
    description: "Fast and reliable visa processing for travel to countries worldwide. We handle all documentation and paperwork.",
    shortDesc: "International visa services",
    price: 499000,
    processingTime: "7-14 days",
    image: "/placeholder.png",
    requirements: ["Passport", "Photos", "Travel details", "Bank statements"],
  },
  {
    id: "2",
    slug: "passport-renewal",
    title: "Passport Renewal",
    description: "Quick passport renewal service with government approval. Expert assistance throughout the process.",
    shortDesc: "Fast passport renewal",
    price: 299000,
    processingTime: "5-10 days",
    image: "/placeholder.png",
    requirements: ["Old passport", "New photos", "ID card", "Application form"],
  },
  {
    id: "3",
    slug: "work-permit",
    title: "Work Permit",
    description: "Complete work permit solutions for employment abroad. Full support from application to approval.",
    shortDesc: "Employment authorization",
    price: 899000,
    processingTime: "14-21 days",
    image: "/placeholder.png",
    requirements: ["Job offer", "Medical checkup", "Police clearance", "Qualifications"],
  },
  {
    id: "4",
    slug: "residence-permit",
    title: "Residence Permit",
    description: "Long-term residence permits for permanent settlement. Complete legal assistance and documentation.",
    shortDesc: "Long-term residency",
    price: 1299000,
    processingTime: "21-30 days",
    image: "/placeholder.png",
    requirements: ["Housing proof", "Income verification", "Health insurance", "Background check"],
  },
];
