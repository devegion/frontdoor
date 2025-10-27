import { MetadataRoute } from 'next';
import { routing } from '@/i18n/routing';
import { getPathname } from '@/i18n/navigation';

const host = 'https://devegion.com';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const entries = [];

  for (const canonicalPath of Object.keys(routing.pathnames)) {
    const alternates = routing.locales.map((locale) => [
      locale,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      host + getPathname({ locale: locale, href: canonicalPath as any }),
    ]);

    entries.push({
      url: host + canonicalPath,
      lastModified: new Date(),
      alternates: {
        languages: Object.fromEntries(alternates),
      },
    });
  }

  return entries;
}
