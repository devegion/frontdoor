import { routing } from '@/i18n/routing';
import { hasLocale } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';

export default async function uiuxDesignPage({
  params,
}: PageProps<'/[locale]/services/uiux-design'>) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  setRequestLocale(locale);

  return <div>It works!</div>;
}
