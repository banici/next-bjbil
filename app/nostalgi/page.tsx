import type { Metadata } from 'next';
import NostalgiGallery from '../components/NostalgiGallery/NostalgiGallery';

export const metadata: Metadata = {
  title: 'Nostalgialbum – Vår historia i bilder',
  description:
    'Se utvalda verkstadsbilder och ögonblick från Bo & Jimmy Bilservice genom över 40 år i branschen. En resa genom tid, teknik och passion för bilar i Mölndal.',
  keywords: [
    'nostalgi bilverkstad',
    'historiska bilder bilverkstad',
    'Bo Jimmy Bilservice historia',
    'bilverkstad Mölndal historia',
  ],
  alternates: {
    canonical: 'https://bjbil.se/nostalgi',
  },
  openGraph: {
    title: 'Nostalgialbum – Bo & Jimmy Bilservice AB',
    description: 'Över 40 år av passion för bilar – i bilder från vår verkstad i Mölndal.',
    url: 'https://bjbil.se/nostalgi',
  },
};

export default function NostalgiPage() {
  return (
    <>
      {/* Hero */}
      <section className="nostalgi-hero" aria-labelledby="nostalgi-heading">
        <div className="nostalgi-hero-inner">
          <h1 id="nostalgi-heading">Nostalgialbum</h1>
          <p>
            Utvalda ögonblick och verkstadsbilder från våra över 40 år i branschen.
            En resa genom tid, teknik och passion för bilar.
          </p>
        </div>
      </section>

      {/* Gallery — client component */}
      <NostalgiGallery />
    </>
  );
}