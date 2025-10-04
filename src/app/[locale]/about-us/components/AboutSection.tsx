import Image, { StaticImageData } from 'next/image';

export function AboutSection({
  title,
  year,
  description,
  color,
  images,
}: {
  title: string;
  year: number;
  description: string;
  color?: string;
  images?: StaticImageData[];
}) {
  return (
    <section
      className={`flex flex-col items-center ${color ?? 'bg-indigo-600'} px-6 py-16 text-white`}>
      <div className='mb-8 text-3xl font-bold'>{title}</div>
      <div className='mb-8 text-6xl font-extrabold'>{year}</div>
      <div className='max-w-3xl text-lg leading-relaxed'>{description}</div>
      {images && images.length > 0 && (
        <div className='mt-12 flex flex-wrap justify-center gap-6'>
          {images.map((img, index) => (
            <Image
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
