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
    slug: "english-mastery",
    title: "English Mastery",
    description: "Comprehensive English language program covering speaking, writing, listening, and grammar. Learn from native speakers.",
    shortDesc: "Professional English courses",
    price: 1999000,
    duration: "12 weeks",
    image: "/placeholder.png",
    subjects: ["Speaking", "Writing", "Grammar", "Business English"],
  },
  {
    id: "2",
    slug: "tech-bootcamp",
    title: "Tech Bootcamp",
    description: "Intensive web development bootcamp covering React, Node.js, and modern web technologies. Industry-ready skills.",
    shortDesc: "Full-stack web development",
    price: 4999000,
    duration: "16 weeks",
    image: "/placeholder.png",
    subjects: ["Frontend", "Backend", "Databases", "Deployment"],
  },
  {
    id: "3",
    slug: "digital-marketing",
    title: "Digital Marketing",
    description: "Master digital marketing strategies including SEO, social media, content marketing, and analytics.",
    shortDesc: "Online marketing mastery",
    price: 2499000,
    duration: "8 weeks",
    image: "/placeholder.png",
    subjects: ["SEO", "Social Media", "Analytics", "Content Strategy"],
  },
  {
    id: "4",
    slug: "business-management",
    title: "Business Management",
    description: "Leadership and business management certification program. Develop essential management and strategic skills.",
    shortDesc: "Executive leadership program",
    price: 3499000,
    duration: "10 weeks",
    image: "/placeholder.png",
    subjects: ["Strategy", "Leadership", "Finance", "Operations"],
  },
];
