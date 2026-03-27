import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/home/Hero';
import ProductCard from '@/components/ProductCard';
import CraftStory from '@/components/home/CraftStory';
import Testimonials from '@/components/home/Testimonials';
import ThreadDivider from '@/components/ui/ThreadDivider';
import AnimatedReveal from '@/components/ui/AnimatedReveal';
import { products, testimonials } from '@/lib/data';

export default function HomePage() {
  const bestSellers = products.filter((p) => p.bestSeller);
  const rest = products.filter((p) => !p.bestSeller);

  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <Hero />

        {/* ── BEST LOVED SECTION ────────────────────────────────── */}
        <section className="py-20 md:py-28 bg-[#FAF8F4]">
          <div className="max-w-7xl mx-auto px-6 md:px-10">
            <AnimatedReveal className="mb-12 text-center">
              <p className="text-[0.65rem] tracking-[0.35em] uppercase text-[#B86F52] mb-3">
                Most Loved
              </p>
              <h2 className="font-serif text-4xl md:text-5xl text-[#3A302B] font-light">
                Best Sellers
              </h2>
              <p className="text-[#5A4A42] text-sm mt-3 font-light">
                The bags our customers carry everywhere — and can&apos;t stop talking about.
              </p>
            </AnimatedReveal>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {bestSellers.map((product, i) => (
                <AnimatedReveal key={product.id} delay={i * 0.07}>
                  <ProductCard product={product} priority={i < 4} />
                </AnimatedReveal>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link
                href="/shop"
                className="inline-flex items-center gap-3 text-[0.65rem] tracking-[0.25em] uppercase text-[#5A4A42] border-b border-[#5A4A42]/40 pb-0.5 hover:text-[#B86F52] hover:border-[#B86F52] transition-colors duration-300"
              >
                View All 9 Bags →
              </Link>
            </div>
          </div>
        </section>

        {/* Thread divider */}
        <ThreadDivider color="gold" height={48} className="bg-[#FAF8F4]" />

        {/* ── THE CRAFT STORY ───────────────────────────────────── */}
        <CraftStory />

        {/* Thread divider */}
        <ThreadDivider color="beige" height={48} className="bg-[#F3EBDD]" />

        {/* ── FULL COLLECTION ───────────────────────────────────── */}
        <section className="py-20 md:py-28 bg-[#F7F2EA]">
          <div className="max-w-7xl mx-auto px-6 md:px-10">
            <AnimatedReveal className="mb-12 text-center">
              <p className="text-[0.65rem] tracking-[0.35em] uppercase text-[#B86F52] mb-3">
                The Collection
              </p>
              <h2 className="font-serif text-4xl md:text-5xl text-[#3A302B] font-light">
                All Our Bags
              </h2>
              <p className="text-[#5A4A42] text-sm mt-3 font-light max-w-md mx-auto">
                Every piece is hand-embroidered. Every stitch placed with care.
                Each one tells a different story.
              </p>
            </AnimatedReveal>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
              {products.map((product, i) => (
                <AnimatedReveal key={product.id} delay={i * 0.06}>
                  <ProductCard product={product} />
                </AnimatedReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── PHILOSOPHY STRIP ──────────────────────────────────── */}
        <section className="py-16 bg-[#3A302B]">
          <div className="max-w-7xl mx-auto px-6 md:px-10">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
              {[
                {
                  title: 'Handmade, always',
                  body: 'No machines. No shortcuts. Every stitch is placed by a human hand, slowly and with intention.',
                },
                {
                  title: 'Made to order',
                  body: 'We make your bag after you order it. That\'s how we ensure every piece gets the attention it deserves.',
                },
                {
                  title: 'Carry it for years',
                  body: 'Built from quality natural canvas. The embroidery is designed to age beautifully — not fall apart.',
                },
              ].map((item) => (
                <div key={item.title} className="px-4">
                  <div className="h-px w-8 bg-[#C8A46A] mx-auto mb-5" />
                  <h3 className="font-serif text-xl text-[#F7F2EA] font-light mb-3">
                    {item.title}
                  </h3>
                  <p className="text-[#E8D8C3]/70 text-sm font-light leading-relaxed">
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── TESTIMONIALS ──────────────────────────────────────── */}
        <Testimonials testimonials={testimonials} />

        {/* ── CUSTOM ORDER BANNER ───────────────────────────────── */}
        <section className="py-20 bg-[#3A302B]">
          <div className="max-w-4xl mx-auto px-6 md:px-10 text-center">
            <AnimatedReveal>
              <p className="text-[0.65rem] tracking-[0.35em] uppercase text-[#C8A46A] mb-5">
                One of a kind
              </p>
              <h2 className="font-serif text-4xl md:text-5xl text-[#F7F2EA] font-light leading-tight mb-5">
                Want a bag that carries<br />
                <span className="italic text-[#D8A6A1]">your story?</span>
              </h2>
              <p className="text-[#E8D8C3]/70 text-base font-light max-w-lg mx-auto mb-10 leading-relaxed">
                Tell us about a memory, a person, a place, or a feeling. We will design
                and embroider a bag that is entirely, unmistakably yours.
              </p>
              <Link
                href="/custom-order"
                className="inline-flex items-center justify-center px-10 py-4 bg-[#B86F52] text-white text-[0.65rem] tracking-[0.3em] uppercase hover:bg-[#F7F2EA] hover:text-[#3A302B] transition-colors duration-300"
              >
                Start My Custom Order
              </Link>
            </AnimatedReveal>
          </div>
        </section>

        {/* ── FINAL CTA BANNER ──────────────────────────────────── */}
        <section className="py-20 bg-[#F3EBDD] text-center">
          <AnimatedReveal>
            <p className="font-serif text-3xl md:text-5xl text-[#3A302B] font-light italic mb-6 leading-snug">
              &ldquo;Made slowly.<br className="hidden md:block" /> Carried beautifully.&rdquo;
            </p>
            <p className="text-[#5A4A42] text-sm font-light mb-10 max-w-sm mx-auto">
              Each bag ships within 3–5 days of your order being placed.
              Handmade, just for you.
            </p>
            <Link
              href="/shop"
              className="inline-flex items-center justify-center px-10 py-4 bg-[#B86F52] text-white text-[0.65rem] tracking-[0.3em] uppercase hover:bg-[#3A302B] transition-colors duration-300"
            >
              Order a Bag Today
            </Link>
          </AnimatedReveal>
        </section>
      </main>
      <Footer />
    </>
  );
}
