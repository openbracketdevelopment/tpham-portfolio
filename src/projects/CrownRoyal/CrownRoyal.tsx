"use client";

import styles from "../ProjectItem/ProjectItem.module.scss";
import React from "react";
import { InlineVideo } from "../../components/InlineVideo/InlineVideo";
// import { Button } from "../../components/Button/Button";
import Link from "next/link";

import CrownRoyalData from "../project-data/CrownRoyal.json";

function crownRoyal() {
  return (
    <>
      {/* WORK CONTENT */}
      <section className={styles["project__hero"]}>
        <div className={styles["project__img-wrap"]}>
          <img
            src={CrownRoyalData.workImagePath}
            alt={CrownRoyalData.workTitle}
            title={CrownRoyalData.workTitle}
            className={styles["project__img"]}
          />
        </div>

        <h1 className={styles["project__title"]}>
          <img
            src={CrownRoyalData.workLogo}
            alt={CrownRoyalData.workTitle}
            title={CrownRoyalData.workTitle}
          />
        </h1>
      </section>
      <section className={styles["project__container"]}>
        <div className={styles["project__info"]}>
          <div className={styles["project__description"]}>
            <p>{CrownRoyalData.workDescription}</p>
          </div>
          <div className={styles["project__technology"]}>
            <div className={styles["project__details"]}>
              <div className="project__timeframe">
                <h3>Timeframe</h3>
                <p>{CrownRoyalData.workTimeFrame}</p>
              </div>
              <div className="project__role">
                <h3>Role</h3>
                <p>{CrownRoyalData.workRole}</p>
              </div>
              <div className="project__technologies">
                <h3>Platforms</h3>
                <p>{CrownRoyalData.workTechnology}</p>
              </div>
              <div className="project__category">
                <h3>Category</h3>
                <p>{CrownRoyalData.workCategory}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles["project__container"]}>
        <InlineVideo
          className={styles["project__inline-video"]}
          poster="/assets/images/crown-video-thumb.webp"
          src={CrownRoyalData.workDesktopClip}
          label="Crown Royal and NFL video, 2022"
        />
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

export default crownRoyal;
