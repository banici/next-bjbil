import type { Metadata } from "next";
import "./globals.css";
import Footer from "./components/Footer/Footer";
import HeaderWrapper from "./components/Header/HeaderWrapper";

export const metadata: Metadata = {
  title: "Företagsnamn – Hem",
  description: "Hemsida för Företagsnamn – tjänster, kontakt och mer.",
  keywords: ["tjänster", "företag", "kontakt", "om oss"],
  authors: [{ name: "Företagsnamn" }],
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

    const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'AutoRepair',
    name: 'Bo & Jimmy Bilservice AB',
    description: 'Specialiserad bilverkstad för BMW, MINI, TESLA och VAG',
    url: 'https://bjbil.se',
    telephone: '031-84 75 29',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Aminogatan 15E',
      addressLocality: 'Mölndal',
      postalCode: '431 53',
      addressCountry: 'SE',
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday'],
        opens: '07:00',
        closes: '17:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Friday',
        opens: '07:00',
        closes: '12:00',
      },
    ],
    priceRange: '$$',
  };

  return (
    <html lang="sv" data-scroll-behavior="smooth">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <HeaderWrapper />
        <main id="main-content">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}