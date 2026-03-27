import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProductPageClient from './ProductPageClient';
import { products } from '@/lib/data';

interface ProductPageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const product = products.find((p) => p.slug === params.slug);
  if (!product) return { title: 'Not Found' };

  return {
    title: product.name,
    description: product.shortDesc,
  };
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = products.find((p) => p.slug === params.slug);

  if (!product) {
    notFound();
  }

  const relatedByCategory = products
    .filter((p) => p.id !== product.id && p.category === product.category)
    .slice(0, 3);

  const relatedProducts =
    relatedByCategory.length < 3
      ? [
          ...relatedByCategory,
          ...products
            .filter(
              (p) =>
                p.id !== product.id &&
                !relatedByCategory.find((r) => r.id === p.id)
            )
            .slice(0, 3 - relatedByCategory.length),
        ]
      : relatedByCategory;

  return (
    <>
      <Navbar />
      <ProductPageClient product={product} relatedProducts={relatedProducts} />
      <Footer />
    </>
  );
}
