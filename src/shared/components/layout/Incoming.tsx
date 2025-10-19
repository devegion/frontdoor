import { useTranslations } from 'next-intl';

export function Incoming() {
  const t = useTranslations('ComingSoon');

  return (
    <main className='bg-background flex min-h-screen items-center justify-center'>
      <section className='mx-auto max-w-2xl px-6 text-center'>
        <h1 className='text-foreground mb-8 text-6xl font-bold md:text-8xl'>{t('title')}</h1>
        <p className='text-muted-foreground mb-12 text-xl md:text-2xl'>{t('description')}</p>
        <p className='text-muted-foreground mt-8 text-sm'>{t('launchInfo')}</p>
      </section>
    </main>
  );
}
