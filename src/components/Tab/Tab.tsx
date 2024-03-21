"use client";
import React, { useEffect, useState } from "react";
import styles from "./Tab.module.scss";
import cn from "classnames";
import { useRouter, useParams, useSearchParams } from "next/navigation";

type Tab = "Immobilier" | "Famille" | "Entreprise";

const Tab = () => {
  const router = useRouter();
  const params = useSearchParams();

  const [activeTab, setActiveTab] = useState<Tab>(
    (params.get("tab") as Tab) || "Immobilier"
  );

  useEffect(() => {
    const tab = params.get("tab") as Tab;
    setActiveTab(tab || "Immobilier");
  }, [params]);

  const handleClick = (currentTab: string) => {
    router.replace(`?tab=${currentTab}`);
    setActiveTab(currentTab as Tab);
  };

  return (
    <div className={styles.container}>
      <div className={styles.tabList}>
        <button
          onClick={() => handleClick("Immobilier")}
          className={cn(styles.tab, {
            [styles.active]: activeTab === "Immobilier",
          })}
        >
          Immobilier
        </button>
        <button
          onClick={() => handleClick("Famille")}
          className={cn(styles.tab, {
            [styles.active]: activeTab === "Famille",
          })}
        >
          {" "}
          Famille
        </button>
        <button
          onClick={() => handleClick("Entreprise")}
          className={cn(styles.tab, {
            [styles.active]: activeTab === "Entreprise",
          })}
        >
          {" "}
          Entreprise
        </button>
      </div>
    </div>
  );
};

export default Tab;
