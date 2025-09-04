'use client';

import { SectionId } from '@/lib/types';
import { SetStateAction, Dispatch, useRef } from 'react';
import { createContext, useContext, useState, ReactNode } from 'react';

interface VisibleSectionContextType {
  visibleSectionId: SectionId;
  setVisibleSectionId: Dispatch<SetStateAction<SectionId>>;
}

const VisibleSectionContext = createContext<VisibleSectionContextType>({
  visibleSectionId: '',
  setVisibleSectionId: () => {},
});

export function VisibleSectionProvider({ children }: { children: ReactNode }) {
  const [visibleSectionId, setVisibleSectionId] = useState<SectionId>('');

  return (
    <VisibleSectionContext.Provider
      value={{ visibleSectionId, setVisibleSectionId }}
    >
      {children}
    </VisibleSectionContext.Provider>
  );
}

export function useVisibleSection() {
  return useContext(VisibleSectionContext);
}
