'use client';
import { useTranslations } from 'next-intl';
import { AboutSection } from './AboutSection';

export function AboutSectionsList() {
  const t = useTranslations('AboutPage.timeline');

  const content = [
    {
      title: t('phase1.title'),
      year: t('phase1.year'),
      description: t('phase1.description'),
      color: 'bg-white',
      // images: [DavidImg, DevegionFrameImg],
    },
    {
      title: t('phase2.title'),
      year: t('phase2.year'),
      description: t('phase2.description'),
      color: 'bg-zinc-100',
      // images: [RestaurantmFrameImg, DevegionFrameImg, RestaurantmFrameImg2],
    },
    {
      title: t('phase3.title'),
      year: t('phase3.year'),
      description: t('phase3.description'),
      color: 'bg-white',
      // images: [TeamImage1, TeamImage2],
    },
  ];

  return (
    <div>
      {content.map((item, i) => (
        <AboutSection
          key={i}
          title={item.title}
          year={item.year}
          description={item.description}
          color={item.color}
        />
      ))}
    </div>
  );
}
