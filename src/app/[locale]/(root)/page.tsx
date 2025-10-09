import { CircleQuestionMark, Laptop, Tablet, PenTool, Compass, ArrowRight } from 'lucide-react';

import { hasLocale } from 'next-intl';
import { routing } from '@/i18n/routing';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';

import {
  AnimatedTooltip,
  Section,
  SectionDescription,
  SectionHeading,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  FAQ,
} from '@/shared/components';

import { Button } from '@heroui/button';
import { Chip } from '@heroui/chip';
import { Link } from '@heroui/link';

import { ProjectCard, SolutionCard, ReviewCard } from '@/app/[locale]/(root)/components';

import { DavidImg, DevegionFrameImg, RestaurantmFrameImg, RestaurantmFrameImg2 } from '@/assets';
import { Stats } from '@/app/[locale]/(root)/components/Stats';

const people = [
  {
    id: 1,
    name: 'David',
    designation: 'Fullstack Developer',
    image: DavidImg,
  },
  {
    id: 2,
    name: 'Bea',
    designation: 'Fullstack Developer',
    image: DavidImg,
  },
  {
    id: 3,
    name: 'Damian',
    designation: 'Fullstack Developer',
    image: DavidImg,
  },
];

export default async function HomePage({ params }: PageProps<'/[locale]'>) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  setRequestLocale(locale);

  // const t = await getTranslations('HomePage');

  return (
    <div className='space-y-8 xl:space-y-16'>
      <Section className='flex min-h-[calc(100vh_-_80px)] flex-col items-center sm:justify-center'>
        <div className='flex w-full flex-col justify-center'>
          <div className='mt-20 flex flex-col items-center space-y-8 pb-[calc(80px_+_10vh)]'>
            <div className='flex flex-col items-center sm:gap-3'>
              <h1 className='font-headline text-center text-3xl font-bold sm:text-5xl xl:text-6xl'>
                Web & Mobile
              </h1>
              <span className='sm:bg-primary-100 text-2xl font-bold text-nowrap sm:w-min sm:rounded-2xl sm:p-4 sm:text-4xl xl:text-5xl'>
                start-to-end
              </span>
            </div>
            <p className='text-default-700 max-w-2xl text-center'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam architecto sapiente
              odit alias, nemo fuga placeat et amet fugit itaque dicta rerum, officia asperiores
              vitae?
            </p>
            <div className='flex flex-col items-center justify-center gap-5 sm:flex-row'>
              <Button as={Link} href='/' size='lg' color='primary' radius='lg'>
                Start a project <ArrowRight className='size-[1em]' />
              </Button>
              <Button as={Link} href='/' variant='faded' size='lg' radius='lg'>
                View our work
              </Button>
            </div>
          </div>
        </div>
        <div className='flex w-full items-center justify-center'>
          <Stats />
        </div>
      </Section>
      <div className='space-y-32 xl:space-y-44 2xl:space-y-64'>
        <Section>
          <div className='flex w-full flex-col items-center gap-16'>
            <div className='flex flex-col items-center gap-8'>
              <Chip size='md' variant='bordered' className='py-4 shadow' radius='full'>
                Our Services
              </Chip>
              <SectionHeading>What we do...</SectionHeading>
              <SectionDescription>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem aliquid velit
                dolorem quos corrupti numquam accusantium quo veritatis, magnam error, laudantium
                similique non commodi? Et?
              </SectionDescription>
            </div>
            <div className='mx-auto grid w-full max-w-lg grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-5 lg:grid-rows-6'>
              <SolutionCard
                title='Web Development'
                description='Loremg 12j3h asdhaisf sadvu sd1sj asdjadasdn'
                strongPoints={[
                  'Strong Point 1',
                  'Strong Point 1',
                  'Strong Point 1',
                  'Strong Point 1',
                  'Strong Point 1',
                  'Strong Point 1',
                ]}
                icon={<Laptop />}
                href='/'
                className='lg:col-span-3 lg:row-span-3'
                classNames={{ strongPoints: 'lg:grid-cols-2' }}
              />

              <SolutionCard
                title='UI/UX Design'
                description='Loremg 12j3h asdhaisf sadvu sd1sj asdjadasdn'
                strongPoints={[
                  'Strong Point 1',
                  'Strong Point 1',
                  'Strong Point 1',
                  'Strong Point 1',
                ]}
                icon={<PenTool />}
                href='/'
                className='lg:col-span-2 lg:row-span-4'
              />

              <SolutionCard
                title='Mobile Development'
                description='Loremg 12j3h asdhaisf sadvu sd1sj asdjadasdn'
                strongPoints={[
                  'Strong Point 1',
                  'Strong Point 1',
                  'Strong Point 1',
                  'Strong Point 1',
                ]}
                icon={<Tablet />}
                href='/'
                className='lg:col-span-3 lg:row-span-3'
                classNames={{ strongPoints: 'lg:grid-cols-2' }}
              />

              <SolutionCard
                title='Consulting'
                description='Loremg 12j3h asdhaisf sadvu sd1sj asdjadasdn'
                strongPoints={[]}
                icon={<Compass />}
                href='/'
                className='lg:col-span-2 lg:row-span-2'
              />
            </div>
          </div>
        </Section>
        <Section>
          <div className='flex w-full flex-col items-center gap-8 lg:items-start lg:gap-16'>
            <Chip size='md' variant='bordered' className='py-4 shadow lg:hidden' radius='full'>
              Our Projects
            </Chip>
            <div className='flex w-full flex-col items-center gap-8 lg:items-start lg:gap-4'>
              <SectionHeading>Some of our work...</SectionHeading>
              <div className='flex flex-col items-center gap-8 lg:w-full lg:flex-row lg:items-end lg:justify-between'>
                <SectionDescription className='lg:text-start'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem aliquid velit
                  dolorem quos corrupti numquam accusantium quo veritatis, magnam error, laudantium
                  similique non commodi? Et?
                </SectionDescription>
                <Button
                  as={Link}
                  href='/about-us'
                  variant='ghost'
                  size='md'
                  color='default'
                  className='hidden lg:flex'
                  radius='full'>
                  View all projects
                </Button>
              </div>
            </div>
            <div className='mx-auto grid grid-cols-1 gap-8 sm:grid-cols-2 lg:gap-16'>
              <ProjectCard
                title='Project 1'
                description={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem aliquid velit dolorem
              non commodi? Et?`}
                image={RestaurantmFrameImg}
                projectLink='/'
                detailsLink='/'
                badges={['web']}
              />
              <ProjectCard
                title='Project 1'
                description={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem aliquid velit dolorem
              non commodi? Et?`}
                image={DevegionFrameImg}
                projectLink='/'
                detailsLink='/'
                badges={[]}
              />
              <ProjectCard
                title='Project 1'
                description={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem aliquid velit dolorem
              non commodi? Et?`}
                image={RestaurantmFrameImg2}
                projectLink='/'
                detailsLink='/'
                badges={[]}
              />
            </div>
          </div>
        </Section>
        <Section>
          <div className='flex w-full flex-col items-center gap-8'>
            <Chip size='md' variant='bordered' className='py-4 shadow' radius='full'>
              Our People
            </Chip>
            <SectionHeading>Meet the developers</SectionHeading>
            <div className='flex flex-row items-center justify-center'>
              <AnimatedTooltip items={people} />
            </div>
            <SectionDescription>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem aliquid velit dolorem
              quos corrupti numquam accusantium quo veritatis, magnam error, laudantium similique
              non commodi? Et?
            </SectionDescription>
            <Button
              as={Link}
              href='/about-us'
              variant='ghost'
              size='lg'
              color='primary'
              radius='lg'>
              Read the full story
            </Button>
          </div>
        </Section>
        <Section>
          <div className='flex flex-col items-center gap-16'>
            <div className='flex flex-col items-center gap-8'>
              <Chip size='md' variant='bordered' className='py-4 shadow' radius='full'>
                Feedback
              </Chip>
              <SectionHeading>
                Why clients <span className='text-primary'>Love</span> <br /> Devegion
              </SectionHeading>
              <SectionDescription>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem aliquid velit
                dolorem quos corrupti numquam accusantium quo veritatis, magnam error, laudantium
                similique non commodi? Et?
              </SectionDescription>
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
        </Section>
        <Section>
          <div className='flex w-full flex-col items-center gap-16'>
            <div className='flex flex-col items-center gap-8'>
              <Chip
                size='md'
                variant='bordered'
                className='flex size-11 max-w-none min-w-auto items-center justify-center rounded-full'>
                <CircleQuestionMark className='size-8' />
              </Chip>
              <SectionHeading>Frequently Asked Questions</SectionHeading>
              <SectionDescription>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem aliquid velit
                dolorem quos corrupti numquam accusantium quo veritatis, magnam error, laudantium
                similique non commodi? Et?
              </SectionDescription>
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
