import {
  CircleQuestionMark,
  SquareArrowOutUpRight,
  ArrowRight,
  Check,
  Laptop,
  Tablet,
  PenTool,
  Compass,
} from 'lucide-react';
import davidImg from '@/assets/david.jpg';

import Image from 'next/image';

import { hasLocale } from 'next-intl';
import { routing } from '@/i18n/routing';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';

import { FAQ } from '@/shared/components/Layout/FAQ';
import { Section, SectionDescription, SectionHeading } from '@/shared/components/atoms/Section';

import { Divider } from '@heroui/divider';
import { Button } from '@heroui/button';
import { Chip } from '@heroui/chip';
import { Link, LinkProps } from '@heroui/link';
import { AnimatedTooltip } from '@/shared/components/atoms/AnimatedTooltip';
import { ClassNameValue } from 'tailwind-merge';
import { cn } from '@/shared/utils/cn';
import { ReactNode } from 'react';

const people = [
  {
    id: 1,
    name: 'David',
    designation: 'Fullstack Developer',
    image: davidImg,
  },
  {
    id: 2,
    name: 'Bea',
    designation: 'Fullstack Developer',
    image: davidImg,
  },
  {
    id: 3,
    name: 'Damian',
    designation: 'Fullstack Developer',
    image: davidImg,
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
    <div>
      <section className='min-h-[calc(100vh_-_80px)]'>
        <div className='mx-auto w-10/12 max-w-7xl pt-36 xl:pt-48 2xl:pt-80'>
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
        <Section>
          <div className='flex flex-col items-center gap-16'>
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
            <div className='mx-auto grid w-full max-w-lg grid-cols-1 gap-16 lg:max-w-none lg:grid-cols-5 lg:grid-rows-6 lg:gap-8'>
              <SolutionCard
                title='Web Development'
                description='Loremg 12j3h asdhaisf sadvu sd1sj asdjadasdn'
                strongPoints={[
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
          <div className='flex flex-col items-center gap-8 lg:items-start lg:gap-16'>
            <Chip size='md' variant='bordered' className='py-4 shadow lg:hidden' radius='full'>
              Our Projects
            </Chip>
            <div className='flex w-full flex-col items-center gap-8 lg:items-start'>
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
            <div className='mx-auto grid grid-cols-1 gap-16 sm:grid-cols-2 sm:gap-8 xl:grid-cols-3'>
              <ProjectCard
                title='Project 1'
                description={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem aliquid velit dolorem
              non commodi? Et?`}
                projectLink='/'
                detailsLink='/'
                badges={['web']}
              />
              <ProjectCard
                title='Project 1'
                description={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem aliquid velit dolorem
              non commodi? Et?`}
                projectLink='/'
                detailsLink='/'
                badges={[]}
              />
              <ProjectCard
                title='Project 1'
                description={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem aliquid velit dolorem
              non commodi? Et?`}
                projectLink='/'
                detailsLink='/'
                badges={[]}
              />
            </div>
          </div>
        </Section>
        <Section>
          <div className='flex flex-col items-center gap-8'>
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
          <div className='flex flex-col items-center gap-8'>
            <Chip
              size='md'
              variant='bordered'
              className='flex size-11 max-w-none min-w-auto items-center justify-center rounded-full'>
              <CircleQuestionMark className='size-8' />
            </Chip>
            <SectionHeading>Frequently Asked Questions</SectionHeading>
            <SectionDescription>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem aliquid velit dolorem
              quos corrupti numquam accusantium quo veritatis, magnam error, laudantium similique
              non commodi? Et?
            </SectionDescription>
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
  detailsLink,
  projectLink,
  badges,
}: {
  title: string;
  description: string;
  detailsLink: string;
  projectLink: string;
  badges: string[];
}) {
  return (
    <div className='hover:bg-default-100 flex flex-col gap-4 rounded-3xl p-4 shadow transition-all duration-300 hover:shadow-lg'>
      <Image src={davidImg} alt='' className='shadow-default-400 rounded-2xl shadow' />
      <div className='bg-background flex grow flex-col justify-between gap-4 rounded-2xl p-4'>
        <h3 className='font-headline text-lg font-semibold sm:text-xl xl:text-2xl'>{title}</h3>
        <p className='text-default-700'>{description}</p>
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
