'use client';

import { Accordion, AccordionItem } from '@heroui/accordion';
import { useTranslations } from 'next-intl';

export function FAQ() {
  const t = useTranslations('HomePage');

  return (
    <Accordion variant='shadow'>
      <AccordionItem key='1' aria-label={t('faq.q1.title')} title={t('faq.q1.title')}>
        {t('faq.q1.answer')}
      </AccordionItem>
      <AccordionItem key='2' aria-label={t('faq.q2.title')} title={t('faq.q2.title')}>
        {t('faq.q2.answer')}
      </AccordionItem>
      <AccordionItem key='3' aria-label={t('faq.q3.title')} title={t('faq.q3.title')}>
        {t('faq.q3.answer')}
      </AccordionItem>
      <AccordionItem key='4' aria-label={t('faq.q4.title')} title={t('faq.q4.title')}>
        {t('faq.q4.answer')}
      </AccordionItem>
      <AccordionItem key='5' aria-label={t('faq.q5.title')} title={t('faq.q5.title')}>
        {t('faq.q5.answer')}
      </AccordionItem>
      <AccordionItem key='6' aria-label={t('faq.q6.title')} title={t('faq.q6.title')}>
        {t('faq.q6.answer')}
      </AccordionItem>
    </Accordion>
  );
}
