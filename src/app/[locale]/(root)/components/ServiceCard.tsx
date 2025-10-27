import { Link, LinkProps } from '@heroui/link';
import { ReactNode } from 'react';
import { ClassNameValue } from 'tailwind-merge';
import { cn } from '@/shared/utils/cn';
import { Button } from '@heroui/button';
import { ArrowRight, Check } from 'lucide-react';
import { Chip } from '@heroui/chip';
import { useTranslations } from 'next-intl';
import Image, { StaticImageData } from 'next/image';

export function ServiceCard({
  title,
  description,
  strongPoints,
  icon,
  illustration,
  className,
  classNames,
  href,
}: LinkProps & {
  title: string;
  description: string;
  strongPoints: string[];
  icon: ReactNode;
  illustration?: StaticImageData;
  className: ClassNameValue;
  classNames?: { illustrationContainer?: ClassNameValue; illustrationStyling?: ClassNameValue };
}) {
  const t = useTranslations('HomePage');

  return (
    <Link
      aria-label={title}
      color='foreground'
      href={href}
      className={cn(
        'shadow-default-400 group relative block w-full space-y-8 rounded-3xl p-6 shadow transition-all duration-300 hover:translate-x-1 hover:-translate-y-1 hover:shadow-lg',
        className,
      )}>
      <div>
        <div className='flex items-center justify-between gap-4'>
          <div>
            <h3 className='font-headline relative text-lg font-semibold sm:text-xl xl:text-2xl'>
              {title}
            </h3>
          </div>
          <Button
            variant='light'
            className='hidden opacity-0 transition duration-300 group-hover:opacity-100 sm:flex'
            endContent={<ArrowRight className='size-[1em]' />}>
            {t('discover')}
          </Button>
        </div>
        <p className='text-default-700'>{description}</p>
      </div>

      <div className={cn('flex w-full', classNames?.illustrationContainer)}>
        {strongPoints.length > 0 && (
          <ul className={'grid grid-cols-1 gap-2 font-semibold'}>
            {strongPoints.map((strongPoint, i) => (
              <li className='flex items-center justify-start gap-2' key={i}>
                <Check className='size-[1em]' /> {strongPoint}
              </li>
            ))}
          </ul>
        )}
        {illustration && (
          <Image
            src={illustration}
            alt={`${title}`}
            className={cn('mx-auto h-auto w-48', classNames?.illustrationStyling)}
          />
        )}
      </div>

      <Chip
        size='sm'
        variant='shadow'
        color='primary'
        className='absolute -top-3 -left-3 flex size-9 max-w-none min-w-auto items-center justify-center rounded-full'
        radius='full'>
        {icon}
      </Chip>

      <Button
        variant='light'
        className='sm:hidden'
        endContent={<ArrowRight className='size-[1em]' />}>
        {t('discover')}
      </Button>
    </Link>
  );
}
