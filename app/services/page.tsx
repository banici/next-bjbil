import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { SERVICES } from '../components/ServiceData/ServiceData';
import './services.css';

export const metadata: Metadata = {
  title: 'Våra tjänster – Service, Diagnos, Elbil & mer',
  description:
    'Specialiserade biltjänster i Mölndal: service & underhåll, fordonsdiagnos, mjukvara, elbilsverkstad, AC-service, hjulinställning och vätgasrengöring. För BMW, MINI, Tesla och VAG.',
  keywords: [
    'biltjänster Mölndal',
    'bilservice Göteborg',
    'fordonsdiagnos',
    'elbilsverkstad',
    'AC service bil',
    'hjulinställning',
    'däckbyte Mölndal',
    'vätgasrengöring',
    'BMW service',
    'Tesla service',
  ],
  alternates: {
    canonical: 'https://bjbil.se/services',
  },
  openGraph: {
    title: 'Våra tjänster – Bo & Jimmy Bilservice AB',
    description:
      'Service, diagnos, elbilsverkstad, AC, hjulinställning och mer – för BMW, MINI, Tesla och VAG i Mölndal.',
    url: 'https://bjbil.se/services',
  },
};

export default function TjansterPage() {
  return (
    <>
      <div className="services-bg-wrapper">
        {/* Background image */}
        <Image
          src="/images/service-banner/service-background.png"
          alt=""
          aria-hidden="true"
          fill
          priority
          sizes="(max-width: 768px) 150vw, (max-width: 1200px) 125vw, 100vw"
          quality={90}
          style={{ objectFit: 'cover' }}
        />

        {/* Hero */}
        <section className="tjanster-hero" aria-labelledby="tjanster-heading">
          <div className="tjanster-hero-inner">
            <h1 id="tjanster-heading">Våra tjänster</h1>
            <p>
              Professionell service anpassad för din bil — utförd med rätt verktyg och bred
              erfarenhet.
            </p>
          </div>
        </section>

        {/* Service grid */}
        <section className="tjanster-grid-section" aria-label="Tjänster">
          <div className="tjanster-grid">
            {SERVICES.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="tjanster-card"
                aria-label={service.title}
              >
                <div className="tjanster-card-img-wrapper">
                  <Image
                    src={service.iconSrc}
                    alt=""
                    aria-hidden="true"
                    fill
                    sizes="(max-width: 48rem) 45vw, 20vw"
                    className="tjanster-card-img"
                    quality={85}
                  />
                  <div className="tjanster-card-overlay" aria-hidden="true" />
                </div>
                <h2>{service.title}</h2>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}