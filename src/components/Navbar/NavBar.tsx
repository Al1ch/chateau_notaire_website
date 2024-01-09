import React from "react";
import styles from "./NavBar.module.scss";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/Button/Button";

const NavBar = () => {
  return (
    <header className={styles.container}>
      <Image src="/logo.svg" alt="logo" width={100} height={100} />
      <div className={styles.listNav}>
        <Link href={"/Accueil"} className={styles.link}>
          Accueil
        </Link>
        <Link href={"/services"} className={styles.link}>
          Nos Services
        </Link>
        <Link href={"/tarifs"} className={styles.link}>
          Tarifs
        </Link>
        <Link href={"/Qui sommes nous ?"} className={styles.link}>
          Qui somme nous ?
        </Link>
      </div>
      <div className={styles.buttonContainer}>
        <Button size="lg" color="secondary">
          Nous Contacter
        </Button>
        <Button size="lg" color="primary">
          Estimer votre coût
        </Button>
      </div>
    </header>
  );
};

export default NavBar;
