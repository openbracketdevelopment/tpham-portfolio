"use client";

import styles from "../ProjectItem/ProjectItem.module.scss";
import React from "react";
import { InlineVideo } from "../../components/InlineVideo/InlineVideo";
import { Button } from "../../components/Button/Button";
import Link from "next/link";

import BaileysData from "../project-data/Baileys.json";

function Baileys() {
  return (
    <>
      {/* WORK CONTENT */}
      <section className={styles["project__hero"]}>
        <div className={styles["project__img-wrap"]}>
          <img
            src={BaileysData.workImagePath}
            alt={BaileysData.workTitle}
            title={BaileysData.workTitle}
            className={styles["project__img"]}
          />
        </div>

        <h1 className={styles["project__title"]}>
          <img
            src={BaileysData.workLogo}
            alt={BaileysData.workTitle}
            title={BaileysData.workTitle}
          />
        </h1>
      </section>
      <section className={styles["project__container"]}>
        <div className={styles["project__info"]}>
          <div className={styles["project__description"]}>
            <p>{BaileysData.workDescription}</p>
          </div>
          <div className={styles["project__technology"]}>
            <div className={styles["project__details"]}>
              <div className="project__timeframe">
                <h3>Timeframe</h3>
                <p>{BaileysData.workTimeFrame}</p>
              </div>
              <div className="project__role">
                <h3>Role</h3>
                <p>{BaileysData.workRole}</p>
              </div>
              <div className="project__technologies">
                <h3>Platforms</h3>
                <p>{BaileysData.workTechnology}</p>
              </div>
              <div className="project__category">
                <h3>Category</h3>
                <p>{BaileysData.workCategory}</p>
              </div>
            </div>
          </div>
          <div className={styles["project__btns"]}>
            <h3>Project Affiliation: </h3>
            <Button
              btnLabel="Diageo Innovation"
              btnUrl={BaileysData.workLiveLink}
              btnTarget=""
            />
          </div>
        </div>
      </section>
      <section className={styles["project__container"]}>
        <InlineVideo
          className={styles["project__inline-video"]}
          poster="/assets/images/baileys-video-thumb.webp"
          src={BaileysData.workDesktopClip}
          label="Baileys S'mores video, 2022"
        />
      </section>
      <section className={styles["project__container"]}>
        <div className={styles["project__section-heading"]}>
          <p>
            Readjusted the graphics and video to fit each of the 4 sizes. Some
            of the visual effects were redone to fit the appropriate format and
            optimized for posting on social media.
          </p>
        </div>
        <div className={styles["project__4col-showcase"]}>
          {[
            { format: "1x1", clip: BaileysData.workDesktopClip2, poster: BaileysData.workImagePath2 },
            { format: "9x16", clip: BaileysData.workDesktopClip4, poster: BaileysData.workImagePath3 },
            { format: "4x5", clip: BaileysData.workDesktopClip3, poster: BaileysData.workImagePath4 },
            { format: "16x9", clip: BaileysData.workDesktopClip5, poster: BaileysData.workImagePath5 },
          ].map(({ format, clip, poster }) => (
            <div key={format} className={styles["project__thumbnail"]}>
              <InlineVideo
                className={styles["project__thumbnail-video"]}
                poster={poster}
                src={clip}
                label={`Baileys S'mores ${format} video`}
              />
              <p className={styles["project__thumbnail-text"]}>{format}</p>
            </div>
          ))}
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

export default Baileys;
