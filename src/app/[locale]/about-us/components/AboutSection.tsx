import Image, { StaticImageData } from 'next/image';

export function AboutSection({
  title,
  year,
  description,
  color,
  images,
}: {
  title: string;
  year: string;
  description: string;
  color?: string;
  images?: StaticImageData[];
}) {
  return (
    <section
      className={`flex flex-col items-center justify-evenly text-zinc-900 lg:flex-row ${color ?? 'bg-indigo-600'} px-6 py-24 text-white`}>
      <div className='mb-5 flex flex-col items-center justify-start lg:mb-0 lg:block'>
        <div className='mb-8 text-3xl font-bold'>{title}</div>
        <div className='mb-8 text-8xl font-extrabold opacity-70'>{year}</div>
      </div>
      <div className='max-w-3xl text-lg leading-relaxed lg:max-w-xl xl:max-w-3xl'>
        {description}
      </div>
      {images && images.length > 0 && (
        <div className='mt-12 flex flex-wrap justify-center gap-6'>
          {images.map((img, index) => (
            <Image
              key={index}
              src={img}
              className='h-auto w-full max-w-xs rounded-lg shadow-lg md:max-w-sm'
              alt={''}
            />
          ))}
        </div>
      )}
    </section>
  );
}
