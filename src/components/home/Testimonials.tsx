'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Testimonial } from '@/lib/data';
import AnimatedReveal from '@/components/ui/AnimatedReveal';
import SectionHeader from '@/components/ui/SectionHeader';

interface TestimonialsProps {
  testimonials: Testimonial[];
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <span
          key={i}
          className={`block w-1.5 h-1.5 rounded-full ${
            i < rating ? 'bg-terracotta' : 'bg-beige'
          }`}
        />
      ))}
    </div>
  );
}

function TestimonialCard({
  testimonial,
  index,
}: {
  testimonial: Testimonial;
  index: number;
}) {
  return (
    <motion.div
      key={testimonial.id}
      className="bg-parchment p-8 md:p-10 relative group hover:-translate-y-1 transition-transform duration-400"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.7 }}
    >
      {/* Decorative quote mark */}
      <div className="quote-mark absolute top-4 left-6 select-none leading-none">
        &ldquo;
      </div>

      {/* Rating */}
      <div className="mb-6 relative z-10">
        <StarRating rating={testimonial.rating} />
      </div>

      {/* Text */}
      <blockquote className="font-serif text-lg md:text-xl text-charcoal leading-relaxed mb-8 relative z-10 font-light">
        &ldquo;{testimonial.text}&rdquo;
      </blockquote>

      {/* Author */}
      <div className="flex items-center gap-3">
        <div className="h-px flex-1 bg-beige" />
        <div className="text-right">
          <p className="text-charcoal text-sm font-medium">{testimonial.name}</p>
          <p className="text-warm text-xs tracking-[0.1em]">{testimonial.location}</p>
        </div>
      </div>
    </motion.div>
  );
}

export default function Testimonials({ testimonials }: TestimonialsProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 3;
  const totalPages = Math.ceil(testimonials.length / itemsPerPage);

  const visibleTestimonials = testimonials.slice(
    currentIndex * itemsPerPage,
    (currentIndex + 1) * itemsPerPage
  );

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === totalPages - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-24 md:py-32 bg-cream">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Header */}
        <AnimatedReveal direction="up" className="mb-16 md:mb-20 text-center">
          <SectionHeader
            eyebrow="What Our Community Says"
            headline="Carried with love"
            body="Words from the people who carry Dhaara every day."
            align="center"
          />
        </AnimatedReveal>

        {/* Desktop: 3-column grid */}
        <div className="hidden md:grid grid-cols-3 gap-6">
          <AnimatePresence mode="wait">
            {visibleTestimonials.map((testimonial, index) => (
              <TestimonialCard
                key={testimonial.id}
                testimonial={testimonial}
                index={index}
              />
            ))}
          </AnimatePresence>
        </div>

        {/* Mobile: Single card */}
        <div className="md:hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={testimonials[currentIndex].id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
            >
              <TestimonialCard testimonial={testimonials[currentIndex]} index={0} />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-6 mt-12">
          {/* Prev */}
          <button
            onClick={handlePrev}
            className="w-10 h-10 flex items-center justify-center border border-beige text-warm hover:border-terracotta hover:text-terracotta transition-colors duration-300"
            aria-label="Previous testimonials"
          >
            <ChevronLeft size={16} strokeWidth={1.5} />
          </button>

          {/* Dots */}
          <div className="flex items-center gap-2">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-px transition-all duration-300 ${
                  index === currentIndex
                    ? 'w-8 bg-terracotta'
                    : 'w-4 bg-beige hover:bg-warm'
                }`}
                aria-label={`Go to page ${index + 1}`}
              />
            ))}
          </div>

          {/* Next */}
          <button
            onClick={handleNext}
            className="w-10 h-10 flex items-center justify-center border border-beige text-warm hover:border-terracotta hover:text-terracotta transition-colors duration-300"
            aria-label="Next testimonials"
          >
            <ChevronRight size={16} strokeWidth={1.5} />
          </button>
        </div>
      </div>
    </section>
  );
}
