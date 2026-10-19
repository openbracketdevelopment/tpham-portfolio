"use client";

import styles from "../ProjectItem/ProjectItem.module.scss";
import React from "react";
import { Button } from "../../components/Button/Button";
import Fancybox from "../Fancybox/Fancybox";
import Link from "next/link";

import espsData from "../project-data/Esps.json";

function earthx() {
  return (
    <>
      {/* WORK CONTENT */}
      <section className={styles["project__hero"]}>
        <div className={styles["project__img-wrap"]}>
          <img
            src={espsData.workImagePath}
            alt={espsData.workTitle}
            title={espsData.workTitle}
            className={styles["project__img"]}
          />
        </div>

        <h1 className={styles["project__title"]}>
          <img
            src={espsData.workLogo}
            alt={espsData.workTitle}
            title={espsData.workTitle}
          />
        </h1>
      </section>
      <section className={styles["project__container"]}>
        <div className={styles["project__info"]}>
          <div className={styles["project__description"]}>
            <p>{espsData.workDescription}</p>
          </div>

          <div className={styles["project__technology"]}>
            <div className={styles["project__details"]}>
              <div className="project__timeframe">
                <h3>Timeframe</h3>
                <p>{espsData.workTimeFrame}</p>
              </div>
              <div className="project__role">
                <h3>Role</h3>
                <p>{espsData.workRole}</p>
              </div>
              <div className="project__technologies">
                <h3>Platforms</h3>
                <p>{espsData.workTechnology}</p>
              </div>
              <div className="project__category">
                <h3>Category</h3>
                <p>{espsData.workCategory}</p>
              </div>
            </div>
          </div>

          <div className={styles["project__btns"]}>
            <Button
              btnLabel="See it Live"
              btnUrl={espsData.workLiveLink}
              btnTarget="_blank"
            />
          </div>
        </div>
      </section>
      {/* DESKTOP */}
      <section className={styles["project__container"]}>
        <div className={styles["project__section-heading"]}>
          <h3>Desktop</h3>
        </div>
        <div className={styles["project__work-desktop"]}>
          <div className={styles["project__browser-head"]}>
            <div className={styles["project__browser-head-wrap"]}>
              <div className={`${styles["project__dot"]} ${styles["project__dot-1"]}`}></div>
              <div className={`${styles["project__dot"]} ${styles["project__dot-2"]}`}></div>
              <div className={`${styles["project__dot"]} ${styles["project__dot-3"]}`}></div>
            </div>
          </div>
          <div className={styles["project__desktop-piece"]}>
            <video
              className={`${styles["project__video"]} project__desktop-website`}
              muted={true}
              loop={true}
              autoPlay={true}
              playsInline={true}
              src={espsData.workDesktopClip1}
            ></video>
          </div>
        </div>
      </section>
      {/* WORK WALL */}
      <section className={styles["project__container-full"]}>
        <div className="project__work-wall">
          <img src={espsData.workImagePath2} alt="" />
        </div>
      </section>
      {/* MOBILE */}
      <section className={styles["project__container"]}>
        <div className={styles["project__section-heading"]}>
          <h3>Mobile</h3>
        </div>
        <div className={styles["project__mobile"]}>
          <div className={`${styles["project__mobile-view"]} project__mobile-view-1`}>
            <div className={styles["project__mobile-lockup"]}>
              <video
                className={`${styles["project__video"]} ${styles["project__mobile-website"]}`}
                muted={true}
                loop={true}
                autoPlay={true}
                playsInline={true}
                src={espsData.workMobileClip1}
              ></video>
              <div className={styles["project__mobile-bg"]}>
                <svg viewBox="0 0 491.577 987.003">
                  <g>
                    <path
                      d="M483.652,916c0,38.5-31.5,70-70,70h-337c-38.5,0-70-31.5-70-70V71
		c0-38.5,31.5-70,70-70h337c38.5,0,70,31.5,70,70V916z"
                    />
                    <path d="M6.652,127.888h-3.41c-1.1,0-2,0.9-2,2v34.705c0,1.1,0.9,2,2,2h3.41" />
                    <path d="M6.652,212.263h-3.41c-1.1,0-2,0.9-2,2v67.987c0,1.1,0.9,2,2,2h3.41" />
                    <path d="M6.652,302.138h-3.41c-1.1,0-2,0.9-2,2v67.987c0,1.1,0.9,2,2,2h3.41" />
                    <path
                      d="M483.652,212.263h3.41c1.1,0,2,0.9,2,2v67.987c0,1.1-0.9,2-2,2h-3.41
		"
                    />
                    <circle cx="169.152" cy="66.5" r="7" />
                    <path
                      d="M286.241,66.5c0,2.642-2.25,4.803-5,4.803h-73.5
		c-2.75,0-5-2.162-5-4.803s2.25-4.803,5-4.803h73.5C283.991,61.697,286.241,63.858,286.241,66.5z"
                    />
                    <circle cx="243.652" cy="921.5" r="37" />
                    <path
                      d="M474.317,913.859c0,35.2-28.8,64-64,64H78.984c-35.2,0-64-28.8-64-64
		V73c0-35.2,28.8-64,64-64h331.333c35.2,0,64,28.8,64,64V913.859z"
                    />
                  </g>
                </svg>
              </div>
            </div>
          </div>
          <div className={`${styles["project__mobile-view"]} project__mobile-view-2`}>
            <div className={styles["project__mobile-lockup"]}>
              <video
                className={`${styles["project__video"]} ${styles["project__mobile-website"]}`}
                muted={true}
                loop={true}
                autoPlay={true}
                playsInline={true}
                src={espsData.workMobileClip2}
              ></video>
              <div className={styles["project__mobile-bg"]}>
                <svg viewBox="0 0 491.577 987.003">
                  <g>
                    <path
                      d="M483.652,916c0,38.5-31.5,70-70,70h-337c-38.5,0-70-31.5-70-70V71
		c0-38.5,31.5-70,70-70h337c38.5,0,70,31.5,70,70V916z"
                    />
                    <path d="M6.652,127.888h-3.41c-1.1,0-2,0.9-2,2v34.705c0,1.1,0.9,2,2,2h3.41" />
                    <path d="M6.652,212.263h-3.41c-1.1,0-2,0.9-2,2v67.987c0,1.1,0.9,2,2,2h3.41" />
                    <path d="M6.652,302.138h-3.41c-1.1,0-2,0.9-2,2v67.987c0,1.1,0.9,2,2,2h3.41" />
                    <path
                      d="M483.652,212.263h3.41c1.1,0,2,0.9,2,2v67.987c0,1.1-0.9,2-2,2h-3.41
		"
                    />
                    <circle cx="169.152" cy="66.5" r="7" />
                    <path
                      d="M286.241,66.5c0,2.642-2.25,4.803-5,4.803h-73.5
		c-2.75,0-5-2.162-5-4.803s2.25-4.803,5-4.803h73.5C283.991,61.697,286.241,63.858,286.241,66.5z"
                    />
                    <circle cx="243.652" cy="921.5" r="37" />
                    <path
                      d="M474.317,913.859c0,35.2-28.8,64-64,64H78.984c-35.2,0-64-28.8-64-64
		V73c0-35.2,28.8-64,64-64h331.333c35.2,0,64,28.8,64,64V913.859z"
                    />
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* MOBILE AND DESKTOP EXAMPLES */}
      <section className={styles["project__container-full"]}>
        <div className={styles["project__section-heading"]}>
          <h3>Responsive Design</h3>
        </div>
        <div className="project__work-wall">
          <img src={espsData.workImagePath3} alt="" />
        </div>
      </section>
      {/* Branding */}
      <section className={styles["project__container"]}>
        <div className={styles["project__section-heading"]}>
          <h3>Branding</h3>
        </div>
        <div className={`${styles["project__logo-showcase"]} ${styles["project__logo-showcase-full"]}`}>
          <Fancybox>
            <a data-fancybox href="/assets/images/esps-logo-1.svg">
              <img
                src="/assets/images/esps-logo-1.svg"
                alt="ESPS Trailers Logo 1"
              />
            </a>
          </Fancybox>
          <Fancybox>
            <a data-fancybox href="/assets/images/esps-logo-2.svg">
              <img
                src="/assets/images/esps-logo-2.svg"
                alt="ESPS Trailers Logo 2"
              />
            </a>
          </Fancybox>
        </div>
        <div className={`${styles["project__logo-showcase"]} ${styles["project__logo-showcase-thirds"]}`}>
          <Fancybox>
            <a data-fancybox href="/assets/images/esps-icon-1.svg">
              <img
                src="/assets/images/esps-icon-1.svg"
                alt="ESPS Trailers Icon 1"
              />
            </a>
          </Fancybox>
          <Fancybox>
            <a data-fancybox href="/assets/images/esps-icon-2.svg">
              <img
                src="/assets/images/esps-icon-2.svg"
                alt="ESPS Trailers Icon 2"
              />
            </a>
          </Fancybox>

          <Fancybox>
            <a data-fancybox href="/assets/images/esps-icon-3.svg">
              <img
                src="/assets/images/esps-icon-3.svg"
                alt="ESPS Trailers Icon 3"
              />
            </a>
          </Fancybox>
        </div>
      </section>
      {/* Tarps, Mudflaps signs etc */}
      <section className={styles["project__container"]}>
        <div className={styles["project__section-heading"]}>
          <h3>Tarps, Mudflaps and Signs</h3>
        </div>
        <div className={`${styles["project__logo-showcase"]} ${styles["project__logo-showcase-halves"]}`}>
          <Fancybox>
            <a data-fancybox href="/assets/images/esps-signs.webp">
              <img
                src="/assets/images/esps-signs.webp"
                alt="ESPS Trailers Sign"
              />
            </a>
          </Fancybox>
          <Fancybox>
            <a data-fancybox href="/assets/images/esps-tarps.webp">
              <img
                src="/assets/images/esps-tarps.webp"
                alt="ESPS Trailers Tarps"
              />
            </a>
          </Fancybox>

          <Fancybox>
            <a data-fancybox href="/assets/images/tarps-applied.webp">
              <img
                src="/assets/images/tarps-applied.webp"
                alt="ESPS Trailers Applied Tarps"
              />
            </a>
          </Fancybox>

          <Fancybox>
            <a data-fancybox href="/assets/images/esps-mudflaps.webp">
              <img
                src="/assets/images/esps-mudflaps.webp"
                alt="ESPS Trailers Mudflaps"
              />
            </a>
          </Fancybox>
        </div>
      </section>
      {/* ALL PROJECTS BTN */}
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

export default earthx;
