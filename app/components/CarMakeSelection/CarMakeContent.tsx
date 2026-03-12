'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import type { CarMake } from './carMakesData';
import './carMakeSelection.css';

interface Props {
  makes: CarMake[];
}

export default function CarMakeContent({ makes }: Props) {
  const [activeMake, setActiveMake] = useState<string | null>(null);
  const [hoveredMake, setHoveredMake] = useState<string | null>(null);
  
  const selected = makes.find(m => m.id === activeMake) ?? null;

  const handleSelect = (id: string) => {
    setActiveMake(prev => (prev === id ? null : id));
  };

  return (
    <div className="cm-content">

      {/* Desktop card grid */}
      <div className="cm-cards" role="list" aria-label="Välj bilmärke">
        {makes.map(make => (
          <button
            key={make.id}
            role="listitem"
            className={`cm-card ${activeMake === make.id ? 'active' : ''} ${
              hoveredMake && hoveredMake !== make.id ? 'dimmed' : ''
            }`}
            onClick={() => handleSelect(make.id)}
            onMouseEnter={() => setHoveredMake(make.id)}
            onMouseLeave={() => setHoveredMake(null)}
            aria-pressed={activeMake === make.id}
            aria-label={`Visa information om ${make.label}`}
            >
            <div className="cm-card-img-wrapper">
              <Image
                src={make.heroImage}
                alt={make.heroAlt}
                fill
                sizes="(max-width: 48rem) 100vw, 25vw"
                className="cm-card-img"
                quality={85}
              />
              <div className="cm-card-overlay" aria-hidden="true" />
            </div>
            <div className="cm-card-label">
              <h2>{make.label}</h2>
              <p>{make.tagline}</p>
              <span className="cm-card-cta" aria-hidden="true">
                {activeMake === make.id ? 'Stäng ▴' : 'Läs mer ▾'}
              </span>
            </div>
          </button>
        ))}
      </div>

      {/* Mobile swipe carousel */}
      <MobileCarousel makes={makes} onSelect={handleSelect} activeMake={activeMake} />

      {/* Info panel */}
      {selected && (
        <div
          className="cm-info-panel"
          id={`cm-panel-${selected.id}`}
          aria-label={`Information om ${selected.label}`}
        >
          {/* Sub-section tag links */}
          <nav className="cm-tag-nav" aria-label={`${selected.label} sektioner`}>
            {selected.sections.map(sec => (
              <a key={sec.id} href={`#${sec.anchorId}`} className="cm-tag">
                {sec.heading.replace(' Service', '').replace(' service', '')}
              </a>
            ))}
          </nav>

          {/* Sections */}
          {selected.sections.map(sec => (
            <article key={sec.id} className="cm-section" id={sec.anchorId}>
              <h3 className="cm-section-heading">{sec.heading}</h3>
              <div className="cm-section-body">
                {sec.imageSrc && (
                  <div className="cm-section-img-wrapper">
                    <Image
                      src={sec.imageSrc}
                      alt={sec.imageAlt}
                      fill
                      sizes="(max-width: 48rem) 100vw, 40vw"
                      className="cm-section-img"
                      quality={85}
                    />
                  </div>
                )}
                <div className="cm-section-text">
                  <p className="cm-section-intro">{sec.intro}</p>
                  <p className="cm-offer-title">{sec.offerTitle}:</p>
                  <div className="cm-offer-underline" aria-hidden="true" />
                  <ul className="cm-offer-list">
                    {sec.offers.map((offer, i) => (
                      <li key={i}>{offer}</li>
                    ))}
                  </ul>
                  <p className="cm-closing">{sec.closing}</p>
                </div>
              </div>
            </article>
          ))}

          <div className="cm-panel-cta">
            <Link href="/booking" className="cm-btn-primary">
              Boka service för {selected.label}
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

/* ── Mobile carousel ── */
function MobileCarousel({
  makes,
  onSelect,
  activeMake,
}: {
  makes: CarMake[];
  onSelect: (id: string) => void;
  activeMake: string | null;
}) {
  const [index, setIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState(0);

  const prev = () => setIndex(i => (i - 1 + makes.length) % makes.length);
  const next = () => setIndex(i => (i + 1) % makes.length);

  const handleTouchStart = (e: React.TouchEvent) => setTouchStartX(e.touches[0].clientX);
  const handleTouchEnd = (e: React.TouchEvent) => {
    const diff = e.changedTouches[0].clientX - touchStartX;
    if (diff < -50) next();
    else if (diff > 50) prev();
  };

  const current = makes[index];

  return (
    <div
      className="cm-mobile-carousel"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      aria-label="Välj bilmärke (svep)"
      role="region"
    >
      <button
        className="cm-carousel-arrow left"
        onClick={prev}
        aria-label="Föregående bilmärke"
      >
        <svg width="12" height="20" viewBox="0 0 12 20" fill="none" aria-hidden="true">
          <path d="M10 2L2 10L10 18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
        </svg>
      </button>

      <div className="cm-carousel-track">
        {makes.map((make, i) => {
          const offset = i - index;
          let cls = 'cm-carousel-item hidden';
          if (offset === 0) cls = 'cm-carousel-item active';
          else if (offset === -1 || (index === 0 && i === makes.length - 1)) cls = 'cm-carousel-item prev';
          else if (offset === 1 || (index === makes.length - 1 && i === 0)) cls = 'cm-carousel-item next';

          return (
            <button
              key={make.id}
              className={cls}
              onClick={() => onSelect(make.id)}
              aria-pressed={activeMake === make.id}
              aria-label={make.label}
            >
              <Image
                src={make.heroImage}
                alt={make.heroAlt}
                fill
                sizes="80vw"
                className="cm-carousel-img"
                quality={80}
              />
              <div className="cm-carousel-label" aria-hidden="true">
                <span>{make.label}</span>
              </div>
            </button>
          );
        })}
      </div>

      <button
        className="cm-carousel-arrow right"
        onClick={next}
        aria-label="Nästa bilmärke"
      >
        <svg width="12" height="20" viewBox="0 0 12 20" fill="none" aria-hidden="true">
          <path d="M2 2L10 10L2 18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
        </svg>
      </button>

      <div className="cm-carousel-dots" role="tablist" aria-label="Bilmärke navigation">
        {makes.map((make, i) => (
          <button
            key={make.id}
            role="tab"
            aria-selected={i === index}
            aria-label={make.label}
            className={`cm-dot ${i === index ? 'active' : ''}`}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </div>
  );
}