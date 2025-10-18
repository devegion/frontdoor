import { routing } from '@/i18n/routing';
import { Incoming } from '@/shared/components/layout';
import { hasLocale } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';

export default async function PrivacyPolicyPage({ params }: PageProps<'/[locale]/privacy-policy'>) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  setRequestLocale(locale);

  return <Incoming />;
}
