'use client';

import { useEffect, useRef, useState } from 'react';

export function DrawPath() {
  const [currentPathIndex, setCurrentPathIndex] = useState(0);
  const pathsRef = useRef<NodeListOf<SVGPathElement> | null>(null);

  useEffect(() => {
    if (!pathsRef.current) {
      pathsRef.current = document.querySelectorAll('.path-draw');
      pathsRef.current.forEach((path) => {
        path.style.strokeDasharray = path.getTotalLength().toString();
        path.style.strokeDashoffset = path.getTotalLength().toString();
      });
    }

    const currentPath = pathsRef.current[currentPathIndex];
    if (!currentPath) return;
    const length = currentPath.getTotalLength();
    let currentStrokeDashoffset = length;
    let animationFrameId: number;

    function draw() {
      if (currentStrokeDashoffset > 0) {
        currentStrokeDashoffset--;
        currentPath.style.strokeDashoffset = currentStrokeDashoffset.toString();
        animationFrameId = requestAnimationFrame(draw);
        return;
      }

      currentPath.style.strokeDashoffset = '0';
      currentPath.style.strokeDasharray = 'none';
      setCurrentPathIndex((prev) => prev + 1);
    }

    draw();
    return () => cancelAnimationFrame(animationFrameId);
  }, [currentPathIndex]);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-[200px]"
      viewBox="0 0 27 40"
      fill="none"
    >
      {/* W */}
      <path
        className="path-draw"
        stroke="black"
        fill="none"
        strokeWidth="2"
        d="M3 3 L5 36 L14 10 L22 36 L24 3"
      />
    </svg>
  );
}
