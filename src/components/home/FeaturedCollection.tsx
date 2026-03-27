'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Product } from '@/lib/data';
import AnimatedReveal from '@/components/ui/AnimatedReveal';
import SectionHeader from '@/components/ui/SectionHeader';

interface FeaturedCollectionProps {
  products: Product[];
}

function FeaturedCard({
  product,
  size,
  delay,
}: {
  product: Product;
  size: 'large' | 'small';
  delay: number;
}) {
  return (
    <AnimatedReveal delay={delay} direction="up">
      <Link href={`/product/${product.slug}`} className="group block relative overflow-hidden">
        <div
          className={`relative overflow-hidden bg-cream ${
            size === 'large' ? 'aspect-[3/4] md:aspect-[2/3]' : 'aspect-[4/3]'
          }`}
        >
          <Image
            src={product.images[0]}
            alt={product.name}
            fill
            sizes={
              size === 'large'
                ? '(max-width: 768px) 100vw, 66vw'
                : '(max-width: 768px) 100vw, 33vw'
            }
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />

          {/* Hover overlay */}
          <motion.div
            className="absolute inset-0 bg-charcoal/50 flex flex-col items-center justify-end pb-10"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
            <span className="text-cream font-sans text-xs tracking-[0.2em] uppercase border border-cream/60 px-6 py-3">
              View Piece
            </span>
          </motion.div>

          {/* Badge */}
          {product.featured && (
            <div className="absolute top-4 left-4">
              <span className="bg-cream/90 text-warm text-[0.6rem] tracking-[0.15em] uppercase px-3 py-1.5">
                Featured
              </span>
            </div>
          )}
        </div>

        {/* Info */}
        <div className="pt-4">
          <div className="flex items-end justify-between gap-2">
            <div>
              <p className="text-[0.6rem] text-warm tracking-[0.15em] uppercase mb-1">
                {product.category}
              </p>
              <h3
                className={`font-serif text-charcoal leading-tight group-hover:text-terracotta transition-colors duration-300 ${
                  size === 'large' ? 'text-2xl md:text-3xl' : 'text-xl'
                }`}
              >
                {product.name}
              </h3>
            </div>
            <p className="price-tag shrink-0 pb-0.5">
              ₹{product.price.toLocaleString('en-IN')}
            </p>
          </div>
          {size === 'large' && (
            <p className="text-warm text-xs mt-2 leading-relaxed line-clamp-2 font-light max-w-sm">
              {product.shortDesc}
            </p>
          )}
        </div>
      </Link>
    </AnimatedReveal>
  );
}

export default function FeaturedCollection({ products }: FeaturedCollectionProps) {
  const featured = products.filter((p) => p.featured).slice(0, 3);
  const [primary, ...secondary] = featured;

  if (!primary) return null;

  return (
    <section className="py-24 md:py-32 max-w-7xl mx-auto px-6 md:px-10">
      {/* Section header */}
      <AnimatedReveal direction="up" className="mb-16 md:mb-20">
        <SectionHeader
          eyebrow="The Collection"
          headline="Pieces made to be carried for years"
          body="Each design begins with a material, a story, and a question: what does this want to become?"
          align="left"
        />
      </AnimatedReveal>

      {/* Asymmetric grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 items-start">
        {/* Large card: 2/3 width */}
        {primary && (
          <div className="md:col-span-2">
            <FeaturedCard product={primary} size="large" delay={0.1} />
          </div>
        )}

        {/* Two stacked small cards: 1/3 width */}
        {secondary.length > 0 && (
          <div className="flex flex-row md:flex-col gap-4 md:gap-6">
            {secondary.map((product, index) => (
              <div key={product.id} className="flex-1 md:flex-auto">
                <FeaturedCard product={product} size="small" delay={0.2 + index * 0.15} />
              </div>
            ))}
          </div>
        )}
      </div>

      {/* View all link */}
      <AnimatedReveal direction="up" delay={0.4} className="mt-12 text-center">
        <Link
          href="/shop"
          className="inline-flex items-center gap-3 text-xs tracking-[0.2em] uppercase text-warm hover:text-terracotta transition-colors duration-300 group"
        >
          <span className="h-px w-8 bg-current transition-all duration-300 group-hover:w-12" />
          View All Pieces
          <span className="h-px w-8 bg-current transition-all duration-300 group-hover:w-12" />
        </Link>
      </AnimatedReveal>
    </section>
  );
}
