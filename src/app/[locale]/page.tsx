import { CircleQuestionMark } from 'lucide-react';

import { hasLocale } from 'next-intl';
import { routing } from '@/i18n/routing';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';

import { FAQ } from '@/shared/components/Layout/FAQ';

import { Button } from '@heroui/button';
import { Link } from '@heroui/link';

export default async function HomePage({ params }: PageProps<'/[locale]'>) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  const t = await getTranslations('HomePage');

  return (
    <div>
      <section className='min-h-[calc(100vh_-_80px)]'>
        <div className='mx-auto w-10/12 max-w-7xl pt-36 xl:pt-48'>
          <div className='flex flex-col items-center space-y-6'>
            <div className='flex flex-col items-center sm:gap-3'>
              <h1 className='font-headline text-center text-3xl font-bold sm:text-5xl xl:text-6xl'>
                Web & Mobile
              </h1>
              <span className='sm:bg-primary-100 text-2xl font-bold text-nowrap sm:w-min sm:rounded-2xl sm:p-4 sm:text-4xl xl:text-5xl'>
                start-to-end
              </span>
            </div>
            <p className='text-default-700 max-w-lg text-center'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam architecto sapiente
              odit alias, nemo fuga placeat et amet fugit itaque dicta rerum, officia asperiores
              vitae?
            </p>
            <Button as={Link} href='/' variant='faded' size='lg' color='primary' radius='lg'>
              Start a project
            </Button>
          </div>
        </div>
      </section>
      <div className='space-y-24 xl:space-y-36'>
        <section className='min-h-[70vh]'>
          <div className='flex flex-col items-center gap-4'>
            <Button size='sm' variant='bordered' className='shadow' radius='full'>
              Our Services
            </Button>
            <h2 className='font-headline text-center text-3xl font-bold sm:text-4xl xl:text-5xl'>
              What we do...
            </h2>
            <p className='text-default-700 max-w-xl text-center'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem aliquid velit dolorem
              quos corrupti numquam accusantium quo veritatis, magnam error, laudantium similique
              non commodi? Et?
            </p>
          </div>
        </section>
        <section className='mx-auto min-h-[70vh] w-10/12 max-w-7xl space-y-16'>
          <div className='flex flex-col items-center gap-4'>
            <Button isIconOnly size='lg' variant='bordered' className='shadow' radius='full'>
              <CircleQuestionMark className='size-8' />
            </Button>
            <h2 className='font-headline text-center text-3xl font-bold sm:text-4xl xl:text-5xl'>
              Frequently Asked Questions
            </h2>
            <p className='text-default-700 max-w-xl text-center'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem aliquid velit dolorem
              quos corrupti numquam accusantium quo veritatis, magnam error, laudantium similique
              non commodi? Et?
            </p>
          </div>
          <FAQ />
        </section>
      </div>
    </div>
  );
}
