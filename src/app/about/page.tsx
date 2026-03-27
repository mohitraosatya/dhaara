import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnimatedReveal from '@/components/ui/AnimatedReveal';
import ThreadDivider from '@/components/ui/ThreadDivider';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Story',
  description:
    'Dhaara means thread, flow, continuity. Learn how our handmade tote bags are born from a tradition of slow, intentional craft.',
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-parchment">
        {/* Hero */}
        <div className="relative h-[65vh] min-h-[480px] overflow-hidden">
          <Image
            src="/products/lavender-field.png"
            alt="The Dhaara story — craft and intention"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-charcoal/25 to-parchment/30" />

          <div className="absolute inset-0 flex flex-col items-center justify-end pb-20 text-center px-6">
            <AnimatedReveal direction="up">
              <p className="text-xs tracking-[0.3em] uppercase text-sand/80 font-sans mb-6">
                Our Story
              </p>
              <h1 className="font-serif text-5xl md:text-7xl text-cream font-light leading-tight">
                The thread that runs through everything
              </h1>
            </AnimatedReveal>
          </div>
        </div>

        {/* Section 1: Name & meaning */}
        <section className="py-24 md:py-32 max-w-5xl mx-auto px-6 md:px-10">
          <AnimatedReveal direction="up" className="text-center mb-20">
            <p className="eyebrow mb-6">The Name</p>
            <h2 className="font-serif text-4xl md:text-6xl text-charcoal font-light leading-tight mb-8">
              Dhaara — Thread. Flow. Continuity.
            </h2>
            <div className="h-px w-24 bg-beige mx-auto mb-8" />
          </AnimatedReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <AnimatedReveal direction="left">
              <div className="space-y-5 text-warm text-base leading-relaxed font-light">
                <p>
                  In Hindi, <em className="text-charcoal not-italic font-medium">dhara</em> means
                  thread. But it also means flow — the movement of water, the current of
                  a river, the continuous line of something that doesn&apos;t stop. We chose
                  this word because it contains everything we want our work to mean.
                </p>
                <p>
                  A thread, in craft, is the fundamental element. It is what holds
                  things together. It is the decision made at microscopic scale that
                  determines the strength of the whole. Every stitch is a thread placed
                  with intent. Every bag is thousands of those decisions, made one at a
                  time.
                </p>
                <p>
                  Dhaara began as a question: what would it mean to make something purely
                  well? Not efficiently. Not cheaply. Not quickly. Just — well. With care
                  at every level. With hands that understand what they&apos;re doing.
                </p>
              </div>
            </AnimatedReveal>

            <AnimatedReveal direction="right" delay={0.15}>
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src="/products/kind-soul.png"
                  alt="The Kind Soul — embroidered by hand"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-4 border border-dashed border-cream/30 pointer-events-none" />
              </div>
            </AnimatedReveal>
          </div>
        </section>

        {/* Pull quote */}
        <div className="bg-sand/30 py-20">
          <AnimatedReveal direction="fade" className="text-center max-w-3xl mx-auto px-6">
            <p className="font-serif text-3xl md:text-4xl italic text-charcoal font-light leading-relaxed">
              &ldquo;Each bag carries the memory of its making — the hands that held it,
              the hours spent, the decisions made.&rdquo;
            </p>
          </AnimatedReveal>
        </div>

        <ThreadDivider color="beige" height={60} className="bg-parchment" />

        {/* Section 2: The Making */}
        <section id="making" className="py-24 md:py-32 max-w-5xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <AnimatedReveal direction="up" delay={0.1}>
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src="/products/garden-song.png"
                  alt="The Garden Song — botanical embroidery in progress"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </AnimatedReveal>

            <AnimatedReveal direction="right" delay={0.2} className="md:pt-12">
              <p className="eyebrow mb-5">The Making</p>
              <h2 className="font-serif text-4xl md:text-5xl text-charcoal font-light leading-tight mb-8">
                How a bag becomes a Dhaara bag
              </h2>

              <div className="space-y-5 text-warm text-base leading-relaxed font-light">
                <p>
                  Every bag begins with fabric selection — chosen by touch before sight.
                  We work with handwoven and natural materials: unbleached cottons,
                  handloom linens, and occasionally silk-blend textiles from weavers in
                  Maheshwar and Varanasi.
                </p>
                <p>
                  Once cut, each piece goes to our embroiderer. The motifs are drawn by
                  hand onto the fabric before the stitching begins. There is no
                  machine involvement in the embroidery — only needle, thread, and the
                  years of practice that make the work look effortless.
                </p>
                <p>
                  Assembly happens in our small workshop. The lining is hand-sewn, not
                  heat-pressed. The handles are attached with reinforced stitching that
                  is meant to outlast the rest of the bag. Hardware is sourced from
                  small Indian suppliers who still cast brass by hand.
                </p>
              </div>

              {/* Process steps */}
              <div className="mt-10 space-y-4">
                {[
                  { step: '01', text: 'Material selection & dyeing' },
                  { step: '02', text: 'Hand-cut to pattern' },
                  { step: '03', text: 'Motif drawn, embroidery begun' },
                  { step: '04', text: 'Assembly & lining' },
                  { step: '05', text: 'Final inspection & finishing' },
                ].map((item) => (
                  <div key={item.step} className="flex items-center gap-4">
                    <span className="text-terracotta font-serif text-lg w-8 shrink-0">
                      {item.step}
                    </span>
                    <div className="h-px flex-1 bg-beige/60" />
                    <span className="text-warm text-sm font-light">{item.text}</span>
                  </div>
                ))}
              </div>
            </AnimatedReveal>
          </div>
        </section>

        {/* Pull quote 2 */}
        <div className="bg-cream py-16">
          <AnimatedReveal direction="fade" className="text-center max-w-2xl mx-auto px-6">
            <p className="font-serif text-2xl md:text-3xl italic text-charcoal font-light">
              &ldquo;We don&apos;t have a production line. We have a practice.&rdquo;
            </p>
          </AnimatedReveal>
        </div>

        <ThreadDivider color="gold" height={60} className="bg-parchment" />

        {/* Section 3: Philosophy */}
        <section id="philosophy" className="py-24 md:py-32 max-w-5xl mx-auto px-6 md:px-10">
          <AnimatedReveal direction="up" className="text-center mb-16">
            <p className="eyebrow mb-5">Why Slow Fashion</p>
            <h2 className="font-serif text-4xl md:text-6xl text-charcoal font-light leading-tight">
              The choice to make less
            </h2>
          </AnimatedReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-16">
            {[
              {
                title: 'Against the cycle',
                body: 'We do not follow fashion seasons. We do not plan collections a year in advance. We make when we are ready to make well — and that is the whole of our production strategy.',
              },
              {
                title: 'The cost of care',
                body: 'A Dhaara bag costs more than a mass-produced bag. It should. It takes longer to make, uses better materials, and will outlast anything made by machine. We price for sustainability, not competition.',
              },
              {
                title: 'What is not here',
                body: 'There are no synthetic materials in a Dhaara bag. No glue where stitching can be used. No shortcut that compromises the work. What is not in the bag is as important as what is.',
              },
            ].map((item, index) => (
              <AnimatedReveal key={item.title} direction="up" delay={index * 0.1}>
                <div>
                  <div className="h-px w-8 bg-terracotta mb-5" />
                  <h3 className="font-serif text-xl text-charcoal mb-4 font-light">
                    {item.title}
                  </h3>
                  <p className="text-warm text-sm leading-relaxed font-light">
                    {item.body}
                  </p>
                </div>
              </AnimatedReveal>
            ))}
          </div>
        </section>

        <ThreadDivider color="beige" height={60} className="bg-parchment" />

        {/* Section 4: The Maker */}
        <section className="py-24 md:py-32 bg-sand/20">
          <div className="max-w-5xl mx-auto px-6 md:px-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <AnimatedReveal direction="right" delay={0.15}>
                <p className="eyebrow mb-5">The Maker</p>
                <h2 className="font-serif text-4xl md:text-5xl text-charcoal font-light leading-tight mb-8">
                  A face behind the brand
                </h2>

                <div className="space-y-5 text-warm text-base leading-relaxed font-light">
                  <p>
                    Dhaara was founded by a designer who grew up watching her grandmother
                    embroider — not as a hobby, but as the primary way she understood the
                    world. The grandmother would say: <em className="text-charcoal">a good stitch knows where it belongs.</em>
                  </p>
                  <p>
                    Years later, after a decade in fast fashion, the founder found herself
                    unable to look at another garment made in a way she couldn&apos;t
                    respect. Dhaara was born from the question of what it would mean to
                    make things the way her grandmother made them.
                  </p>
                  <p>
                    The workshop now employs four women, all from the same community,
                    all paid above the industry standard. The goal is never to scale in
                    a way that requires compromising the work.
                  </p>
                </div>
              </AnimatedReveal>

              <AnimatedReveal direction="left">
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image
                    src="/products/moon-garden.png"
                    alt="The Moon Garden — a Dhaara original"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-4 border border-dashed border-cream/25 pointer-events-none" />
                </div>
              </AnimatedReveal>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 text-center bg-parchment">
          <AnimatedReveal direction="up" className="max-w-lg mx-auto px-6">
            <p className="font-serif text-3xl md:text-4xl text-charcoal font-light mb-8 italic">
              &ldquo;Made slowly. Carried beautifully.&rdquo;
            </p>
            <Link
              href="/shop"
              className="inline-flex items-center justify-center px-8 py-3.5 bg-terracotta text-cream text-xs tracking-[0.2em] uppercase font-sans hover:bg-charcoal transition-colors duration-300"
            >
              Explore the Collection
            </Link>
          </AnimatedReveal>
        </section>
      </main>
      <Footer />
    </>
  );
}
