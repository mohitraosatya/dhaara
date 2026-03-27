'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Send, Instagram } from 'lucide-react';
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
  const [form, setForm] = useState<FormState>({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((res) => setTimeout(res, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#F7F2EA] pt-24 md:pt-32 pb-24">
        <div className="max-w-6xl mx-auto px-6 md:px-10">

          {/* Page header */}
          <AnimatedReveal className="mb-16 md:mb-20">
            <p className="text-[0.65rem] tracking-[0.35em] uppercase text-[#B86F52] mb-4">Get in Touch</p>
            <h1 className="font-serif text-5xl md:text-6xl text-[#3A302B] font-light leading-tight max-w-2xl">
              We read every message.
            </h1>
          </AnimatedReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

            {/* Left */}
            <AnimatedReveal direction="left">
              <div className="space-y-10">
                <div>
                  <p className="text-[#5A4A42] text-base leading-relaxed font-light mb-5">
                    Dhaara is a small, handmade workshop. When you write to us, a person
                    reads it and a person responds — usually within 48 hours.
                  </p>
                  <p className="text-[#5A4A42] text-base leading-relaxed font-light">
                    We welcome questions about orders, custom bags, wholesale
                    enquiries, or simply a note about your bag. All of it matters to us.
                  </p>
                </div>

                {/* Pull quote */}
                <div className="relative p-5">
                  <div className="absolute inset-0 border border-dashed border-[#E8D8C3]" />
                  <p className="font-serif text-lg italic text-[#3A302B] font-light">
                    &ldquo;Every conversation, like every stitch, is placed with intention.&rdquo;
                  </p>
                </div>

                {/* Instagram only */}
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 flex items-center justify-center border border-[#E8D8C3] shrink-0 mt-0.5">
                    <Instagram size={14} className="text-[#5A4A42]" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="text-[0.65rem] tracking-[0.18em] uppercase text-[#5A4A42] mb-1">Instagram</p>
                    <Link
                      href="https://www.instagram.com/dhaara.colours?igsh=NTc4MTIwNjQ2YQ=="
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#3A302B] hover:text-[#B86F52] transition-colors text-sm"
                    >
                      @dhaara.colours
                    </Link>
                  </div>
                </div>

                {/* Custom order CTA */}
                <div className="bg-[#F3EBDD] p-6 border border-[#E8D8C3]">
                  <p className="text-[0.65rem] tracking-[0.25em] uppercase text-[#B86F52] mb-3">Something special?</p>
                  <p className="font-serif text-xl text-[#3A302B] font-light mb-4">
                    Want a bag that tells <em>your</em> story?
                  </p>
                  <p className="text-[#5A4A42] text-sm font-light mb-5 leading-relaxed">
                    We make custom embroidered bags based on your memories, people, places, and feelings. Tell us your story — we&apos;ll stitch it.
                  </p>
                  <Link
                    href="/custom-order"
                    className="inline-flex items-center justify-center px-6 py-3 bg-[#3A302B] text-white text-[0.65rem] tracking-[0.2em] uppercase hover:bg-[#B86F52] transition-colors duration-300"
                  >
                    Start a Custom Order
                  </Link>
                </div>

                <div className="pt-2">
                  <div className="h-px w-full bg-[#E8D8C3]/60 mb-5" />
                  <p className="text-xs text-[#5A4A42]/60 font-light tracking-wide">
                    Response time: typically within 48 hours on weekdays.
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
                  <div className="relative p-8 mb-8">
                    <div className="absolute inset-0 border border-dashed border-[#E8D8C3]" />
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" className="mx-auto mb-4">
                      <circle cx="20" cy="20" r="18" stroke="#B86F52" strokeWidth="1" />
                      <path d="M13 20 L18 25 L27 15" stroke="#B86F52" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <p className="font-serif text-2xl text-[#3A302B] font-light mb-3">Message received.</p>
                    <p className="text-[#5A4A42] text-sm font-light leading-relaxed">
                      Thank you for reaching out. We&apos;ll read your message carefully and respond within 48 hours.
                    </p>
                  </div>
                  <button
                    onClick={() => { setSubmitted(false); setForm({ name: '', email: '', subject: '', message: '' }); }}
                    className="text-xs tracking-[0.15em] uppercase text-[#5A4A42] hover:text-[#B86F52] transition-colors border-b border-current pb-0.5"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-7">
                  {[
                    { id: 'name', label: 'Your Name', type: 'text', placeholder: 'How shall we address you?' },
                    { id: 'email', label: 'Email Address', type: 'email', placeholder: 'Where can we reach you?' },
                  ].map((field) => (
                    <div key={field.id} className="space-y-2">
                      <label htmlFor={field.id} className="text-[0.65rem] tracking-[0.18em] uppercase text-[#5A4A42] block">
                        {field.label}
                      </label>
                      <input
                        id={field.id}
                        name={field.id}
                        type={field.type}
                        required
                        value={form[field.id as keyof FormState]}
                        onChange={handleChange}
                        placeholder={field.placeholder}
                        className="input-elegant"
                      />
                    </div>
                  ))}

                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-[0.65rem] tracking-[0.18em] uppercase text-[#5A4A42] block">Subject</label>
                    <select id="subject" name="subject" required value={form.subject} onChange={handleChange} className="input-elegant bg-transparent">
                      <option value="" disabled>What is this about?</option>
                      <option value="order">Order or Shipping</option>
                      <option value="custom">Custom Commission</option>
                      <option value="wholesale">Wholesale Enquiry</option>
                      <option value="press">Press or Collaboration</option>
                      <option value="care">Care or Repair</option>
                      <option value="other">Something Else</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-[0.65rem] tracking-[0.18em] uppercase text-[#5A4A42] block">Message</label>
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

                  <motion.button
                    type="submit"
                    disabled={loading}
                    className={`w-full py-4 flex items-center justify-center gap-3 text-xs tracking-[0.2em] uppercase font-sans transition-all duration-300 ${
                      loading ? 'bg-[#E8D8C3] text-[#5A4A42] cursor-not-allowed' : 'bg-[#B86F52] text-white hover:bg-[#3A302B]'
                    }`}
                    whileTap={loading ? {} : { scale: 0.98 }}
                  >
                    {loading ? (
                      <>
                        <motion.span
                          className="inline-block w-3 h-3 border border-white/50 border-t-white rounded-full"
                          animate={{ rotate: 360 }}
                          transition={{ duration: 0.8, repeat: Infinity, ease: 'linear' }}
                        />
                        Sending...
                      </>
                    ) : (
                      <><Send size={14} strokeWidth={1.5} /> Send Message</>
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
