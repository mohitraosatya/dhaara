import Link from 'next/link';
import ThreadDivider from './ui/ThreadDivider';

const footerLinks = {
  Collection: [
    { label: 'All Bags', href: '/shop' },
    { label: 'Embroidered', href: '/shop?category=Embroidered' },
    { label: 'Canvas', href: '/shop?category=Canvas' },
    { label: 'Everyday', href: '/shop?category=Everyday' },
    { label: 'Statement', href: '/shop?category=Statement' },
  ],
  Company: [
    { label: 'Our Story', href: '/about' },
    { label: 'The Making', href: '/about#making' },
    { label: 'Journal', href: '/journal' },
    { label: 'Press', href: '/press' },
  ],
  'Care & Ethics': [
    { label: 'Care Instructions', href: '/care' },
    { label: 'Slow Fashion', href: '/about#philosophy' },
    { label: 'Sustainability', href: '/sustainability' },
    { label: 'Repairs', href: '/repairs' },
  ],
  Connect: [
    { label: 'Contact Us', href: '/contact' },
    { label: 'Instagram', href: 'https://www.instagram.com/dhaara.colours?igsh=NTc4MTIwNjQ2YQ==' },
    { label: 'Stockists', href: '/stockists' },
    { label: 'Wholesale', href: '/wholesale' },
  ],
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal text-cream">
      {/* Thread divider at top */}
      <div className="bg-parchment">
        <ThreadDivider color="gold" height={70} className="opacity-80" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Main footer content */}
        <div className="pt-20 pb-16">
          {/* Top section: Wordmark + tagline */}
          <div className="text-center mb-20">
            <h2 className="font-serif text-6xl md:text-8xl tracking-[0.3em] uppercase text-cream font-light mb-6">
              DHAARA
            </h2>
            <p className="font-serif text-xl md:text-2xl italic text-sand/70 tracking-wide">
              Where thread becomes story
            </p>
            {/* Decorative thread line */}
            <div className="flex items-center gap-4 justify-center mt-8">
              <span className="h-px w-16 bg-gradient-to-r from-transparent to-beige/30" />
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <circle cx="10" cy="10" r="1.5" fill="#C9A96E" opacity="0.6" />
                <circle cx="10" cy="10" r="5" stroke="#C9A96E" strokeWidth="0.5" opacity="0.3" />
              </svg>
              <span className="h-px w-16 bg-gradient-to-l from-transparent to-beige/30" />
            </div>
          </div>

          {/* Links grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-8 mb-16">
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h3 className="text-xs tracking-[0.2em] uppercase text-sand/50 mb-6 font-sans">
                  {category}
                </h3>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-sm text-sand/70 hover:text-cream transition-colors duration-300 font-light"
                        target={link.href.startsWith('http') ? '_blank' : undefined}
                        rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-beige/20 to-transparent mb-10" />

          {/* Bottom bar */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex flex-col md:flex-row items-center gap-4 text-xs text-sand/40 font-light">
              <span>© {currentYear} Dhaara. All rights reserved.</span>
              <span className="hidden md:inline">·</span>
              <Link href="/privacy" className="hover:text-sand/70 transition-colors">
                Privacy Policy
              </Link>
              <span className="hidden md:inline">·</span>
              <Link href="/terms" className="hover:text-sand/70 transition-colors">
                Terms of Service
              </Link>
            </div>

            <div className="flex items-center gap-6 text-xs text-sand/40">
              <span className="tracking-[0.15em] font-light">
                Handcrafted in India —{' '}
                <span className="text-gold/60">Stitched with intention</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
