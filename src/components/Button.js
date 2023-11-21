import React from "react";
import "./Button.css";
// import { Link } from "react-router-dom";

// const STYLES = ["btn--primary", "btn--outline"];

// const SIZES = ["btn--medium", "btn--large"];

export const Button = ({ btnLabel, btnUrl, btnTarget, btnStyle, btnSize }) => {
  // const checkbtnStyle = STYLES.includes(btnStyle)
  //   ? btnStyle
  //   : STYLES[0];

  // const checkbtnSize = SIZES.includes(btnSize) ? btnSize : SIZES[0];

  return (
    <a
      href={btnUrl}
      className="btn"
      rel="noopener noreferrer"
      target={btnTarget}
    >
      {btnLabel}
    </a>
  );
};
