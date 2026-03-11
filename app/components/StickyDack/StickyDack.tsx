'use client';
import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import './stickyDack.css';

export default function StickyDack() {
  const stickyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sticky = stickyRef.current;
    const section = document.getElementById('page-section');
    if (!sticky || !section) return;

    const updateStickerPosition = () => {
      const sectionRect = section.getBoundingClientRect();
      const sectionTop = sectionRect.top;
      const sectionBottom = sectionRect.bottom;
      const sectionHeight = sectionRect.height;
      const viewportHeight = window.innerHeight;
      const stickerHeight = sticky.offsetHeight;
      const startOffset = 200;
      const maxTravel = sectionHeight - stickerHeight;

      let newPosition;
      if (sectionTop > startOffset) {
        newPosition = 0;
      } else if (sectionBottom < viewportHeight) {
        newPosition = maxTravel;
      } else {
        newPosition = Math.min(maxTravel, -(sectionTop - startOffset));
      }

      sticky.style.top = `${newPosition}px`;
    };

    window.addEventListener('scroll', updateStickerPosition, { passive: true });
    updateStickerPosition();
    return () => window.removeEventListener('scroll', updateStickerPosition);
  }, []);

  return (
    <div ref={stickyRef} className="sticky-dack">
      <Link href="/dackhotell">
        <Image
          src="/icons/dack-hotell.png"
          alt="Däckhotell - Säker förvaring av dina däck"
          width={200}
          height={200}
        />
      </Link>
    </div>
  );
}