"use client";

import styles from "../ProjectItem/ProjectItem.module.scss";
import React from "react";
import { Button } from "../../components/Button/Button";
import Link from "next/link";

import espsPartsData from "../project-data/EspsParts.json";

function BrowserFrame({ src, alt }: { src: string; alt: string }) {
  return (
    <div className={styles["project__work-desktop"]}>
      <div className={styles["project__browser-head"]}>
        <div className={styles["project__browser-head-wrap"]}>
          <div className={`${styles["project__dot"]} ${styles["project__dot-1"]}`}></div>
          <div className={`${styles["project__dot"]} ${styles["project__dot-2"]}`}></div>
          <div className={`${styles["project__dot"]} ${styles["project__dot-3"]}`}></div>
        </div>
      </div>
      <div className={styles["project__desktop-piece"]}>
        <img src={src} alt={alt} width={1440} height={1000} loading="lazy" decoding="async" />
      </div>
    </div>
  );
}

function EspsParts() {
  return (
    <>
      {/* WORK CONTENT */}
      <section className={styles["project__hero"]}>
        <div className={styles["project__img-wrap"]}>
          <img
            src={espsPartsData.workHeroImagePath}
            alt={espsPartsData.workHeroImageAlt}
            className={styles["project__img"]}
          />
        </div>

        <h1 className={styles["project__title"]}>
          <img
            src={espsPartsData.workLogo}
            alt={espsPartsData.workTitle}
            title={espsPartsData.workTitle}
          />
        </h1>
      </section>
      <section className={styles["project__container"]}>
        <div className={styles["project__info"]}>
          <div className={styles["project__description"]}>
            <p>{espsPartsData.workDescription}</p>
          </div>
          <div className={styles["project__technology"]}>
            <div className={styles["project__details"]}>
              <div className="project__timeframe">
                <h3>Timeframe</h3>
                <p>{espsPartsData.workTimeFrame}</p>
              </div>
              <div className="project__role">
                <h3>Role</h3>
                <p>{espsPartsData.workRole}</p>
              </div>
              <div className="project__technologies">
                <h3>Platforms</h3>
                <p>{espsPartsData.workTechnology}</p>
              </div>
              <div className="project__category">
                <h3>Category</h3>
                <p>{espsPartsData.workCategory}</p>
              </div>
            </div>
          </div>
          <div className={styles["project__btns"]}>
            <Button btnLabel="Shop Parts" btnUrl={espsPartsData.workLiveLink} btnTarget="_blank" />
            <Button btnLabel="ESPS Trailers" btnUrl={espsPartsData.workLiveLink2} btnTarget="_blank" />
          </div>
        </div>
      </section>

      {/* DESKTOP */}
      <section className={styles["project__container"]}>
        <BrowserFrame src={espsPartsData.workDesktopImage1} alt={espsPartsData.workDesktopImage1Alt} />
      </section>
      {/* DESKTOP AND MOBILE EXAMPLES */}
      <section className={styles["project__container-full"]}>
        <div className="project__work-wall">
          <img
            src={espsPartsData.workImagePath2}
            alt={espsPartsData.workImagePath2Alt}
            width={2000}
            height={2032}
            loading="lazy"
            decoding="async"
          />
        </div>
      </section>
      {/* COLLECTIONS */}
      <section className={styles["project__container"]}>
        <BrowserFrame src={espsPartsData.workDesktopImage2} alt={espsPartsData.workDesktopImage2Alt} />
      </section>
      {/* MOBILE */}
      <section className={styles["project__container"]}>
        <div className={styles["project__mobile"]}>
          {espsPartsData.workMobileImages.map((view) => (
            <div className={styles["project__mobile-view"]} key={view.imagePath}>
              <div className={styles["project__mobile-lockup"]}>
                <img
                  className={styles["project__phone-image"]}
                  src={view.imagePath}
                  alt={view.alt}
                  width={750}
                  height={1334}
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* SHOPPING */}
      <section className={styles["project__container"]}>
        <BrowserFrame src={espsPartsData.workDesktopImage3} alt={espsPartsData.workDesktopImage3Alt} />
        <BrowserFrame src={espsPartsData.workDesktopImage4} alt={espsPartsData.workDesktopImage4Alt} />
      </section>
      {/* ALL WORK  */}
      <section className={`${styles["project__container"]} ${styles["project__work-nav"]}`}>
        <Link href="/#work" className={styles["project__all-work-btn"]}>
          All Projects
        </Link>
      </section>
    </>
  );
}

export default EspsParts;
