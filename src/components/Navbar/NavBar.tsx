import React from "react";
import styles from "./NavBar.module.scss";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/Button/Button";
import sgLogo from "@/assets/images/sgLogo.png";
import Logo from "@/assets/vectors/logo.svg";
import BurgerSvg from "@/assets/vectors/burger.svg";

const NavBar = () => {
  return (
    <nav className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.leftContainer}>
          <Link className={styles.link} href={"/"}>
            <Logo className={styles.logo} />
          </Link>
          <div className={styles.listNav}>
            <Link href={"/home"} className={styles.link}>
              Accueil
            </Link>
            <Link href={"/services"} className={styles.link}>
              Nos Services
            </Link>
            <Link href={"/tarifs"} className={styles.link}>
              Tarifs
            </Link>
            <Link href={"/about"} className={styles.link}>
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
        <BurgerSvg className={styles.burger} />
      </div>
    </nav>
  );
};

export default NavBar;
