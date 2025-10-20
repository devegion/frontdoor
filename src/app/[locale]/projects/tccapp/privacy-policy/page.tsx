import { routing } from '@/i18n/routing';
import { hasLocale } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import TCCAppPrivacyPolicyRo from '@/content/ro/tccapp.mdx';
import TCCAppPrivacyPolicyEn from '@/content/en/tccapp.mdx';

export default async function TCCAppPrivacyPolicyPage({
  params,
}: PageProps<'/[locale]/projects/restaurantm/privacy-policy'>) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  setRequestLocale(locale);

  return (
    <article className='prose xl:prose-lg 2xl:prose-xl prose-headings:font-headline font-content mx-auto mt-20 mb-32 w-10/12 max-w-7xl xl:mb-44 xl:w-8/12 2xl:mb-64'>
      {locale === 'ro' ?
        <TCCAppPrivacyPolicyRo />
      : <TCCAppPrivacyPolicyEn />}
    </article>
  );
}
