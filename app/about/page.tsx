import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import './about.css';

export const metadata: Metadata = {
  title: 'Om oss – Bo & Jimmy Bilservice AB | Sedan 1982',
  description: 'Lär känna teamet bakom Bo & Jimmy Bilservice i Mölndal. Över 40 års erfarenhet av BMW, MINI, TESLA och VAG. Familjeföretag grundat 1982.',
  keywords: ['om oss', 'bilverkstad Mölndal', 'BMW verkstad', 'erfarenhet', 'Bo Jimmy Bilservice'],
  openGraph: {
    title: 'Om oss – Bo & Jimmy Bilservice AB',
    description: 'Familjeföretag med över 40 års erfarenhet av bilservice i Mölndal.',
    url: 'https://bjbil.se/about',
    siteName: 'Bo & Jimmy Bilservice',
    locale: 'sv_SE',
    type: 'website',
  },
};

export default function OmOssPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="om-oss-hero" aria-labelledby="om-oss-hero-heading">
        <div className="om-oss-upper-box">
          <h1 id="om-oss-hero-heading" className="om-oss-upper-title">
            Erfarenhet, kvalitet &amp; trygghet sedan 1982
          </h1>
          <p className="om-oss-upper-subtitle">
            Vi är ett familjärt företag som servat bilar sedan 1982. Här är teamet som möter dig i verkstaden.
          </p>
        </div>
        <div className="om-oss-image-wrapper">
          <Image
            src="/images/personal/grupp-foto-mobile.jpg"
            alt="Teamet på Bo & Jimmy Bilservice AB"
            width={600}
            height={600}
            quality={85}
            priority
            className="om-oss-team-img mobile-only"
          />
        </div>
      </section>

      {/* About Section */}
      <section className="om-oss-intro-section" aria-labelledby="om-oss-intro-heading">
        <div className="om-oss-intro-inner">
          <h2 id="om-oss-intro-heading" className="om-oss-image-title">Om oss</h2>
          <div className="om-oss-title-line" aria-hidden="true" />
          <div className="om-oss-intro-text">
            <p>
              Bo &amp; Jimmy Bilservice AB grundades 1982 under namnet BO Bilar och har sedan dess
              utvecklats till en väletablerad och ledande aktör inom bilservice och reparationer.
              År 1991 bildade grundarna Bo och Jimmy Bayerische Bilservice, som blev aktiebolag 2003.
              Sedan 2005 har vi drivits vidare under namnet Bo &amp; Jimmy Bilservice AB.
            </p>
            <p>
              Vi är idag en verkstad med över 40 års erfarenhet och starka traditioner, specialiserad
              på service och reparation av BMW, MINI, Tesla och VAG. Vi följer alltid tillverkarnas
              normer och krav för att säkerställa att varje arbete utförs fackmässigt och enligt
              branschstandard. Genom åren har vi byggt upp ett omfattande lager av både nya och
              begagnade reservdelar – särskilt till BMW – vilket gör att vi kan erbjuda snabba och
              kostnadseffektiva lösningar.
            </p>
            <p>
              Vi arbetar kontinuerligt med att utveckla vår kompetens, utrustning och diagnostik
              för att ligga i takt med den tekniska utvecklingen. Det gör att vi kan utföra arbeten
              tidseffektivt, noggrant och med hög precision. Välkommen till Bo &amp; Jimmy Bilservice AB
              – en trygg och erfaren verkstad där både du och din bil tas om hand på ett professionellt
              och kunnigt sätt.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="om-oss-stats" aria-label="Verkstadens nyckeltal">
        <div className="om-oss-stats-inner">
          <div className="stat-card">
            <p className="stat-number">40+</p>
            <p className="stat-label">År i branschen</p>
          </div>
          <div className="stat-card">
            <p className="stat-number">1982</p>
            <p className="stat-label">Grundat</p>
          </div>
          <div className="stat-card">
            <p className="stat-number">4</p>
            <p className="stat-label">Specialiserade bilmärken</p>
          </div>
          <div className="stat-card">
            <p className="stat-number">100%</p>
            <p className="stat-label">Fristående verkstad</p>
          </div>
        </div>
      </section>

      {/* Nostalgi Card Section */}
      <section className="om-oss-cards-section" aria-labelledby="om-oss-cards-heading">
        <div className="om-oss-cards-inner">
          <h2 id="om-oss-cards-heading" className="om-oss-cards-title">Nostalgialbum</h2>
          <p className="om-oss-cards-subtitle">
            Ta gärna en titt i vårt nostalgialbum där vi samlat utvalda ögonblick och
            verkstadsbilder från våra över 40 år i branschen.
          </p>
          <div className="om-oss-box-container">
            <article className="om-oss-box-card" aria-label="Nostalgialbum">
              <div className="card-image">
                <Image
                  src="/images/nostaligapresentation.png"
                  alt="Historiska bilder från Bo & Jimmy Bilservice genom åren"
                  width={600}
                  height={400}
                  quality={90}
                  className="card-img"
                />
              </div>
              <div className="card-info">
                <h3>Vår historia i bilder</h3>
                <p>
                  Utvalda ögonblick och verkstadsbilder från våra över 40 år i branschen.
                  En resa genom tid, teknik och passion för bilar.
                </p>
                <Link href="/nostalgi" className="card-link">
                  Se albumet
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="om-oss-cta-section" aria-labelledby="om-oss-cta-heading">
        <h2 id="om-oss-cta-heading">Vill du veta mer eller boka service?</h2>
        <p>Vi välkomnar dig till vår verkstad i Mölndal.</p>
        <div className="om-oss-cta-buttons">
          <Link href="/contact" className="om-oss-cta-primary">
            Kontakta oss
          </Link>
          <Link href="/booking" className="om-oss-cta-secondary">
            Skicka serviceförfrågan
          </Link>
        </div>
      </section>
    </>
  );
}