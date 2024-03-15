import React from "react";
import styles from "./Footer.module.scss";
import Button from "@/components/Button/Button";
import Logo from "@/assets/vectors/logo.svg";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className={styles.container}>
      <div className={styles.footerContent}>
        <div className={styles.info}>
          <Logo className={styles.logo} />
          <p className={styles.text}>
            {`Notaire, j'apporte conseils, solutions et créativité aux entreprises et indépendants.`}{" "}
          </p>
        </div>
        <div className={styles.footerColumnList}>
          <div className={styles.footerColumn}>
            <h2 className={styles.title}>Socials</h2>
            <div className={styles.listItem}>
              <span className={styles.text}>Instagram</span>
              <span className={styles.text}>+33 6 95 91 99 30</span>
            </div>
          </div>
          <div className={styles.footerColumn}>
            <h2 className={styles.title}>Nos Services</h2>
            <div className={styles.listItem}>
              <Link href={"/Services"} className={styles.link}>
                Immobilier
              </Link>
              <Link href={"/Services"} className={styles.link}>
                Famille
              </Link>
              <Link href={"/Services"} className={styles.link}>
                Entreprise
              </Link>
            </div>
          </div>
          <div className={styles.footerColumn}>
            <div className={styles.contactInfo}>
              <h2 className={styles.title}>Contact</h2>
              <div className={styles.listItem}>
                <span className={styles.text}>
                  paulemmanuel.chateau@notaires.fr
                </span>
                <span className={styles.text}>+33 6 95 91 99 30</span>
                <span className={styles.text}>
                  188 bis boulevard Pereire <br /> 75017 Paris{" "}
                </span>
              </div>
            </div>
            <Link
              href={"mailto:paulemmanuel.chateau@notaires.fr"}
              className={styles.link}
            >
              <Button backgroundColor="transparent" size="lg" radius="rounded">
                Nous Contacter
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.lawContainer}>
        <p className={styles.text}>
          {`© 2024 Paul Chateau. Tous droits réservés.`}
        </p>
        <Link href="/mentions-legales" className={styles.link}>
          Mention Légales
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
