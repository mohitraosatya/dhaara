import { ReactNode } from 'react';
import clsx from 'clsx';

interface SectionHeaderProps {
  eyebrow?: string;
  headline: string;
  body?: string;
  align?: 'left' | 'center' | 'right';
  eyebrowColor?: 'terracotta' | 'warm' | 'gold';
  headlineSize?: 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl';
  showLine?: boolean;
  children?: ReactNode;
  className?: string;
}

export default function SectionHeader({
  eyebrow,
  headline,
  body,
  align = 'center',
  eyebrowColor = 'terracotta',
  headlineSize = '4xl',
  showLine = false,
  children,
  className = '',
}: SectionHeaderProps) {
  const alignClasses = {
    left: 'text-left',
    center: 'text-center mx-auto',
    right: 'text-right ml-auto',
  };

  const eyebrowColorClasses = {
    terracotta: 'text-terracotta',
    warm: 'text-warm',
    gold: 'text-gold',
  };

  const headlineSizeClasses = {
    lg: 'text-3xl md:text-4xl',
    xl: 'text-4xl md:text-5xl',
    '2xl': 'text-4xl md:text-5xl lg:text-6xl',
    '3xl': 'text-5xl md:text-6xl lg:text-7xl',
    '4xl': 'text-5xl md:text-6xl',
    '5xl': 'text-6xl md:text-7xl',
  };

  return (
    <div className={clsx('max-w-2xl', alignClasses[align], className)}>
      {eyebrow && (
        <p
          className={clsx(
            'eyebrow mb-4',
            eyebrowColorClasses[eyebrowColor]
          )}
        >
          {eyebrow}
        </p>
      )}

      {showLine && (
        <div
          className={clsx(
            'h-px bg-gradient-to-r from-transparent via-beige to-transparent mb-6',
            align === 'left' && 'from-beige via-beige to-transparent'
          )}
        />
      )}

      <h2
        className={clsx(
          'font-serif font-light leading-tight text-charcoal mb-6',
          headlineSizeClasses[headlineSize]
        )}
      >
        {headline}
      </h2>

      {body && (
        <p className="text-warm text-base md:text-lg leading-relaxed font-light mb-6">
          {body}
        </p>
      )}

      {children}

      {showLine && (
        <div className="h-px bg-gradient-to-r from-transparent via-beige to-transparent mt-6" />
      )}
    </div>
  );
}
