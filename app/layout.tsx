import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "./footer/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Företagsnamn – Hem",
  description: "Hemsida för Företagsnamn – tjänster, kontakt och mer.",
  keywords: ["tjänster", "företag", "kontakt", "om oss"],
  authors: [{ name: "Företagsnamn" }],
  robots: "index, follow",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
<html lang="sv">
  <body className="antialiased">
    {/* Hoppa till innehållet – AAA requirement */}
    <a 
      href="#content" 
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 
                 bg-white text-black border p-2 rounded"
    >
      Hoppa till huvudinnehåll
    </a>

    <header role="banner" className="p-4 border-b">
      <nav aria-label="Huvudmeny">
        <ul className="flex gap-4">
          <li>
            <a href="/">Hem</a>
          </li>
          <li>
            <a href="/om-oss">Om oss</a>
          </li>
          <li>
            <a href="/tjanster">Tjänster</a>
          </li>
          <li>
            <a href="/kontakta-oss">Kontakt</a>
          </li>
        </ul>
      </nav>
    </header>

    <main 
      id="content" 
      role="main" 
      tabIndex={-1} 
      className="p-6 min-h-screen"
    >
      {children}
    </main>

    <Footer />
  </body>
</html>

  );
}
