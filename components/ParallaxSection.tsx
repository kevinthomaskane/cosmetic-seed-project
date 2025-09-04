'use client';

import { useEffect, useRef } from 'react';
import { useVisibleSection } from '@/app/context/VisibleSectionProvider';
import { SectionId } from '@/lib/types';

interface ParallaxSectionProps {
  id: SectionId;
  children?: React.ReactNode;
}

export default function ParallaxSection({
  id,
  children,
}: ParallaxSectionProps) {
  const ref = useRef<HTMLElement>(null);
  const { setVisibleSectionId } = useVisibleSection();

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisibleSectionId(id);
        }
      },
      {
        root: null, // viewport
        rootMargin: '0px', // expand/shrink detection area
        threshold: 0.7, // fire when 10% is visible
      }
    );

    observer.observe(element);
  }, []);

  return (
    <section ref={ref} className="h-screen">
      {children || `Section ${id}`}
    </section>
  );
}
