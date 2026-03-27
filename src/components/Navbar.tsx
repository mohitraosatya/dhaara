'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { ShoppingBag, Menu, X, Search } from 'lucide-react';
import { navLinks } from '@/lib/data';
import clsx from 'clsx';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const { scrollY } = useScroll();

  useEffect(() => {
    const unsubscribe = scrollY.on('change', (latest) => {
      setScrolled(latest > 60);
    });
    return () => unsubscribe();
  }, [scrollY]);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const navBg = scrolled ? 'bg-parchment/95 backdrop-blur-md shadow-sm' : 'bg-transparent';
  const textColor = scrolled ? 'text-charcoal' : 'text-cream';
  const borderColor = scrolled ? 'border-beige/30' : 'border-cream/20';

  return (
    <>
      <motion.header
        className={clsx(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
          navBg,
          `border-b ${borderColor}`
        )}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Left: Nav Links (Desktop) */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.slice(0, 2).map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={clsx(
                    'nav-link text-xs tracking-[0.15em] uppercase font-sans transition-colors duration-300',
                    textColor
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Center: Wordmark */}
            <Link
              href="/"
              className={clsx(
                'font-serif text-2xl md:text-3xl tracking-[0.35em] uppercase font-light transition-colors duration-300 absolute left-1/2 -translate-x-1/2',
                textColor
              )}
            >
              DHAARA
            </Link>

            {/* Right: Nav Links + Icons (Desktop) */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.slice(2).map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={clsx(
                    'nav-link text-xs tracking-[0.15em] uppercase font-sans transition-colors duration-300',
                    textColor
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <div className="flex items-center gap-4 ml-4">
                <button
                  className={clsx(
                    'transition-colors duration-300 hover:opacity-70',
                    textColor
                  )}
                  aria-label="Search"
                >
                  <Search size={18} strokeWidth={1.5} />
                </button>
                <Link
                  href="/cart"
                  className={clsx(
                    'transition-colors duration-300 hover:opacity-70 relative',
                    textColor
                  )}
                  aria-label="Cart"
                >
                  <ShoppingBag size={18} strokeWidth={1.5} />
                </Link>
              </div>
            </div>

            {/* Mobile: Hamburger + Cart */}
            <div className="flex md:hidden items-center gap-4 ml-auto">
              <Link
                href="/cart"
                className={clsx('transition-colors duration-300', textColor)}
                aria-label="Cart"
              >
                <ShoppingBag size={18} strokeWidth={1.5} />
              </Link>
              <button
                onClick={() => setIsMenuOpen(true)}
                className={clsx('transition-colors duration-300', textColor)}
                aria-label="Open menu"
              >
                <Menu size={20} strokeWidth={1.5} />
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 z-[60] bg-charcoal/50 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setIsMenuOpen(false)}
            />

            {/* Drawer */}
            <motion.div
              className="fixed top-0 right-0 bottom-0 z-[70] w-full max-w-xs bg-parchment flex flex-col"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            >
              {/* Drawer Header */}
              <div className="flex items-center justify-between p-6 border-b border-beige/30">
                <span className="font-serif text-xl tracking-[0.3em] text-charcoal uppercase">
                  DHAARA
                </span>
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="text-charcoal hover:text-terracotta transition-colors"
                  aria-label="Close menu"
                >
                  <X size={20} strokeWidth={1.5} />
                </button>
              </div>

              {/* Drawer Nav */}
              <nav className="flex flex-col flex-1 p-8 gap-2">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + index * 0.08 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsMenuOpen(false)}
                      className="block font-serif text-3xl text-charcoal hover:text-terracotta transition-colors duration-300 py-3 border-b border-beige/20"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              {/* Drawer Footer */}
              <motion.div
                className="p-8 border-t border-beige/30"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <p className="eyebrow text-warm mb-3">Where thread becomes story</p>
                <p className="text-xs text-warm/70">@dhaara.colours</p>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
