import React from "react";
import styles from "./ServicesCard.module.scss";
import { SvgComponent } from "../../../types/model";
import Button from "@/components/Button/Button";
import PeopleSvg from "@/assets/vectors/people.svg";

type Props = {
  title: string;
  description: string;
  icon: SvgComponent;
};

const ServicesCard = ({ title, description, icon: Icon }: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.infoCard}>
        <h3 className={styles.title}>{title} </h3>
        <p className={styles.description}>{description}</p>
      </div>
      <div className={styles.bottomContainer}>
        <Icon className={styles.icon} />
        <Button size="lg" backgroundColor="secondary" radius="rounded">
          En savoir plus
        </Button>
      </div>
    </div>
  );
};

export default ServicesCard;
