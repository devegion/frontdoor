'use client';

import { Logo } from '../atoms/Logo';
import { ChevronDown, ChevronUp, Languages, Globe, Smartphone, WandSparkles } from 'lucide-react';

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from '@heroui/navbar';
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownSection,
  DropdownTrigger,
} from '@heroui/dropdown';
import { Accordion, AccordionItem } from '@heroui/accordion';
import { Button } from '@heroui/button';
import { Link } from '@heroui/link';
import { Divider } from '@heroui/divider';

import { usePathname, useRouter } from '@/i18n/navigation';
import { useParams } from 'next/navigation';
import { Locale, useLocale, useTranslations } from 'next-intl';

import { Key, useState, useTransition } from 'react';
import { cn } from '@/shared/utils/cn';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [, startTransition] = useTransition();

  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();
  const locale = useLocale();

  const t = useTranslations('Header');

  function onSelectionChange(event: Key) {
    const nextLocale = event as Locale;
    startTransition(() => {
      router.replace(
        // @ts-expect-error -- TypeScript will validate that only known `params`
        // are used in combination with a given `pathname`. Since the two will
        // always match for the current route, we can skip runtime checks.
        { pathname, params },
        { locale: nextLocale },
      );
    });
  }

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      isBlurred={false}
      height='5rem'
      maxWidth='xl'
      shouldHideOnScroll>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? t('closeNavbarMenu') : t('openNavbarMenu')}
          className='md:hidden'
        />
        <NavbarBrand>
          <Link color='foreground' href='/'>
            <Logo />
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className='hidden gap-4 md:flex' justify='center'>
        <NavbarItem>
          <Button
            disableRipple
            radius='lg'
            variant='light'
            className='font-semibold'
            href='/'
            as={Link}>
            {t('projects')}
          </Button>
        </NavbarItem>
        <Dropdown showArrow shouldBlockScroll={false} onOpenChange={setIsDropdownOpen}>
          <NavbarItem>
            <DropdownTrigger>
              <Button
                disableRipple
                radius='lg'
                variant='light'
                className='font-semibold'
                endContent={
                  isDropdownOpen ?
                    <ChevronUp className='mt-0.5 size-4' />
                  : <ChevronDown className='mt-0.5 size-4' />
                }>
                {t('services.title')}
              </Button>
            </DropdownTrigger>
          </NavbarItem>
          <DropdownMenu classNames={{ list: 'p-1' }} aria-label={t('services.aria')}>
            <DropdownSection
              classNames={{
                group: 'space-y-2',
                base: 'data-[hover=true]:bg-inherit transition-all duration-200 data-[hover=true]:transition-all data-[hover=true]:duration-200',
              }}>
              <DropdownItem
                href='/services/web-development'
                startContent={
                  <div className='group rounded-md p-1 transition-all duration-200 group-hover:shadow'>
                    <Globe />
                  </div>
                }
                key='web_development'
                description={t('services.webDevelopment.description')}>
                {t('services.webDevelopment.title')}
              </DropdownItem>
              <DropdownItem
                href='/services/mobile-development'
                startContent={
                  <div className='group rounded-md p-1 transition-all duration-200 group-hover:shadow'>
                    <Smartphone />
                  </div>
                }
                key='mobile_development'
                description={t('services.mobileDevelopment.description')}>
                {t('services.mobileDevelopment.title')}
              </DropdownItem>
              <DropdownItem
                href='/services/uiux-design'
                startContent={
                  <div className='group rounded-md p-1 transition-all duration-200 group-hover:shadow'>
                    <WandSparkles />
                  </div>
                }
                key='uiux_design'
                description={t('services.uiuxDesign.description')}>
                {t('services.uiuxDesign.title')}
              </DropdownItem>
            </DropdownSection>
          </DropdownMenu>
        </Dropdown>
        <NavbarItem>
          <Button
            disableRipple
            radius='lg'
            variant='light'
            href='/about-us'
            className='font-semibold'
            as={Link}>
            {t('aboutUs')}
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify='end'>
        <NavbarItem className='hidden md:flex'>
          <Button disableRipple as={Link} color='primary' href='/' variant='shadow' radius='lg'>
            {t('callToAction')}
          </Button>
        </NavbarItem>
        <Divider className='hidden h-10 md:block' orientation='vertical' />
        <Dropdown showArrow classNames={{ content: 'min-w-auto' }} shouldBlockScroll={false}>
          <NavbarItem>
            <DropdownTrigger>
              <Button disableRipple radius='lg' variant='flat' isIconOnly>
                <Languages className='size-5' />
              </Button>
            </DropdownTrigger>
          </NavbarItem>
          <DropdownMenu
            onAction={onSelectionChange}
            classNames={{ list: 'flex-row' }}
            aria-label={t('languagesArea')}>
            <DropdownItem className={cn({ 'bg-default-200': locale === 'en' })} key='en'>
              EN
            </DropdownItem>
            <DropdownItem className={cn({ 'bg-default-200': locale === 'ro' })} key='ro'>
              RO
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>

      <NavbarMenu>
        <NavbarMenuItem>
          <Link className='w-full' href='/projects' size='lg'>
            {t('projects')}
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Accordion className='px-0'>
            <AccordionItem
              classNames={{ trigger: 'py-0', title: 'text-large' }}
              title={t('services.title')}>
              <div className='ml-2 flex w-full flex-col gap-2'>
                <Link href='/services/web-development' key='web_development'>
                  {t('services.webDevelopment.title')}
                </Link>
                <Link href='/services/mobile-development' key='mobile_development'>
                  {t('services.mobileDevelopment.title')}
                </Link>
                <Link href='/services/uiux-design' key='uiux_design'>
                  {t('services.uiuxDesign.title')}
                </Link>
              </div>
            </AccordionItem>
          </Accordion>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link className='w-full' href='/about-us' size='lg'>
            {t('aboutUs')}
          </Link>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
}
