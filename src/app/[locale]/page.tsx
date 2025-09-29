import {
  CircleQuestionMark,
  SquareArrowOutUpRight,
  ArrowRight,
  Check,
  Laptop,
  Tablet,
  PenTool,
  Compass,
  Quote,
} from 'lucide-react';
import DavidImg from '@/assets/david.jpg';
import DevegionFrameImg from '@/assets/devegion-frame.png';
import RestaurantmFrameImg from '@/assets/restaurantm-frame.png';
import RestaurantmFrameImg2 from '@/assets/restaurantm-frame-2.png';

import Image, { StaticImageData } from 'next/image';

import { hasLocale } from 'next-intl';
import { routing } from '@/i18n/routing';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/shared/components/ui/Carousel';
import { Section, SectionDescription, SectionHeading } from '@/shared/components/ui/Section';
import { AnimatedTooltip } from '@/shared/components/ui/AnimatedTooltip';
import { FAQ } from '@/shared/components/ui/FAQ';

import { Divider } from '@heroui/divider';
import { Button } from '@heroui/button';
import { Chip } from '@heroui/chip';
import { Link, LinkProps } from '@heroui/link';

import { ClassNameValue } from 'tailwind-merge';
import { cn } from '@/shared/utils/cn';

import { ReactNode } from 'react';

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

  const t = await getTranslations('HomePage');

  return (
    <div className='space-y-20 xl:space-y-32'>
      <Section className='flex min-h-[calc(100vh_-_80px)] items-center'>
        <div className='flex w-full grow flex-col items-center justify-center'>
          <div className='mt-20 flex flex-col items-center space-y-8 pb-[calc(80px_+_10vh)]'>
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
      </Section>
      <div className='mb-32 space-y-32 xl:mb-44 xl:space-y-44 2xl:mb-64 2xl:space-y-64'>
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

function ProjectCard({
  title,
  description,
  image,
  detailsLink,
  projectLink,
  badges,
}: {
  title: string;
  description: string;
  image: StaticImageData;
  detailsLink: string;
  projectLink: string;
  badges: string[];
}) {
  return (
    <div className='hover:bg-default-100 flex flex-col gap-4 rounded-3xl p-4 shadow transition-all duration-300 hover:shadow-lg'>
      <Image
        src={image}
        alt=''
        className='shadow-default-400 aspect-[16_/_10] grow basis-1 rounded-2xl object-cover shadow'
      />
      <div className='bg-background flex grow flex-col justify-between gap-4 rounded-2xl p-4'>
        <div className='spacey-2'>
          <h3 className='font-headline text-lg font-semibold sm:text-xl xl:text-2xl'>{title}</h3>
          <p className='text-default-700 text-sm'>{description}</p>
        </div>
        <div className='flex items-center justify-start gap-2'>
          {badges.map((badge, i) => (
            <Chip variant='light' className='shadow' key={i}>
              {badge}
            </Chip>
          ))}
        </div>
        <Divider orientation='horizontal' />
        <div className='flex w-full items-center justify-between gap-2'>
          <Button as={Link} className='grow' radius='lg' variant='bordered' href={detailsLink}>
            View Details
          </Button>
          <Button as={Link} radius='lg' variant='light' isExternal href={projectLink} isIconOnly>
            <SquareArrowOutUpRight className='size-5' />
          </Button>
        </div>
      </div>
    </div>
  );
}

function SolutionCard({
  title,
  description,
  strongPoints,
  icon,
  className,
  classNames,
  href,
}: LinkProps & {
  title: string;
  description: string;
  strongPoints: string[];
  icon: ReactNode;
  className: ClassNameValue;
  classNames?: { strongPoints?: ClassNameValue };
}) {
  return (
    <Link
      color='foreground'
      href={href}
      className={cn(
        'shadow-default-400 group relative block w-full space-y-8 rounded-3xl p-6 shadow transition-all duration-300 hover:translate-x-1 hover:-translate-y-1 hover:shadow-lg',
        className,
      )}>
      <div>
        <div className='flex items-center justify-between gap-4'>
          <h3 className='font-headline text-lg font-semibold sm:text-xl xl:text-2xl'>{title}</h3>
          <Button
            variant='light'
            className='hidden opacity-0 transition duration-300 group-hover:opacity-100 sm:flex'
            endContent={<ArrowRight className='size-[1em]' />}>
            Discover
          </Button>
        </div>
        <p className='text-default-700'>{description}</p>
      </div>
      {strongPoints.length > 0 && (
        <ul className={cn('grid grid-cols-1 gap-2 font-semibold', classNames?.strongPoints)}>
          {strongPoints.map((strongPoint, i) => (
            <li className='flex items-center justify-start gap-2' key={i}>
              <Check className='size-[1em]' /> {strongPoint}
            </li>
          ))}
        </ul>
      )}
      <Chip
        size='sm'
        variant='shadow'
        color='primary'
        className='absolute -top-3 -left-3 flex size-9 max-w-none min-w-auto items-center justify-center rounded-full'
        radius='full'>
        {icon}
      </Chip>
      <Button
        variant='light'
        className='sm:hidden'
        endContent={<ArrowRight className='size-[1em]' />}>
        Discover
      </Button>
    </Link>
  );
}

function ReviewCard({
  name,
  title,
  description,
  image,
}: {
  name: string;
  title: string;
  description: string;
  image: StaticImageData;
}) {
  return (
    <div className='border-default-500 shadow-default-400 flex min-h-full flex-col items-start gap-4 rounded-xl border p-4 shadow'>
      <div className='flex items-center gap-4'>
        <Image src={image} alt='' className='size-12 rounded-full object-cover shadow-lg' />
        <div className='flex flex-col items-start'>
          <span className='font-headline leading-4 font-medium sm:text-lg xl:text-xl'>{name}</span>
          <span className='text-sm'>{title}</span>
        </div>
      </div>
      <div className='flex grow items-center'>
        <p className='text-default-700 text-sm'>{description}</p>
      </div>
      <Quote className='stroke-primary size-1/6 max-h-14 max-w-14 self-end' />
    </div>
  );
}
