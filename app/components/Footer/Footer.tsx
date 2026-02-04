import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons";

import "./footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-wrapper">
          <section className="about-box" aria-labelledby="footer-about-title">
            <h4 id="footer-about-title" className="about-title">
              Bo & Jimmy Bilservice AB
            </h4>

            <address>  {/* Semantiskt korrekt för kontaktinfo */}
              <a
                href="https://www.google.com/maps/search/?api=1&query=Aminogatan+15E,+431+53+Mölndal"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="visually-hidden">Adress: </span>
                Aminogatan 15E,
                <br />
                431 53 Mölndal
                <span className="visually-hidden"> (öppnas i Google Maps i nytt fönster)</span>
              </a>
            </address>
          </section>

          <section className="hours-box" aria-labelledby="footer-hours-title">
            <h4 id="footer-hours-title" className="hours-title">
              Öppettider
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

          <section className="contact-box" aria-labelledby="footer-contact-title">
            <h4 id="footer-contact-title" className="contact-title">
              Kontakt
            </h4>
            <ul role="list">
              <li>
                <a href="tel:031847529">
                  <span className="visually-hidden">Telefon: </span>
                  031-84 75 29
                </a>
              </li>
              <li>
                <a href="mailto:bayerische@telia.com">
                  <span className="visually-hidden">E-post: </span>
                  bayerische@telia.com
                </a>
              </li>
            </ul>

            <ul className="social-media-box" role="list" aria-label="Sociala medier">
              <li>
                <a
                  href="https://www.instagram.com/bojimmybilservice/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Följ oss på Instagram (öppnas i nytt fönster)"
                >
                  <FontAwesomeIcon icon={faInstagram} aria-hidden="true" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/@bojimmybilservice/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Följ oss på Youtube (öppnas i nytt fönster)"
                >
                  <FontAwesomeIcon icon={faYoutube} aria-hidden="true" />
                </a>
              </li>
            </ul>
          </section>
        </div>

        <div className="footer-logo">
          <a href="/" aria-label="Till startsidan">
            <img
              src="/images/boJimmyLoggaSVG.svg"
              id="nyckel-footer"
              alt="Bo & Jimmy Bilservice logotyp"
              width="300"   
              height="100"  
              loading="lazy"
            />
          </a>

          <a 
            href="https://www.motormagasinet.se/godkand-bilverkstad"  
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Läs mer om Godkänd Bilverkstad (öppnas i nytt fönster)"
          >
            <img
              src="/images/godkand-bilverkstad.jpg"
              id="approved-logo"
              alt="Certifierad som Godkänd Bilverkstad"
              width="150"
              height="150"
              loading="lazy"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}