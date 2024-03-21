"use client";
import React, { use, useState } from "react";
import styles from "./NavBar.module.scss";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/Button/Button";
import Logo from "@/assets/vectors/logo.svg";
import BurgerSvg from "@/assets/vectors/burger.svg";
import CloseIcon from "@/assets/vectors/close.svg";
import logoTest from "@/assets/images/logoTest.png";
import cn from "classnames";
import { usePathname } from "next/navigation";

const NavBar = () => {
  const [isMenuClicked, setIsMenuClicked] = useState(false);
  const pathName = usePathname();

  return (
    <div className={styles.test}>
      <nav
        className={cn(styles.container, {
          [styles.buttonClicked]: isMenuClicked,
        })}
      >
        <div className={styles.wrapper}>
          <div className={styles.leftContainer}>
            <Link className={styles.link} href={"/"}>
              <Logo className={styles.logo} />
            </Link>
            <div className={styles.listNav}>
              <Link
                href={"/home"}
                className={cn(styles.link, {
                  [styles.active]: pathName === "/",
                })}
              >
                Accueil
              </Link>
              <Link
                href={"/services"}
                className={cn(styles.link, {
                  [styles.active]: pathName === "/services",
                })}
              >
                Nos Services
              </Link>

              <Link
                href={"/about"}
                className={cn(styles.link, {
                  [styles.active]: pathName === "/about",
                })}
              >
                Qui somme nous ?
              </Link>
              <Link
                href={"/pricing"}
                className={cn(styles.link, {
                  [styles.active]: pathName === "/pricing",
                })}
              >
                Tarifs
              </Link>
            </div>
          </div>
          <div className={styles.buttonContainer}>
            <Link
              href={"https://www.immobilier.notaires.fr/fr/frais-de-notaire"}
              className={styles.buttonLink}
            >
              <Button size="lg" backgroundColor="transparent" radius="rounded">
                Simulateur de Frais
              </Button>
            </Link>

            <Link
              href={"mailto:paulemmanuel.chateau@notaires.fr"}
              className={styles.buttonLink}
            >
              <Button size="lg" radius="rounded" backgroundColor="secondary">
                Nous Contacter
              </Button>
            </Link>
          </div>
          <button
            className={styles.button}
            onClick={() => setIsMenuClicked(!isMenuClicked)}
          >
            <BurgerSvg className={styles.burger} />
          </button>
        </div>
      </nav>

      <div
        className={cn(
          styles.mobileMenu,
          { [styles.clicked]: isMenuClicked },
          isMenuClicked && "navIsOpen"
        )}
      >
        <div className={styles.headerMobileMenu}>
          <Image src={logoTest} alt="logo" width={100} height={100} />
          <Logo className={styles.logo} />
          <button className={styles.button}>
            <CloseIcon
              className={styles.close}
              onClick={() => setIsMenuClicked(!isMenuClicked)}
            />
          </button>
        </div>
        <div className={styles.contentMenu}>
          <div className={styles.list}>
            <Link
              href={"/home"}
              onClick={() => setIsMenuClicked(!isMenuClicked)}
              className={cn(styles.link, {
                [styles.active]: pathName === "/",
              })}
            >
              Accueil
            </Link>
            <Link
              onClick={() => setIsMenuClicked(!isMenuClicked)}
              href={"/services"}
              className={cn(styles.link, {
                [styles.active]: pathName === "/services",
              })}
            >
              Nos Services
            </Link>

            <Link
              onClick={() => setIsMenuClicked(!isMenuClicked)}
              href={"/about"}
              className={cn(styles.link, {
                [styles.active]: pathName === "/about",
              })}
            >
              Qui somme nous ?
            </Link>
            <Link
              onClick={() => setIsMenuClicked(!isMenuClicked)}
              href={"/pricing"}
              className={cn(styles.link, {
                [styles.active]: pathName === "/pricing",
              })}
            >
              Tarifs
            </Link>
          </div>
          <div className={styles.buttonList}>
            <Button size="lg" radius="rounded" backgroundColor="transparent">
              Simulateur de Frais
            </Button>
            <Button size="lg" radius="rounded" backgroundColor="secondary">
              Nous Contacter
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
