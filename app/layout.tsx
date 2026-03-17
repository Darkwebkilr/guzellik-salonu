import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SocialButtons from "./components/SocialButtons";
import LocationButton from "./components/LocationButton";
import ScrollReveal from "./components/ScrollReveal";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-serif",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Parlaten Güzellik Salonu | Ankara Lazer Epilasyon & Cilt Bakımı",
  description: "Ankara Altındağ Güneşevler'de lüks ve profesyonel güzellik hizmetleri. Lazer epilasyon, cilt bakımı, microblading ve daha fazlası.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className="scroll-smooth">
      <body className={`${cormorant.variable} ${inter.variable} antialiased`}>
        <ScrollReveal />
        <Navbar />
        <main className="pt-24">{children}</main>
        <Footer />
        <SocialButtons />
        <LocationButton />
      </body>
    </html>
  );
}
