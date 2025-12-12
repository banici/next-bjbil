import "./footer.css";

export default function Footer() {
  return (
    <footer 
      className="footer" 
      role="contentinfo"
    >
      <div className="footer-container">
        
        {/* LOGO-SEKTION */}
        <div className="footer-logo">
          <a href="/" aria-label="Startsida">
            <img 
              src="/images/boJimmyLoggaSVG.svg"
              id="nyckel-footer" 
              alt="Bo & Jimmy Bilservice — företagslogotyp" 
            />
          </a>

          <div className="approved-logo">
            <a 
              href="/" 
              aria-label="Godkänd bilverkstad – åter till startsidan"
            >
              <img
                src="/images/godkand-bilverkstad.jpg"
                alt="Godkänd bilverkstad" 
              />
            </a>
          </div>
        </div>

        {/* INFO-SEKTIONER */}
        <div className="footer-wrapper">

          <section 
            className="about-box" 
            aria-labelledby="footer-about-title"
          >
            <h4 id="footer-about-title" className="about-title">
              Bo & Jimmy Bilservice AB
            </h4>

            <a 
              href="https://www.google.com/maps/search/?api=1&query=Aminogatan+15E,+431+53+Mölndal"
              aria-label="Öppna adress i Google Maps"
            >
              <p className="gps-location">
                Aminogatan 15E<br />
                431 53 Mölndal
              </p>
            </a>
          </section>

          <section 
            className="hours-box" 
            aria-labelledby="footer-hours-title"
          >
            <h4 id="footer-hours-title" className="hours-title">
              Våra öppettider
            </h4>
            <ul>
              <li>Mån–Tors: 07:00 – 17:00</li>
              <li>Fredag: 07:00 – 12:00</li>
              <li>Lunch: 12:00 – 13:00</li>
              <li>Lör–Sön: Stängt</li>
            </ul>
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
              >
                <div><i className="fa-brands fa-instagram"></i></div>
              </a>
            </div>
          </section>

        </div>
      </div>
    </footer>
  );
}
