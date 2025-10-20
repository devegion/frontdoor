import { Section, SectionDescription, SectionHeading } from '@/shared/components/ui';
import { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { ServiceSlug, serviceSlug2ServiceTranslationId, serviceSlugs } from './helpers';
import { hasLocale } from 'next-intl';
import { routing } from '@/i18n/routing';
import { notFound } from 'next/navigation';

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

  return (
    <div className='mb-32 space-y-8 xl:mb-44 xl:space-y-16 2xl:mb-64'>
      <Section
        isAnimated={false}
        className='flex min-h-[calc(100vh_-_80px)] flex-col items-center sm:justify-center'>
        <div className='mt-20 flex flex-col items-center gap-8 pb-[calc(80px_+_10vh)] xl:mt-10 2xl:mt-0'>
          <SectionHeading>{t('hero.title')}</SectionHeading>
          <SectionDescription>{t('hero.description')}</SectionDescription>
        </div>
      </Section>
    </div>
  );
}
