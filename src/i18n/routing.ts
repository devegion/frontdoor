import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['en', 'ro'],

  defaultLocale: 'ro',

  pathnames: {
    '/': '/',
    '/about-us': {
      ro: '/despre-noi',
    },
    '/projects': {
      ro: '/proiecte',
    },
    '/projects/carcarero/privacy-policy': {
      ro: '/proiecte/carcarero/politica-de-confidentialitate',
    },
    '/projects/restaurantm/privacy-policy': {
      ro: '/proiecte/restaurantm/politica-de-confidentialitate',
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
    '/services/consulting': {
      ro: '/servicii/consultanta',
    },
    '/contact-us': {
      ro: '/contact',
    },
    '/privacy-policy': {
      ro: '/politica-de-confidentialitate',
    },
  },

  localeDetection: true,
});
