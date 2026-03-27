'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@/lib/data';

interface ProductCardProps {
  product: Product;
  priority?: boolean;
}

export default function ProductCard({ product, priority = false }: ProductCardProps) {
  return (
    <div className="group flex flex-col bg-[#F7F2EA] border border-[#E8D8C3]/60 hover:border-[#B86F52]/40 transition-colors duration-300">
      {/* Image container */}
      <Link href={`/product/${product.slug}`} className="block relative overflow-hidden bg-[#F3EBDD]" style={{ paddingBottom: '100%' }}>
        <div className="absolute inset-0 flex items-center justify-center p-6">
          <Image
            src={product.images[0]}
            alt={product.name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-contain transition-transform duration-500 group-hover:scale-105"
            priority={priority}
          />
        </div>

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-10">
          {product.bestSeller && (
            <span className="bg-[#B86F52] text-white text-[0.6rem] tracking-[0.15em] uppercase px-2.5 py-1">
              Best Loved
            </span>
          )}
          {product.featured && !product.bestSeller && (
            <span className="bg-[#3A302B] text-white text-[0.6rem] tracking-[0.15em] uppercase px-2.5 py-1">
              Featured
            </span>
          )}
        </div>

        {/* Handmade label */}
        <div className="absolute top-3 right-3 z-10">
          <span className="bg-white/80 text-[#5A4A42] text-[0.55rem] tracking-[0.15em] uppercase px-2 py-1">
            Handmade
          </span>
        </div>
      </Link>

      {/* Info */}
      <div className="p-4 flex flex-col gap-3">
        <div>
          <p className="text-[0.6rem] text-[#8FA184] tracking-[0.2em] uppercase mb-1">
            {product.category}
          </p>
          <Link href={`/product/${product.slug}`}>
            <h3 className="font-serif text-[1.15rem] text-[#3A302B] leading-snug hover:text-[#B86F52] transition-colors duration-200">
              {product.name}
            </h3>
          </Link>
          <p className="text-[#5A4A42] text-xs mt-1.5 leading-relaxed line-clamp-2 font-light">
            {product.shortDesc}
          </p>
        </div>

        <div className="flex items-center justify-between pt-1 border-t border-[#E8D8C3]">
          <p className="font-serif text-lg text-[#3A302B]">
            ₹{product.price.toLocaleString('en-IN')}
          </p>
          <Link
            href={`/product/${product.slug}`}
            className="bg-[#3A302B] text-white text-[0.6rem] tracking-[0.2em] uppercase px-4 py-2 hover:bg-[#B86F52] transition-colors duration-300"
          >
            Order Now
          </Link>
        </div>
      </div>
    </div>
  );
}
