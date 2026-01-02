import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

import "./footer.css";

export default function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="footer-container">
        <div className="footer-wrapper">
          <section className="about-box" aria-labelledby="footer-about-title">
            <h4 id="footer-about-title" className="about-title">
              Bo & Jimmy Bilservice AB
            </h4>

            <a
              href="https://www.google.com/maps/search/?api=1&query=Aminogatan+15E,+431+53+Mölndal"
              aria-label="Öppna adress i Google Maps"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p className="gps-location">
                Aminogatan 15E
                <br />
                431 53 Mölndal
              </p>
            </a>
          </section>

          <section className="hours-box" aria-labelledby="footer-hours-title">
            <h4 id="footer-hours-title" className="hours-title">
              Våra öppettider
            </h4>
            <dl className="hours-list">
              <div className="hours-list-item">
                <dt>Mån–Tors</dt>
                <dd>07:00 – 17:00</dd>
              </div>
              <div className="hours-list-item">
                <dt>Fredag</dt>
                <dd>07:00 – 12:00</dd>
              </div>
              <div className="hours-list-item">
                <dt>Lunch</dt>
                <dd>12:00 – 13:00</dd>
              </div>
              <div className="hours-list-item">
                <dt>Lör–Sön</dt>
                <dd>Stängt</dd>
              </div>
            </dl>
          </section>

          <section
            className="contact-box"
            aria-labelledby="footer-contact-title"
          >
            <h4 id="footer-contact-title" className="contact-title">
              Kontakt
            </h4>
            <ul>
              <li>
                <a href="tel:031847529">Ring oss</a>
              </li>
              <li>
                <a href="mailto:bayerische@telia.com">Maila oss</a>
              </li>
            </ul>

            <div className="social-media-box">
              <a
                target="_blank"
                href="https://www.instagram.com/bojimmybilservice/"
                aria-label="Instagram — öppnas i nytt fönster"
                rel="noopener noreferrer"
                title="Instagram"
              >
                <div>
                  <FontAwesomeIcon icon={faInstagram} />
                </div>
              </a>
            </div>
          </section>
        </div>

        <div className="footer-logo">
          <a href="/" aria-label="Startsida">
            <img
              src="/images/boJimmyLoggaSVG.svg"
              id="nyckel-footer"
              alt="Bo & Jimmy Bilservice — företagslogotyp"
            />
          </a>

          <a href="/" aria-label="Godkänd bilverkstad – åter till startsidan">
            <img
              src="/images/godkand-bilverkstad.jpg"
              id="approved-logo"
              alt="Godkänd bilverkstad"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
