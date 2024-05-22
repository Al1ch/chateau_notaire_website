import React from "react";
import styles from "./NotaireRoleSection.module.scss";
import ScintillantLogo from "@/assets/vectors/scintillant.svg";
import RoleCard from "@/components/RoleCard/RoleCard";

const NotaireRoleSection = () => {
  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <h1 className={styles.title}>Le Rôle Et Les Missions Du Notaire </h1>
        <ScintillantLogo className={styles.logo} />
        <p className={styles.descriptionTitle}>
          Le notaire assure la validité légale des contrats et transactions,
          garantissant la sécurité juridique des parties impliquées. Son rôle et
          ses missions sont essentielles pour l’exercice de son activité.
        </p>
      </div>
      <div className={styles.servicesList}>
        <RoleCard
          title="Sécurité juridique"
          description="Le notaire est un officier public ministériel nommé par arrêté du Garde des Sceaux."
          listItem={[
            "Eclairer le consentement",
            " Gérer efficacité des actes",
            "Test",
          ]}
        />
        <RoleCard
          title="Devoir de Conseil"
          description="Le notaire doit éclairer le consentement des personnes et leurs délivrée une information la plus complète et appropriée"
          listItem={[
            "Eclairer le consentement",
            " Gérer efficacité des actes",
            "Test",
          ]}
        />
        <RoleCard
          title="Signature Actes"
          description="Le notaire est le seul habilité à authentifier les actes Par son sceau, le notaire confère date certaine, force probante et force exécutoire à l’acte"
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
