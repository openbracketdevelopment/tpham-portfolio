"use client";

import styles from "./Button.module.scss";
import React from "react";
// import { Link } from "react-router-dom";

// const STYLES = ["btn--primary", "btn--outline"];

// const SIZES = ["btn--medium", "btn--large"];

type ButtonProps = {
  btnLabel: string;
  btnUrl: string;
  btnTarget?: string;
  btnStyle?: string;
  btnSize?: string;
};

export const Button = ({ btnLabel, btnUrl, btnTarget }: ButtonProps) => {
  // const checkbtnStyle = STYLES.includes(btnStyle)
  //   ? btnStyle
  //   : STYLES[0];

  // const checkbtnSize = SIZES.includes(btnSize) ? btnSize : SIZES[0];

  return (
    <a
      href={btnUrl}
      className={styles["btn"]}
      rel="noopener noreferrer"
      target={btnTarget}
    >
      {btnLabel}
    </a>
  );
};
