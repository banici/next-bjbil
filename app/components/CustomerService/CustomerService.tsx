'use client';

import { useState } from 'react';
import Link from 'next/link';
import './customerService.css';

type Tab = 'contact' | 'faq' | 'warranty';

const FAQ_ITEMS = [
  { q: 'Utför ni plåtarbeten och billackering?', a: 'Nej, vi utför tyvärr inte plåtarbeten eller billackering. Vi fokuserar på andra tjänster inom bilservice och reparationer.' },
  { q: 'Arbetar ni med alla bilmärken?', a: 'Nej, vi servar och reparerar BMW, Tesla, MINI och VW, både bensin, diesel, el och hybrid.' },
  { q: 'Hur ofta bör jag serva min bil?', a: 'Vi rekommenderar service varje 1 500–2 000 mil eller en gång om året, beroende på vad som kommer först. Se din bils servicebok för tillverkarens rekommendationer.' },
  { q: 'Vad ingår i en bilservice?', a: 'En standardservice inkluderar kontroll och byte av olja, oljefilter, luftfilter, kontroll av bromsar, däck, belysning och andra viktiga funktioner.' },
  { q: 'Hur lång tid tar en bilservice?', a: 'En normal service tar mellan 1,5 och 3 timmar, beroende på bilmodell och typ av service.' },
  { q: 'Behöver jag boka tid i förväg?', a: 'Ja, vi rekommenderar att du bokar tid i förväg för att säkerställa tillgänglighet. Akuta reparationer kan vi ofta hantera snabbare vid drop-in.' },
  { q: 'Kan jag lämna bilen över natten?', a: 'Absolut, vi har möjlighet att ta emot bilar för övernattning. Informera oss gärna i förväg så vi kan ordna med parkering och säkerhet.' },
  { q: 'Erbjuder ni lånebil?', a: 'Ja, vi har lånebilar tillgängliga mot en mindre avgift. Boka gärna i samband med att du bokar service.' },
  { q: 'Vad kostar en bilservice?', a: 'Priset varierar beroende på bilmodell och typ av service. En basservice börjar från cirka 1 500 kr. Kontakta oss för en exakt offert.' },
  { q: 'Behåller jag min nybilsgaranti om jag servar hos er?', a: 'Ja, vi följer tillverkarens serviceprogram och använder godkända delar, på så vis påverkas inte din nybilsgaranti.' },
  { q: 'Får jag ett serviceprotokoll efter utförd service?', a: 'Ja, du får ett fullständigt serviceprotokoll samt stämpel i serviceboken om det är aktuellt.' },
  { q: 'Vad händer om ni hittar fler fel under servicen?', a: 'Vi kontaktar dig alltid innan vi utför några extra åtgärder. Du får en offert och kan ta ställning innan vi går vidare.' },
  { q: 'Kan jag vänta på plats medan bilen servas?', a: 'Ja, vi har ett väntrum med kaffe och Wi-Fi om du vill vänta medan arbetet utförs.' },
];

