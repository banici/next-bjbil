import VideoHero from './components/VideoHero/VideoHero';
import Image from 'next/image';
import Link from 'next/link';
import './page.css';
import PresentationBoxes from './components/PresentationBoxes/PresentationBoxes';
import { presentationBoxes } from './components/PresentationBoxes/PresentationUtil';

export default function HomePage() {
  return (
    <>
      {/* Video Hero Section */}
      <section className="page-section no-padding slider">
        <div className="container full-width">
          <div className="main-slider">
            <VideoHero />
          </div>
        </div>
        <hr className="transparent" />
      </section>

      {/* Welcome Section */}
      <section className="page-section" id="page-section">
        <div className="sticky-dack">
          <Link href="/dack-hotell">
            <Image 
              src="/icons/dack-hotell.png" 
              alt="Däckhotell - Säker förvaring av dina däck"
              width={120}
              height={120}
            />
          </Link>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="thumbnail no-border no-padding thumbnail-banner">
                <div id="welcome-to-title">
                  <h1>Välkommen till</h1>
                </div>
                <h2 id="index-title-name" className="text-center">
                  Bo & Jimmy
                </h2>
                <h2 id="index-title-name" className="text-center">
                  Bilservice AB
                </h2>
                <br />
                <p id="main-title-undertext">
                  Vi har servat bilar i över 40 år - med kvalitet, erfarenhet och omtanke.
                </p>
                <br />
                <br />
                <p id="intro-description-index">
                  Bo & Jimmy's Bilservice är en specialiserad bilverkstad med över 40 års 
                  erfarenhet av service och reparationer, inriktade på BMW, MINI, TESLA och VAG. 
                  Vi erbjuder ett brett utbud av tjänster, inklusive service och reparation av bilar, 
                  styling och tuning för att optimera prestanda, samt däckhotell för att säkra däck 
                  under säsongsbyte. Dessutom har vi en omfattande reservdelsförsäljning med ett stort 
                  lager av både nya och begagnade delar, inklusive tillbehör för trimning och styling. 
                  Vårt fokus på kvalitet och kundnöjdhet gör oss till det självklara valet för bilägare 
                  som söker expertis och pålitlighet. Besök oss i Mölndal för att uppleva skillnaden!
                </p>
              </div>
            </div>
          </div>
        </div>
        <hr className="transparent" />
      </section>
      {presentationBoxes.map((box, index) => (
        <PresentationBoxes
          key={index}
          boxInfo={box}
          reverse={box.reverse}
        />
      ))}
               
      <hr className="transparent" />

      {/* Car Makes Section */}
      <section className="page-section">
        <div className="carmake-container">
          <h2 className="car-expertise-title">Serva din bil hos oss</h2>
          <br />
          <div className="car-btn-bread-wrapper">
            <div className="car-btn-bread-box">
              <p id="car-btn-bread">
                Vi är en fristående verkstad och specialiserar oss på flera välkända bilmärken. 
                Vi använder alltid reservdelar och utrustning som uppfyller eller motsvarar 
                originalstandard. Det ger dig trygghet, kvalitet och bibehållet andrahandsvärde.
              </p>
            </div>
          </div>
          <br />
          <Link href="/car-make-selection" id="carmake-button">
            Våra bilmärken
          </Link>
          <hr className="transparent" />
        </div>
      </section>

      {/* Oil Section */}
      <section className="page-section">
        <div className="oil-container">
          <div className="oil-wrapper">
            <div className="oil-title-container">
              <h2 className="post-title" id="oil-title">
                <strong><br />Kvalitetsolja till din bil</strong>
              </h2>
              <div id="oil-title-line" aria-hidden="true"></div>
              <br />
            </div>
            <p>
              Vi använder MOTUL och OE motorolja – oljor av hög kvalitet som är anpassade för 
              just din bil. Du kan även köpa dessa i konsumentförpackningar om du vill fylla 
              på själv mellan servicetillfällena.
            </p>
            <p>
              Behöver du service, reparation, reservdelar till din BMW-MINI-TESLA eller VAG 
              är du välkommen till oss!
            </p>
            <br />
            <p>
              Vi finns i Göteborg, Mölndal.<br />
              Kontakta oss – vi hjälper dig gärna med service, reparation eller reservdelar 
              till din bil.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}