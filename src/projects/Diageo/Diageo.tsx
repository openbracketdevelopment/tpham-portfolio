"use client";

import styles from "../ProjectItem/ProjectItem.module.scss";
import React from "react";
import { Button } from "../../components/Button/Button";
import Fancybox from "../Fancybox/Fancybox";
import Link from "next/link";

import diageoData from "../project-data/Diageo.json";

function hmi() {
  return (
    <>
      {/* WORK CONTENT */}
      <section className={styles["project__hero"]}>
        <div className={styles["project__img-wrap"]}>
          <img
            src={diageoData.workImagePath}
            alt={diageoData.workTitle}
            title={diageoData.workTitle}
            className={styles["project__img"]}
          />
        </div>

        <h1 className={styles["project__title"]}>
          <img
            src={diageoData.workLogo}
            alt={diageoData.workTitle}
            title={diageoData.workTitle}
          />
        </h1>
      </section>
      <section className={styles["project__container"]}>
        <div className={styles["project__info"]}>
          <div className={styles["project__description"]}>
            <p>{diageoData.workDescription}</p>
          </div>
          <div className={styles["project__technology"]}>
            <div className={styles["project__details"]}>
              <div className="project__timeframe">
                <h3>Timeframe</h3>
                <p>{diageoData.workTimeFrame}</p>
              </div>
              <div className="project__role">
                <h3>Role</h3>
                <p>{diageoData.workRole}</p>
              </div>
              <div className="project__technologies">
                <h3>Platforms</h3>
                <p>{diageoData.workTechnology}</p>
              </div>
              <div className="project__category">
                <h3>Category</h3>
                <p>{diageoData.workCategory}</p>
              </div>
            </div>
          </div>
          <div className={styles["project__btns"]}>
            <Button
              btnLabel="See Ungated Version"
              btnUrl={diageoData.workLiveLink}
              btnTarget="_blank"
            />
            <Button
              btnLabel="Okta Gated Version"
              btnUrl={diageoData.workLiveLink4}
              btnTarget="_blank"
            />
            <Button
              btnLabel="G2FA Version"
              btnUrl={diageoData.workLiveLink3}
              btnTarget="_blank"
            />
          </div>
        </div>
      </section>

      {/* DESKTOP */}
      <section className={styles["project__container"]}>
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
              src={diageoData.workDesktopClip2}
            ></video>
          </div>
        </div>
      </section>

      {/* ARTWORK */}
      <section className={styles["project__container"]}>
        <div className={`${styles["project__logo-showcase"]} ${styles["project__logo-showcase-full"]}`}>
          <Fancybox>
            <a data-fancybox href={diageoData.workImagePath4}>
              <img src={diageoData.workImagePath4} alt="Diageo Banner" />
            </a>
          </Fancybox>
          <Fancybox>
            <a data-fancybox href={diageoData.workImagePath5}>
              <img src={diageoData.workImagePath5} alt="Diageo 404 page" />
            </a>
          </Fancybox>
        </div>
      </section>

      {/* WORK WALL */}
      <section className={styles["project__container-full"]}>
        <div className="project__work-wall">
          <img src={diageoData.workImagePath2} alt="" />
        </div>
      </section>
      {/* OKTA SSO */}
      <section className={styles["project__container"]}>
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
              src={diageoData.workDesktopClip}
            ></video>
          </div>
        </div>
      </section>
      {/* MOBILE AND DESKTOP EXAMPLES */}
      <section className={styles["project__container-full"]}>
        <div className="project__work-wall">
          <img src={diageoData.workImagePath3} alt="" />
        </div>
      </section>
      {/* MOBILE */}
      <section className={styles["project__container"]}>
        <div className={styles["project__mobile"]}>
          <div className={`${styles["project__mobile-view"]} project__mobile-view-1`}>
            <div className={styles["project__mobile-lockup"]}>
              <video
                className={`${styles["project__video"]} ${styles["project__mobile-website"]}`}
                muted={true}
                loop={true}
                autoPlay={true}
                playsInline={true}
                src={diageoData.workMobileClip2}
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
                src={diageoData.workMobileClip1}
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
      {/* EMAIL DESIGN */}
      <section className={`${styles["project__container"]} ${styles["project__container-dark"]}`}>
        <div className="project__work-emailer">
          <video
            className={`${styles["project__video"]} project__emailer-video`}
            muted={true}
            loop={true}
            autoPlay={true}
            playsInline={true}
            src={diageoData.workDesktopClip3}
          ></video>
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

export default hmi;
