import React from "react";
import styles from "./ServicesArticleSection.module.scss";
import ServiceArticle from "@/components/ServiceArticle/ServiceArticle";
import DropDownService from "../DropDownService/DropDownService";

type ServiceArticle = {
  title: string;
  description: string;
  id: number;
};

type Props = {
  title: string;
  description: string;
  services: ServiceArticle[];
};

const ServicesArticleSection = ({ title, description, services }: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.titleSection}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.description}>{description}</p>
      </div>
      <div className={styles.serviceList}>
        {services.map((service, index) => (
          <DropDownService {...service} key={service.id} />
        ))}
      </div>
    </div>
  );
};

export default ServicesArticleSection;
