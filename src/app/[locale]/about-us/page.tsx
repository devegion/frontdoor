import { AboutSectionsList, ScrollRevealText } from '@/app/[locale]/about-us/components';
import { routing } from '@/i18n/routing';
import { Section } from '@/shared/components';
import { hasLocale } from 'next-intl';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';

export default async function AboutPage({ params }: PageProps<'/[locale]'>) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  setRequestLocale(locale);

  const t = await getTranslations('AboutPage');

  return (
    <div className='mb-20 xl:mb-28'>
      <Section className='mt-20 flex min-h-[50vh] flex-col items-center justify-center space-y-20'>
        <h1 className='rounded-2xl p-4 text-center text-5xl leading-tight font-extrabold sm:text-5xl md:text-6xl lg:text-7xl'>
          {t('title')}
        </h1>
      </Section>
      <ScrollRevealText />
      <AboutSectionsList />
    </div>
  );
}