const WARRANTY_SECTIONS = [
  { title: '1. Allmänt', content: 'Med konsument menas i dessa bestämmelser en fysisk person som beställer en tjänst för ändamål som huvudsakligen faller utanför näringsverksamhet. För konsumenter gäller nedan av Konsumentverket/KO godkända villkor. Konsumenter omfattas av konsumenttjänstlagen (1985:716) (KTjL). Med näringsidkare menas en fysisk eller juridisk person som beställer en tjänst för ändamål som har samband med den egna näringsverksamheten. Med kund menas såväl konsument som näringsidkare.' },
  { title: '2. Beställning av reparation', content: 'En skriftlig bekräftelse av uppdraget ska lämnas till kunden om denne inte avstår från att få en sådan och detta har noterats på bekräftelsen/arbetsordern.' },
  { title: '3. Prisuppgift', content: 'Verkstaden ska lämna en skriftlig prisuppgift för hela uppdraget om uppdraget beräknas kosta 2 000 kr eller mer. Om en ungefärlig prisuppgift lämnas får den inte överskridas med mer än 15 %, dock högst 2 000 kr, om inte någon annan prisgräns har avtalats.' },
  { title: '4. Avrådande', content: 'Verkstaden är skyldig att avråda från de uppdrag som inte är till rimlig nytta för kunden, t.ex. när priset för reparationen överstiger hälften av fordonets marknadsvärde.' },
  { title: '5. Tilläggsarbete', content: 'Om det uppstår behov av att utföra ett arbete som inte omfattas av det ursprungliga uppdraget ska kundens anvisningar inhämtas. För ett tilläggsarbete har verkstaden rätt till ett pristillägg som är skäligt, normalt högst 15 % av det ursprungligen avtalade priset, dock högst 3 000 kr.' },
  { title: '6. Leverantid', content: 'För standardbetonade reparationer ska en tidpunkt för leveransen anges redan vid beställningen. Vid en eventuell leveransförsening ska kunden underrättas och en ny leveranstid avtalas.' },
  { title: '7. Leveransförsening', content: 'Om ett uppdrag inte påbörjas, framskrider eller avslutas inom överenskommen tid, och detta inte beror på förhållande på kundens sida, är verkstaden ansvarig för förseningen.' },
  { title: '8. Avbeställning', content: 'En konsument har rätt att avbeställa ett uppdrag innan det avslutas mot en ersättning till verkstaden beräknad enligt 42 § KTjL.' },
  { title: '9. Kunden uteblir', content: 'Om kunden uteblir från en avtalad tid utan att ha avbeställt kan han bli skyldig att betala en avbeställningskostnad på 1 000 kr förutsatt att verkstaden i förväg lämnat tydlig information om denna kostnad.' },
  { title: '10. Betalning av reparation', content: 'Om inte något annat följer av avtalet, är kunden skyldig att betala kontant sedan verkstaden har utfört tjänsten, dvs. i regel när bilen avhämtas. Betalar inte kunden vid avhämtningen får verkstaden hålla kvar fordonet till dess betalning sker eller godtagbar säkerhet ställts.' },
  { title: '11. Kostnad för förvaring', content: 'Förvaringskostnad debiteras fr.o.m. den femte dagen om ett preciserat reparationsuppdrag inte lämnats inom fyra arbetsdagar, samt fr.o.m. dagen efter överenskommen leveransdag om kunden inte hämtar fordonet.' },
  { title: '12. Utbytta delar', content: 'Utbytta delar och tillbehör ska hållas tillgängliga för kunden vid leveransen. Verkstaden har ingen skyldighet att förvara sådana delar sedan fordonet har avhämtats.' },
  { title: '13. Reklamation', content: 'Reklamation måste göras inom skälig tid efter att felet upptäcktes — alltid inom två månader. Reklamationen får dock inte ske senare än tre år efter att uppdraget avslutades. Näringsidkare ska reklamera inom 14 dagar och senast ett år efter avslutat uppdrag.' },
  { title: '14. Påföljder vid fel', content: 'Verkstaden åtar sig att kostnadsfritt avhjälpa fel i utfört arbete. Konsumenten ska normalt inte behöva acceptera mer än två avhjälpningsförsök för samma fel — därefter har han rätt till prisavdrag eller hävning.' },
  { title: '15. Verkstadens ansvar för fordonet', content: 'Verkstaden ansvarar för att fordonet inte skadas medan det är inlämnat. Ansvaret övergår på verkstaden när fordonet ställts på anvisad plats och nycklarna överlämnats.' },
  { title: '16. Skadestånd', content: 'En konsument har rätt till ersättning för skada som uppstått på grund av fel eller dröjsmål. Ersättning utgår dock aldrig för förlust i näringsverksamhet.' },
  { title: '17. Garanti', content: 'Verkstaden garanterar resultatet av arbetet under 12 månader eller 1 000 mil efter avslutat uppdrag, beroende på vad som inträffar först. Garantin gäller inte vid olyckshändelse, vanvård eller onormalt brukande.' },
  { title: '18. Tvist', content: 'Om en tvist uppstår och parterna inte kan lösa den kan en konsument vända sig till kommunal konsumentvägledning eller Allmänna reklamationsnämnden (ARN). Tvister kan även prövas av allmän domstol. Vårt företag följer alltid Reklamationsnämndens beslut.' },
];

