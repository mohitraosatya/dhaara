'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import { products } from '@/lib/data';
import { motion, AnimatePresence } from 'framer-motion';

type CategoryFilter = 'All' | 'Embroidered' | 'Canvas' | 'Everyday' | 'Statement';
const filters: CategoryFilter[] = ['All', 'Embroidered', 'Canvas', 'Everyday', 'Statement'];

export default function ShopPage() {
  const [activeFilter, setActiveFilter] = useState<CategoryFilter>('All');

  const filteredProducts =
    activeFilter === 'All'
      ? products
      : products.filter((p) => p.category === activeFilter);

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#F7F2EA]">

        {/* Page header */}
        <div className="bg-[#F3EBDD] pt-28 pb-12 text-center px-6 border-b border-[#E8D8C3]/50">
          <p className="text-[0.65rem] tracking-[0.35em] uppercase text-[#B86F52] mb-4">
            Handcrafted in India
          </p>
          <h1 className="font-serif text-5xl md:text-6xl text-[#3A302B] font-light mb-4">
            The Collection
          </h1>
          <p className="text-[#5A4A42] text-sm font-light max-w-md mx-auto">
            {products.length} handmade embroidered tote bags — each one stitched with intention, made to order just for you.
          </p>
        </div>

        {/* Filter tabs */}
        <div className="sticky top-16 md:top-20 z-30 bg-[#F7F2EA]/95 backdrop-blur-sm border-b border-[#E8D8C3]/50">
          <div className="max-w-7xl mx-auto px-6 md:px-10">
            <div className="flex items-center gap-1 overflow-x-auto py-4">
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`relative flex-none px-4 py-2 text-[0.65rem] tracking-[0.18em] uppercase transition-colors duration-200 ${
                    activeFilter === filter
                      ? 'text-[#3A302B]'
                      : 'text-[#5A4A42] hover:text-[#3A302B]'
                  }`}
                >
                  {filter}
                  {activeFilter === filter && (
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#B86F52]"
                      layoutId="shopFilterLine"
                      transition={{ type: 'spring', damping: 30, stiffness: 400 }}
                    />
                  )}
                </button>
              ))}

              <div className="ml-auto pl-4 shrink-0">
                <span className="text-[0.65rem] text-[#5A4A42]/60 font-light">
                  {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Product grid */}
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-12 md:py-16">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
            >
              {filteredProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.06, duration: 0.4 }}
                >
                  <ProductCard product={product} priority={index < 6} />
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {filteredProducts.length === 0 && (
            <div className="text-center py-24">
              <p className="font-serif text-2xl text-[#5A4A42] mb-4">
                No pieces in this category yet.
              </p>
              <p className="text-[#5A4A42]/60 text-sm">
                We make slowly — new pieces are added when they are ready.
              </p>
            </div>
          )}
        </div>

        {/* Bottom note */}
        <div className="border-t border-[#E8D8C3]/50 bg-[#F3EBDD] py-14 text-center px-6">
          <p className="font-serif text-2xl text-[#3A302B] font-light mb-3 italic">
            &ldquo;Each bag carries the memory of its making.&rdquo;
          </p>
          <p className="text-[#5A4A42] text-sm font-light max-w-md mx-auto">
            All bags are handmade to order. Allow 3–5 business days before dispatch.
            We don&apos;t hold inventory — your bag is made fresh when you order it.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
