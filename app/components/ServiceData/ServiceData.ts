export interface ServiceData {
  slug: string;
  title: string;
  iconSrc: string;
  imageSrc: string;
  imageAlt: string;
  heroQuestion: string;
  description: string;
  metaDescription: string;
  keywords: string[];
}

export const SERVICES: ServiceData[] = [
  {
    slug: 'service-underhall',
    title: 'Service & Underhåll',
    iconSrc: '/icons/services/ikon-service.png',
    imageSrc: '/images/service-banner/service-image-bjbil.jpg',
    imageAlt: 'Service och underhåll av bil hos Bo & Jimmy',
    heroQuestion: 'Har servicelampan tänts eller har du fått en servicepåminnelse?',
    description: `Det betyder att bilen behöver underhåll enligt tillverkarens schema. Vi utför service på BMW, Tesla, Mini Cooper och Volkswagen enligt respektive tillverkares riktlinjer och använder utrustning som är anpassad för varje märke. Arbetet görs med originaltillverkarnas diagnosverktyg och specialverktyg för att säkerställa att bilen får exakt de kontroller och åtgärder som krävs. Efter servicen uppdaterar vi bilens historik både digitalt och i tillverkarens officiella databas där det är möjligt. Vi arbetar alltid noggrant och fackmässigt för att bilen ska få rätt service vid rätt tidpunkt – med full respekt för tillverkarens krav och rekommendationer.`,
    metaDescription:
      'Service och underhåll av BMW, Tesla, MINI och VW i Mölndal. Vi följer tillverkarens serviceprogram med originalverktyg och uppdaterar bilens servicehistorik. Boka hos Bo & Jimmy Bilservice.',
    keywords: [
      'bilservice Mölndal',
      'BMW service',
      'Tesla service',
      'MINI service',
      'VW service',
      'service och underhåll',
      'servicelampa',
      'bilunderhåll Göteborg',
    ],
  },
  {
    slug: 'fordonsdiagnos',
    title: 'Fordonsdiagnos',
    iconSrc: '/icons/services/ikon-diagnos.png',
    imageSrc: '/images/service-banner/service-diagnos-fordon.jpg',
    imageAlt: 'Fordonsdiagnos och felsökning hos Bo & Jimmy',
    heroQuestion: 'Har motorlampan tänts eller känns bilen svagare i accelerationen?',
    description: `En tänd varningslampa eller förändrad motorgång kan tyda på fel i bilens system som behöver kontrolleras. Med modern diagnosutrustning, inklusive originaltillverkarens system när det är tillgängligt, felsöker vi bilen på ett säkert och effektivt sätt. Vi läser av felkoder, analyserar systemdata och tar fram en tydlig bild av vad som behöver åtgärdas. Du får en klar och begriplig förklaring, tillsammans med rekommendationer för att återställa bilens funktion och prestanda.`,
    metaDescription:
      'Fordonsdiagnos och felsökning i Mölndal. Vi läser felkoder med originaltillverkarens diagnosutrustning och ger tydliga åtgärdsrekommendationer. Motorlampa tänd? Ring 031-84 75 29.',
    keywords: [
      'fordonsdiagnos Mölndal',
      'felsökning bil',
      'motorlampa tänd',
      'felkoder bil',
      'OBD diagnos',
      'bildiagnos Göteborg',
      'varningslampa bil',
    ],
  },
  {
    slug: 'mjukvara',
    title: 'Mjukvara',
    iconSrc: '/icons/services/ikon-mjukvara.png',
    imageSrc: '/images/service-banner/service-high-voltage.jpg',
    imageAlt: 'Mjukvaruuppdatering av bil hos Bo & Jimmy',
    heroQuestion:
      'Upplever du att bilen beter sig annorlunda eller misstänker att mjukvaran behöver uppdateras?',
    description: `Vi utför mjukvaruuppdateringar med originaltillverkarens verktyg och ser till att bilen är uppdaterad enligt gällande specifikationer. Rätt uppdateringar kan förbättra funktioner, stabilitet och driftsäkerhet. Som fristående specialist kan vi även erbjuda anpassade mjukvarulösningar, såsom motoroptimering och andra godkända modifieringar där det är passande och säkert. Vi hjälper även till med tillverkning och programmering av bilnycklar för en komplett tjänst.`,
    metaDescription:
      'Mjukvaruuppdatering och bilnyckelprogrammering i Mölndal. Originaltillverkarens verktyg för BMW, Tesla, MINI och VW. Motoroptimering och godkända modifieringar.',
    keywords: [
      'mjukvaruuppdatering bil',
      'bilnyckel programmering',
      'ECU uppdatering',
      'motoroptimering',
      'BMW mjukvara',
      'Tesla uppdatering',
      'bilmjukvara Mölndal',
    ],
  },
  {
    slug: 'elbilsverkstad',
    title: 'Elbilsverkstad',
    iconSrc: '/icons/services/ikon-high-voltage.png',
    imageSrc: '/images/service-banner/service-high-voltage.jpg',
    imageAlt: 'Elbilsverkstad och hybridservice hos Bo & Jimmy',
    heroQuestion:
      'Kör du elbil och vill vara säker på att verkstaden har rätt utbildning och utrustning?',
    description: `Vår personal är certifierad inom högvoltsteknik (HVT) och Elektrisk Informerad Person (EIP), vilket gör oss behöriga att arbeta med både elbilar och hybridfordon. Vi följer alltid tillverkarens riktlinjer och använder specialverktyg anpassade för högvoltsystem. Det säkerställer att allt arbete utförs korrekt, säkert och enligt branschens krav – från service och felsökning till underhåll av batteri- och elsystem.`,
    metaDescription:
      'Certifierad elbilsverkstad i Mölndal. HVT- och EIP-utbildad personal för service av Tesla, BMW i-serien och hybridfordon. Säker hantering av högvoltsystem.',
    keywords: [
      'elbilsverkstad Mölndal',
      'elbilsverkstad Göteborg',
      'Tesla service',
      'hybridservice',
      'HVT certifierad verkstad',
      'högvoltsystem',
      'BMW elbil service',
      'elbil reparation',
    ],
  },
  {
    slug: 'ac-service',
    title: 'AC Service',
    iconSrc: '/icons/services/ikon-ac.png',
    imageSrc: '/images/service-banner/service-ac-service.jpg',
    imageAlt: 'AC-service och klimatanläggning hos Bo & Jimmy',
    heroQuestion: 'Har AC:n börjat kyla sämre eller känns luften inte lika sval som tidigare?',
    description: `En AC-service rekommenderas normalt vartannat år eftersom systemet tappar köldmedium med tiden. Vi utför AC-service med modern utrustning och certifierad personal för att säkerställa att klimatanläggningen fungerar som den ska. Vi kontrollerar tryck, temperaturer och täthet, gör läcksökning och fyller på köldmedium vid behov. Det ger en effektiv och driftsäker AC som fungerar genom hela säsongen.`,
    metaDescription:
      'AC-service och klimatanläggning i Mölndal. Certifierad personal utför läcksökning, tryckkontroll och påfyllning av köldmedium. Fungerar för BMW, MINI, Tesla och VW.',
    keywords: [
      'AC service bil',
      'klimatanläggning bil',
      'AC service Mölndal',
      'köldmedium påfyllning',
      'klimatsystem bil',
      'AC kyler dåligt',
      'bilklimat Göteborg',
    ],
  },
  {
    slug: 'hjulinstallning-dack',
    title: 'Hjulinställning & Däck',
    iconSrc: '/icons/services/ikon-dack.png',
    imageSrc: '/images/service-banner/service-dack-missljud.jpg',
    imageAlt: 'Hjulinställning och däckbyte hos Bo & Jimmy',
    heroQuestion: 'Upplever du missljud, ojämnt däckslitage eller att bilen drar åt sidan?',
    description: `Moderna bilar har komplexa chassin och avancerade säkerhetssystem, vilket gör att även mindre avvikelser kan påverka väghållningen. När ljud uppstår eller bilen känns instabil kan orsaken vara svår att lokalisera utan rätt utrustning. Vi använder innovativ teknik som Chassi Ear, där mikrofoner placeras på fordonet för att snabbt och exakt hitta ursprunget till missljud och chassiproblem. För hjulinställning, balansering och däckmontering använder vi den senaste utrustningen från Hunter, vilket säkerställer hög precision och ett resultat som förbättrar både komfort och säkerhet. Vi kontrollerar även hjulupphängning och fälgarnas rundhet innan nya däck monteras för att garantera bästa möjliga körupplevelse. Vi erbjuder också däck från flera kända leverantörer och hjälper dig att hitta rätt alternativ för just din bil och körstil.`,
    metaDescription:
      'Hjulinställning, balansering och däckbyte i Mölndal. Hunter-utrustning och Chassi Ear-teknik för exakt diagnos av missljud och ojämnt slitage. Däck från flera leverantörer.',
    keywords: [
      'hjulinställning Mölndal',
      'däckbyte Mölndal',
      'hjulbalansering',
      'missljud bil',
      'bilen drar åt sidan',
      'däck Göteborg',
      'Hunter hjulinställning',
      'ojämnt däckslitage',
    ],
  },
  {
    slug: 'vatgas-rengoring',
    title: 'Vätgas Rengöring',
    iconSrc: '/icons/services/ikon-h2.png',
    imageSrc: '/images/service-banner/DPF-bild.jpg',
    imageAlt: 'Vätgasrengöring Hydrive hos Bo & Jimmy',
    heroQuestion: 'Vill du förbättra motorns prestanda och minska utsläppen?',
    description: `Hydrive är en innovativ vätgasbaserad rengöringsprocess som avlägsnar koluppbyggnad från motorn och avgassystemet utan demontering. Behandlingen kan förbättra bränsleeffektiviteten, minska utsläpp och återställa motorns prestanda. Den är lämplig för bensin-, diesel-, hybrid- och gasfordon. Processen tar cirka 45–60 minuter och utförs medan motorn är igång. Vi rekommenderar behandlingen som ett förebyggande underhåll eller när du märker ökad bränsleförbrukning eller minskad prestanda.`,
    metaDescription:
      'Vätgasrengöring (Hydrive) i Mölndal. Avlägsnar koluppbyggnad från motor och avgassystem utan demontering. Förbättrar prestanda och minskar utsläpp för bensin, diesel och hybrid.',
    keywords: [
      'vätgasrengöring',
      'Hydrive',
      'motorrengöring',
      'koluppbyggnad motor',
      'DPF rengöring',
      'motorprestanda',
      'avgasrengöring',
      'bränsleförbrukning minska',
    ],
  },
];

export function getServiceBySlug(slug: string): ServiceData | undefined {
  return SERVICES.find((s) => s.slug === slug);
}

// Used by generateStaticParams in app/services/[slug]/page.tsx to pre-render
// every service page at build time, improving crawlability and Core Web Vitals.
export function getAllServiceSlugs(): string[] {
  return SERVICES.map((s) => s.slug);
}