"use client";

import styles from "../ProjectItem/ProjectItem.module.scss";
import React from "react";
import { Button } from "../../components/Button/Button";
import * as FaIcons from "react-icons/fa";
import Fancybox from "../Fancybox/Fancybox";
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
        <div className={styles["project__section-heading"]}>
          <h3>Play Video</h3>
        </div>
        <div className={`${styles["project__logo-showcase"]} ${styles["project__logo-showcase-full"]}`}>
          <Fancybox>
            <a
              className={styles["project__video-link"]}
              data-fancybox
              href={BaileysData.workDesktopClip}
            >
              <FaIcons.FaPlay className={styles["project__video-icon"]} />
              <img
                src="/assets/images/baileys-video-thumb.webp"
                alt="Baileys S'mores Video 2022"
              />
            </a>
          </Fancybox>
        </div>
      </section>
      <section className={styles["project__container"]}>
        <div className={styles["project__section-heading"]}>
          <h3>Various Video Sizes and Formats</h3>
          <p>
            Readjusted the graphics and video to fit each of the 4 sizes. Some
            of the visual effects were redone to fit the appropriate format and
            optimized for posting on social media.
          </p>
        </div>
        <div className={styles["project__4col-showcase"]}>
          <div className={styles["project__thumbnail"]}>
            <Fancybox>
              <a
                className={styles["project__video-link"]}
                data-fancybox
                href={BaileysData.workDesktopClip2}
              >
                <img
                  className={styles["project__thumbnail-img"]}
                  src={BaileysData.workImagePath2}
                  alt="Baileys S'mores 1x1"
                />
              </a>
            </Fancybox>
            <p className={styles["project__thumbnail-text"]}>1x1</p>
          </div>
          <div className={styles["project__thumbnail"]}>
            <Fancybox>
              <a
                className={styles["project__video-link"]}
                data-fancybox
                href={BaileysData.workDesktopClip3}
              >
                <img
                  className={styles["project__thumbnail-img"]}
                  src={BaileysData.workImagePath3}
                  alt="Baileys S'mores 9x16"
                />
              </a>
            </Fancybox>
            <p className={styles["project__thumbnail-text"]}>9x16</p>
          </div>
          <div className={styles["project__thumbnail"]}>
            <Fancybox>
              <a
                className={styles["project__video-link"]}
                data-fancybox
                href={BaileysData.workDesktopClip4}
              >
                <img
                  className={styles["project__thumbnail-img"]}
                  src={BaileysData.workImagePath4}
                  alt="Baileys S'mores 4x5"
                />
              </a>
            </Fancybox>
            <p className={styles["project__thumbnail-text"]}>4x5</p>
          </div>
          <div className={styles["project__thumbnail"]}>
            <Fancybox>
              <a
                className={styles["project__video-link"]}
                data-fancybox
                href={BaileysData.workDesktopClip5}
              >
                <img
                  className={styles["project__thumbnail-img"]}
                  src={BaileysData.workImagePath5}
                  alt="Baileys S'mores 16x9"
                />
              </a>
            </Fancybox>
            <p className={styles["project__thumbnail-text"]}>16x9</p>
          </div>
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
