'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import AnimatedReveal from '@/components/ui/AnimatedReveal';

const galleryImages = [
  {
    src: '/products/mountain-path.png',
    alt: 'The Mountain Path tote bag in a sunlit room',
  },
  {
    src: '/products/kind-soul.png',
    alt: 'The Kind Soul — embroidered face tote bag',
  },
  {
    src: '/products/garden-song.png',
    alt: 'The Garden Song — botanical embroidery tote',
  },
  {
    src: '/products/lavender-field.png',
    alt: 'The Lavender Field — carried with care',
  },
  {
    src: '/products/moon-garden.png',
    alt: 'The Moon Garden — floral crescent embroidery',
  },
  {
    src: '/products/the-melody.png',
    alt: 'The Melody tote bag hanging in warm light',
  },
];

export default function Gallery() {
  return (
    <section className="py-24 md:py-32 bg-parchment">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Header */}
        <AnimatedReveal direction="up" className="mb-12 text-center">
          <p className="eyebrow mb-4">As Carried</p>
          <h2 className="font-serif text-4xl md:text-5xl text-charcoal font-light mb-4">
            Life with Dhara
          </h2>
          <p className="text-warm text-sm">
            <Link
              href="https://www.instagram.com/dhaara.colours?igsh=NTc4MTIwNjQ2YQ=="
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-terracotta transition-colors duration-300"
            >
              @dhaara.colours
            </Link>
          </p>
        </AnimatedReveal>

        {/* Gallery grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-3 auto-rows-[250px] md:auto-rows-[320px]">
          {galleryImages.map((image, index) => (
            <AnimatedReveal
              key={index}
              direction="up"
              delay={index * 0.08}
              className={`relative overflow-hidden group ${
                index === 0 ? 'row-span-2' : ''
              }`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 640px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Hover overlay */}
              <motion.div
                className="absolute inset-0 bg-charcoal/50 flex flex-col items-center justify-center gap-3"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                {/* Dhara mark */}
                <div className="text-cream font-serif text-xl tracking-[0.3em]">
                  DHARA
                </div>
                {/* Instagram icon */}
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-cream/80">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
                </svg>
              </motion.div>
            </AnimatedReveal>
          ))}
        </div>

        {/* Follow CTA */}
        <AnimatedReveal direction="up" delay={0.3} className="mt-10 text-center">
          <Link
            href="https://www.instagram.com/dhaara.colours?igsh=NTc4MTIwNjQ2YQ=="
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 text-xs tracking-[0.2em] uppercase text-warm hover:text-terracotta transition-colors duration-300 group border-b border-beige pb-1 hover:border-terracotta"
          >
            Follow @dhaara.colours
          </Link>
        </AnimatedReveal>
      </div>
    </section>
  );
}
