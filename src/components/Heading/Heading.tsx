"use client";

import styles from "./Heading.module.scss";
import React from "react";

const STYLES = [
  "heading__marquee-default",
  "heading__marquee-reverse",
  "heading__marquee-none",
];

const ROTATION = [
  "heading__rotate",
  "heading__rotate-reverse",
  "heading__rotate-none",
];

type HeadingProps = {
  headingLabel: string;
  outlinedLabel?: string;
  headingStyle?: string;
  rotationStyle?: string;
  className?: string;
};

export const Heading = React.forwardRef<HTMLDivElement, HeadingProps>(
  ({ headingLabel, outlinedLabel = headingLabel, headingStyle = "", rotationStyle = "" }, ref) => {
    const checkHeadingStyle = STYLES.includes(headingStyle)
      ? headingStyle
      : STYLES[0];

    const checkRotationStyle = ROTATION.includes(rotationStyle)
      ? rotationStyle
      : ROTATION[0];

    return (
      <h3 className={`${styles["heading"]} ${styles[checkRotationStyle]}`}>
        <div className={styles["heading__marquee"]} ref={ref}>
          <div className={styles[checkHeadingStyle]} aria-hidden="true">
            <span>{headingLabel}</span>
            <span className={styles["heading__marquee-stoke"]}>{outlinedLabel}</span>
            <span>{headingLabel}</span>
            <span className={styles["heading__marquee-stoke"]}>{outlinedLabel}</span>
          </div>
        </div>
      </h3>
    );
  }
);

Heading.displayName = "Heading";
