'use client';

import { motion } from 'framer-motion';
import AnimatedReveal from '@/components/ui/AnimatedReveal';
import ThreadDivider from '@/components/ui/ThreadDivider';

const pillars = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 4 C10 4 6 9 6 14 C6 22 16 28 16 28 C16 28 26 22 26 14 C26 9 22 4 16 4Z" stroke="#B87355" strokeWidth="1" fill="none" />
        <path d="M16 28 L16 8" stroke="#B87355" strokeWidth="0.5" strokeDasharray="2 2" />
        <path d="M10 14 Q16 10 22 14" stroke="#B87355" strokeWidth="0.5" fill="none" />
      </svg>
    ),
    title: 'Handmade',
    description:
      'Every bag leaves a workshop, not a factory. Made by hand from start to finish — cut, stitched, embroidered, and finished by artisans who have given years to their craft.',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="16" cy="16" r="10" stroke="#B87355" strokeWidth="1" fill="none" />
        <path d="M16 6 L16 16 L22 22" stroke="#B87355" strokeWidth="1" strokeLinecap="round" />
        <circle cx="16" cy="16" r="1.5" fill="#B87355" />
      </svg>
    ),
    title: 'Slow Fashion',
    description:
      'We do not follow seasons. We do not release collections on a schedule. We make when we are ready to make well — and we release when the work is done. That is our entire production model.',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 24 L8 12 L16 6 L24 12 L24 24" stroke="#B87355" strokeWidth="1" fill="none" strokeLinejoin="round" />
        <rect x="12" y="17" width="8" height="7" stroke="#B87355" strokeWidth="1" fill="none" />
        <path d="M16 17 L16 24" stroke="#B87355" strokeWidth="0.5" />
      </svg>
    ),
    title: 'Purposeful Design',
    description:
      'Nothing in a Dhaara bag exists by accident. The proportions, the stitching depth, the handle length — everything is decided through use and revision, until the bag works as beautifully as it looks.',
  },
];

export default function BrandPhilosophy() {
  return (
    <div>
      {/* Thread divider before section */}
      <ThreadDivider color="beige" height={70} />

      <section className="bg-sand/40 py-28 md:py-40">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          {/* Main quote */}
          <AnimatedReveal direction="fade" className="text-center mb-24 md:mb-32">
            <p className="font-serif text-4xl md:text-6xl lg:text-7xl text-charcoal leading-tight font-light tracking-tight">
              Made slowly.
              <br />
              <span className="italic text-warm">Carried beautifully.</span>
            </p>

            {/* Decorative line */}
            <motion.div
              className="flex items-center justify-center gap-4 mt-10"
              initial={{ opacity: 0, scaleX: 0 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              <span className="h-px w-24 bg-gradient-to-r from-transparent to-beige" />
              <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                <circle cx="4" cy="4" r="3" stroke="#D4B896" strokeWidth="1" />
              </svg>
              <span className="h-px w-24 bg-gradient-to-l from-transparent to-beige" />
            </motion.div>
          </AnimatedReveal>

          {/* Three pillars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
            {pillars.map((pillar, index) => (
              <AnimatedReveal
                key={pillar.title}
                direction="up"
                delay={index * 0.15}
              >
                <div className="text-center md:text-left">
                  {/* Icon */}
                  <div className="flex justify-center md:justify-start mb-6">
                    {pillar.icon}
                  </div>

                  {/* Divider */}
                  <div className="h-px w-12 bg-beige mb-6 mx-auto md:mx-0" />

                  {/* Title */}
                  <h3 className="font-serif text-2xl md:text-3xl text-charcoal mb-4 font-light">
                    {pillar.title}
                  </h3>

                  {/* Description */}
                  <p className="text-warm text-sm leading-relaxed font-light">
                    {pillar.description}
                  </p>
                </div>
              </AnimatedReveal>
            ))}
          </div>

          {/* Bottom note */}
          <AnimatedReveal direction="up" delay={0.5} className="mt-24 text-center">
            <p className="text-xs text-warm/60 tracking-[0.2em] uppercase">
              Craft that remembers the hand &nbsp;·&nbsp; Not manufactured, made
            </p>
          </AnimatedReveal>
        </div>
      </section>
    </div>
  );
}
