import type { Metadata } from 'next';
import CarMakes from '../components/CarMakeSelection/CarMakeSelection';

export const metadata: Metadata = {
  title: 'Våra bilmärken – Bo & Jimmy Bilservice AB',
  description: 'Specialiserad service för BMW, MINI, Tesla och VAG i Mölndal. Över 40 års erfarenhet av tyska och elektriska bilar.',
  keywords: ['BMW service', 'MINI service', 'Tesla service', 'VAG service', 'Audi RS', 'Alpina', 'bilverkstad Mölndal'],
  openGraph: {
    title: 'Våra bilmärken – Bo & Jimmy Bilservice',
    description: 'Specialiserad service för BMW, MINI, Tesla och VAG i Mölndal.',
    url: 'https://bjbil.se/car-makes',
    siteName: 'Bo & Jimmy Bilservice',
    locale: 'sv_SE',
    type: 'website',
  },
};

export default function BilmarkenPage() {
  return <CarMakes />;
}