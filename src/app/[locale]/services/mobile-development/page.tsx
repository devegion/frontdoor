import { routing } from '@/i18n/routing';
import { Incoming } from '@/shared/components/layout/Incoming';
import { hasLocale } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';

export default async function MobileDevelopmentPage({
  params,
}: PageProps<'/[locale]/services/mobile-development'>) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  setRequestLocale(locale);

  return <Incoming />;
}
