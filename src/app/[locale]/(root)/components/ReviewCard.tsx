import Image, { StaticImageData } from 'next/image';
import { Quote } from 'lucide-react';

export function ReviewCard({
  name,
  title,
  description,
  image,
}: {
  name: string;
  title: string;
  description: string;
  image: StaticImageData;
}) {
  return (
    <div className='border-default-500 shadow-default-400 flex min-h-full flex-col items-start gap-4 rounded-xl border p-4 shadow'>
      <div className='flex items-center gap-4'>
        <Image src={image} alt='' className='size-12 rounded-full object-cover shadow-lg' />
        <div className='flex flex-col items-start'>
          <span className='font-headline leading-4 font-medium sm:text-lg xl:text-xl'>{name}</span>
          <span className='text-sm'>{title}</span>
        </div>
      </div>
      <div className='flex grow items-center'>
        <p className='text-default-700 text-sm'>{description}</p>
      </div>
      <Quote className='stroke-primary size-1/6 max-h-14 max-w-14 self-end' />
    </div>
  );
}
