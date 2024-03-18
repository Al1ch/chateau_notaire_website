import React from "react";
import styles from "./page.module.scss";
import Tab from "@/components/Tab/Tab";
import ContactUs from "@/components/ContactUs/ContactUs";
import ServiceArticle from "@/components/ServiceArticle/ServiceArticle";

export default function Services() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <Tab />
        <div className={styles.titleSection}>
          <h1 className={styles.title}>
            Besoin d'un accompagnement pour un acte Immobilier ?{" "}
          </h1>
          <p className={styles.description}>
            En tant que notaire, nous vous offrons un service immobilier sûr et
            efficace pour vos transactions. Simplifiez vos démarches avec notre
            expertise et garantissez la sécurité de vos transactions
            immobilières{" "}
          </p>
        </div>
        <div className={styles.serviceList}>
          <ServiceArticle
            title="VEFA"
            description="La vente en l'état futur d'achèvement (VEFA) est un contrat de construction d'immeuble à usage d'habitation ou à usage professionnel comportant au moins un lot. Il est régi par les articles L. 261-1 et suivants du Code de la construction et de l'habitation."
          />
          <ServiceArticle
            title="VEFA"
            description="La vente en l'état futur d'achèvement (VEFA) est un contrat de construction d'immeuble à usage d'habitation ou à usage professionnel comportant au moins un lot. Il est régi par les articles L. 261-1 et suivants du Code de la construction et de l'habitation."
          />
          <ServiceArticle
            title="VEFA"
            description="La vente en l'état futur d'achèvement (VEFA) est un contrat de construction d'immeuble à usage d'habitation ou à usage professionnel comportant au moins un lot. Il est régi par les articles L. 261-1 et suivants du Code de la construction et de l'habitation."
          />
          <ServiceArticle
            title="VEFA"
            description="La vente en l'état futur d'achèvement (VEFA) est un contrat de construction d'immeuble à usage d'habitation ou à usage professionnel comportant au moins un lot. Il est régi par les articles L. 261-1 et suivants du Code de la construction et de l'habitation."
          />
        </div>
      </div>
    </div>
  );
}
