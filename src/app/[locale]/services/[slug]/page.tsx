import Image from 'next/image';
import { Metadata } from 'next';
import { getMessages, getTranslations, setRequestLocale } from 'next-intl/server';
import { hasLocale } from 'next-intl';
import { routing } from '@/i18n/routing';
import { notFound } from 'next/navigation';
import { Section, SectionDescription, SectionHeading } from '@/shared/components/ui';
import { ServiceSlug, serviceSlug2ServiceTranslationId, serviceSlugs } from './helpers';
import { images } from './content';
import { Button } from '@heroui/button';
import { Link } from '@heroui/link';
import { cn } from '@/shared/utils';
import { Chip } from '@heroui/chip';

export function generateStaticParams() {
  return serviceSlugs;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: 'en' | 'ro'; slug: ServiceSlug }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const translationId = serviceSlug2ServiceTranslationId[slug];
  const t = await getTranslations({ locale, namespace: `Services.${translationId}.metadata` });

  return {
    title: t('title'),
    description: t('description'),
  };
}

export default async function ServicePage({ params }: PageProps<'/[locale]/services/[slug]'>) {
  const { locale, slug } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  setRequestLocale(locale);

  const translationId = serviceSlug2ServiceTranslationId[slug as ServiceSlug];

  const t = await getTranslations(`Services.${translationId}`);

  const messages = await getMessages({ locale });
  const howItWorksStages = Object.values(
    messages['Services'][translationId]['howItWorks']['stages'],
  );

  return (
    <div className='mb-32 space-y-16 xl:mb-44 xl:space-y-16 2xl:mb-64'>
      <Section
        isAnimated={false}
        className='flex min-h-[calc(100vh_-_80px)] flex-col items-center gap-16 sm:justify-center'>
        <div className='mt-20 flex w-full items-center justify-between gap-16 xl:mt-10 2xl:mt-0'>
          <div className='relative flex grow basis-0 flex-col items-center gap-6'>
            <h1 className='font-headline text-center text-3xl font-bold sm:text-5xl xl:text-6xl'>
              {t('hero.title')}
            </h1>
            <p className='text-default-700 max-w-2xl text-center'>{t('hero.description')}</p>
            <Button
              as={Link}
              href='/contact-us'
              variant='ghost'
              color='primary'
              size='lg'
              radius='lg'>
              {t('hero.callToAction')}
            </Button>
          </div>
          <div className='hidden grow basis-0 lg:block'>
            <Image
              className='w-full object-contain'
              src={images['hero'][slug as ServiceSlug]}
              alt=''
            />
          </div>
        </div>
        <div className='mx-auto w-full max-w-md sm:max-w-lg lg:hidden'>
          <Image
            className='w-full object-contain'
            src={images['hero'][slug as ServiceSlug]}
            alt=''
          />
        </div>
      </Section>
      <div className='space-y-32 xl:space-y-44 2xl:space-y-64'>
        <Section className='space-y-16'>
          <div className='flex w-full flex-col items-start gap-6'>
            <SectionHeading className='text-start'>{t('howItWorks.title')}</SectionHeading>
            <SectionDescription className='text-start'>
              {t('howItWorks.description')}
            </SectionDescription>
          </div>
          <div className='space-y-16'>
            {howItWorksStages.map((stage, index) => (
              <div
                key={index}
                className={cn('flex w-full items-center justify-start gap-8 rounded-2xl p-8', {
                  'bg-primary-50': index % 2 === 0,
                })}>
                <Chip
                  color='primary'
                  className='text-xl font-bold'
                  variant='shadow'
                  radius='sm'
                  size='lg'>
                  {index + 1}
                </Chip>
                <div className='space-y-2'>
                  <h3 className='font-headline text-lg font-semibold sm:text-xl xl:text-2xl'>
                    {stage.title}
                  </h3>
                  <p className='text-default-700'>{stage.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Section>
        <Section className='shadow-primary-200 bg-primary flex flex-col items-center gap-8 rounded-3xl p-16 shadow-lg'>
          <SectionHeading className='text-2x text-background sm:text-3xl xl:text-4xl'>
            {t('howItWorks.callToAction.title')}
          </SectionHeading>
          <Button
            as={Link}
            href='/contact-us'
            variant='faded'
            color='primary'
            size='lg'
            radius='lg'>
            {t('howItWorks.callToAction.button')}
          </Button>
        </Section>
      </div>
    </div>
  );
}
