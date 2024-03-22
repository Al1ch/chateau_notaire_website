"use client";
import React, { useRef, useState } from "react";
import styles from "./DropDownService.module.scss";
import ChevronLogo from "@/assets/vectors/chevron.svg";
import cn from "classnames";

type Props = {
  description: string;
  title: string;
};

const DropDownService = ({ title, description }: Props) => {
  const dropDownRef = useRef<HTMLDivElement>(null);
  const [isClicked, setIsClicked] = useState(false);

  return (
    <button
      onClick={() => setIsClicked(!isClicked)}
      className={cn(styles.container, { [styles.active]: isClicked })}
    >
      <div className={styles.titleContainer}>
        <h1 className={styles.title}>{title}</h1>
        <ChevronLogo
          className={cn(styles.svg, { [styles.active]: isClicked })}
        />
      </div>
      <p
        className={styles.description}
        style={
          isClicked
            ? {
                height: dropDownRef.current?.scrollHeight + "px",
                marginBottom: "24px",
              }
            : { height: "0px" }
        }
        ref={dropDownRef}
      >
        {description}
      </p>
    </button>
  );
};

export default DropDownService;
