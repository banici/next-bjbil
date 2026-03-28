'use client';

import { useState, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import './header.css';

const DESKTOP_THRESHOLD = 206;
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
  }, []);

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
            <ul className="nav-list">
              <li>
                <Link href="/" onClick={closeMenu}>Hem</Link>
              </li>
              <li>
                <Link href="/car-makes" onClick={closeMenu}>Våra bilmärken</Link>
              </li>
              <li>
                <Link href="/services" onClick={closeMenu}>Våra tjänster</Link>
              </li>
              <li>
                <Link href="/tire-hotel" onClick={closeMenu}>Däckhotell</Link>
              </li>
              <li>
                <Link href="/about" onClick={closeMenu}>Om oss</Link>
              </li>
              <li>
                <Link href="/contact" onClick={closeMenu}>Kundservice</Link>
              </li>
              <li className="nav-item-highlight">
                <Link href="/booking" onClick={closeMenu}>Serviceförfrågan</Link>
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
                    <Link href="/car-makes">Våra bilmärken</Link>
                  </li>
                  <li>
                    <Link href="/services">Våra tjänster</Link>
                  </li>
                  <li>
                    <Link href="/tire-hotel">Däckhotell</Link>
                  </li>
                  <li>
                    <Link href="/about">Om oss</Link>
                  </li>
                  <li>
                    <Link href="/contact">Kundservice</Link>
                  </li>
                  <li className="nav-cta">
                    <Link href="/booking">Serviceförfrågan</Link>
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