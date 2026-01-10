'use client';

import Link from 'next/link';
import Image from 'next/image';
import { formatCurrency } from '@/lib/format';

interface CardProps {
  title: string;
  description: string;
  href: string;
  price?: number;
  image?: string;
  badge?: string;
}

export default function Card({ title, description, href, price, image = '/placeholder.png', badge }: CardProps) {
  return (
    <Link href={href}>
      <div className="card-dark cursor-pointer group overflow-hidden">
        {/* Image Container */}
        <div className="relative w-full h-48 mb-4 overflow-hidden rounded-xl">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-300"
            onError={(e) => {
              const img = e.target as HTMLImageElement;
              img.src = '/placeholder.png';
            }}
          />
          {badge && (
            <div className="absolute top-3 right-3 bg-[#22D3EE] text-[#111] px-3 py-1 rounded-lg text-sm font-semibold">
              {badge}
            </div>
          )}
        </div>

        {/* Content */}
        <h3 className="text-xl font-bold text-[#f7f7f7] mb-2 group-hover:text-[#22D3EE] transition-colors">
          {title}
        </h3>
        <p className="text-[#b7b7b7] text-sm mb-4 line-clamp-2">{description}</p>

        {/* Price and CTA */}
        <div className="flex items-center justify-between">
          {price !== undefined && (
            <span className="text-[#22D3EE] font-bold text-lg">{formatCurrency(price)}</span>
          )}
          <span className="text-[#22D3EE] font-semibold text-sm group-hover:gap-2 inline-flex items-center gap-1 transition-all">
            Explore <span>→</span>
          </span>
        </div>
      </div>
    </Link>
  );
}
