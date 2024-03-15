import React from "react";
import styles from "./NotaireRoleSection.module.scss";
import ScintillantLogo from "@/assets/vectors/scintillant.svg";
import RoleCard from "@/components/RoleCard/RoleCard";

const NotaireRoleSection = () => {
  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <h1 className={styles.title}>Les Rôles du Notaire</h1>
        <ScintillantLogo className={styles.logo} />
        <p className={styles.descriptionTitle}>
          Le notaire assure la validité légale des contrats et transactions,
          garantissant la sécurité juridique des parties impliquées
        </p>
      </div>
      <div className={styles.servicesList}>
        <RoleCard
          title="Sécurité juridique"
          description="Le notaire est en charge de la sécurité juridique des actes qu'il rédige"
          listItem={[
            "Eclairer le consentement",
            " Gérer efficacité des actes",
            "Test",
          ]}
        />
        <RoleCard
          title="Devoir de Conseil"
          description="Le notaire a un devoir de conseil envers ses clients ainsi que de neutralité"
          listItem={[
            "Eclairer le consentement",
            " Gérer efficacité des actes",
            "Test",
          ]}
        />
        <RoleCard
          title="Signature Actes"
          description="Le notaire est le seul habilité à signer les actes authentiques"
          listItem={[
            "Eclairer le consentement",
            " Gérer efficacité des actes",
            "Test",
          ]}
        />
      </div>
    </div>
  );
};

export default NotaireRoleSection;
