import React from "react";
import styles from "./ServicesSection.module.scss";
import ScintillantLogo from "@/assets/vectors/scintillant.svg";
import ServicesCard from "../ServicesCard/ServicesCard";
import ImmobillierLogo from "@/assets/vectors/immobilier.svg";
import FammilleSvg from "@/assets/vectors/famille.svg";
import EntrepriseSvg from "@/assets/vectors/entreprise.svg";

const ServicesSection = () => {
  return (
    <div className={styles.section}>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.titleSection}>
            <div className={styles.titleContainer}>
              <h1 className={styles.title}>
                Explorer La Perfection <br /> Dans Notre Domaine
              </h1>
              <ScintillantLogo className={styles.logo} />
            </div>
            <p className={styles.description}>
              {`            Nous sommes vos notaires dévoués
avec une expertise notariale spécialisée, nous vous accompagnons à chaque étape de votre vie et de vos transactions, assurant la sécurité et la légalité dans vos affaires familiales et commerciales.`}
            </p>
          </div>
          <div className={styles.servicesList}>
            <ServicesCard
              title="Immobilier"
              icon={ImmobillierLogo}
              description="Notre équipe saura vous accompagner pour vos projets d’acquisition et de vente immobilière, du conseil à la signature de l’acte définitif en intégrant les enjeux fiscaux. "
            />
            <ServicesCard
              title={"Famille"}
              description="Nous sommes là pour vous guider à travers les moments clés de la vie familiale, offrant un soutien juridique pour assurer le bien-être et la sécurité de votre famille."
              icon={FammilleSvg}
            />
            <ServicesCard
              title="Entreprise"
              icon={EntrepriseSvg}
              description="Nous vous accompagnons à chaque étape de votre parcours entrepreneurial, garantissant la croissance et la protection durables de votre entreprise"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
