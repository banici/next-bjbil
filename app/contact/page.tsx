import type { Metadata } from 'next';
import CustomerService from '../components/CustomerService/CustomerService';
 
export const metadata: Metadata = {
  title: 'Kundtjänst & Kontakt',
  description:
    'Kontakta Bo & Jimmy Bilservice i Mölndal. Ring 031-84 75 29, maila oss eller besök oss på Aminogatan 15E. Läs svar på vanliga frågor om service, garanti och bokning.',
  keywords: [
    'kontakt bilverkstad Mölndal',
    'ring bilverkstad',
    'FAQ bilservice',
    'garanti bilverkstad',
    'Bo Jimmy Bilservice kontakt',
  ],
  alternates: {
    canonical: 'https://bjbil.se/contact',
  },
  openGraph: {
    title: 'Kundtjänst & Kontakt – Bo & Jimmy Bilservice AB',
    description:
      'Ring 031-84 75 29, maila eller besök oss på Aminogatan 15E i Mölndal. FAQ och garantiinfo.',
    url: 'https://bjbil.se/contact',
  },
};
 
export default function ContactPage() {
  return (
    <>
      <section className="contact-hero" aria-labelledby="contact-heading">
        <div className="contact-hero-inner">
          <h1 id="contact-heading">Kundtjänst</h1>
          <p>
            På Bo &amp; Jimmy Bilservice sätter vi kunden i centrum. Oavsett om du behöver hjälp
            med bokning, garantiärenden eller rådgivning inför service — finns vi här för dig.
          </p>
        </div>
      </section>
      <CustomerService />
    </>
  );
}