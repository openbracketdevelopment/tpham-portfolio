"use client";

import styles from "./MqButton.module.scss";
import React from "react";
// import { Link } from "react-router-dom";

type MqButtonProps = {
  buttonLabel: string;
  buttonImg: string;
  buttonImgAlt: string;
  buttonLink: string;
  buttonId: string;
  buttonIdHashtag: string;
};

export const MqButton = ({
  buttonLabel,
  buttonImg,
  buttonImgAlt,
  buttonLink,
  buttonId,
  buttonIdHashtag,
}: MqButtonProps) => {
  return (
    <div className={styles["mq__button"]}>
      <a
        className={styles["mq__button-url"]}
        aria-label={buttonImgAlt}
        href={buttonLink}
      >
        <div className={styles["mq__button-circle"]}>
          <svg
            className={styles["mq__button-round"]}
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            width="300px"
            height="300px"
            viewBox="0 0 300 300"
            enableBackground="new 0 0 300 300"
            xmlSpace="preserve"
          >
            <defs>
              <path
                id={buttonId}
                d=" M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
              />
              {/* <path
                id="mq__circle-path"
                d=" M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
              /> */}
            </defs>
            <circle cx="150" cy="100" r="75" fill="none" />
            <g>
              <use xlinkHref={buttonIdHashtag} fill="none" />
              <text fill="#000">
                <textPath
                  className={styles["mq__rotating-text"]}
                  xlinkHref={buttonIdHashtag}
                >
                  {buttonLabel}
                  {/* See Work - See Work - */}
                </textPath>
              </text>
            </g>
          </svg>
          <div className={styles["mq__button-arrow"]}>
            <img
              src={buttonImg}
              alt={buttonImgAlt}
              className={styles["mq__button-arrow-graphic"]}
            />
            {/* <img
              src="/assets/images/triangle.svg"
              alt="See Work"
              className={styles["mq__button-arrow-graphic"]}
            /> */}
          </div>
        </div>
      </a>
    </div>
  );
};
