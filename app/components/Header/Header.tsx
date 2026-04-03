'use client';

import { useState, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import './header.css';

const DESKTOP_THRESHOLD = 256;
const MOBILE_THRESHOLD = 55;

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const [headerFixed, setHeaderFixed] = useState(false);
  const [navFixed, setNavFixed] = useState(false);
  const [navHeight, setNavHeight] = useState(0);
  const [headerHeight, setHeaderHeight] = useState(0);

  const headerRef = useRef<HTMLElement>(null);
  const navRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  // --- 1️⃣ Scroll & header/nav fixed ---
useEffect(() => {
  const nav = navRef.current;
  const header = headerRef.current;

  const measure = () => {
    if (nav) setNavHeight(nav.offsetHeight);
    if (header) setHeaderHeight(header.offsetHeight);
  };

  measure();

  const ro = new ResizeObserver(measure);
  if (nav) ro.observe(nav);
  if (header) ro.observe(header);

  const onScroll = () => {
    const scrollY = window.scrollY;
    const isDesktop = window.innerWidth >= 992;

    if (isDesktop) {
      setNavFixed(scrollY > DESKTOP_THRESHOLD);
      setHeaderFixed(false);
    } else {
      setHeaderFixed(scrollY > MOBILE_THRESHOLD);
      setNavFixed(false);
    }
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll, { passive: true });

  return () => {
    window.removeEventListener('scroll', onScroll);
    window.removeEventListener('resize', onScroll);
    ro.disconnect();
  };
}, []); // empty dependency → runs only on mount

  // --- 2️⃣ Prevent body scroll on mobile when menu is open ---
  useEffect(() => {
    const isMobile = window.innerWidth < 992;
    if (isMenuOpen && isMobile) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  return (
    <>
      {/* Spacer divs to prevent layout jump */}
      {navFixed && <div style={{ height: navHeight }} />}
      {headerFixed && <div style={{ height: headerHeight }} />}

      <header
        ref={headerRef}
        className={`header ${headerFixed ? 'header-fixed' : ''}`}
      >
        {/* Mobile Navigation */}
        <div className="mobile-navigator">
          <button
            className={`navigator-menu ${isMenuOpen ? 'open' : ''}`}
            onClick={toggleMenu}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-sidebar"
            aria-label={isMenuOpen ? 'Stäng meny' : 'Öppna meny'}
          >
            <span className="hamburger-bar" />
            <span className="hamburger-bar" />
            <span className="hamburger-bar" />
          </button>

          <aside
            id="mobile-sidebar"
            className={`nav-sidebar ${isMenuOpen ? 'open' : ''}`}
          >
            <ul className="nav-list" role="list">
              <li>
                <Link href="/" onClick={closeMenu}>
                  <span className="nav-icon" aria-hidden="true">🏠</span>
                  Hem
                </Link>
              </li>
              <li>
                <Link href="/car-makes" onClick={closeMenu}>
                  <span className="nav-icon" aria-hidden="true">🚗</span>
                  Våra bilmärken
                </Link>
              </li>
              <li>
                <Link href="/services" onClick={closeMenu}>
                  <span className="nav-icon" aria-hidden="true">⚙️</span>
                  Tjänster
                </Link>
              </li>
              <li>
                <Link href="/about" onClick={closeMenu}>
                  <span className="nav-icon" aria-hidden="true">👥</span>
                  Om oss
                </Link>
              </li>
              <li>
                <Link href="/contact" onClick={closeMenu}>
                  <span className="nav-icon" aria-hidden="true">💬</span>
                  Kundservice
                </Link>
              </li>
              <li className="nav-item-highlight">
                <Link href="/booking" onClick={closeMenu}>
                  <span className="nav-icon" aria-hidden="true">📅</span>
                  Serviceförfrågan
                </Link>
              </li>
              <li>
                <Link href="/tire-hotel" onClick={closeMenu}>
                  <span className="nav-icon" aria-hidden="true">🛞</span>
                  Däckhotell
                </Link>
              </li>
            </ul>
          </aside>

          {isMenuOpen && <div className="menu-overlay" onClick={closeMenu} />}
        </div>

        {/* Logo + Navigation */}
        <div className="header-wrapper">
          <div className="header-logo-wrapper">
            <div className="container">
              <div id="header-logo" className="logo">
                <Link href="/">
                  <Image
                    src="/images/boJimmyLoggaSVG.svg"
                    alt="Bo & Jimmy Bilservice logotyp"
                    width={280}
                    height={80}
                  />
                </Link>
              </div>
            </div>
          </div>

          <div
            ref={navRef}
            className={`navigation-wrapper ${navFixed ? 'navigation-fixed' : ''}`}
          >
            <div className="container">
              <nav className="navigation">
                <ul className="nav sf-menu">
                  <li>
                    <Link href="/" aria-current={pathname === '/' ? 'page' : undefined}>Hem</Link>
                  </li>
                  <li>
                    <Link href="/car-makes" aria-current={pathname === '/car-makes' ? 'page' : undefined}>Våra bilmärken</Link>
                  </li>
                  <li>
                    <Link href="/services" aria-current={pathname === '/services' ? 'page' : undefined}>Tjänster</Link>
                  </li>
                  <li>
                    <Link href="/tire-hotel" aria-current={pathname === '/tire-hotel' ? 'page' : undefined}>Däckhotell</Link>
                  </li>
                  <li>
                    <Link href="/about" aria-current={pathname === '/about' ? 'page' : undefined}>Om oss</Link>
                  </li>
                  <li>
                    <Link href="/contact" aria-current={pathname === '/contact' ? 'page' : undefined}>Kundservice</Link>
                  </li>
                  <li className="nav-cta">
                    <Link href="/booking" aria-current={pathname === '/booking' ? 'page' : undefined}>Serviceförfrågan</Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}