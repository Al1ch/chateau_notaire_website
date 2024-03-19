"use client";
import React, { useState } from "react";
import styles from "./Tab.module.scss";
import cn from "classnames";
import { useRouter } from "next/navigation";

type Tab = "Immobilier" | "Famille" | "Entreprise";

const Tab = () => {
  const router = useRouter();

  const [activeTab, setActiveTab] = useState<Tab>("Immobilier");

  const handleClick = (currentTab: string) => {
    router.replace(`?tab=${currentTab}`);
    setActiveTab(currentTab as Tab);
  };

  return (
    <div className={styles.container}>
      <div className={styles.tabList}>
        <div
          onClick={() => handleClick("Immobilier")}
          className={cn(styles.tab, {
            [styles.active]: activeTab === "Immobilier",
          })}
        >
          Immobilier
        </div>
        <div
          onClick={() => handleClick("Famille")}
          className={cn(styles.tab, {
            [styles.active]: activeTab === "Famille",
          })}
        >
          {" "}
          Famille
        </div>
        <div
          onClick={() => handleClick("Entreprise")}
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
