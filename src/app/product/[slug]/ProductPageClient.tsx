'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Minus, Plus, CheckCircle } from 'lucide-react';
import ProductCard from '@/components/ProductCard';
import { Product } from '@/lib/data';

type TabKey = 'story' | 'materials' | 'care';

const tabs: { key: TabKey; label: string }[] = [
  { key: 'story', label: 'The Story' },
  { key: 'materials', label: 'Materials' },
  { key: 'care', label: 'Care' },
];

interface ProductPageClientProps {
  product: Product;
  relatedProducts: Product[];
}

export default function ProductPageClient({ product, relatedProducts }: ProductPageClientProps) {
  const [selectedImage, setSelectedImage] = useState(0);
  const [activeTab, setActiveTab] = useState<TabKey>('story');
  const [quantity, setQuantity] = useState(1);
  const [ordered, setOrdered] = useState(false);

  const handleOrder = () => {
    setOrdered(true);
    setTimeout(() => setOrdered(false), 3000);
  };

  const whatsappMessage = encodeURIComponent(
    `Hi! I'd like to order the following from Dhaara:\n\n*${product.name}*\nQty: ${quantity}\nPrice: ₹${(product.price * quantity).toLocaleString('en-IN')}\n\nPlease confirm availability and share payment details. Thank you!`
  );

  return (
    <main className="min-h-screen bg-[#F7F2EA]">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 pt-24 md:pt-28 pb-6">
        <Link
          href="/shop"
          className="inline-flex items-center gap-2 text-xs text-[#5A4A42] hover:text-[#B86F52] transition-colors tracking-[0.1em] uppercase"
        >
          <ArrowLeft size={13} strokeWidth={1.5} />
          Back to Collection
        </Link>
      </div>

      {/* Product layout */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">

          {/* ── Left: image gallery ── */}
          <div>
            {/* Main image */}
            <div className="relative bg-[#F3EBDD] border border-[#E8D8C3]/50 overflow-hidden" style={{ paddingBottom: '100%' }}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedImage}
                  className="absolute inset-0 flex items-center justify-center p-8"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.35 }}
                >
                  <Image
                    src={product.images[selectedImage]}
                    alt={`${product.name} — image ${selectedImage + 1}`}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-contain"
                  />
                </motion.div>
              </AnimatePresence>

              {/* Handmade label */}
              <div className="absolute top-4 left-4 bg-white/90 text-[#5A4A42] text-[0.6rem] tracking-[0.15em] uppercase px-3 py-1.5">
                Handmade
              </div>
            </div>

            {/* Thumbnails */}
            {product.images.length > 1 && (
              <div className="flex gap-3 mt-3">
                {product.images.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`relative flex-1 overflow-hidden bg-[#F3EBDD] border transition-all duration-200 ${
                      selectedImage === index
                        ? 'border-[#B86F52]'
                        : 'border-[#E8D8C3] hover:border-[#B86F52]/50'
                    }`}
                    style={{ paddingBottom: '100%' }}
                  >
                    <div className="absolute inset-0 flex items-center justify-center p-2">
                      <Image
                        src={img}
                        alt={`${product.name} view ${index + 1}`}
                        fill
                        sizes="100px"
                        className="object-contain"
                      />
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* ── Right: product info ── */}
          <div className="flex flex-col">
            {/* Category */}
            <p className="text-[0.6rem] tracking-[0.3em] uppercase text-[#8FA184] mb-3">
              {product.category} · Embroidered Tote Bag
            </p>

            {/* Name */}
            <h1 className="font-serif text-4xl md:text-5xl text-[#3A302B] font-light leading-tight mb-4">
              {product.name}
            </h1>

            {/* Price */}
            <div className="flex items-baseline gap-4 mb-4">
              <p className="font-serif text-3xl text-[#3A302B]">
                ₹{product.price.toLocaleString('en-IN')}
              </p>
              <p className="text-[#5A4A42] text-xs font-light">
                Free shipping above ₹4,000 · Made to order
              </p>
            </div>

            {/* Short desc */}
            <p className="text-[#5A4A42] text-base leading-relaxed font-light mb-6 border-l-2 border-[#C8A46A] pl-4 italic">
              {product.shortDesc}
            </p>

            <div className="h-px bg-[#E8D8C3] mb-6" />

            {/* Quantity */}
            <div className="mb-6">
              <p className="text-[0.65rem] tracking-[0.2em] uppercase text-[#5A4A42] mb-3">
                Quantity
              </p>
              <div className="inline-flex items-center border border-[#E8D8C3]">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="w-10 h-10 flex items-center justify-center text-[#5A4A42] hover:text-[#3A302B] hover:bg-[#F3EBDD] transition-colors"
                >
                  <Minus size={13} strokeWidth={1.5} />
                </button>
                <span className="w-10 text-center text-[#3A302B] text-sm font-light">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="w-10 h-10 flex items-center justify-center text-[#5A4A42] hover:text-[#3A302B] hover:bg-[#F3EBDD] transition-colors"
                >
                  <Plus size={13} strokeWidth={1.5} />
                </button>
              </div>
              <p className="text-[#5A4A42] text-xs mt-2 font-light">
                Total: <strong className="text-[#3A302B] font-medium">₹{(product.price * quantity).toLocaleString('en-IN')}</strong>
              </p>
            </div>

            {/* ── Order Now button (primary) ── */}
            <motion.button
              onClick={handleOrder}
              whileTap={{ scale: 0.98 }}
              className={`w-full py-4 flex items-center justify-center gap-3 text-sm tracking-[0.15em] uppercase font-sans transition-all duration-300 mb-3 ${
                ordered
                  ? 'bg-[#8FA184] text-white'
                  : 'bg-[#B86F52] text-white hover:bg-[#3A302B]'
              }`}
            >
              {ordered ? (
                <>
                  <CheckCircle size={16} />
                  Order Placed — We&apos;ll Be in Touch
                </>
              ) : (
                'Order Now'
              )}
            </motion.button>

            {/* ── WhatsApp order (secondary) ── */}
            <a
              href={`https://wa.me/919999999999?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 flex items-center justify-center gap-3 border border-[#3A302B]/30 text-[#3A302B] text-xs tracking-[0.15em] uppercase hover:border-[#B86F52] hover:text-[#B86F52] transition-colors duration-300 mb-4"
            >
              {/* WhatsApp icon */}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Order via WhatsApp
            </a>

            {/* Handmade note */}
            <div className="border border-dashed border-[#E8D8C3] p-4 mb-6">
              <p className="text-[#5A4A42] text-xs font-light leading-relaxed text-center">
                This bag is <strong className="text-[#3A302B] font-medium">handmade to order</strong> — allow 3–5 business days before shipping.
                Each piece is unique. Minor thread variations are part of the craft.
              </p>
            </div>

            {/* Quick facts */}
            <div className="grid grid-cols-2 gap-3">
              {[
                { label: 'Material', value: 'Natural Canvas' },
                { label: 'Embroidery', value: 'Hand-stitched' },
                { label: 'Delivery', value: '3–5 business days' },
              ].map((fact) => (
                <div key={fact.label} className="bg-[#F3EBDD] px-3 py-3">
                  <p className="text-[0.6rem] tracking-[0.15em] uppercase text-[#8FA184] mb-0.5">{fact.label}</p>
                  <p className="text-[#3A302B] text-xs font-medium">{fact.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Tabs: Story / Materials / Care ── */}
        <div className="mt-20 md:mt-28 border-t border-[#E8D8C3]/60 pt-12">
          <div className="flex gap-8 border-b border-[#E8D8C3]/60 mb-10">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`pb-4 text-xs tracking-[0.2em] uppercase relative transition-colors duration-200 ${
                  activeTab === tab.key ? 'text-[#3A302B]' : 'text-[#5A4A42] hover:text-[#3A302B]'
                }`}
              >
                {tab.label}
                {activeTab === tab.key && (
                  <motion.div
                    layoutId="tabLine"
                    className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#B86F52]"
                  />
                )}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="max-w-2xl"
            >
              {activeTab === 'story' && (
                <div>
                  <p className="font-serif text-xl italic text-[#5A4A42] mb-6 leading-relaxed">
                    &ldquo;{product.shortDesc}&rdquo;
                  </p>
                  <p className="text-[#5A4A42] text-base leading-relaxed font-light">
                    {product.description}
                  </p>
                </div>
              )}

              {activeTab === 'materials' && (
                <ul className="space-y-4">
                  {product.materials.map((material, index) => (
                    <li key={index} className="flex items-start gap-4 text-[#5A4A42] text-sm font-light">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#B86F52] mt-1.5 shrink-0" />
                      {material}
                    </li>
                  ))}
                </ul>
              )}

              {activeTab === 'care' && (
                <ul className="space-y-4">
                  {product.care.map((instruction, index) => (
                    <li key={index} className="flex items-start gap-4 text-[#5A4A42] text-sm font-light">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#E8D8C3] mt-1.5 shrink-0" />
                      {instruction}
                    </li>
                  ))}
                </ul>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* ── Related Products ── */}
        {relatedProducts.length > 0 && (
          <div className="mt-24 pt-16 border-t border-[#E8D8C3]/60">
            <div className="mb-10">
              <p className="text-[0.65rem] tracking-[0.35em] uppercase text-[#B86F52] mb-2">
                You Might Also Love
              </p>
              <h2 className="font-serif text-3xl md:text-4xl text-[#3A302B] font-light">
                More from the collection
              </h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
              {relatedProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
