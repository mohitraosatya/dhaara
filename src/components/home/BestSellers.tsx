'use client';

import { useRef } from 'react';
import { motion } from 'framer-motion';
import { Product } from '@/lib/data';
import ProductCard from '@/components/ProductCard';
import AnimatedReveal from '@/components/ui/AnimatedReveal';
import SectionHeader from '@/components/ui/SectionHeader';

interface BestSellersProps {
  products: Product[];
}

export default function BestSellers({ products }: BestSellersProps) {
  const bestSellers = products.filter((p) => p.bestSeller);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  return (
    <section className="py-24 md:py-32 bg-parchment">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Header */}
        <AnimatedReveal direction="up" className="mb-16 md:mb-20 text-center">
          <SectionHeader
            eyebrow="Best Loved"
            headline="The ones our community carries everywhere"
            body="Made slowly enough that they grow more beautiful with use."
            align="center"
          />
        </AnimatedReveal>

        {/* Desktop: 4-column grid */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {bestSellers.map((product, index) => (
            <AnimatedReveal
              key={product.id}
              direction="up"
              delay={index * 0.1}
            >
              <ProductCard product={product} />
            </AnimatedReveal>
          ))}
        </div>

        {/* Mobile: Horizontal scroll */}
        <div className="md:hidden -mx-6">
          <div
            ref={scrollContainerRef}
            className="flex gap-4 overflow-x-auto scroll-container px-6 pb-4"
            style={{ scrollSnapType: 'x mandatory' }}
          >
            {bestSellers.map((product, index) => (
              <motion.div
                key={product.id}
                className="flex-none w-[75vw] max-w-[280px]"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                style={{ scrollSnapAlign: 'start' }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </div>

          {/* Scroll hint */}
          <div className="flex justify-center gap-2 mt-4 px-6">
            {bestSellers.map((_, index) => (
              <div
                key={index}
                className={`h-px w-8 ${index === 0 ? 'bg-terracotta' : 'bg-beige'}`}
              />
            ))}
          </div>
        </div>

        {/* Bottom note */}
        <AnimatedReveal direction="up" delay={0.3} className="mt-16 text-center">
          <p className="text-warm text-xs tracking-[0.15em] uppercase">
            All bags are handmade — allow 3–5 days for preparation
          </p>
        </AnimatedReveal>
      </div>
    </section>
  );
}
