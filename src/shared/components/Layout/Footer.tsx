import { Logo } from '../atoms/Logo';
import { Heart } from 'lucide-react';

import { Link } from '@heroui/link';

export function Footer() {
  return (
    <footer className='bg-default-100 flex min-h-96 flex-col gap-8 p-6 xl:p-12'>
      <div className='grid grow grid-cols-1 gap-8 xl:grid-cols-4'>
        <div className='flex flex-col items-start'>
          <div className='-ml-3'>
            <Logo />
          </div>
          <p className='text-default-700'>
            Building with <Heart className='mb-1 inline size-[1em] fill-current' />
          </p>
        </div>
        <div className='space-y-3'>
          <h2 className='font-headline font-semibold'>Quick Access</h2>
          <div className='space-y-2'>
            <Link href='/' underline='hover' color='foreground' className='block'>
              Home
            </Link>
            <Link href='/' underline='hover' color='foreground' className='block'>
              Projects
            </Link>
            <Link href='/' underline='hover' color='foreground' className='block'>
              About Us
            </Link>
            <Link href='/' underline='hover' color='foreground' className='block'>
              Pricing
            </Link>
            <Link href='/' underline='hover' color='foreground' className='block'>
              FAQ
            </Link>
          </div>
        </div>
        <div className='space-y-3'>
          <h2 className='font-headline font-semibold'>Services</h2>
          <div className='space-y-2'>
            <Link href='/' underline='hover' color='foreground' className='block'>
              Web Development
            </Link>
            <Link href='/' underline='hover' color='foreground' className='block'>
              Mobile Development
            </Link>
            <Link href='/' underline='hover' color='foreground' className='block'>
              UI/UX Design
            </Link>
          </div>
        </div>
        <div className='space-y-3'>
          <h2 className='font-headline font-semibold'>Projects</h2>
          <div className='space-y-2'>
            <Link href='/' underline='hover' color='foreground' className='block'>
              Project 1
            </Link>
            <Link href='/' underline='hover' color='foreground' className='block'>
              Project 2
            </Link>
            <Link href='/' underline='hover' color='foreground' className='block'>
              Project 3
            </Link>
            <Link href='/' underline='hover' color='foreground' className='block'>
              Project 4
            </Link>
            <Link href='/' underline='hover' color='foreground' className='block'>
              Project 5
            </Link>
          </div>
        </div>
      </div>
      <div className='text-default-600 text-small flex w-full flex-col sm:flex-row sm:justify-between sm:gap-4'>
        <span>©2025 Devegion. All rights reserved.</span>
        <Link color='foreground' size='sm' className='text-default-600' href='/'>
          Privacy Policy
        </Link>
      </div>
    </footer>
  );
}
