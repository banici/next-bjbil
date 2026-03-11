import type { Metadata } from "next";
import { Inter, Nunito_Sans } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer/Footer";
import HeaderWrapper from "./components/Header/HeaderWrapper";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const nunitoSans = Nunito_Sans({
  variable: "--font-nunito-sans",
  subsets: ["latin"],
});

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
  return (
    <html lang="sv" className={`${inter.variable} ${nunitoSans.variable}`}>
      <body>
        <HeaderWrapper />
        <main id="main-content">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}