'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Send, Mail, Instagram } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnimatedReveal from '@/components/ui/AnimatedReveal';

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function ContactPage() {
  const [form, setForm] = useState<FormState>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate submission
    await new Promise((res) => setTimeout(res, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-parchment pt-24 md:pt-32 pb-24">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          {/* Page header */}
          <AnimatedReveal direction="up" className="mb-16 md:mb-24">
            <p className="eyebrow mb-4">Get in Touch</p>
            <h1 className="font-serif text-5xl md:text-7xl text-charcoal font-light leading-tight max-w-2xl">
              We read every message.
            </h1>
          </AnimatedReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Left: Brand message + contact info */}
            <AnimatedReveal direction="left">
              <div className="space-y-12">
                {/* Philosophy note */}
                <div>
                  <p className="text-warm text-base leading-relaxed font-light mb-6">
                    Dhara is a small workshop. There is no support ticket system, no
                    automated response, no FAQ chatbot. When you write to us, a person
                    reads it and a person responds. Usually within 48 hours — sometimes
                    sooner.
                  </p>
                  <p className="text-warm text-base leading-relaxed font-light">
                    We welcome questions about orders, custom commissions, wholesale
                    enquiries, press, or simply a note about your bag. All of it matters
                    to us.
                  </p>
                </div>

                {/* Stitched border pull note */}
                <div className="relative p-5">
                  <div className="absolute inset-0 border border-dashed border-beige" />
                  <p className="font-serif text-lg italic text-charcoal font-light">
                    &ldquo;Every conversation, like every stitch, is placed with
                    intention.&rdquo;
                  </p>
                </div>

                {/* Contact details */}
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 flex items-center justify-center border border-beige shrink-0 mt-0.5">
                      <Mail size={14} className="text-warm" strokeWidth={1.5} />
                    </div>
                    <div>
                      <p className="text-xs tracking-[0.15em] uppercase text-warm mb-1">
                        Email
                      </p>
                      <Link
                        href="mailto:hello@dharacraft.com"
                        className="text-charcoal hover:text-terracotta transition-colors text-sm"
                      >
                        hello@dharacraft.com
                      </Link>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 flex items-center justify-center border border-beige shrink-0 mt-0.5">
                      <Instagram size={14} className="text-warm" strokeWidth={1.5} />
                    </div>
                    <div>
                      <p className="text-xs tracking-[0.15em] uppercase text-warm mb-1">
                        Instagram
                      </p>
                      <Link
                        href="https://www.instagram.com/dhaara.colours?igsh=NTc4MTIwNjQ2YQ=="
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-charcoal hover:text-terracotta transition-colors text-sm"
                      >
                        @dhaara.colours
                      </Link>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 flex items-center justify-center border border-beige shrink-0 mt-0.5">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-warm">
                        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0116 0z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs tracking-[0.15em] uppercase text-warm mb-1">
                        Workshop
                      </p>
                      <p className="text-charcoal text-sm font-light">
                        Jaipur, Rajasthan, India
                        <br />
                        <span className="text-warm/70 text-xs">
                          Not open to public visits
                        </span>
                      </p>
                    </div>
                  </div>
                </div>

                {/* Response time note */}
                <div className="pt-4">
                  <div className="h-px w-full bg-beige/40 mb-6" />
                  <p className="text-xs text-warm/60 font-light tracking-wide">
                    Response time: typically within 48 hours on weekdays.
                    <br />
                    We are based in IST (UTC+5:30).
                  </p>
                </div>
              </div>
            </AnimatedReveal>

            {/* Right: Contact form */}
            <AnimatedReveal direction="right" delay={0.15}>
              {submitted ? (
                <motion.div
                  className="flex flex-col items-center justify-center h-full min-h-[400px] text-center"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  {/* Decorative */}
                  <div className="relative p-8 mb-8">
                    <div className="absolute inset-0 border border-dashed border-beige" />
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" className="mx-auto mb-4">
                      <circle cx="20" cy="20" r="18" stroke="#B87355" strokeWidth="1" />
                      <path d="M13 20 L18 25 L27 15" stroke="#B87355" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <p className="font-serif text-2xl text-charcoal font-light mb-3">
                      Message received.
                    </p>
                    <p className="text-warm text-sm font-light leading-relaxed">
                      Thank you for reaching out. We will read your message carefully
                      and respond within 48 hours.
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setForm({ name: '', email: '', subject: '', message: '' });
                    }}
                    className="text-xs tracking-[0.15em] uppercase text-warm hover:text-terracotta transition-colors border-b border-current pb-0.5"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Name */}
                  <div className="space-y-2">
                    <label
                      htmlFor="name"
                      className="text-xs tracking-[0.15em] uppercase text-warm block"
                    >
                      Your Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="How shall we address you?"
                      className="input-elegant"
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="text-xs tracking-[0.15em] uppercase text-warm block"
                    >
                      Email Address
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="Where can we reach you?"
                      className="input-elegant"
                    />
                  </div>

                  {/* Subject */}
                  <div className="space-y-2">
                    <label
                      htmlFor="subject"
                      className="text-xs tracking-[0.15em] uppercase text-warm block"
                    >
                      Subject
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      value={form.subject}
                      onChange={handleChange}
                      className="input-elegant bg-transparent"
                    >
                      <option value="" disabled>
                        What is this about?
                      </option>
                      <option value="order">Order or Shipping</option>
                      <option value="custom">Custom Commission</option>
                      <option value="wholesale">Wholesale Enquiry</option>
                      <option value="press">Press or Collaboration</option>
                      <option value="care">Care or Repair</option>
                      <option value="other">Something Else</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <label
                      htmlFor="message"
                      className="text-xs tracking-[0.15em] uppercase text-warm block"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell us whatever you need to. We are listening."
                      className="input-elegant resize-none"
                    />
                  </div>

                  {/* Submit */}
                  <motion.button
                    type="submit"
                    disabled={loading}
                    className={`w-full py-4 flex items-center justify-center gap-3 text-xs tracking-[0.2em] uppercase font-sans transition-all duration-300 ${
                      loading
                        ? 'bg-beige text-warm cursor-not-allowed'
                        : 'bg-terracotta text-cream hover:bg-charcoal'
                    }`}
                    whileTap={loading ? {} : { scale: 0.98 }}
                  >
                    {loading ? (
                      <>
                        <motion.span
                          className="inline-block w-3 h-3 border border-cream/50 border-t-cream rounded-full"
                          animate={{ rotate: 360 }}
                          transition={{ duration: 0.8, repeat: Infinity, ease: 'linear' }}
                        />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={14} strokeWidth={1.5} />
                        Send Message
                      </>
                    )}
                  </motion.button>
                </form>
              )}
            </AnimatedReveal>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
