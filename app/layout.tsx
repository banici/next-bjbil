import type { Metadata } from "next";
import { Inter, Nunito_Sans } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer/Footer";
import HeaderWrapper from "./components/Header/HeaderWrapper";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
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
    <html lang="sv">
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