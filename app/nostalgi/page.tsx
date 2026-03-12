import type { Metadata } from 'next';
import NostalgiGallery from '../components/NostalgiGallery/NostalgiGallery';

export const metadata: Metadata = {
  title: 'Nostalgialbum – Bo & Jimmy Bilservice AB',
  description: 'Se utvalda ögonblick och verkstadsbilder från Bo & Jimmy Bilservice över 40 år i branschen. Historiska bilder från vår verkstad i Mölndal.',
  keywords: ['nostalgi', 'historiska bilder', 'bilverkstad historia', 'Bo Jimmy Bilservice'],
  openGraph: {
    title: 'Nostalgialbum – Bo & Jimmy Bilservice',
    description: 'Över 40 år av passion för bilar i bilder.',
    url: 'https://bjbil.se/nostalgi',
    siteName: 'Bo & Jimmy Bilservice',
    locale: 'sv_SE',
    type: 'website',
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