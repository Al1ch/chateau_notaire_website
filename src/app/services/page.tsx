import React from "react";
import styles from "./page.module.scss";
import Tab from "@/components/Tab/Tab";
import ServicesArticleSection from "@/components/ServicesArticleSection/ServicesArticleSection";
import FindUs from "@/components/FindUs/FindUs";
import { services } from "@/data/services";
import FrequentQuestion from "@/components/FrequentQuestion/FrequentQuestion";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nos Services |Immobilier Famille Entreprise",
  description:
    "Découvrez des services de notariat intégraux pour l'immobilier, la famille et l'entreprise, alliant expertise juridique et personnalisation. Protégez vos biens immobiliers, gérez les successions familiales et assurez la conformité juridique de votre entreprise avec notre équipe de notaires expérimentés. ",
};

export default function Services({
  searchParams,
}: {
  readonly searchParams: { [key: string]: string };
}) {
  const serviceContent = {
    Immobilier: <ServicesArticleSection {...services.Immobilier} />,
    Famille: <ServicesArticleSection {...services.Famille} />,
    Entreprise: <ServicesArticleSection {...services.Commercial} />,
    Médiation: <ServicesArticleSection {...services.Mediation} />,
  };
  return (
    <div className={styles.container}>
      <h1 className={styles.title}> Nos Services</h1>
      <div className={styles.wrapper}>
        <Tab />
        {searchParams.onglet
          ? serviceContent[searchParams.onglet as keyof typeof serviceContent]
          : serviceContent.Immobilier}
      </div>
      <FrequentQuestion />
      <FindUs />
    </div>
  );
}
