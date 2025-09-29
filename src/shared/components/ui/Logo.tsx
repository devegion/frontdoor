import BracketIcon from '@/assets/bracket.svg';

export function Logo() {
  return (
    <span className='inline-flex items-center'>
      <BracketIcon className='size-8 stroke-current stroke-2' />
      <span className='font-headline mb-0.5 text-2xl font-bold'>devegion</span>
      <BracketIcon stroke='currentColor' className='size-8 rotate-180 stroke-current stroke-2' />
    </span>
  );
}
