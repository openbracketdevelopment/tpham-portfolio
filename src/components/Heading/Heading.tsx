"use client";

import React from "react";
import "../../styles/globals.css";
import "./Heading.css";

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
  headingStyle?: string;
  rotationStyle?: string;
  className?: string;
};

export const Heading = React.forwardRef<HTMLDivElement, HeadingProps>(
  ({ headingLabel, headingStyle = "", rotationStyle = "" }, ref) => {
    const checkHeadingStyle = STYLES.includes(headingStyle)
      ? headingStyle
      : STYLES[0];

    const checkRotationStyle = ROTATION.includes(rotationStyle)
      ? rotationStyle
      : ROTATION[0];

    return (
      <h3 className={`heading ${checkRotationStyle}`}>
        <div className="heading__marquee" ref={ref}>
          <div className={`${checkHeadingStyle}`} aria-hidden="true">
            <span>{headingLabel}</span>
            <span className="heading__marquee-stoke">{headingLabel}</span>
            <span>{headingLabel}</span>
            <span className="heading__marquee-stoke">{headingLabel}</span>
          </div>
        </div>
      </h3>
    );
  }
);

Heading.displayName = "Heading";
