import { Mail, Phone } from 'lucide-react';

import { routing } from '@/i18n/routing';
import { hasLocale } from 'next-intl';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { ReactNode } from 'react';

import { Section, SectionDescription, SectionHeading, ContactForm } from '@/shared/components/ui';
import { Chip } from '@heroui/chip';

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

  return (
    <Section className='flex min-h-[calc(100vh_-_160px)] items-center justify-center'>
      <div className='flex flex-col items-center gap-16 pt-20'>
        <div className='grid w-full grid-cols-1 gap-16 xl:grid-cols-11'>
          <div className='flex flex-col items-center justify-end gap-8 xl:col-span-5'>
            <div className='flex max-h-min flex-col justify-between gap-2'>
              <SectionHeading className='text-primary xl:text-start'>Contact us</SectionHeading>
              <SectionDescription className='xl:text-start'>
                We’d love to hear from you! Whether you have a question, feedback, or need
                assistance, our team is here to help.
              </SectionDescription>
            </div>
            <div className='hidden max-h-min w-full flex-col justify-end gap-8 xl:flex'>
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

function ContactOption({
  title,
  content,
  icon,
}: {
  title: string;
  content: string;
  icon: ReactNode;
}) {
  return (
    <div className='border-default-500 shadow-default-400 flex h-full w-full basis-0 items-center gap-8 rounded-2xl border p-4 shadow'>
      <Chip
        size='md'
        radius='lg'
        variant='bordered'
        className='flex size-12 max-w-none min-w-auto items-center justify-center'>
        {icon}
      </Chip>
      <div className='flex flex-col'>
        <h3 className='font-headline font-semibold sm:text-lg xl:text-xl'>{title}</h3>
        <p className='text-default-700'>{content}</p>
      </div>
    </div>
  );
}
