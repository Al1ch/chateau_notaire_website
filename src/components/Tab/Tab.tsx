"use client";
import React, { useState } from "react";
import styles from "./Tab.module.scss";
import cn from "classnames";

type Tab = "Immobilier" | "Famille" | "Entreprise";

const Tab = () => {
  const [activeTab, setActiveTab] = useState<Tab>("Immobilier");

  return (
    <div className={styles.container}>
      <div className={styles.tabList}>
        <div
          onClick={() => setActiveTab("Immobilier")}
          className={cn(styles.tab, {
            [styles.active]: activeTab === "Immobilier",
          })}
        >
          Immobilier
        </div>
        <div
          onClick={() => setActiveTab("Famille")}
          className={cn(styles.tab, {
            [styles.active]: activeTab === "Famille",
          })}
        >
          {" "}
          Famille
        </div>
        <div
          onClick={() => setActiveTab("Entreprise")}
          className={cn(styles.tab, {
            [styles.active]: activeTab === "Entreprise",
          })}
        >
          {" "}
          Entreprise
        </div>
      </div>
    </div>
  );
};

export default Tab;
