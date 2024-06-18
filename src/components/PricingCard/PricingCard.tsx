import React from "react";
import styles from "./PricingCard.module.scss";
import Button from "@/components/Button/Button";
import Link from "next/link";
type Services = {
  title: string;
  price: string;
  id: number;
};

type Props = {
  title: string;
  description: string;
  services: Services[];
};

const PricingCard = ({ title, description, services }: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <h3 className={styles.title}>{title} </h3>
        {/* <p className={styles.description}>{description}</p> */}
      </div>
      <div className={styles.pricingList}>
        {services.map((service) => (
          <div key={service.id}>
            <h4 className={styles.serviceTitle}>{service.title}</h4>
            <p className={styles.servicePrice}>{service.price}</p>
          </div>
        ))}
      </div>
      <a
        href={"mailto:paulemmanuel.chateau@notaires.fr"}
        className={styles.link}
      >
        <Button size="xl" backgroundColor="transparent">
          En Savoir Plus
        </Button>
      </a>
    </div>
  );
};

export default PricingCard;
