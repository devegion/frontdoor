import { DavidImg, DamianImg, GabImg, BeaImg, PopImg, PoeImg, CristiImg } from '@/assets';
import { RTMThumbnail, CCRThumbnail, PCThumbnail, VadrThumbnail } from '@/assets';
import WebDevIllustration from '@/assets/web-dev.png';
import UiUxDesignIllustration from '@/assets/ui-ux-design.png';
import MobileDevIllustration from '@/assets/mobile-dev.png';
import { Laptop, Tablet, PenTool, Compass } from 'lucide-react';

export const developers = [
  {
    id: 1,
    name: 'Damian',
    designation: 'Fullstack Developer',
    image: DamianImg,
  },
  {
    id: 2,
    name: 'Gab',
    designation: 'UI/UX Designer',
    image: GabImg,
  },
  {
    id: 3,
    name: 'David',
    designation: 'Fullstack Developer',
    image: DavidImg,
  },
  {
    id: 4,
    name: 'Bea',
    designation: 'Fullstack Developer',
    image: BeaImg,
  },
  {
    id: 5,
    name: 'Iulian Poe',
    designation: 'Mobile Developer',
    image: PoeImg,
  },
  {
    id: 6,
    name: 'Iulian Pop',
    designation: 'Mobile Developer',
    image: PopImg,
  },
  {
    id: 7,
    name: 'Cristi',
    designation: 'Web Developer',
    image: CristiImg,
  },
];

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getProjects = (t: (key: any) => any) => [
  {
    title: t('projects.restaurantTm.title'),
    description: t('projects.restaurantTm.description'),
    image: RTMThumbnail,
  },
  {
    title: t('projects.carCareRo.title'),
    description: t('projects.carCareRo.description'),
    image: CCRThumbnail,
  },
  {
    title: t('projects.paulPhoto.title'),
    description: t('projects.paulPhoto.description'),
    image: PCThumbnail,
  },
  {
    title: t('projects.vaudior.title'),
    description: t('projects.vaudior.description'),
    image: VadrThumbnail,
  },
];

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getServices = (t: (key: any) => any) => [
  {
    title: t('services.webDevelopment.title'),
    description: t('services.webDevelopment.description'),
    strongPoints: [
      t('services.webDevelopment.strongPoint1'),
      t('services.webDevelopment.strongPoint2'),
      t('services.webDevelopment.strongPoint3'),
      t('services.webDevelopment.strongPoint4'),
    ],
    icon: <Laptop />,
    illustration: WebDevIllustration,
    href: '/services/web-development',
    className: 'lg:col-span-3 lg:row-span-3',
    classNames: {
      illustrationContainer: 'flex-col-reverse lg:flex-row items-start gap-4',
    },
  },
  {
    title: t('services.uiuxDesign.title'),
    description: t('services.uiuxDesign.description'),
    strongPoints: [
      t('services.uiuxDesign.strongPoint1'),
      t('services.uiuxDesign.strongPoint2'),
      t('services.uiuxDesign.strongPoint3'),
      t('services.uiuxDesign.strongPoint4'),
    ],
    icon: <PenTool />,
    illustration: UiUxDesignIllustration,
    href: '/',
    className: 'lg:col-span-2 lg:row-span-4',
    classNames: { illustrationContainer: 'flex-col-reverse lg:flex-col gap-10' },
  },
  {
    title: t('services.mobileDevelopment.title'),
    description: t('services.mobileDevelopment.description'),
    strongPoints: [
      t('services.mobileDevelopment.strongPoint1'),
      t('services.mobileDevelopment.strongPoint2'),
      t('services.mobileDevelopment.strongPoint3'),
      t('services.mobileDevelopment.strongPoint4'),
    ],
    icon: <Tablet />,
    illustration: MobileDevIllustration,
    href: '/',
    className: 'lg:col-span-3 lg:row-span-3',
    classNames: {
      illustrationContainer: 'flex-col-reverse lg:flex-row items-start gap-4',
    },
  },
  {
    title: t('services.consulting.title'),
    description: t('services.consulting.description'),
    strongPoints: [t('services.consulting.strongPoint1'), t('services.consulting.strongPoint2')],
    icon: <Compass />,
    href: '/',
    className: 'lg:col-span-2 lg:row-span-2',
  },
];
