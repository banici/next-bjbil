import VideoHero from './components/VideoHero/VideoHero';
import Image from 'next/image';
import Link from 'next/link';
import './page.css';

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

      {/* Innovation Section */}
      <section className="first-page-section">
        <div className="presentation-container">
          <div className="presentation-wrapper">
            {/* Innovativa */}
            <div className="innovation-img">
              <Image 
                src="/images/innovativ.jpg" 
                alt="Innovativ bilverkstad med modern utrustning"
                width={600}
                height={400}
                loading="lazy"
              />
              <div className="inno-container">
                <div className="inno-box">
                  <h2>INNOVATIVA</h2>
                </div>
              </div>
            </div>

            <div className="innovation-container">
              <div className="innovation-wrapper">
                <h3 className="post-title">
                  <strong><br />Smarta lösningar för din bil</strong>
                </h3>
                <div id="title-line" aria-hidden="true"></div>
                <div className="post-excerpt">
                  <p>
                    Vi strävar ständigt efter att hitta nya och smartare lösningar för våra kunder.
                    Med hjälp av modern teknik och avancerad diagnostikutrustning kan vi snabbt 
                    identifiera och lösa problem på ett effektivt sätt. Vår nyfikenhet och vilja 
                    att utvecklas gör att vi alltid ligger steget före – för att din bil ska få 
                    bästa service, varje gång.
                  </p>
                </div>
              </div>
            </div>

            {/* Arbetseffektiva */}
            <div className="effect-wrapper">
              <h3 className="post-title">
                <strong><br />Effektiv service med precision</strong>
              </h3>
              <div id="title-line" aria-hidden="true"></div>
              <div className="post-excerpt">
                <p>
                  Genom åren har vi kontinuerligt utökat vårt lager av reservdelar, vilket gör 
                  att vi har det mesta på plats – särskilt till BMW. Vi håller oss alltid 
                  uppdaterade med den senaste tekniken inom diagnostik och specialverktyg för 
                  att kunna arbeta så effektivt som möjligt. Med fokus på kvalitet, noggrannhet 
                  och effektivitet kan vi erbjuda god service varje gång.
                </p>
              </div>
            </div>

            <div className="effect-img">
              <Image 
                src="/images/arbetseffektiv.jpg" 
                alt="Effektiv bilservice med precision"
                width={600}
                height={400}
                loading="lazy"
              />
              <div className="inno-effect-container">
                <div className="inno-effect-box">
                  <h2>ARBETSEFFEKTIVA</h2>
                </div>
              </div>
            </div>

            {/* Kundfokuserade */}
            <div className="kund_fokus-img">
              <Image 
                src="/images/kund_fokus_farg.png" 
                alt="Kundfokuserad bilverkstad"
                width={600}
                height={400}
                loading="lazy"
              />
              <div className="inno-kund-container">
                <div className="inno-kund-box">
                  <h2>KUNDFOKUSERADE</h2>
                </div>
              </div>
            </div>

            <div className="kund_fokus-container">
              <div className="kund_fokus-wrapper">
                <h3 className="post-title">
                  <strong><br />Personlig service – hela vägen</strong>
                </h3>
                <div id="title-line" aria-hidden="true"></div>
                <div className="post-excerpt">
                  <p>
                    För oss handlar bilservice inte bara om teknik – det handlar om människor.
                    Vi tror på ärlig kommunikation, transparens och personligt bemötande.
                    Oavsett om det gäller en enkel service eller en mer avancerad reparation 
                    ser vi till att du alltid vet vad som görs och varför. Vårt mål är att du 
                    ska känna dig trygg och nöjd varje gång du lämnar in din bil hos oss.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr className="transparent" />
      </section>

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