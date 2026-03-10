'use client';
import { useState, useEffect } from 'react';

export function useScrollDirection() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  useEffect(() => {
    const collapseAt = 90;
    const expandAt = 100;

    const updateScroll = () => {
      const scrollY = window.scrollY;

      if (scrollY > collapseAt) {
        setIsCollapsed(true);
      } else if (scrollY < expandAt) {
        setIsCollapsed(false);
      }
    };

    window.addEventListener('scroll', updateScroll);
    return () => window.removeEventListener('scroll', updateScroll);
  }, []);

  return { isCollapsed };
}