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
                Un Accompagnement Humain
                <br /> Sur Mesure
              </h1>
              <ScintillantLogo className={styles.logo} />
              <p className={styles.description}>
                {`Je suis à votre écoute pour vous conseiller et assurer la sécurité juridique de vos actes authentiques dans les différents domaines du droit.`}
              </p>
            </div>
          </div>
          <div className={styles.servicesList}>
            <ServicesCard
              title="Immobilier"
              icon={ImmobillierLogo}
              description="Notre équipe vous accompagne pour vos projets d’acquisition et de vente immobilière, du conseil jusqu’à la signature de l’acte définitif"
            />
            <ServicesCard
              title={"Famille"}
              description="Nous vous conseillons à travers les moments-clefs de la vie familiale, du contrat de mariage et règlements de succession"
              icon={FammilleSvg}
            />
            <ServicesCard
              title="Entreprise"
              icon={EntrepriseSvg}
              description="Nous vous accompagnons à chaque étape de la vie de votre société, de sa naissance, de sa transmission jusqu'à sa dissolution"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
