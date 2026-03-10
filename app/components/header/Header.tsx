'use client';

import { useState } from 'react';
import "./header.css";

interface HeaderProps {
  isCollapsed?: boolean;
}

export default function Header({ isCollapsed = false }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
                <a href="/" onClick={closeMenu}>
                  <span className="nav-icon" aria-hidden="true">🏠</span>
                  Hem
                </a>
              </li>
              <li>
                <a href="/bilmarken" onClick={closeMenu}>
                  <span className="nav-icon" aria-hidden="true">🚗</span>
                  Våra bilmärken
                </a>
              </li>
              <li>
                <a href="/tjanster" onClick={closeMenu}>
                  <span className="nav-icon" aria-hidden="true">⚙️</span>
                  Våra tjänster
                </a>
              </li>
              <li>
                <a href="/om-oss" onClick={closeMenu}>
                  <span className="nav-icon" aria-hidden="true">👥</span>
                  Om oss
                </a>
              </li>
              <li>
                <a href="/kontakt" onClick={closeMenu}>
                  <span className="nav-icon" aria-hidden="true">💬</span>
                  Kundservice
                </a>
              </li>
              <li className="nav-item-highlight">
                <a href="/boka" onClick={closeMenu}>
                  <span className="nav-icon" aria-hidden="true">📅</span>
                  Serviceförfrågan
                </a>
              </li>
              <li>
                <a href="/dackhotell" onClick={closeMenu}>
                  <span className="nav-icon" aria-hidden="true">🛞</span>
                  Däckhotell
                </a>
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
              <a href="/" aria-label="Bo & Jimmy Bilservice - Till startsidan">
                <img
                  id="header-nyckel"
                  src="/images/boJimmyLoggaSVG.svg"
                  alt="Bo & Jimmy Bilservice logotyp"
                  width="280"
                  height="80"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Desktop Navigation - alltid synlig */}
        <div className="navigation-wrapper" id="navigation-wrapper">
          <div className="container">
            <nav className="navigation" aria-label="Huvudnavigering">
              <ul className="nav sf-menu" role="list">
                <li>
                  <a href="/" aria-current="page">Hem</a>
                </li>
                <li>
                  <a href="/bilmarken">Våra bilmärken</a>
                </li>
                <li>
                  <a href="/tjanster">Våra tjänster</a>
                </li>
                <li>
                  <a href="/dackhotell">Däckhotell</a>
                </li>
                <li>
                  <a href="/om-oss">Om oss</a>
                </li>
                <li>
                  <a href="/kontakt">Kundservice</a>
                </li>
                <li className="nav-cta">
                  <a href="/boka">Serviceförfrågan</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}