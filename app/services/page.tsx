import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { SERVICES } from '../components/ServiceData/ServiceData';
import './services.css';

export const metadata: Metadata = {
  title: 'Våra tjänster – Bo & Jimmy Bilservice AB',
  description: 'Service, fordonsdiagnos, mjukvara, elbilsverkstad, AC-service, hjulinställning och vätgasrengöring i Mölndal.',
  openGraph: {
    title: 'Våra tjänster – Bo & Jimmy Bilservice',
    description: 'Specialiserade biltjänster för BMW, Tesla, MINI och VW i Mölndal.',
    url: 'https://bjbil.se/services',
    siteName: 'Bo & Jimmy Bilservice',
    locale: 'sv_SE',
    type: 'website',
  },
};

export default function TjansterPage() {
  return (
    <>
    <div className='services-bg-wrapper'>
      {/* Hero */}
      <section className="tjanster-hero" aria-labelledby="tjanster-heading">
        <div className="tjanster-hero-inner">
          <h1 id="tjanster-heading">Våra tjänster</h1>
          <p>Professionell service anpassad för din bil — utförd med rätt verktyg och bred erfarenhet.</p>
        </div>
      </section>

      {/* Service grid */}
      <section className="tjanster-grid-section" aria-label="Tjänster">
        <div className="tjanster-grid">
          {SERVICES.map(service => (
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