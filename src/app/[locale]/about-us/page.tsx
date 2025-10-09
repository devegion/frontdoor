'use client';

import { AboutSectionsList, ScrollRevealText } from '@/app/[locale]/about-us/components';
import { Section } from '@/shared/components';

export default function AboutPage() {
  return (
    <div className='mb-20 xl:mb-28'>
      <Section className='mt-20 flex min-h-[50vh] flex-col items-center justify-center space-y-20'>
        <h1 className='bg-primary-100 rounded-2xl p-4 text-center text-5xl leading-tight font-extrabold sm:text-5xl md:text-6xl lg:text-7xl'>
          Our story
        </h1>
      </Section>
      <ScrollRevealText />
      <AboutSectionsList />
    </div>
  );
}
