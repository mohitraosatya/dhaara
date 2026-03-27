'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
});

export default function Hero() {
  return (
    <section className="bg-[#F3EBDD] pt-24 pb-0 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-0 items-end">

          {/* Left — text */}
          <div className="pb-16 lg:pb-24 flex flex-col justify-center">
            <motion.p
              {...fadeUp(0.1)}
              className="text-[0.65rem] tracking-[0.35em] uppercase text-[#B86F52] mb-6"
            >
              Handcrafted in India · Embroidered by hand
            </motion.p>

            <motion.h1
              {...fadeUp(0.25)}
              className="font-serif font-light text-[#3A302B] leading-[1.05] mb-6"
              style={{ fontSize: 'clamp(2.6rem, 6vw, 5.5rem)' }}
            >
              Where Thread
              <br />
              <span className="italic text-[#B86F52]">Becomes Story</span>
            </motion.h1>

            {/* Decorative thread line */}
            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
              style={{ transformOrigin: 'left' }}
              className="mb-6"
            >
              <svg width="160" height="14" viewBox="0 0 160 14" fill="none">
                <path
                  d="M 0,7 C 20,1 35,13 55,7 S 85,1 105,7 S 135,13 160,7"
                  stroke="#C8A46A"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  fill="none"
                />
              </svg>
            </motion.div>

            <motion.p
              {...fadeUp(0.4)}
              className="text-[#5A4A42] text-base md:text-lg font-light leading-relaxed max-w-md mb-10"
            >
              Each bag is stitched by hand — one needle, one thread, one story at a time.
              Not mass produced. <em>Made.</em>
            </motion.p>

            <motion.div {...fadeUp(0.55)} className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/shop"
                className="inline-flex items-center justify-center px-8 py-3.5 bg-[#3A302B] text-white text-[0.65rem] tracking-[0.25em] uppercase hover:bg-[#B86F52] transition-colors duration-300"
              >
                Shop All Bags
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center px-8 py-3.5 border border-[#3A302B]/40 text-[#3A302B] text-[0.65rem] tracking-[0.25em] uppercase hover:border-[#B86F52] hover:text-[#B86F52] transition-colors duration-300"
              >
                Our Story
              </Link>
            </motion.div>

            {/* Trust signals */}
            <motion.div {...fadeUp(0.7)} className="flex flex-wrap gap-6 mt-10 pt-10 border-t border-[#E8D8C3]">
              {[
                { label: '100% Handmade', sub: 'Every single stitch' },
                { label: 'Ship in 3–5 days', sub: 'Made to order' },
                { label: 'Free returns', sub: 'If you\'re not happy' },
              ].map((item) => (
                <div key={item.label}>
                  <p className="text-[#3A302B] text-xs font-medium tracking-wide">{item.label}</p>
                  <p className="text-[#5A4A42] text-xs font-light">{item.sub}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — product showcase grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="grid grid-cols-2 gap-3 lg:pl-8"
          >
            {/* Large featured bag */}
            <Link
              href="/product/the-moon-garden"
              className="col-span-1 row-span-2 relative group overflow-hidden bg-[#EDE2D2]"
              style={{ minHeight: '420px' }}
            >
              <div className="absolute inset-0 flex items-center justify-center p-4">
                <Image
                  src="/products/moon-garden.png"
                  alt="The Moon Garden tote bag"
                  fill
                  priority
                  sizes="(max-width: 1024px) 50vw, 30vw"
                  className="object-contain transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#3A302B]/70 to-transparent p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-white font-serif text-lg">The Moon Garden</p>
                <p className="text-white/80 text-xs">₹2,400</p>
              </div>
            </Link>

            {/* Two smaller bags */}
            <Link
              href="/product/the-kind-soul"
              className="col-span-1 relative group overflow-hidden bg-[#EDE2D2]"
              style={{ minHeight: '200px' }}
            >
              <div className="absolute inset-0 flex items-center justify-center p-3">
                <Image
                  src="/products/kind-soul.png"
                  alt="The Kind Soul tote bag"
                  fill
                  priority
                  sizes="25vw"
                  className="object-contain transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#3A302B]/70 to-transparent p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-white font-serif text-sm">The Kind Soul</p>
                <p className="text-white/80 text-[0.65rem]">₹1,850</p>
              </div>
            </Link>
            <Link
              href="/product/the-garden-song"
              className="col-span-1 relative group overflow-hidden bg-[#EDE2D2]"
              style={{ minHeight: '200px' }}
            >
              <div className="absolute inset-0 flex items-center justify-center p-3">
                <Image
                  src="/products/garden-song.png"
                  alt="The Garden Song tote bag"
                  fill
                  priority
                  sizes="25vw"
                  className="object-contain transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#3A302B]/70 to-transparent p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-white font-serif text-sm">The Garden Song</p>
                <p className="text-white/80 text-[0.65rem]">₹2,100</p>
              </div>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
