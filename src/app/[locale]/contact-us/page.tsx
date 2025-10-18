import { Mail, Phone } from 'lucide-react';

import { routing } from '@/i18n/routing';
import { hasLocale } from 'next-intl';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';

import { Section, SectionDescription, SectionHeading } from '@/shared/components/ui';
import { ContactForm } from './components/ContactForm';
import { ContactOption } from './components';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: 'en' | 'ro' }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'ContactUsPage.metadata' });

  return {
    title: t('title'),
    description: t('description'),
  };
}

export default async function contactUsPage({ params }: PageProps<'/[locale]/contact-us'>) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  setRequestLocale(locale);

  const t = await getTranslations('ContactUsPage');

  return (
    <Section
      isAnimated={false}
      className='mb-32 flex min-h-[calc(100vh_-_80px)] items-center justify-center xl:mb-44 2xl:mb-64'>
      <div className='flex flex-col items-center gap-16 pt-20 xl:pt-10 2xl:pt-0'>
        <div className='grid w-full grid-cols-1 gap-16 xl:grid-cols-11'>
          <div className='flex flex-col items-center justify-end gap-8 xl:col-span-5'>
            <div className='flex max-h-min flex-col justify-between gap-2'>
              <SectionHeading className='text-primary xl:text-start'>{t('title')}</SectionHeading>
              <SectionDescription className='xl:text-start'>{t('description')}</SectionDescription>
            </div>
            <div className='hidden max-h-min w-full flex-col justify-end gap-8 xl:flex'>
              <ContactOption
                title={t('contactOptions.email')}
                content='support@devegion.com'
                icon={<Mail className='size-8' />}
              />
              <ContactOption
                title={t('contactOptions.phone')}
                content='+40 733 051 566'
                icon={<Phone className='size-8' />}
              />
            </div>
          </div>
          <ContactForm className='border-default-500 shadow-default-400 h-full w-full rounded-3xl border p-3 shadow sm:p-6 xl:col-span-6' />
          <div className='flex max-h-min w-full flex-col justify-end gap-8 xl:hidden'>
            <ContactOption
              title='Email Us'
              content='support@devegion.com'
              icon={<Mail className='size-8' />}
            />
            <ContactOption
              title='Call Us'
              content='+40 733 051 566'
              icon={<Phone className='size-8' />}
            />
          </div>
        </div>
      </div>
    </Section>
  );
}
