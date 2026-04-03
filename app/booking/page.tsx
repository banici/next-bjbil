import type { Metadata } from 'next';
import BookingForm from '../components/BookingForm/BookingForm';

export const metadata: Metadata = {
  title: 'Skicka serviceförfrågan',
  description:
    'Skicka en serviceförfrågan till Bo & Jimmy Bilservice i Mölndal. Vi återkommer med lediga tider normalt inom en arbetsdag. Service, reparation, däckbyte och mer.',
  keywords: [
    'boka bilservice Mölndal',
    'serviceförfrågan',
    'boka BMW service',
    'boka MINI service',
    'bilverkstad tider',
  ],
  alternates: {
    canonical: 'https://bjbil.se/booking',
  },
  openGraph: {
    title: 'Serviceförfrågan – Bo & Jimmy Bilservice AB',
    description: 'Fyll i formuläret så kontaktar vi dig med lediga tider inom en arbetsdag.',
    url: 'https://bjbil.se/booking',
  },
  // Booking pages shouldn't be indexed by search engines – they're transactional
  // and add no crawlable SEO value. Remove this if you prefer them indexed.
  // robots: { index: false, follow: false },
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