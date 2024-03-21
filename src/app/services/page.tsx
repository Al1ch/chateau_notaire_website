import React from "react";
import styles from "./page.module.scss";
import Tab from "@/components/Tab/Tab";
import ServicesArticleSection from "@/components/ServicesArticleSection/ServicesArticleSection";
import FindUs from "@/components/FindUs/FindUs";
import { services } from "@/data/services";
import FrequentQuestion from "@/components/FrequentQuestion/FrequentQuestion";

export default function Services({
  searchParams,
}: {
  readonly searchParams: { [key: string]: string };
}) {
  const serviceContent = {
    Immobilier: <ServicesArticleSection {...services.Immobilier} />,
    Famille: <ServicesArticleSection {...services.Famille} />,
    Entreprise: <ServicesArticleSection {...services.Commercial} />,
  };
  return (
    <div className={styles.container}>
      <h1 className={styles.title}> Nos Services</h1>
      <div className={styles.wrapper}>
        <Tab />
        {searchParams.tab
          ? serviceContent[searchParams.tab as keyof typeof serviceContent]
          : serviceContent.Immobilier}
      </div>
      <FrequentQuestion />
      <FindUs />
    </div>
  );
}
