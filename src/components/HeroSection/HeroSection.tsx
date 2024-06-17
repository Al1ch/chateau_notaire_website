import React from "react";
import Image from "next/image";
import styles from "./HeroSection.module.scss";
import Button from "@/components/Button/Button";
import paulPic from "@/assets/images/paulPicture.jpg";
import ScintillantLogo from "@/assets/vectors/scintillant.svg";
import MarianneLogo from "@/assets/vectors/marianne.svg";
import Link from "next/link";

const HeroSection = () => {
  return (
    <div className={styles.heroSection}>
      <div className={styles.leftHeroContainer}>
        <div className={styles.heroInfo}>
          <h1 className={styles.title}>
            Paul-Emmanuel Chateau, <br />
            Notaire
          </h1>
          <ScintillantLogo className={styles.logo} />

          <p className={styles.description}>
            Je vous accompagne dans toutes les étapes importantes de votre vie,
            de la naissance de votre projet à sa concrétisation et vous aide à
            préparer l’avenir en toute sérénité
            {/* Nous vous accompagnons dans tous les moments de votre vie . */}
          </p>
        </div>
        <span className={styles.buttonTest}>
          <Link
            href="mailto:paulemmanuel.chateau@notaires.fr"
            className={styles.link}
          >
            <Button backgroundColor="secondary" size="lg" radius="rounded">
              Prendre rendez-vous
            </Button>
          </Link>
        </span>
        <MarianneLogo className={styles.balance} />
      </div>
      <div className={styles.heroImageContainer}>
        <Image
          src={paulPic}
          className={styles.heroImage}
          alt="hero image"
          width={400}
          height={250}
        />
        <div className={styles.maskShadow}></div>
      </div>
    </div>
  );
};

export default HeroSection;
