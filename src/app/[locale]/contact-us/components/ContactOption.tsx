import { Chip } from '@heroui/chip';
import { ReactNode } from 'react';

export function ContactOption({
  title,
  content,
  icon,
}: {
  title: string;
  content: string;
  icon: ReactNode;
}) {
  return (
    <div className='border-default-500 shadow-default-400 flex h-full w-full basis-0 items-center gap-8 rounded-2xl border p-4 shadow'>
      <Chip
        size='md'
        radius='lg'
        variant='bordered'
        className='flex size-12 max-w-none min-w-auto items-center justify-center'>
        {icon}
      </Chip>
      <div className='flex flex-col'>
        <h3 className='font-headline font-semibold sm:text-lg xl:text-xl'>{title}</h3>
        <p className='text-default-700'>{content}</p>
      </div>
    </div>
  );
}
