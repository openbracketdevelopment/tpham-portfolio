"use client";

import styles from "../ProjectItem/ProjectItem.module.scss";
import React from "react";
// import { Button } from "../../components/Button/Button";
import * as FaIcons from "react-icons/fa";
import Fancybox from "../Fancybox/Fancybox";
import Link from "next/link";

import JohnnieWalkerData from "../project-data/JohnnieWalker.json";

function JohnnieWalker() {
  return (
    <>
      {/* WORK CONTENT */}
      <section className={styles["project__hero"]}>
        <div className={styles["project__img-wrap"]}>
          <img
            src={JohnnieWalkerData.workImagePath}
            alt={JohnnieWalkerData.workTitle}
            title={JohnnieWalkerData.workTitle}
            className={styles["project__img"]}
          />
        </div>

        <h1 className={styles["project__title"]}>
          <img
            src={JohnnieWalkerData.workLogo}
            alt={JohnnieWalkerData.workTitle}
            title={JohnnieWalkerData.workTitle}
          />
        </h1>
      </section>
      <section className={styles["project__container"]}>
        <div className={styles["project__info"]}>
          <div className={styles["project__description"]}>
            <p>{JohnnieWalkerData.workDescription}</p>
          </div>
          <div className={styles["project__technology"]}>
            <div className={styles["project__details"]}>
              <div className="project__timeframe">
                <h3>Timeframe</h3>
                <p>{JohnnieWalkerData.workTimeFrame}</p>
              </div>
              <div className="project__role">
                <h3>Role</h3>
                <p>{JohnnieWalkerData.workRole}</p>
              </div>
              <div className="project__technologies">
                <h3>Platforms</h3>
                <p>{JohnnieWalkerData.workTechnology}</p>
              </div>
              <div className="project__category">
                <h3>Category</h3>
                <p>{JohnnieWalkerData.workCategory}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles["project__container"]}>
        <div className={styles["project__section-heading"]}>
          <h3>Play Video</h3>
        </div>
        <div className={`${styles["project__logo-showcase"]} ${styles["project__logo-showcase-full"]}`}>
          <Fancybox>
            <a
              className={styles["project__video-link"]}
              data-fancybox
              href={JohnnieWalkerData.workDesktopClip}
            >
              <FaIcons.FaPlay className={styles["project__video-icon"]} />
              <img
                src="/assets/images/jwalker-video-thumb.webp"
                alt="Johnnie Walker Video 2022"
              />
            </a>
          </Fancybox>
        </div>
      </section>
      {/* ALL WORK */}
      <section className={`${styles["project__container"]} ${styles["project__work-nav"]}`}>
        <Link
          href="/#work"
          className={styles["project__all-work-btn"]}
        >
          All Projects
        </Link>
      </section>
    </>
  );
}

export default JohnnieWalker;
