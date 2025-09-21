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
    <section
      className={cn('mx-auto min-h-[60vh] w-10/12 max-w-7xl space-y-16 xl:w-9/12', className)}>
      {children}
    </section>
  );
}

export function SectionHeading({ children }: { children: ReactNode }) {
  return (
    <h2 className='font-headline text-center text-3xl font-bold sm:text-4xl xl:text-5xl'>
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
