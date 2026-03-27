'use client';

import { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import clsx from 'clsx';

interface ThreadDividerProps {
  color?: 'beige' | 'gold' | 'terracotta' | 'warm';
  className?: string;
  height?: number;
  animated?: boolean;
}

const colorMap = {
  beige: '#D4B896',
  gold: '#C9A96E',
  terracotta: '#B87355',
  warm: '#7A6A5A',
};

export default function ThreadDivider({
  color = 'beige',
  className = '',
  height = 60,
  animated = true,
}: ThreadDividerProps) {
  const ref = useRef<SVGSVGElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: '-50px' });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const pathOffset = useTransform(scrollYProgress, [0, 0.5, 1], [800, 0, -400]);

  const strokeColor = colorMap[color];

  const pathD = `M -50,${height / 2}
    C 50,${height * 0.1} 100,${height * 0.9} 180,${height / 2}
    S 310,${height * 0.1} 380,${height / 2}
    S 510,${height * 0.9} 580,${height / 2}
    S 710,${height * 0.1} 780,${height / 2}
    S 910,${height * 0.9} 980,${height / 2}
    S 1110,${height * 0.1} 1180,${height / 2}
    S 1310,${height * 0.9} 1380,${height / 2}
    S 1510,${height * 0.1} 1600,${height / 2}`;

  if (!animated) {
    return (
      <div className={clsx('w-full overflow-hidden', className)} style={{ height }}>
        <svg
          width="100%"
          height={height}
          viewBox={`0 0 1600 ${height}`}
          preserveAspectRatio="none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d={pathD}
            stroke={strokeColor}
            strokeWidth="1.5"
            strokeLinecap="round"
            fill="none"
            opacity="0.6"
          />
        </svg>
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className={clsx('w-full overflow-hidden', className)}
      style={{ height }}
    >
      <svg
        ref={ref}
        width="100%"
        height={height}
        viewBox={`0 0 1600 ${height}`}
        preserveAspectRatio="none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          d={pathD}
          stroke={strokeColor}
          strokeWidth="1.5"
          strokeLinecap="round"
          fill="none"
          opacity="0.7"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={isInView ? { pathLength: 1, opacity: 0.7 } : { pathLength: 0, opacity: 0 }}
          transition={{ duration: 2, ease: 'easeInOut', delay: 0.1 }}
        />
      </svg>
    </div>
  );
}
