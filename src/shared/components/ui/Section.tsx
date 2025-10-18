'use client';

import { cn } from '@/shared/utils/cn';
import { HTMLMotionProps, motion } from 'framer-motion';
import { ReactNode } from 'react';
import { ClassNameValue } from 'tailwind-merge';

export function Section({
  children,
  className,
  isAnimated = true,
}: {
  children: ReactNode;
  className?: ClassNameValue;
  isAnimated?: boolean;
}) {
  const animationProps: HTMLMotionProps<'section'> = {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.3 },
    transition: { duration: 0.5, ease: 'easeOut', delay: 0.3 },
  };

  return (
    <motion.section
      {...(isAnimated ? animationProps : {})}
      className={cn('mx-auto w-10/12 max-w-7xl xl:w-8/12', className)}>
      {children}
    </motion.section>
  );
}

export function SectionHeading({
  children,
  className,
}: {
  children: ReactNode;
  className?: ClassNameValue;
}) {
  return (
    <h2
      className={cn(
        'font-headline text-center text-3xl font-bold sm:text-4xl xl:text-5xl',
        className,
      )}>
      {children}
    </h2>
  );
}

export function SectionDescription({
  children,
  className,
}: {
  children: ReactNode;
  className?: ClassNameValue;
}) {
  return <p className={cn('text-default-700 max-w-xl text-center', className)}>{children}</p>;
}
