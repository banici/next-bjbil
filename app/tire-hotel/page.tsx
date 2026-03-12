import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import './tire-hotel.css';

// app/tire-hotel/page.tsx
export const metadata: Metadata = {
  title: 'Däckhotell Mölndal – Förvaring av däck | Bo & Jimmy Bilservice',
  description: 'Förvara dina däck tryggt hos oss i Mölndal. 1 699 kr/säsong inkl. hjultvätt och däckbyte. Ring 031-84 75 29.',
  openGraph: {
    title: 'Däckhotell – Bo & Jimmy Bilservice',
    description: 'Säker däckförvaring i Mölndal från 1 699 kr/säsong.',
    url: 'https://bjbil.se/tire-hotel',
    siteName: 'Bo & Jimmy Bilservice',
    locale: 'sv_SE',
    type: 'website',
  },
};

const steps = [
  {
    img: '/images/tire-hotel/dack-byte.png',
    title: 'Däckbyte',
    description: 'Vi börjar med att byta dina däck inför säsongen så att du kör tryggt och lagligt.',
  },
  {
    img: '/images/tire-hotel/dack-tvatt.png',
    title: 'Tvätt av däck & fälgar',
    description: 'Efter bytet rengör vi dina gamla däck och fälgar noggrant, så de är fräscha inför förvaring.',
  },
  {
    img: '/images/tire-hotel/dack-lager.png',
    title: 'Säker förvaring',
    description: 'Dina däck placeras i vårt låsta och torra förvaringsutrymme där de lagras skonsamt och tryggt.',
  },
  {
    img: '/images/tire-hotel/dack-byte.png',
    title: 'Nytt däckskifte nästa säsong',
    description: 'När det är dags för nästa säsong hämtar vi fram dina däck igen och utför ett nytt däckbyte – snabbt och smidigt.',
  },
];

const villkor = [
  {
    title: '1. Tjänstens omfattning',
    text: 'Däckhotellet avser förvaring av kundens hjul/däck hos verkstaden under respektive säsong. Förvaringen sker i utrymmen med larm och bevakning.',
  },
  {
    title: '2. Verkstadens ansvar',
    text: 'Verkstaden ansvarar för skador som kan styrkas ha uppkommit till följd av verkstadens hantering, arbete eller oaktsamhet. Undantag kan förekomma i de fall där skadans ursprung inte med rimlighet kan fastställas.',
  },
  {
    title: '3. Kundens ansvar',
    text: 'Kunden ansvarar för sina däck vad gäller normalt slitage, åldrande, materialfel samt skador som inte orsakats av verkstadens hantering.',
  },
  {
    title: '4. Stöld, brand och oförutsedda händelser',
    text: 'Verkstaden ansvarar inte för skador eller förlust av kundens däck till följd av brand, stöld eller andra oförutsedda händelser. Sådana händelser ansvarar kunden själv för via sin egen försäkring.',
  },
  {
    title: '5. Förvaring och säkerhet',
    text: 'Hjulen förvaras på ett tryggt ställe med larm och bevakning. Detta innebär dock ingen garanti mot stöld, brand eller andra oförutsedda händelser.',
  },
  {
    title: '6. Betalning',
    text: 'Betalning för däckhotell sker en gång per säsong.',
  },
  {
    title: '7. Avtalstid och uppsägning',
    text: 'Avtalet gäller per säsong och förnyas automatiskt om det inte sägs upp av kunden.',
  },
  {
    title: '8. Övrigt',
    text: 'Verkstaden förbehåller sig rätten att ändra villkoren. Gällande villkor finns alltid tillgängliga på hemsidan.',
  },
];

export default function DackhotellPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="dack-hero" aria-labelledby="dack-hero-heading">
        <div className="dack-img-container">
          <Image
            src="/images/tire-hotel/dack-bild.jpg"
            alt="Däck och fälgar staplade i ett modernt däckhotell"
            fill
            priority
            quality={90}
            sizes="100vw"
            style={{ objectFit: 'cover' }}
          />
          <div className="dack-hero-overlay" aria-hidden="true" />
          <div className="dack-hotell-text">
            <div className="dack-hotell-title">
              <h1 id="dack-hero-heading">Däckhotell</h1>
              <p className="dack-subtitle">– trygg förvaring hos Bo &amp; Jimmys Bilverkstad</p>
            </div>
            <p>
              Slipp krånglet med att bära, lagra och hålla ordning på dina däck. På vårt däckhotell
              förvaras dina hjul säkert tills det är dags för nästa säsongsskifte. Vi tvättar både
              däck och fälgar innan förvaring, så att de är rena och klara vid montering.
            </p>
            <p className="dack-price">
              Pris: <strong>1 699 kr</strong> per säsong (inkl. hjultvätt och förvaring).
              En enkel och bekväm lösning för dig och din bil.
            </p>
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="dack-steps-section" aria-labelledby="dack-steps-heading">
        <h2 id="dack-steps-heading" className="dack-steps-title">Så här fungerar det</h2>
        <ol className="four-boxes" role="list">
          {steps.map((step, index) => (
            <li key={index} className="dack-box">
              <Image
                src={step.img}
                alt=""
                aria-hidden="true"
                width={80}
                height={80}
                className="dack-box-icon"
              />
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* Villkor Section */}
      <section className="villkor-section" aria-labelledby="villkor-heading">
        <div className="villkor-inner">
          <h2 id="villkor-heading">Villkor för däckhotell</h2>
          <ol className="villkor-list">
            {villkor.map((v, i) => (
              <li key={i}>
                <p className="villkor-title">{v.title}</p>
                <p className="villkor-info">{v.text}</p>
              </li>
            ))}
          </ol>
          <p className="villkor-footer-note">
            Har du frågor om våra villkor?{' '}
            <Link href="/contact">Kontakta oss</Link>.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="dack-cta-section" aria-labelledby="dack-cta-heading">
        <h2 id="dack-cta-heading">Redo att boka däckhotell?</h2>
        <p>Kontakta oss eller skicka en serviceförfrågan så hjälper vi dig.</p>
        <div className="dack-cta-buttons">
          <Link href="/booking" className="dack-cta-primary">
            Skicka serviceförfrågan
          </Link>
          <Link href="/contact" className="dack-cta-secondary">
            Kontakta oss
          </Link>
        </div>
      </section>
    </>
  );
}