import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer/Footer";
import HeaderWrapper from "./components/Header/HeaderWrapper";

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
