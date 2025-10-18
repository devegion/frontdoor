import { CircleQuestionMark, Laptop, Tablet, PenTool, Compass, ArrowRight } from 'lucide-react';
import { RTMThumbnail, CCRThumbnail, PCThumbnail, VadrThumbnail } from '@/assets';

import { hasLocale } from 'next-intl';
import { routing } from '@/i18n/routing';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';

import {
  AnimatedTooltip,
  Section,
  SectionDescription,
  SectionHeading,
  FAQ,
} from '@/shared/components';
import { ProjectCard, SolutionCard, Stats } from '@/app/[locale]/(root)/components';
import { developers } from './content';

import { Button } from '@heroui/button';
import { Chip } from '@heroui/chip';
import { Link } from '@heroui/link';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: 'en' | 'ro' }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'HomePage.metadata' });

  return {
    title: t('title'),
    description: t('description'),
  };
}

export default async function HomePage({ params }: PageProps<'/[locale]'>) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  setRequestLocale(locale);

  const t = await getTranslations('HomePage');

  return (
    <div className='mb-32 space-y-8 xl:mb-44 xl:space-y-16 2xl:mb-64'>
      <Section
        isAnimated={false}
        className='flex min-h-[calc(100vh_-_80px)] flex-col items-center sm:justify-center'>
        <div className='flex w-full flex-col justify-center'>
          <div className='mt-20 flex flex-col items-center space-y-8 pb-[calc(80px_+_10vh)] xl:mt-10 2xl:mt-0'>
            <div className='flex flex-col items-center sm:gap-3'>
              <h1 className='font-headline text-center text-3xl font-bold sm:text-5xl xl:text-6xl'>
                {t('hero.header.part1')}
              </h1>
              <span className='sm:bg-primary-100 text-2xl font-bold text-nowrap sm:w-min sm:rounded-2xl sm:p-4 sm:text-4xl xl:text-5xl'>
                {t('hero.header.part2')}
              </span>
            </div>
            <p className='text-default-700 max-w-2xl text-center'>{t('hero.description')}</p>
            <div className='flex flex-col items-center justify-center gap-5 sm:flex-row'>
              <Button as={Link} href='/contact-us' size='lg' color='primary' radius='lg'>
                {t('startProject')} <ArrowRight className='size-[1em]' />
              </Button>
              <Button as={Link} href='/#projects' variant='faded' size='lg' radius='lg'>
                {t('viewWork')}
              </Button>
            </div>
          </div>
        </div>
        <div className='mb-12 flex w-full items-center justify-center'>
          <Stats />
        </div>
      </Section>
      <div className='space-y-32 xl:space-y-44 2xl:space-y-64'>
        <Section>
          <div className='flex w-full flex-col items-center gap-16'>
            <div className='flex flex-col items-center gap-8'>
              <Chip size='md' variant='bordered' className='py-4 shadow' radius='full'>
                {t('services.badge')}
              </Chip>
              <SectionHeading>{t('services.title')}</SectionHeading>
              <SectionDescription>{t('services.description')}</SectionDescription>
            </div>
            <div className='mx-auto grid w-full max-w-lg grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-5 lg:grid-rows-6'>
              <SolutionCard
                title={t('services.webDevelopment.title')}
                description={t('services.webDevelopment.description')}
                strongPoints={[
                  t('services.webDevelopment.strongPoint1'),
                  t('services.webDevelopment.strongPoint2'),
                  t('services.webDevelopment.strongPoint3'),
                  t('services.webDevelopment.strongPoint4'),
                  t('services.webDevelopment.strongPoint5'),
                  t('services.webDevelopment.strongPoint6'),
                ]}
                icon={<Laptop />}
                href='/services/web-development'
                className='lg:col-span-3 lg:row-span-3'
                classNames={{ strongPoints: 'lg:grid-cols-2' }}
              />
              <SolutionCard
                title={t('services.uiuxDesign.title')}
                description={t('services.uiuxDesign.description')}
                strongPoints={[
                  t('services.uiuxDesign.strongPoint1'),
                  t('services.uiuxDesign.strongPoint2'),
                  t('services.uiuxDesign.strongPoint3'),
                  t('services.uiuxDesign.strongPoint4'),
                ]}
                icon={<PenTool />}
                href='/'
                className='lg:col-span-2 lg:row-span-4'
              />
              <SolutionCard
                title={t('services.mobileDevelopment.title')}
                description={t('services.mobileDevelopment.description')}
                strongPoints={[
                  t('services.mobileDevelopment.strongPoint1'),
                  t('services.mobileDevelopment.strongPoint2'),
                  t('services.mobileDevelopment.strongPoint3'),
                  t('services.mobileDevelopment.strongPoint4'),
                ]}
                icon={<Tablet />}
                href='/'
                className='lg:col-span-3 lg:row-span-3'
                classNames={{ strongPoints: 'lg:grid-cols-2' }}
              />
              <SolutionCard
                title={t('services.consulting.title')}
                description={t('services.consulting.description')}
                strongPoints={[
                  t('services.consulting.strongPoint1'),
                  t('services.consulting.strongPoint2'),
                ]}
                icon={<Compass />}
                href='/'
                className='lg:col-span-2 lg:row-span-2'
                classNames={{ strongPoints: 'lg:grid-cols-2' }}
              />
            </div>
          </div>
        </Section>
        <Section>
          <div className='flex w-full flex-col items-center gap-8'>
            <Chip size='md' variant='bordered' className='py-4 shadow' radius='full'>
              {t('people.badge')}
            </Chip>
            <SectionHeading>{t('people.title')}</SectionHeading>
            <div className='flex flex-row items-center justify-center'>
              <AnimatedTooltip items={developers} />
            </div>
            <SectionDescription>{t('people.description')}</SectionDescription>
            <div className='flex flex-col items-center justify-center gap-5 sm:flex-row'>
              <Button
                as={Link}
                href='/about-us'
                variant='ghost'
                size='lg'
                color='primary'
                radius='lg'>
                {t('fullStory')}
              </Button>
              <Button
                as={Link}
                href='/contact-us'
                variant='flat'
                color='primary'
                size='lg'
                radius='lg'>
                {t('startProject')}
              </Button>
            </div>
          </div>
        </Section>
        <Section>
          <div className='relative flex w-full flex-col items-center gap-8 lg:items-start lg:gap-16'>
            <span id='projects' className='invisible absolute -top-10' />
            <Chip size='md' variant='bordered' className='py-4 shadow lg:hidden' radius='full'>
              {t('projects.badge')}
            </Chip>
            <div className='flex w-full flex-col items-center gap-8 lg:items-start lg:gap-4'>
              <SectionHeading>{t('projects.title')}</SectionHeading>
              <div className='flex flex-col items-center gap-8 lg:w-full lg:flex-row lg:items-end lg:justify-between'>
                <SectionDescription className='lg:text-start'>
                  {t('projects.description')}
                </SectionDescription>
                <Button
                  as={Link}
                  href='/about-us'
                  variant='ghost'
                  size='md'
                  color='default'
                  className='hidden lg:flex'
                  radius='full'>
                  {t('viewProjects')}
                </Button>
              </div>
            </div>
            <div className='mx-auto grid grid-cols-1 gap-8 sm:grid-cols-2 lg:gap-16'>
              <ProjectCard
                title={t('projects.restaurantTm.title')}
                description={t('projects.restaurantTm.description')}
                image={RTMThumbnail}
                projectLink='/projects'
                detailsLink='/projects'
                badges={[]}
              />
              <ProjectCard
                title={t('projects.carCareRo.title')}
                description={t('projects.carCareRo.description')}
                image={CCRThumbnail}
                projectLink='/projects'
                detailsLink='/projects'
                badges={[]}
              />
              <ProjectCard
                title={t('projects.paulPhoto.title')}
                description={t('projects.paulPhoto.description')}
                image={PCThumbnail}
                projectLink='/projects'
                detailsLink='/projects'
                badges={[]}
              />
              <ProjectCard
                title={t('projects.vaudior.title')}
                description={t('projects.vaudior.description')}
                image={VadrThumbnail}
                projectLink='/projects'
                detailsLink='/projects'
                badges={[]}
              />
            </div>
          </div>
        </Section>
        {/* <Section>
          <div className='flex flex-col items-center gap-16'>
            <div className='flex flex-col items-center gap-8'>
              <Chip size='md' variant='bordered' className='py-4 shadow' radius='full'>
                {t('reviews.badge')}
              </Chip>
              <SectionHeading>
                {t('reviews.title1')} <span className='text-primary'>{t('reviews.title2')}</span>
                <br /> {t('reviews.title3')}
              </SectionHeading>
              <SectionDescription>{t('reviews.description')}</SectionDescription>
            </div>
            <Carousel
              opts={{
                align: 'start',
              }}
              className='w-full max-w-lg space-y-4 md:max-w-none'>
              <CarouselContent className='mr-1 -ml-4 min-h-80 p-1'>
                <CarouselItem className='pl-4 md:basis-1/2 xl:basis-1/3'>
                  <ReviewCard
                    image={DavidImg}
                    name='Review 1'
                    title='Owner of Loolish'
                    description='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam voluptatum hic vel officiis accusamus, fugiat quidem architecto sit in a magni dolores neque sapiente ipsam fuga. Perferendis quasi sit illum, quas tempore vel qui.'
                  />
                </CarouselItem>
                <CarouselItem className='pl-4 md:basis-1/2 xl:basis-1/3'>
                  <ReviewCard
                    image={DavidImg}
                    name='Review 1'
                    title='Owner of Loolish'
                    description='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam voluptatum hic vel officiis accusamus, fugiat quidem architecto sit in a magni dolores neque sapiente ipsam fuga. Perferendis quasi sit illum, quas tempore vel qui.'
                  />
                </CarouselItem>
                <CarouselItem className='pl-4 md:basis-1/2 xl:basis-1/3'>
                  <ReviewCard
                    image={DavidImg}
                    name='Review 1'
                    title='Owner of Loolish'
                    description='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam voluptatum hic vel officiis accusamus, fugiat quidem architecto sit in a magni dolores neque sapiente ipsam fuga. Perferendis quasi sit illum, quas tempore vel qui.'
                  />
                </CarouselItem>
                <CarouselItem className='pl-4 md:basis-1/2 xl:basis-1/3'>
                  <ReviewCard
                    image={DavidImg}
                    name='Review 1'
                    title='Owner of Loolish'
                    description='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam voluptatum hic vel officiis accusamus, fugiat quidem architecto sit in a magni dolores neque sapiente ipsam fuga. Perferendis quasi sit illum, quas tempore vel qui.'
                  />
                </CarouselItem>
                <CarouselItem className='pl-4 md:basis-1/2 xl:basis-1/3'>
                  <ReviewCard
                    image={DavidImg}
                    name='Review 1'
                    title='Owner of Loolish'
                    description='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam voluptatum hic vel officiis accusamus, fugiat quidem architecto sit in a magni dolores neque sapiente ipsam fuga. Perferendis quasi sit illum, quas tempore vel qui.'
                  />
                </CarouselItem>
              </CarouselContent>
              <div className='flex items-center gap-2'>
                <CarouselPrevious />
                <CarouselNext />
              </div>
            </Carousel>
          </div>
        </Section> */}
        <Section>
          <div className='flex w-full flex-col items-center gap-16'>
            <div className='flex flex-col items-center gap-8'>
              <Chip
                size='md'
                variant='bordered'
                className='flex size-11 max-w-none min-w-auto items-center justify-center rounded-full'>
                <CircleQuestionMark className='size-8' />
              </Chip>
              <SectionHeading>{t('faq.title')}</SectionHeading>
              <SectionDescription>{t('faq.description')}</SectionDescription>
            </div>
            <div className='mx-auto w-full max-w-5xl'>
              <FAQ />
            </div>
          </div>
        </Section>
      </div>
    </div>
  );
}
