import type { Metadata } from 'next';
import BookingForm from '../components/BookingForm/BookingForm';

export const metadata: Metadata = {
  title: 'Serviceförfrågan – Bo & Jimmy Bilservice AB',
  description: 'Skicka en serviceförfrågan till Bo & Jimmy Bilservice i Mölndal. Vi kontaktar dig med lediga tider för service, reparation eller däckbyte.',
  keywords: ['serviceförfrågan', 'boka service', 'bilservice Mölndal', 'BMW service', 'MINI service'],
  openGraph: {
    title: 'Serviceförfrågan – Bo & Jimmy Bilservice',
    description: 'Skicka en förfrågan så kontaktar vi dig med lediga tider.',
    url: 'https://bjbil.se/booking',
    siteName: 'Bo & Jimmy Bilservice',
    locale: 'sv_SE',
    type: 'website',
  },
};

export default function BokaPage() {
  return (
    <>
      {/* Hero */}
      <section className="boka-hero" aria-labelledby="boka-heading">
        <div className="boka-hero-inner">
          <h1 id="boka-heading">Serviceförfrågan</h1>
          <p>
            Fyll i formuläret så kontaktar vi dig med förslag på lediga tider.
            Vi svarar normalt inom en arbetsdag.
          </p>
        </div>
      </section>

      {/* Form */}
      <BookingForm />
    </>
  );
}