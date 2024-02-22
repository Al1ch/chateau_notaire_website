import React from "react";
import styles from "./NavBar.module.scss";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/Button/Button";
import sgLogo from "@/assets/images/sgLogo.png";
// import logo from "@/assets/vectors/logo.svg";

const NavBar = () => {
  return (
    <nav className={styles.container}>
      <div className={styles.leftContainer}>
        <Image src={sgLogo} alt="logo" width={100} height={100} />
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
      </div>
      <div className={styles.buttonContainer}>
        <Button size="lg" backgroundColor="primary" radius="rounded">
          Estimer votre coût
        </Button>
        <Button size="lg" radius="rounded" backgroundColor="secondary">
          Nous Contacter
        </Button>
      </div>
    </nav>
  );
};

export default NavBar;
