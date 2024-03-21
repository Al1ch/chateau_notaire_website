import React from "react";
import styles from "./ContactUs.module.scss";
import Scintillant from "@/assets/vectors/scintillant.svg";
import Button from "../Button/Button";
import Phone from "@/assets/vectors/phone.svg";
import Link from "next/link";

const ContactUs = () => {
  return (
    <div className={styles.container}>
      <div className={styles.leftContainer}>
        <div className={styles.titleContainer}>
          <h2 className={styles.title}>
            {`Notre équipe d'experts juridiques est à votre écoute`}{" "}
          </h2>
          <Scintillant />
        </div>
        <p className={styles.description}>
          Nous sommes toujours disponibles pour de nouvelles affaires, petites
          ou grandes. Envoyez-nous un courriel et nous vous contacterons
          rapidement, ou téléphonez-nous entre 8h00 et 19h00 du lundi au samedi
        </p>
        <Link
          href="mailto:paulemmanuel.chateau@notaires.fr"
          className={styles.link}
        >
          <Button size="lg" radius="rounded" backgroundColor="secondary">
            Contactez Nous
          </Button>
        </Link>
      </div>
      <div className={styles.rightContainer}>
        <div className={styles.squareBorder}>
          <h4 className={styles.titleContact}>Consultation gratuite</h4>
          <p className={styles.squareDescription}>
            vous pouvez obtenir une consultation gratuite et une évaluation de
            votre dossier en nous contactant au numéro suivant
          </p>
          <div className={styles.contactSection}>
            <div className={styles.squarePhone}>
              <Phone className={styles.logo} />
            </div>
            <div className={styles.contactInfo}>
              <p className={styles.contactUs}>Contactez-nous au :</p>
              <p className={styles.contactNumber}>05 61 83 23 87</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
