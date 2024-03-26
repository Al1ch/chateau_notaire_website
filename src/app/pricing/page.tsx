import styles from "./page.module.scss";
import FrequentQuestion from "@/components/FrequentQuestion/FrequentQuestion";
import ContactUs from "@/components/ContactUs/ContactUs";
import PricingSection from "@/components/PricingSection/PricingSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tarifs et Services Notariaux | Paul-Emmanuel Chateau - Notaire",
  description:
    "Découvrez nos tarifs compétitifs et transparents pour des services de notariat de qualité supérieure. Que ce soit pour des transactions immobilières, des affaires familiales ou des besoins juridiques d'entreprise, notre cabinet de notaire offre des tarifs clairs et abordables. Obtenez une estimation précise de vos frais dès aujourd'hui et bénéficiez de conseils juridiques professionnels à un prix accessible. Contactez-nous pour en savoir plus sur nos tarifs compétitifs et nos services de haute qualité.",
};
export default function Pricing() {
  return (
    <div className={styles.container}>
      <PricingSection />
      <FrequentQuestion />
      <ContactUs />
    </div>
  );
}
