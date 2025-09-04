'use client';

import { useVisibleSection } from '@/app/context/VisibleSectionProvider';
import { SectionId } from '@/lib/types';
import Image from 'next/image';

const images: Array<{ src: string; alt: string; sectionId: SectionId }> = [
  {
    src: '/hero-images/section1.jpg',
    alt: '',
    sectionId: 'section1',
  },
  {
    src: '/hero-images/section2.jpg',
    alt: '',
    sectionId: 'section2',
  },
  {
    src: '/hero-images/section3.jpg',
    alt: '',
    sectionId: 'section3',
  },
];

export default function FixedBackground() {
  const { visibleSectionId } = useVisibleSection();

  return (
    <div className="fixed w-full h-screen bg-white -z-10">
      <div className="flex h-full justify-end">
        {/* images container */}
        <div className="relative w-full h-full">
          {images.map((image, index) => (
            <Image
              key={index}
              src={image.src}
              alt={image.alt}
              loading={index === 0 ? 'eager' : 'lazy'}
              sizes="(max-width: 992px) 100vw, 50vw"
              fill
              className={`absolute w-full h-full object-cover transition-all duration-1000 ${
                visibleSectionId === image.sectionId
                  ? 'opacity-100'
                  : 'opacity-0'
              }`}
            />
          ))}
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-white via-white/50 to-white/0 pointer-events-none"></div>
        </div>
      </div>
    </div>
  );
}