function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIndex(prev => prev === i ? null : i);

  return (
    <div className="faq-list" role="list">
      {FAQ_ITEMS.map((item, i) => (
        <div key={i} className="faq-item" role="listitem">
          <button
            className={`faq-question ${openIndex === i ? 'open' : ''}`}
            onClick={() => toggle(i)}
            aria-expanded={openIndex === i}
            aria-controls={`faq-answer-${i}`}
            id={`faq-btn-${i}`}
          >
            <span>{item.q}</span>
            <svg
              className="faq-chevron"
              width="18" height="18"
              viewBox="0 0 18 18"
              fill="none"
              aria-hidden="true"
            >
              <path d="M4 7L9 12L14 7" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <div
            id={`faq-answer-${i}`}
            role="region"
            aria-labelledby={`faq-btn-${i}`}
            className={`faq-answer ${openIndex === i ? 'open' : ''}`}
          >
            <p>{item.a}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

function WarrantyAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const toggle = (i: number) => setOpenIndex(prev => prev === i ? null : i);

  return (
    <div className="faq-list" role="list">
      {WARRANTY_SECTIONS.map((section, i) => (
        <div key={i} className="faq-item" role="listitem">
          <button
            className={`faq-question ${openIndex === i ? 'open' : ''}`}
            onClick={() => toggle(i)}
            aria-expanded={openIndex === i}
            aria-controls={`warranty-answer-${i}`}
            id={`warranty-btn-${i}`}
          >
            <span>{section.title}</span>
            <svg
              className="faq-chevron"
              width="18" height="18"
              viewBox="0 0 18 18"
              fill="none"
              aria-hidden="true"
            >
              <path d="M4 7L9 12L14 7" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <div
            id={`warranty-answer-${i}`}
            role="region"
            aria-labelledby={`warranty-btn-${i}`}
            className={`faq-answer ${openIndex === i ? 'open' : ''}`}
          >
            <p>{section.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function CustomerService() {
  const [activeTab, setActiveTab] = useState<Tab>('contact');

  const tabs: { id: Tab; label: string }[] = [
    { id: 'contact', label: 'Kontakta oss' },
    { id: 'faq', label: 'Vanliga frågor' },
    { id: 'warranty', label: 'Garantier' },
  ];

  return (
    <section className="cs-section" aria-label="Kundtjänst">
      <div className="cs-container">

        {/* Tab nav */}
        <nav className="cs-tabs" aria-label="Kundtjänst kategorier" role="tablist">
          {tabs.map(tab => (
            <button
              key={tab.id}
              role="tab"
              aria-selected={activeTab === tab.id}
              aria-controls={`cs-panel-${tab.id}`}
              id={`cs-tab-${tab.id}`}
              className={`cs-tab-btn ${activeTab === tab.id ? 'active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </nav>

        {/* Panels */}
        <div className="cs-panels">

          {/* Contact */}
          <div
            id="cs-panel-contact"
            role="tabpanel"
            aria-labelledby="cs-tab-contact"
            hidden={activeTab !== 'contact'}
            className="cs-panel"
          >
            <div className="cs-panel-inner">
              <h2>Kontakt</h2>
              <p className="cs-intro">
                Oavsett om du behöver hjälp med bokning, garantiärenden eller rådgivning
                inför service — finns vi här för att hjälpa dig snabbt och smidigt.
              </p>

              <ul className="contact-detail-list" aria-label="Kontaktuppgifter">
                <li>
                  <span className="contact-icon" aria-hidden="true">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24 11.47 11.47 0 003.59.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.47 11.47 0 00.57 3.59 1 1 0 01-.25 1.01l-2.2 2.19z" fill="currentColor"/></svg>
                  </span>
                  <a href="tel:031847529">031 – 84 75 29</a>
                </li>
                <li>
                  <span className="contact-icon" aria-hidden="true">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" fill="currentColor"/></svg>
                  </span>
                  <a href="mailto:bayerische@telia.com">bayerische@telia.com</a>
                </li>
                <li>
                  <span className="contact-icon" aria-hidden="true">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1112 6a2.5 2.5 0 010 5.5z" fill="currentColor"/></svg>
                  </span>
                  
                    <Link href="https://www.google.com/maps/search/?api=1&query=Aminogatan+15E,+431+53+Mölndal"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Aminogatan 15E, 431 53 Mölndal
                  </Link>
                </li>
                <li>
                  <span className="contact-icon" aria-hidden="true">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M12 2a10 10 0 100 20A10 10 0 0012 2zm.5 5v5.25l4.5 2.67-.75 1.23L11 13V7h1.5z" fill="currentColor"/></svg>
                  </span>
                  <span>Mån–Tor: 07:00–17:00</span>
                </li>
                <li>
                  <span className="contact-icon" aria-hidden="true">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M12 2a10 10 0 100 20A10 10 0 0012 2zm.5 5v5.25l4.5 2.67-.75 1.23L11 13V7h1.5z" fill="currentColor"/></svg>
                  </span>
                  <span>Fredag: 07:00–12:00</span>
                </li>
                <li>
                  <span className="contact-icon" aria-hidden="true">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M12 2a10 10 0 100 20A10 10 0 0012 2zm.5 5v5.25l4.5 2.67-.75 1.23L11 13V7h1.5z" fill="currentColor"/></svg>
                  </span>
                  <span>Lördag–Söndag: <strong className="closed-text">Stängt</strong></span>
                </li>
              </ul>

              <div className="contact-cta-row">
                <Link href="/booking" className="cs-cta-primary">
                  Skicka serviceförfrågan
                </Link>
                <a href="tel:031847529" className="cs-cta-secondary">
                  Ring oss direkt
                </a>
              </div>
            </div>
          </div>

          {/* FAQ */}
          <div
            id="cs-panel-faq"
            role="tabpanel"
            aria-labelledby="cs-tab-faq"
            hidden={activeTab !== 'faq'}
            className="cs-panel"
          >
            <div className="cs-panel-inner">
              <h2>Vanliga frågor</h2>
              <p className="cs-intro">
                Här hittar du svar på de frågor vi oftast får. Hittar du inte
                svaret du söker — ring oss gärna.
              </p>
              <FaqAccordion />
            </div>
          </div>

          {/* Warranty */}
          <div
            id="cs-panel-warranty"
            role="tabpanel"
            aria-labelledby="cs-tab-warranty"
            hidden={activeTab !== 'warranty'}
            className="cs-panel"
          >
            <div className="cs-panel-inner">
              <h2>Allmänna verkstadsvillkor</h2>
              <p className="cs-intro">Enligt MRF:s riktlinjer.</p>

              <div className="warranty-highlight" role="note">
                <span aria-hidden="true">🛡</span>
                <p>
                  Vi lämnar garanti på samtliga utförda reparationsarbeten och
                  följer{' '}
                  
                    <Link href="https://www.mrf.se"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mrf-link"
                  >
                    MRF:s riktlinjer
                  </Link>.
                </p>
              </div>

              <WarrantyAccordion />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}