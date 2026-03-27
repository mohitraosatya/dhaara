'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnimatedReveal from '@/components/ui/AnimatedReveal';

interface CustomOrderForm {
  name: string;
  email: string;
  whatsapp: string;
  story: string;
  occasion: string;
  forWhom: string;
  colors: string;
  motifs: string;
  budget: string;
  anything: string;
}

const empty: CustomOrderForm = {
  name: '', email: '', whatsapp: '', story: '', occasion: '',
  forWhom: '', colors: '', motifs: '', budget: '', anything: '',
};

const occasions = [
  'For myself — I just want a bag that feels like me',
  'A gift for someone I love',
  'A wedding or anniversary',
  'A birthday',
  'A celebration of something personal',
  'Other',
];

const budgets = [
  '₹1,500 – ₹2,500',
  '₹2,500 – ₹4,000',
  '₹4,000 – ₹6,000',
  '₹6,000+',
  'I\'m flexible — make it beautiful',
];

export default function CustomOrderPage() {
  const [form, setForm] = useState<CustomOrderForm>(empty);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState(1);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((res) => setTimeout(res, 1400));
    setLoading(false);
    setSubmitted(true);
  };

  const whatsappMessage = encodeURIComponent(
    `Hi Dhaara! I'd like to place a *Custom Order* 🌿\n\n` +
    `*Name:* ${form.name}\n` +
    `*Email:* ${form.email}\n\n` +
    `*My Story:*\n${form.story}\n\n` +
    `*Occasion:* ${form.occasion}\n` +
    `*This bag is for:* ${form.forWhom}\n` +
    `*Colours I love:* ${form.colors}\n` +
    `*Motifs / symbols:* ${form.motifs}\n` +
    `*Budget:* ${form.budget}\n\n` +
    `*Anything else:* ${form.anything || 'Nothing more to add!'}\n\n` +
    `Looking forward to hearing from you!`
  );

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#F7F2EA]">

        {/* Hero header */}
        <div className="bg-[#F3EBDD] pt-28 pb-16 px-6 text-center border-b border-[#E8D8C3]/50">
          <AnimatedReveal>
            <p className="text-[0.65rem] tracking-[0.35em] uppercase text-[#B86F52] mb-4">
              One of a kind
            </p>
            <h1 className="font-serif text-5xl md:text-6xl text-[#3A302B] font-light leading-tight mb-5">
              A bag that carries<br />
              <span className="italic text-[#B86F52]">your story</span>
            </h1>
            <p className="text-[#5A4A42] text-base font-light max-w-xl mx-auto leading-relaxed">
              Tell us about a memory, a person, a place, a feeling — anything that lives in you.
              We will design and embroider a bag that is entirely yours.
              No two are ever the same.
            </p>
          </AnimatedReveal>

          {/* Thread divider */}
          <div className="flex items-center justify-center mt-10">
            <svg width="200" height="14" viewBox="0 0 200 14" fill="none">
              <path
                d="M 0,7 C 25,1 40,13 65,7 S 100,1 125,7 S 160,13 185,7 S 195,4 200,7"
                stroke="#C8A46A"
                strokeWidth="1.2"
                strokeLinecap="round"
                fill="none"
              />
            </svg>
          </div>
        </div>

        {/* How it works */}
        <section className="py-14 border-b border-[#E8D8C3]/40">
          <div className="max-w-4xl mx-auto px-6 md:px-10">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
              {[
                { num: '01', title: 'Tell us your story', body: 'Fill in the form below — share the memory, person, or feeling you want the bag to carry.' },
                { num: '02', title: 'We design for you', body: 'Our embroiderer sketches a motif just for you. We share the concept before we begin stitching.' },
                { num: '03', title: 'We stitch, you carry', body: 'Your bag is hand-embroidered over several days and shipped directly to you.' },
              ].map((item) => (
                <AnimatedReveal key={item.num} delay={parseInt(item.num) * 0.1}>
                  <div>
                    <p className="font-serif text-4xl text-[#E8D8C3] mb-3">{item.num}</p>
                    <h3 className="font-serif text-lg text-[#3A302B] font-light mb-2">{item.title}</h3>
                    <p className="text-[#5A4A42] text-sm font-light leading-relaxed">{item.body}</p>
                  </div>
                </AnimatedReveal>
              ))}
            </div>
          </div>
        </section>

        {/* The Form */}
        <section className="py-16 md:py-20">
          <div className="max-w-2xl mx-auto px-6 md:px-10">

            <AnimatedReveal className="mb-12 text-center">
              <h2 className="font-serif text-3xl md:text-4xl text-[#3A302B] font-light mb-3">
                Share your story
              </h2>
              <p className="text-[#5A4A42] text-sm font-light">
                There are no wrong answers. Write as little or as much as you feel.
              </p>
            </AnimatedReveal>

            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center py-12"
                >
                  <div className="relative inline-block p-10 mb-8">
                    <div className="absolute inset-0 border border-dashed border-[#E8D8C3]" />
                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" className="mx-auto mb-5">
                      <circle cx="24" cy="24" r="22" stroke="#B86F52" strokeWidth="1" />
                      <path d="M15 24 L21 30 L33 18" stroke="#B86F52" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <p className="font-serif text-3xl text-[#3A302B] font-light mb-4">
                      Your story is with us.
                    </p>
                    <p className="text-[#5A4A42] text-sm font-light leading-relaxed max-w-xs mx-auto mb-6">
                      Thank you, {form.name}. We have received your custom order request
                      and will reach out within 48 hours to discuss your design.
                    </p>
                    <p className="text-[#5A4A42] text-sm font-light leading-relaxed max-w-xs mx-auto">
                      Prefer to chat directly?
                    </p>
                  </div>

                  {/* WhatsApp follow-up */}
                  <a
                    href={`https://wa.me/919999999999?text=${whatsappMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-3 px-8 py-3.5 bg-[#3A302B] text-white text-[0.65rem] tracking-[0.2em] uppercase hover:bg-[#B86F52] transition-colors duration-300 mb-6"
                  >
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    Continue on WhatsApp
                  </a>

                  <div>
                    <button
                      onClick={() => { setSubmitted(false); setForm(empty); setStep(1); }}
                      className="text-xs tracking-[0.15em] uppercase text-[#5A4A42] hover:text-[#B86F52] transition-colors border-b border-current pb-0.5"
                    >
                      Start a new request
                    </button>
                  </div>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  className="space-y-8"
                >
                  {/* Contact details */}
                  <div className="space-y-6">
                    <p className="text-[0.65rem] tracking-[0.3em] uppercase text-[#B86F52]">About You</p>

                    <div className="space-y-2">
                      <label htmlFor="name" className="text-[0.65rem] tracking-[0.18em] uppercase text-[#5A4A42] block">Your Name *</label>
                      <input id="name" name="name" type="text" required value={form.name} onChange={handleChange}
                        placeholder="What shall we call you?" className="input-elegant" />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-[0.65rem] tracking-[0.18em] uppercase text-[#5A4A42] block">Email *</label>
                        <input id="email" name="email" type="email" required value={form.email} onChange={handleChange}
                          placeholder="hello@you.com" className="input-elegant" />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="whatsapp" className="text-[0.65rem] tracking-[0.18em] uppercase text-[#5A4A42] block">WhatsApp (optional)</label>
                        <input id="whatsapp" name="whatsapp" type="tel" value={form.whatsapp} onChange={handleChange}
                          placeholder="+91 XXXXX XXXXX" className="input-elegant" />
                      </div>
                    </div>
                  </div>

                  <div className="h-px bg-[#E8D8C3]/60" />

                  {/* The story */}
                  <div className="space-y-6">
                    <div>
                      <p className="text-[0.65rem] tracking-[0.3em] uppercase text-[#B86F52] mb-1">Your Story</p>
                      <p className="text-[#5A4A42] text-xs font-light">This is the most important part. Take your time.</p>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="story" className="text-[0.65rem] tracking-[0.18em] uppercase text-[#5A4A42] block">
                        Tell us your story *
                      </label>
                      <textarea
                        id="story" name="story" required rows={6} value={form.story} onChange={handleChange}
                        placeholder="A person who means everything to you. A place you return to in your mind. A memory that shaped you. A feeling you carry everywhere. A quote, a flower, a season, an animal — anything that is deeply, unmistakably you. Write it here."
                        className="input-elegant resize-none leading-relaxed"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="forWhom" className="text-[0.65rem] tracking-[0.18em] uppercase text-[#5A4A42] block">
                        Who is this bag for?
                      </label>
                      <input id="forWhom" name="forWhom" type="text" value={form.forWhom} onChange={handleChange}
                        placeholder="Myself / my mother / my best friend / my partner…" className="input-elegant" />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="occasion" className="text-[0.65rem] tracking-[0.18em] uppercase text-[#5A4A42] block">Occasion</label>
                      <select id="occasion" name="occasion" value={form.occasion} onChange={handleChange} className="input-elegant bg-transparent">
                        <option value="">Select one…</option>
                        {occasions.map((o) => <option key={o} value={o}>{o}</option>)}
                      </select>
                    </div>
                  </div>

                  <div className="h-px bg-[#E8D8C3]/60" />

                  {/* Design preferences */}
                  <div className="space-y-6">
                    <p className="text-[0.65rem] tracking-[0.3em] uppercase text-[#B86F52]">Design Preferences</p>

                    <div className="space-y-2">
                      <label htmlFor="colors" className="text-[0.65rem] tracking-[0.18em] uppercase text-[#5A4A42] block">
                        Colours that feel like you
                      </label>
                      <input id="colors" name="colors" type="text" value={form.colors} onChange={handleChange}
                        placeholder="Dusty rose and sage / warm terracotta / deep forest green / I trust you…" className="input-elegant" />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="motifs" className="text-[0.65rem] tracking-[0.18em] uppercase text-[#5A4A42] block">
                        Motifs, symbols, or images (if any)
                      </label>
                      <input id="motifs" name="motifs" type="text" value={form.motifs} onChange={handleChange}
                        placeholder="Sunflowers / a crescent moon / mountains / birds / a name / a date…" className="input-elegant" />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="budget" className="text-[0.65rem] tracking-[0.18em] uppercase text-[#5A4A42] block">Budget</label>
                      <select id="budget" name="budget" value={form.budget} onChange={handleChange} className="input-elegant bg-transparent">
                        <option value="">Select a range…</option>
                        {budgets.map((b) => <option key={b} value={b}>{b}</option>)}
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="anything" className="text-[0.65rem] tracking-[0.18em] uppercase text-[#5A4A42] block">
                        Anything else we should know?
                      </label>
                      <textarea
                        id="anything" name="anything" rows={3} value={form.anything} onChange={handleChange}
                        placeholder="A deadline, a special request, a reference image description, or just something you wanted to say…"
                        className="input-elegant resize-none"
                      />
                    </div>
                  </div>

                  {/* Note */}
                  <div className="border border-dashed border-[#E8D8C3] p-5">
                    <p className="text-[#5A4A42] text-xs font-light leading-relaxed text-center">
                      Custom orders are priced based on complexity and start at <strong className="text-[#3A302B] font-medium">₹1,500</strong>.
                      We will share a quote before any payment is made.
                      Turnaround is typically <strong className="text-[#3A302B] font-medium">7–14 days</strong> from design approval.
                    </p>
                  </div>

                  {/* Submit */}
                  <motion.button
                    type="submit"
                    disabled={loading}
                    className={`w-full py-4 flex items-center justify-center gap-3 text-sm tracking-[0.15em] uppercase font-sans transition-all duration-300 ${
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
                        Sending your story…
                      </>
                    ) : (
                      'Send My Story'
                    )}
                  </motion.button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
