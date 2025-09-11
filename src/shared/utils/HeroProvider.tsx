'use client';

import { HeroUIProvider } from '@heroui/react';
import { useRouter } from '@/i18n/navigation';

declare module '@react-types/shared' {
  interface RouterConfig {
    href: NonNullable<Parameters<ReturnType<typeof useRouter>['push']>[0]>;
    routerOptions: NonNullable<Parameters<ReturnType<typeof useRouter>['push']>[1]>;
  }
}
export function HeroProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  return <HeroUIProvider navigate={router.push}>{children}</HeroUIProvider>;
}
