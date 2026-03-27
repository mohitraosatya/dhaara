import type { Metadata } from 'next';
import { Cormorant_Garamond, DM_Sans } from 'next/font/google';
import './globals.css';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-dm-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Dhaara — Where Thread Becomes Story',
    template: '%s | Dhaara',
  },
  description:
    'Dhaara crafts handmade tote bags stitched with intention. Each piece carries the memory of its making — slow fashion, purposeful design, handcrafted in India.',
  keywords: [
    'handmade tote bags',
    'slow fashion',
    'handcrafted bags India',
    'embroidered bags',
    'sustainable fashion',
    'artisan bags',
    'Dhaara',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://dhaara.shop',
    siteName: 'Dhaara',
    title: 'Dhaara — Where Thread Becomes Story',
    description:
      'Handmade tote bags crafted with intention. Made slowly, carried beautifully.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dhaara — Where Thread Becomes Story',
    description:
      'Handmade tote bags crafted with intention. Made slowly, carried beautifully.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${dmSans.variable}`}>
      <body className="bg-parchment text-charcoal font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
