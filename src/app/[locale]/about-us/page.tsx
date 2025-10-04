'use client';

import { AboutSectionsList, ScrollRevealText } from '@/app/[locale]/about-us/components';
import { Section } from '@/shared/components';
import Image from 'next/image';
import { DevegionFrameImg } from '@/assets';

export default function AboutPage() {
  return (
    <div className='space-y-20 xl:space-y-32'>
      <Section className='mt-20 flex min-h-[50vh] flex-col items-center space-y-20'>
        <h1 className='text-center text-5xl leading-tight font-bold sm:text-5xl md:text-6xl lg:text-7xl'>
          Our story
        </h1>
        <div className='w-1/2'>
          <Image
            src={DevegionFrameImg}
            alt=''
            className='shadow-default-400 aspect-[16_/_10] grow basis-1 rounded-2xl object-cover shadow'
          />
        </div>
      </Section>
      <ScrollRevealText />
      <AboutSectionsList />
    </div>
  );
}
