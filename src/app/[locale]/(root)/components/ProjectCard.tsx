import Image, { StaticImageData } from 'next/image';
import { Button } from '@heroui/button';
import { Chip } from '@heroui/chip';
import { Link, LinkProps } from '@heroui/link';
import { Divider } from '@heroui/divider';
import { SquareArrowOutUpRight } from 'lucide-react';

export function ProjectCard({
  title,
  description,
  image,
  detailsLink,
  projectLink,
  badges,
}: {
  title: string;
  description: string;
  image: StaticImageData;
  detailsLink: string;
  projectLink: string;
  badges: string[];
}) {
  return (
    <div className='hover:bg-default-100 flex flex-col gap-4 rounded-3xl p-4 shadow transition-all duration-300 hover:shadow-lg'>
      <Image
        src={image}
        alt=''
        className='shadow-default-400 aspect-[16_/_10] grow basis-1 rounded-2xl object-cover shadow'
      />
      <div className='bg-background flex grow flex-col justify-between gap-4 rounded-2xl p-4'>
        <div className='spacey-2'>
          <h3 className='font-headline text-lg font-semibold sm:text-xl xl:text-2xl'>{title}</h3>
          <p className='text-default-700 text-sm'>{description}</p>
        </div>
        <div className='flex items-center justify-start gap-2'>
          {badges.map((badge, i) => (
            <Chip variant='light' className='shadow' key={i}>
              {badge}
            </Chip>
          ))}
        </div>
        <Divider orientation='horizontal' />
        <div className='flex w-full items-center justify-between gap-2'>
          <Button as={Link} className='grow' radius='lg' variant='bordered' href={detailsLink}>
            View Details
          </Button>
          <Button as={Link} radius='lg' variant='light' isExternal href={projectLink} isIconOnly>
            <SquareArrowOutUpRight className='size-5' />
          </Button>
        </div>
      </div>
    </div>
  );
}
