import Link from 'next/link';

interface CardProps {
  title: string;
  description: string;
  href: string;
}

export default function Card({ title, description, href }: CardProps) {
  return (
    <Link href={href}>
      <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow cursor-pointer">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <span className="text-blue-600 font-medium">Pelajari lebih lanjut →</span>
      </div>
    </Link>
  );
}
