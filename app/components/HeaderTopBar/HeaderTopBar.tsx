'use client';

import { useState } from 'react';
import './headerTopBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import { faPhone, faMapMarkerAlt, faChevronDown } from '@fortawesome/free-solid-svg-icons';

export default function HeaderTopBar() {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="top-bar" role="banner">
      {/* Desktop version */}
      <div className="top-bar-desktop">
        <ul className="top-bar-list" role="list">
          <li className="top-bar-item top-bar-hours">
            <FontAwesomeIcon icon={faClock} aria-hidden="true" />
            <span>Mån–Tors 07:00 – 17:00</span>
            <span className="divider" aria-hidden="true">|</span>
            <span>Fre 07:00 – 12:00</span>
            <span className="divider" aria-hidden="true">|</span>
            <span>Lör–Sön Stängt</span>
          </li>
          <li className="top-bar-item">
            <a href="tel:031847529" aria-label="Ring oss på 031-84 75 29">
              <FontAwesomeIcon icon={faPhone} aria-hidden="true" />
              <span>031-84 75 29</span>
            </a>
          </li>
          <li className="top-bar-item">
            <a 
              href="https://www.google.com/maps/search/?api=1&query=Aminogatan+15E,+431+53+Mölndal"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visa adress på karta: Aminogatan 15E, 431 53 Mölndal (öppnas i nytt fönster)"
            >
              <FontAwesomeIcon icon={faMapMarkerAlt} aria-hidden="true" />
              <span>Aminogatan 15E, 431 53 Mölndal</span>
            </a>
          </li>
        </ul>
      </div>

      {/* Mobil version */}
      <div className="top-bar-mobile">
        <button
          className="top-bar-toggle"
          onClick={toggleExpand}
          aria-expanded={isExpanded}
          aria-controls="mobile-contact-info"
          aria-label={isExpanded ? "Stäng kontaktinformation" : "Visa kontaktinformation"}
        >
          <span className="toggle-text">Kontaktinfo</span>
          <FontAwesomeIcon 
            icon={faChevronDown} 
            aria-hidden="true"
            className={`chevron-icon ${isExpanded ? 'rotated' : ''}`}
          />
        </button>
        
        <div 
          id="mobile-contact-info"
          className={`mobile-content ${isExpanded ? 'expanded' : ''}`}
          role="region"
          aria-label="Kontaktinformation"
        >
            <div className="mobile-content-inner">
              <ul className="mobile-list" role="list">
                <li>
                  <FontAwesomeIcon icon={faClock} aria-hidden="true" />
                  <span>Mån – Tors 07:00 – 17:00</span>
                </li>
                <li>
                  <FontAwesomeIcon icon={faClock} aria-hidden="true" />
                  <span>Fre 07:00 – 12:00</span>
                </li>
                <li>
                  <FontAwesomeIcon icon={faClock} aria-hidden="true" />
                  <span>Lör – Sön Stängt</span>
                </li>
                <li>
                  <a href="tel:031847529" aria-label="Ring oss på 031-84 75 29">
                    <FontAwesomeIcon icon={faPhone} aria-hidden="true" />
                    <span>031-84 75 29</span>
                  </a>
                </li>
                <li>
                  <a 
                    href="https://www.google.com/maps/search/?api=1&query=Aminogatan+15E,+431+53+Mölndal"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Visa adress på karta (öppnas i nytt fönster)"
                  >
                    <FontAwesomeIcon icon={faMapMarkerAlt} aria-hidden="true" />
                    <span>Aminogatan 15E, Mölndal</span>
                  </a>
                </li>
              </ul>
            </div>
        </div>
      </div>
    </div>
  );
}