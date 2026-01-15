'use client';

import Link from 'next/link';
import Image from 'next/image';
import { formatCurrency } from '@/lib/format';
import { useCart } from '@/lib/useCart';
import { useAuth } from '@/lib/useAuth';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

interface CardProps {
  title: string;
  description: string;
  href: string;
  price?: number;
  image?: string;
  badge?: string;
  type?: 'tour' | 'study' | 'dokumen' | 'medical';
}

export default function Card({ title, description, href, price, image = '/placeholder.png', badge, type = 'tour' }: CardProps) {
  const { user } = useAuth();
  const { addToCart } = useCart(user?.id);
  const [showSuccess, setShowSuccess] = useState(false);
  const router = useRouter();

  const handleAddToCart = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (!user) {
      router.push('/login');
      return;
    }
    
    if (price) {
      const result = await addToCart({
        tourId: href,
        tourName: title,
        price,
        quantity: 1,
        image,
        type,
      });
      
      if (result?.success) {
        setShowSuccess(true);
        setTimeout(() => setShowSuccess(false), 2000);
      } else {
        alert(result?.error || 'Gagal menambahkan ke keranjang');
      }
    }
  };

  return (
    <Link href={href}>
      <div className="card-light cursor-pointer group overflow-hidden relative">
        {showSuccess && (
          <div className="absolute top-4 right-4 bg-green-600 text-white px-3 py-2 rounded-[8px] text-[13px] font-medium z-10 animate-fade-in">
            ✓ Ditambahkan
          </div>
        )}
        
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
            <div className="absolute top-3 right-3 bg-red-600 text-white px-3 py-1 rounded-lg text-sm font-semibold">
              {badge}
            </div>
          )}
        </div>

        {/* Content */}
        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-red-600 transition-colors">
          {title}
        </h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{description}</p>

        {/* Price and CTA */}
        {price !== undefined && (
          <div className="mt-4">
            <p className="text-red-600 font-bold text-lg mb-3">{formatCurrency(price)}</p>
            <button
              onClick={handleAddToCart}
              className="btn-primary w-full text-[15px] py-2"
            >
              Pesan
            </button>
          </div>
        )}
      </div>
    </Link>
  );
}
