/* eslint-disable @next/next/no-page-custom-font */
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/Navbar/NavBar";
import styles from "./layout.module.scss";
import Footer from "@/components/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Paul-Emmanuel Chateau - Notaire | Expertise Notariale",
  description:
    "Maitrisant l'art de la légalité avec expertise, notre cabinet de notaire offre des services juridiques fiables et personnalisés. Protégez votre patrimoine, gérez vos successions et transactions immobilières en toute confiance avec nos notaires expérimentés. Contactez-nous dès aujourd'hui pour des conseils juridiques solides et des solutions sur mesure",
};

export default function RootLayout({
  children,
}: {
  readonly children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={styles.container}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
