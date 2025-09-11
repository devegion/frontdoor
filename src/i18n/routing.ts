import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['en', 'ro'],

  defaultLocale: 'en',

  pathnames: {
    '/': '/',
    '/about-us': {
      ro: '/despre-noi',
    },
    '/projects': {
      ro: '/proiecte',
    },
    '/services/web-development': {
      ro: '/servicii/dezvoltare-aplicatii-web',
    },
    '/services/mobile-development': {
      ro: '/servicii/dezvoltare-aplicatii-mobil',
    },
    '/services/uiux-design': {
      ro: '/servicii/uiux-design',
    },
  },

  localeDetection: false,
});
