'use client';

import { animate, useInView, useMotionValue } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { Divider } from '@heroui/divider';

interface AnimatedNumberProps {
  from?: number;
  to: number;
  duration?: number;
  suffix?: string;
}

function AnimatedNumber({ from = 0, to, duration = 1, suffix = '' }: AnimatedNumberProps) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const inView = useInView(ref, { once: true }); // trigger once per page load
  const count = useMotionValue(from);
  const [display, setDisplay] = useState(from);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(count, to, {
      duration,
      ease: 'easeOut',
      onUpdate: (latest) => setDisplay(Math.floor(latest)),
    });
    return controls.stop;
  }, [inView, count, to, duration]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}

export function Stats() {
  // const stats = [
  //   { from: 0, to: 8, suffix: '+', label: 'Years of Experience' },
  //   { from: 0, to: 20, suffix: '+', label: 'Projects We’ve Built' },
  //   { from: 0, to: 100, suffix: '%', label: 'Happy Clients' },
  // ];

  return (
    <div className='flex max-w-xl grow flex-col items-center justify-around gap-8 sm:h-12 sm:max-w-3xl sm:flex-row lg:max-w-4xl'>
      <div className='flex flex-col items-center justify-center'>
        <div className='text-primary text-4xl font-bold'>
          <AnimatedNumber from={0} to={8} suffix={'+'} />
        </div>
        <div className='text-default-500 text-center'>Years of Experience</div>
      </div>
      <Divider className='block w-20 sm:hidden' />
      <Divider orientation='vertical' className='hidden sm:block' />
      <div className='flex flex-col items-center justify-center'>
        <div className='text-primary text-4xl font-bold'>
          <AnimatedNumber from={0} to={20} suffix={'+'} />
        </div>
        <div className='text-default-500 text-center'>Projects We’ve Built</div>
      </div>
      <Divider className='block w-20 sm:hidden' />
      <Divider orientation='vertical' className='hidden sm:block' />
      <div className='flex flex-col items-center justify-center'>
        <div className='text-primary text-4xl font-bold'>
          <AnimatedNumber from={0} to={100} suffix={'%'} />
        </div>
        <div className='text-default-500 text-center'>Happy Clients</div>
      </div>
    </div>
  );
}
