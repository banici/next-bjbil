import type { Metadata } from "next";
import "./globals.css";
import Footer from "./components/Footer/Footer";
import HeaderWrapper from "./components/Header/HeaderWrapper";

// ---------------------------------------------------------------------------
// metadataBase is REQUIRED for Next.js to resolve og:image and canonical URLs.
// All relative URLs in `metadata` objects across the app will be prefixed with this.
// ---------------------------------------------------------------------------
export const metadata: Metadata = {
  metadataBase: new URL("https://bjbil.se"),

  // `title.template` appends the site name to every child page's title automatically.
  // `title.default` is the fallback used when a page exports no title of its own.
  title: {
    template: "%s | Bo & Jimmy Bilservice AB",
    default:
      "Bilverkstad Mölndal – BMW, MINI, Tesla & VAG | Bo & Jimmy Bilservice AB",
  },
  description:
    "Specialiserad bilverkstad i Mölndal sedan 1982. Vi servar BMW, MINI, Tesla och VAG med över 40 års erfarenhet. Boka service, reparation eller däckhotell – ring 031-84 75 29.",

  // keywords on the root layout act as a global fallback;
  // each page should override with its own focused keyword list.
  keywords: [
    "bilverkstad Mölndal",
    "bilverkstad Göteborg",
    "BMW service",
    "MINI service",
    "Tesla service",
    "VAG service",
    "Alpina service",
    "VW service",
    "däckhotell Mölndal",
    "elbilsverkstad",
    "Bo Jimmy Bilservice",
  ],

  authors: [{ name: "Bo & Jimmy Bilservice AB", url: "https://bjbil.se" }],

  // Proper robots object (string form works but this is more explicit and
  // allows googleBot-specific rules).
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Open Graph defaults – individual pages override title/description/url.
  openGraph: {
    siteName: "Bo & Jimmy Bilservice AB",
    locale: "sv_SE",
    type: "website",
    // Place an OG image (1200×630 px recommended) at /public/images/og-default.jpg
    // and uncomment the lines below. Every page that doesn't supply its own
    // openGraph.images will fall back to this one.
    // images: [
    //   {
    //     url: "/images/og-default.jpg",
    //     width: 1200,
    //     height: 630,
    //     alt: "Bo & Jimmy Bilservice AB – Bilverkstad i Mölndal sedan 1982",
    //   },
    // ],
  },

  // Verifies ownership in Bing Webmaster Tools (value carried over from old site).
  verification: {
    other: {
      "msvalidate.01": "276EF30B2B091D0BA2D745C373EA15C8",
    },
  },
};

// ---------------------------------------------------------------------------
// JSON-LD – LocalBusiness / AutoRepair structured data.
// Placed in <head> via <script> in the root layout so it appears on every page.
// This is the single biggest local SEO lever for Google Maps / rich results.
// ---------------------------------------------------------------------------
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AutoRepair",
  name: "Bo & Jimmy Bilservice AB",
  alternateName: "BJ Bil",
  description:
    "Specialiserad bilverkstad i Mölndal sedan 1982. Vi servar BMW, MINI, Tesla och VAG med garanti på utfört arbete.",
  url: "https://bjbil.se",
  telephone: "+46-31-847529",
  email: "bayerische@telia.com",
  foundingDate: "1982",
  image: "https://bjbil.se/images/og-default.jpg", // update when image exists
  logo: "https://bjbil.se/images/boJimmyLoggaSVG.svg",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Aminogatan 15E",
    addressLocality: "Mölndal",
    postalCode: "431 53",
    addressCountry: "SE",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 57.6404,
    longitude: 12.0069,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday"],
      opens: "07:00",
      closes: "17:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Friday",
      opens: "07:00",
      closes: "12:00",
    },
  ],
  priceRange: "$$",
  currenciesAccepted: "SEK",
  paymentAccepted: "Cash, Credit Card, Invoice",
  areaServed: [
    { "@type": "City", name: "Mölndal" },
    { "@type": "City", name: "Göteborg" },
  ],
  sameAs: ["https://www.instagram.com/bojimmybilservice/"],
  // Services offered – helps Google understand the breadth of your offering.
  makesOffer: [
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Bilservice & underhåll" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "BMW service" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "MINI service" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Tesla service" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "VAG service" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Alpina service" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Elbilsverkstad" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "AC-service" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Fordonsdiagnos" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Hjulinställning & däck" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Däckhotell" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Mjukvaruuppdatering" } },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="sv" data-scroll-behavior="smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <HeaderWrapper />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}