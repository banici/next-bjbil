import type { Metadata } from 'next';
import CustomerService from '../components/CustomerService/CustomerService';

export const metadata: Metadata = {
  title: 'Kundtjänst – Bo & Jimmy Bilservice AB',
  description: 'Kontakta Bo & Jimmy Bilservice i Mölndal. Hitta svar på vanliga frågor, läs om våra garantivillkor eller ring oss direkt på 031-84 75 29.',
  keywords: ['kundtjänst', 'kontakt', 'FAQ', 'garanti', 'bilverkstad Mölndal'],
  openGraph: {
    title: 'Kundtjänst – Bo & Jimmy Bilservice',
    description: 'Kontakta oss, läs FAQ eller ta del av våra garantivillkor.',
    url: 'https://bjbil.se/contact',
    siteName: 'Bo & Jimmy Bilservice',
    locale: 'sv_SE',
    type: 'website',
  },
};

export default function ContactPage() {
  return (
    <>
      <section className="contact-hero" aria-labelledby="contact-heading">
        <div className="contact-hero-inner">
          <h1 id="contact-heading">Kundtjänst</h1>
          <p>
            På Bo &amp; Jimmy Bilservice sätter vi kunden i centrum. Oavsett om
            du behöver hjälp med bokning, garantiärenden eller rådgivning inför
            service — finns vi här för dig.
          </p>
        </div>
      </section>
      <CustomerService />
    </>
  );
}