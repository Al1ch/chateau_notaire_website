"use client";
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
          {/* <p className={styles.text}>
            {`Notaire, j'apporte conseils, solutions et créativité aux entreprises et indépendants.`}{" "}
          </p> */}
        </div>
        <div className={styles.footerColumnList}>
          <div className={styles.footerColumn}>
            <h2 className={styles.title}>Réseaux sociaux</h2>
            <div className={styles.listItem}>
              <Link
                href={
                  "https://www.instagram.com/chateau_notaires?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                }
                className={styles.link}
              >
                Instagram
              </Link>
              <Link
                href={"https://www.linkedin.com/in/paul-emmanuel-chateau/"}
                className={styles.link}
              >
                LinkedIn
              </Link>{" "}
            </div>
          </div>
          <div className={styles.footerColumn}>
            <h2 className={styles.title}>Nos Services</h2>
            <div className={styles.listItem}>
              <Link
                href={`/services?onglet=Immobilier`}
                className={styles.link}
              >
                Immobilier
              </Link>
              <Link href={`/services?onglet=Famille`} className={styles.link}>
                Famille
              </Link>
              <Link
                href={`/services?onglet=Entreprise`}
                className={styles.link}
              >
                Entreprise
              </Link>
              <Link href={`/services?onglet=Médiation`} className={styles.link}>
                Médiation
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
                <span className={styles.text}>05 32 59 79 07</span>
                <span className={styles.text}>
                  5 Rue du Général Jean Compans,
                  <br />
                  31500 Toulouse
                </span>
              </div>
            </div>
            <a
              href={"mailto:paulemmanuel.chateau@notaires.fr"}
              className={styles.link}
            >
              <Button backgroundColor="transparent" size="lg" radius="rounded">
                Nous Contacter
              </Button>
            </a>
          </div>
        </div>
      </div>
      <div className={styles.lawContainer}>
        <p className={styles.text}>
          {`© 2024 Paul-Emmanuel Chateau. Tous droits réservés.`}
        </p>
        <Link href="/mentions-legales" className={styles.link}>
          Mention Légales
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
