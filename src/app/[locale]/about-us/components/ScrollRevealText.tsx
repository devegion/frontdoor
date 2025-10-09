import { useEffect, useRef, useState } from 'react';

export function ScrollRevealText() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [letters, setLetters] = useState<Array<{ char: string; progress: number }>>([]);

  const text =
    "Living on the edge where academia meets industry, our story dates back to 2020 when our founder, Damian, created a place of growth for those talents that wanted to achieve more. Conducting workshops, tech talks and social networking events, he kept an eye on vocal individuals with high standards focused on knowledge intake and skill development. Projects were made, applications created, foundations built. Now, we're opening our gates to a wide audience of entrepreneurs that wish to consolidate their tech part of the business - to you.";

  useEffect(() => {
    setLetters(text.split('').map((char) => ({ char, progress: 0 })));
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const letterElements = containerRef.current.querySelectorAll('.letter');
      const viewportMid = window.innerHeight / 2;

      letterElements.forEach((element, index) => {
        const rect = element.getBoundingClientRect();
        const letterMid = rect.top + rect.height / 2;

        let progress = 0;
        if (letterMid <= viewportMid) {
          progress = 1;
        } else {
          const distance = letterMid - viewportMid;
          const fadeRange = window.innerHeight * 0.2;
          progress = Math.max(0, 1 - distance / fadeRange);
        }

        setLetters((prev) => {
          const newLetters = [...prev];
          newLetters[index] = { ...newLetters[index], progress };
          return newLetters;
        });
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [letters.length]);

  const getLetterColor = (progress: number) => {
    const gray = { r: 229, g: 231, b: 235 };
    const black = { r: 17, g: 24, b: 39 };

    const r = Math.round(gray.r + (black.r - gray.r) * progress);
    const g = Math.round(gray.g + (black.g - gray.g) * progress);
    const b = Math.round(gray.b + (black.b - gray.b) * progress);

    return `rgb(${r}, ${g}, ${b})`;
  };

  return (
    <div className='mb-20 flex justify-center p-8 sm:mb-36'>
      <p
        ref={containerRef}
        className='max-w-4xl text-4xl leading-tight font-bold sm:text-4xl md:text-5xl lg:text-6xl'>
        {letters.map((letter, index) => (
          <span
            key={index}
            className='letter transition-colors duration-75 ease-out'
            style={{ color: getLetterColor(letter.progress) }}>
            {letter.char}
          </span>
        ))}
      </p>
    </div>
  );
}
