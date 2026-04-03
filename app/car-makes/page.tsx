import type { Metadata } from 'next';
import CarMakes from '../components/CarMakeSelection/CarMakeSelection';
 
export const metadata: Metadata = {
  title: 'Våra bilmärken – BMW, MINI, Tesla & VAG',
  description:
    'Specialiserad service för BMW, MINI, Tesla, Audi, VW och Seat i Mölndal. Fristående verkstad med över 40 års erfarenhet – vi jobbar enligt tillverkarstandard.',
  keywords: [
    'BMW service Mölndal',
    'MINI service',
    'Tesla service Göteborg',
    'Alpina service',
    'Elbilservice',
    'VAG verkstad',
    'Alpina service',
    'fristående BMW verkstad',
  ],
  alternates: {
    canonical: 'https://bjbil.se/car-makes',
  },
  openGraph: {
    title: 'Våra bilmärken – BMW, MINI, Tesla & VAG | Bo & Jimmy Bilservice',
    description:
      'Specialiserad service för BMW, MINI, Tesla och VAG i Mölndal. Fristående verkstad – jobbar enligt tillverkarstandard.',
    url: 'https://bjbil.se/car-makes',
  },
};

export default function BilmarkenPage() {
  return <CarMakes />;
}