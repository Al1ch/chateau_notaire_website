import React from "react";
import styles from "./RoleCard.module.scss";
import TickSvg from "@/assets/vectors/tick.svg";

type Props = {
  title: string;
  listItem?: string[];
  description: string;
};

const RoleCard = ({ title, listItem, description }: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.infoCard}>
        <h3 className={styles.title}>{title} </h3>
        <p className={styles.description}>{description}</p>
        {/* <ul className={styles.list}>
          {listItem.map((item, index) => (
            <li key={index} className={styles.listItem}>
              <TickSvg className={styles.logo} /> {item}
            </li>
          ))}
        </ul> */}
      </div>
    </div>
  );
};

export default RoleCard;
