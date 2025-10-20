export const serviceSlugs = [
  'web-development',
  'mobile-development',
  'uiux-design',
  'consulting',
] as const;
export type ServiceSlug = (typeof serviceSlugs)[number];

export type ServiceTranslationId =
  | 'WebDevelopmentPage'
  | 'MobileDevelopmentPage'
  | 'UIUXDesignPage'
  | 'ConsultingPage';

export const serviceSlug2ServiceTranslationId: Record<ServiceSlug, ServiceTranslationId> = {
  'web-development': 'WebDevelopmentPage',
  'mobile-development': 'MobileDevelopmentPage',
  'uiux-design': 'UIUXDesignPage',
  'consulting': 'ConsultingPage',
};
