'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import './nostalgiGallery.css';

const TOTAL_IMAGES = 71;
const IMAGES_PER_PAGE_DESKTOP = 12;
const IMAGES_PER_PAGE_MOBILE = 9;

export default function NostalgiGallery() {
  const [loadedCount, setLoadedCount] = useState(0);
  const [imagesPerPage, setImagesPerPage] = useState(IMAGES_PER_PAGE_DESKTOP);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);

  // Set images per page based on screen size
  useEffect(() => {
    const update = () => {
      setImagesPerPage(window.innerWidth <= 900
        ? IMAGES_PER_PAGE_MOBILE
        : IMAGES_PER_PAGE_DESKTOP
      );
    };
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  // Load initial batch
  useEffect(() => {
    setLoadedCount(imagesPerPage);
  }, [imagesPerPage]);

  // Keyboard navigation for lightbox
  useEffect(() => {
    if (lightboxIndex === null) return;

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') navigateLightbox(1);
      if (e.key === 'ArrowLeft') navigateLightbox(-1);
    };

    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [lightboxIndex]);

  // Lock body scroll when lightbox is open
  useEffect(() => {
    document.body.style.overflow = lightboxIndex !== null ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [lightboxIndex]);

  const loadMore = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setLoadedCount(prev => Math.min(prev + imagesPerPage, TOTAL_IMAGES));
    setTimeout(() => setIsAnimating(false), 500);
  };

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const navigateLightbox = useCallback((direction: number) => {
    if (lightboxIndex === null) return;
    const next = lightboxIndex + direction;
    if (next >= 1 && next <= TOTAL_IMAGES) setLightboxIndex(next);
  }, [lightboxIndex]);

  const visibleImages = Array.from({ length: loadedCount }, (_, i) => i + 1);
  const hasMore = loadedCount < TOTAL_IMAGES;

  return (
    <>
      <section className="nostalgi-gallery-section" aria-label="Nostalgialbum bildgalleri">
        <div
          id="gallery-container"
          role="list"
          aria-label={`Visar ${loadedCount} av ${TOTAL_IMAGES} bilder`}
        >
          {visibleImages.map((index) => (
            <button
              key={index}
              className="gallery-item"
              role="listitem"
              aria-label={`Öppna bild ${index} av ${TOTAL_IMAGES}`}
              onClick={() => openLightbox(index)}
              style={{
                backgroundImage: `url(/images/nostalgi/${index}.jpg)`
              }}
            />
          ))}
        </div>

        {hasMore && (
          <button
            id="load-more"
            onClick={loadMore}
            aria-label={`Ladda fler bilder, ${TOTAL_IMAGES - loadedCount} bilder kvar`}
            className={isAnimating ? 'animating' : ''}
          >
            <span>Ladda mer</span>
          </button>
        )}
      </section>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          id="lightbox-overlay"
          role="dialog"
          aria-modal="true"
          aria-label={`Bild ${lightboxIndex} av ${TOTAL_IMAGES}`}
          onClick={closeLightbox}
        >
          <div
            id="lightbox-wrapper"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              id="close-lightbox"
              onClick={closeLightbox}
              aria-label="Stäng bildvisning"
            >
              &times;
            </button>

            {/* Prev button */}
            <button
              className="lightbox-nav lightbox-prev"
              onClick={() => navigateLightbox(-1)}
              aria-label="Föregående bild"
              disabled={lightboxIndex === 1}
            >
              &#8249;
            </button>

            <div id="lightbox">
              <Image
                id="lightbox-image"
                src={`/images/nostalgi/${lightboxIndex}.jpg`}
                alt={`Nostalgialbum bild ${lightboxIndex}`}
                width={1600}
                height={1000}
                quality={90}
                style={{ objectFit: 'contain', maxWidth: '70vw', maxHeight: '85vh' }}
                priority
              />
            </div>

            {/* Next button */}
            <button
              className="lightbox-nav lightbox-next"
              onClick={() => navigateLightbox(1)}
              aria-label="Nästa bild"
              disabled={lightboxIndex === TOTAL_IMAGES}
            >
              &#8250;
            </button>

            {/* Counter */}
            <p className="lightbox-counter" aria-live="polite">
              {lightboxIndex} / {TOTAL_IMAGES}
            </p>
          </div>
        </div>
      )}
    </>
  );
}