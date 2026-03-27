'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import AnimatedReveal from '@/components/ui/AnimatedReveal';

export default function CraftStory() {
  return (
    <section className="py-24 md:py-32 bg-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Image */}
          <AnimatedReveal direction="left" className="relative">
            <div className="relative aspect-[3/4] overflow-hidden">
              <Image
                src="/products/the-melody.png"
                alt="A Dhaara handcrafted tote bag in a warm artisan setting"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              {/* Stitched border accent on image */}
              <div className="absolute inset-4 border border-dashed border-cream/40 pointer-events-none" />
            </div>

            {/* Floating accent card */}
            <motion.div
              className="absolute -bottom-6 -right-4 md:-right-8 bg-parchment p-6 max-w-[200px] shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <p className="font-serif text-3xl text-terracotta mb-1">12+</p>
              <p className="text-xs text-warm tracking-[0.1em] uppercase leading-relaxed">
                Hours per bag,<br />on average
              </p>
            </motion.div>
          </AnimatedReveal>

          {/* Right: Story text */}
          <AnimatedReveal direction="right" delay={0.2}>
            <div className="lg:py-8">
              {/* Eyebrow */}
              <p className="eyebrow mb-5">The Craft</p>

              {/* Headline */}
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-charcoal leading-tight mb-8 font-light">
                Every stitch is a breath,{' '}
                <span className="italic">every thread a decision</span>
              </h2>

              {/* Body */}
              <div className="space-y-5 text-warm text-base leading-relaxed font-light mb-10">
                <p>
                  Dhaara begins not in a factory, but at a loom, a table, a pair of hands
                  that have spent years learning how thread moves. Each bag starts as a
                  length of fabric — chosen for its weight, its texture, its capacity to
                  hold stitching.
                </p>
                <p>
                  The embroidery is hand-drawn first, then transferred by eye. The needle
                  follows a rhythm that belongs entirely to the maker. Some pieces take
                  two days. Some take two weeks. None of them are rushed.
                </p>
                <p>
                  We work in small batches — never more than what can be made carefully.
                  This is not a constraint. This is the whole point.
                </p>
              </div>

              {/* Pull quote with stitched border */}
              <div className="relative p-5 mb-10">
                <div className="absolute inset-0 border border-dashed border-beige" />
                <p className="font-serif text-lg md:text-xl italic text-charcoal leading-relaxed">
                  &ldquo;We don&apos;t mass produce. We make, one thread at a time.&rdquo;
                </p>
              </div>

              {/* CTA */}
              <Link
                href="/about"
                className="inline-flex items-center gap-3 text-xs tracking-[0.2em] uppercase text-terracotta hover:text-charcoal transition-colors duration-300 group"
              >
                Read Our Story
                <motion.span
                  className="h-px bg-current"
                  initial={{ width: '2rem' }}
                  whileHover={{ width: '3.5rem' }}
                  transition={{ duration: 0.3 }}
                />
              </Link>
            </div>
          </AnimatedReveal>
        </div>
      </div>
    </section>
  );
}
