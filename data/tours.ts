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
    slug: "bali-paradise",
    title: "Bali Paradise",
    description: "Discover the island of gods with pristine beaches, ancient temples, and lush rice terraces. Experience authentic Balinese culture with our expert guides.",
    shortDesc: "Island exploration with temples & beaches",
    price: 1299000,
    duration: "5 Days",
    image: "/placeholder.png",
    highlights: ["Temple tours", "Beach activities", "Cultural experience", "Local cuisine"],
  },
  {
    id: "2",
    slug: "jakarta-city-tour",
    title: "Jakarta City Tour",
    description: "Explore Indonesia's vibrant capital with modern skyscrapers, historical monuments, and bustling markets. Perfect for urban explorers.",
    shortDesc: "Modern capital city adventure",
    price: 799000,
    duration: "3 Days",
    image: "/placeholder.png",
    highlights: ["City landmarks", "Night markets", "Museum tours", "Local dining"],
  },
  {
    id: "3",
    slug: "lombok-adventure",
    title: "Lombok Adventure",
    description: "Experience the untouched beauty of Lombok with stunning waterfalls, pristine beaches, and adventure activities.",
    shortDesc: "Adventure in tropical paradise",
    price: 1099000,
    duration: "4 Days",
    image: "/placeholder.png",
    highlights: ["Waterfalls", "Snorkeling", "Hiking", "Beach camping"],
  },
  {
    id: "4",
    slug: "java-heritage",
    title: "Java Heritage",
    description: "Journey through Java's rich history visiting ancient temples, volcanic mountains, and traditional villages.",
    shortDesc: "Cultural heritage tour",
    price: 1499000,
    duration: "6 Days",
    image: "/placeholder.png",
    highlights: ["Borobudur temple", "Volcanic hikes", "Traditional villages", "Sunrise views"],
  },
];
