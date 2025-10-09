'use client';

import { cn } from '@/shared/utils/cn';
import { ReactNode } from 'react';
import { ClassNameValue } from 'tailwind-merge';

export function Section({
  children,
  className,
}: {
  children: ReactNode;
  className?: ClassNameValue;
}) {
  return (
    <section className={cn('mx-auto w-10/12 max-w-7xl xl:w-8/12', className)}>{children}</section>
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
