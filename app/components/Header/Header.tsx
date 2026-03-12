'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import "./header.css";

interface HeaderProps {
  isCollapsed?: boolean;
}

export default function Header({ isCollapsed = false }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={`header ${isCollapsed ? 'header-collapsed' : ''}`}>
      {/* Mobile Navigation */}
      <div className="mobile-navigator">
        <button
          className={`navigator-menu ${isMenuOpen ? 'open' : ''}`}
          onClick={toggleMenu}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-sidebar"
          aria-label={isMenuOpen ? 'Stäng meny' : 'Öppna meny'}
        >
          <span className="hamburger-bar" aria-hidden="true"></span>
          <span className="hamburger-bar" aria-hidden="true"></span>
          <span className="hamburger-bar" aria-hidden="true"></span>
        </button>

        <aside
          id="mobile-sidebar"
          className={`nav-sidebar ${isMenuOpen ? 'open' : ''}`}
          aria-label="Mobilmeny"
          aria-hidden={!isMenuOpen}
        >
          <nav className="nav-wrapper">
            <ul className="nav-list" role="list">
              <li>
                <Link href="/" onClick={closeMenu}>
                  <span className="nav-icon" aria-hidden="true">🏠</span>
                  Hem
                </Link>
              </li>
              <li>
                <Link href="/bilmarken" onClick={closeMenu}>
                  <span className="nav-icon" aria-hidden="true">🚗</span>
                  Våra bilmärken
                </Link>
              </li>
              <li>
                <Link href="/tjanster" onClick={closeMenu}>
                  <span className="nav-icon" aria-hidden="true">⚙️</span>
                  Våra tjänster
                </Link>
              </li>
              <li>
                <Link href="/om-oss" onClick={closeMenu}>
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
                <Link href="/boka" onClick={closeMenu}>
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
          </nav>
        </aside>

        {isMenuOpen && (
          <div
            className="menu-overlay"
            onClick={closeMenu}
            aria-hidden="true"
          />
        )}
      </div>

      {/* Header Content */}
      <div className="header-wrapper">
        {/* Logo - göms vid scroll */}
        <div className="header-logo-wrapper">
          <div className="container">
            <div id="header-logo" className="logo">
              <Link href="/" aria-label="Bo & Jimmy Bilservice - Till startsidan">
                <Image
                  id="header-nyckel"
                  src="/images/boJimmyLoggaSVG.svg"
                  alt="Bo & Jimmy Bilservice logotyp"
                  width={280}
                  height={80}
                />
              </Link>
            </div>
          </div>
        </div>

        {/* Desktop Navigation - alltid synlig */}
        <div className="navigation-wrapper" id="navigation-wrapper">
          <div className="container">
            <nav className="navigation" aria-label="Huvudnavigering">
              <ul className="nav sf-menu" role="list">
                <li>
                  <Link href="/" aria-current={pathname === '/' ? 'page' : undefined}>Hem</Link>
                </li>
                <li>
                  <Link href="/bilmarken" aria-current={pathname === '/bilmarken' ? 'page' : undefined}>Våra bilmärken</Link>
                </li>
                <li>
                  <Link href="/tjanster" aria-current={pathname === '/tjanster' ? 'page' : undefined}>Våra tjänster</Link>
                </li>
                <li>
                  <Link href="/tire-hotel" aria-current={pathname === '/tire-hotel' ? 'page' : undefined}>Däckhotell</Link>
                </li>
                <li>
                  <Link href="/om-oss" aria-current={pathname === '/om-oss' ? 'page' : undefined}>Om oss</Link>
                </li>
                <li>
                  <Link href="/contact" aria-current={pathname === '/contact' ? 'page' : undefined}>Kundservice</Link>
                </li>
                <li className="nav-cta">
                  <Link href="/boka">Serviceförfrågan</Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}