export interface CarSection {
  id: string;
  heading: string;
  anchorId: string;
  imageSrc: string;
  imageAlt: string;
  intro: string;
  offerTitle: string;
  offers: string[];
  closing: string;
}

export interface CarMake {
  id: string;
  label: string;
  heroImage: string;
  heroAlt: string;
  tagline: string;
  sections: CarSection[];
}

export const CAR_MAKES_DATA: CarMake[] = [
  {
    id: 'bmw',
    label: 'BMW',
    heroImage: '/images/car-selection/bmw-drive-alternative.jpg',
    heroAlt: 'BMW på väg',
    tagline: 'Specialiserad service och reparation av BMW.',
    sections: [
      {
        id: 'bmw-service',
        heading: 'BMW Service',
        anchorId: 'bmw-section',
        imageSrc: '/images/service-images/bmw-service-img.jpg',
        imageAlt: 'BMW service hos Bo & Jimmy',
        intro: 'Bo & Jimmy Bilservice är en fristående specialist med över 40 års erfarenhet av BMW. Vi har samlat bred kunskap och specialverktyg för BMW-modeller från 80-talet och framåt.',
        offerTitle: 'Vad vi erbjuder',
        offers: [
          'Standardservice för alla BMW-modeller',
          'Avancerad drivlinjeservice, inklusive växellåda, fördelningslåda och differentialer',
          'Reparationer och renoveringar, exempelvis kamkedjebyte, topplocksrenovering och renovering av fram- och bakvagn',
          'Kompletta åtgärder för att hålla bilen i toppskick',
          'Endast originaldelar eller delar av motsvarande OEM-standard',
          'Motul som förstahandsval vid oljebyten',
        ],
        closing: 'Vi ser till att din BMW behåller känslan av en ny bil och maximal körglädje.',
      },
      {
        id: 'alpina-service',
        heading: 'ALPINA Service',
        anchorId: 'alpina-section',
        imageSrc: '/images/service-images/alpina-motor.jpg',
        imageAlt: 'Alpina hos Bo & Jimmy',
        intro: 'Som fristående BMW-verkstad har vi mångårig erfarenhet av exklusiva Alpina-modeller – en förädlad version av BMW som kräver extra precision och kunskap.',
        offerTitle: 'Varför välja oss för Alpina-service?',
        offers: [
          'Djup expertis om Alpinas unika förädling av BMW',
          'Specialverktyg och utbildning som matchar modellernas tekniska krav',
          'Erfarenhet från många Alpina-projekt genom åren',
          'Service och reparationer med OEM-/Alpina-standard',
        ],
        closing: 'Vi bevarar din Alpinas prestanda, exklusivitet och känsla – precis som tillverkaren avsett.',
      },
      {
        id: 'bmw-m-service',
        heading: 'BMW M Service',
        anchorId: 'bmw-m-section',
        imageSrc: '/images/service-images/bmw-m-service-img.png',
        imageAlt: 'BMW M service',
        intro: 'BMW M-bilar är skapade för att leverera motorsportskänsla på vägen och därför kräver de också specialistkompetens.',
        offerTitle: 'Vår M-expertis omfattar',
        offers: [
          'Djup kunskap om M-modellernas specifika prestanda',
          'Extra service för bilar som körs på bana eller högpresterande körning',
          'Service av växellåda, fördelningslåda, differentialer samt tvättning och kontroll av kylkanaler',
          'Diagnos och uppdateringar med tillverkarens originalverktyg och elektronisk servicebok',
          'Specialverktyg och utbildning för modellernas tekniska krav',
          'Oljor: Motul eller original',
        ],
        closing: 'Vi säkerställer att din BMW M behåller maximal prestanda, precision och körglädje.',
      },
      {
        id: 'bmw-i-service',
        heading: 'BMW i Service',
        anchorId: 'bmw-i-section',
        imageSrc: '/images/service-images/bmw-i-service-img.jpeg',
        imageAlt: 'BMW i elbil service',
        intro: 'Vi på Bo & Jimmy Bilservice har utbildad personal inom högvoltssystem och godkänd skyddsutrustning. Vi följer alltid tillverkarens instruktioner och erbjuder service och reparationer för alla elbilar förutom cellbyten i HV-batterier.',
        offerTitle: 'Varför välja oss?',
        offers: [
          'Djup expertis om BMW-i:s högvoltssystem och eldrivlinor',
          'Specialverktyg och utbildning för modellernas tekniska krav',
          'Full service och reparationer enligt BMW-i standard',
          'Regelbundna fordonskontroller för att förebygga slitage',
          'Kontroll av däck och hjulinställning för säkerhet och räckvidd',
          'Originaldelar eller delar av motsvarande kvalitet',
        ],
        closing: 'Vi säkerställer att din BMW-i behåller tyst komfort, hög prestanda och maximal räckvidd.',
      },
    ],
  },
  {
    id: 'mini',
    label: 'MINI',
    heroImage: '/images/car-selection/mini-cooper-drive.jpg',
    heroAlt: 'MINI Cooper på väg',
    tagline: 'Specialiserad service och reparation av MINI.',
    sections: [
      {
        id: 'mini-service',
        heading: 'MINI Service',
        anchorId: 'mini-section',
        imageSrc: '/images/service-images/mini-motor.jpg',
        imageAlt: 'MINI service hos Bo & Jimmy',
        intro: 'Vi är fristående MINI-specialister med över 40 års erfarenhet. Vårt fokus är att bevara den unika "gokart-känslan" som gör MINI så omtyckta.',
        offerTitle: 'Vad vi erbjuder',
        offers: [
          'Djup förståelse för MINIs unika konstruktion och körkänsla',
          'Avancerad drivlinjeservice, inklusive växellåda, fördelningslåda och differentialer',
          'Reparationer och renoveringar, exempelvis kamkedjebyte och topplocksrenovering',
          'Service och reparationer enligt tillverkarens riktlinjer',
          'Originaldelar eller delar av motsvarande kvalitet, med Motul som förstahandsval för oljor',
        ],
        closing: 'Hos Bo & Jimmy Bilservice får din MINI den omsorg och precisionsservice den förtjänar – alltid med fokus på körglädje, hållbarhet och originalkänsla.',
      },
    ],
  },
  {
    id: 'tesla',
    label: 'TESLA',
    heroImage: '/images/car-selection/tesla-drive-alternative1.jpg',
    heroAlt: 'Tesla på väg',
    tagline: 'Specialiserad service och reparation av Tesla.',
    sections: [
      {
        id: 'tesla-service',
        heading: 'TESLA Service',
        anchorId: 'tesla-section',
        imageSrc: '/images/service-images/tesla-service.jpg',
        imageAlt: 'Tesla service hos Bo & Jimmy',
        intro: 'Vi på Bo & Jimmy Bilservice har tagit steget att bli fristående Tesla-reparatörer, med fokus på innovation, säkerhet och prestanda.',
        offerTitle: 'Vad vi erbjuder',
        offers: [
          'God kännedom för Teslas eldrivlinor och system',
          'Service och reparationer enligt Teslas riktlinjer',
          'Diagnos och programmering med Teslas original-Toolbox',
          'Kontroller och felsökning av både låg- och högvoltsystem',
          'Mekaniska reparationer och komponentbyten',
          'Vi använder enbart originaldelar och följer tillverkarens exakta anvisningar',
        ],
        closing: 'Vi ser till att din Tesla behåller sin prestanda, säkerhet och komfort – precis som tillverkaren avsett.',
      },
    ],
  },
  {
    id: 'vag',
    label: 'VAG',
    heroImage: '/images/car-selection/vag-drive.jpg',
    heroAlt: 'Volkswagen på väg',
    tagline: 'Specialiserad service och reparation av VAG.',
    sections: [
      {
        id: 'vag-service',
        heading: 'VAG Service',
        anchorId: 'vw-section',
        imageSrc: '/images/service-images/vag-service-img.jpeg',
        imageAlt: 'VAG service hos Bo & Jimmy',
        intro: 'År 2012 beslutade grundarna av Bo & Jimmy Bilservice att bredda sin expertis och erbjuda service för fler tyska bilmärken. Vi har sedan dess specialiserat oss på VAG-koncernen och utför all service och reparationer – förutom lack och plåt.',
        offerTitle: 'Vad vi erbjuder',
        offers: [
          'Full service och reparationer med fokus på kvalitet och pålitlighet',
          'Digital registrering i tillverkarens servicebok för fullständig dokumentation',
          'Originaldelar eller delar av motsvarande kvalitet och Motul-oljor',
        ],
        closing: 'Vi säkerställer att din Volkswagen håller prestanda, pålitlighet och körglädje.',
      },
      {
        id: 'audi-rs-service',
        heading: 'AUDI RS Service',
        anchorId: 'audi-rs-section',
        imageSrc: '',
        imageAlt: '',
        intro: 'Kör du en Audi RS? Då har du kommit rätt! På Bo & Jimmy Bilservice har vi lång erfarenhet av dessa prestandabilar och erbjuder service och reparationer enligt tillverkarens specifikationer.',
        offerTitle: 'Varför välja oss?',
        offers: [
          'Gedigen kunskap om Audi RS och deras högprestandasystem',
          'Alla serviceåtgärder registreras digitalt i Audis originalserviceplan',
          'Originaldelar eller RS-godkända komponenter används alltid',
        ],
        closing: 'Vi tar hand om din Audi RS så att den fortsätter leverera kraft, kontroll och körupplevelse på topp.',
      },
    ],
  },
];