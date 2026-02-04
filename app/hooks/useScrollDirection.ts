'use client';

import { useState, useEffect } from 'react';

export function useScrollDirection() {
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down' | null>(null);
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    const threshold = 10;

    const updateScrollDirection = () => {
      const scrollY = window.scrollY;
      const difference = Math.abs(scrollY - lastScrollY);

      if (difference < threshold) return;

      const direction = scrollY > lastScrollY ? 'down' : 'up';
      setScrollDirection(direction);
      setIsAtTop(scrollY < 50);
      lastScrollY = scrollY;
    };

    window.addEventListener('scroll', updateScrollDirection);

    return () => {
      window.removeEventListener('scroll', updateScrollDirection);
    };
  }, []);

  return { scrollDirection, isAtTop };
}