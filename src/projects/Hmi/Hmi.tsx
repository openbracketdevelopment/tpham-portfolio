"use client";

import styles from "../ProjectItem/ProjectItem.module.scss";
import React from "react";
import { Button } from "../../components/Button/Button";
// import Fancybox from "../Fancybox/Fancybox";
import Link from "next/link";

import hmiData from "../project-data/Hmi.json";

function hmi() {
  return (
    <>
      {/* WORK CONTENT */}
      <section className={styles["project__hero"]}>
        <div className={styles["project__img-wrap"]}>
          <img
            src={hmiData.workImagePath}
            alt={hmiData.workTitle}
            title={hmiData.workTitle}
            className={styles["project__img"]}
          />
        </div>

        <h1 className={styles["project__title"]}>
          <img
            src={hmiData.workLogo}
            alt={hmiData.workTitle}
            title={hmiData.workTitle}
          />
        </h1>
      </section>
      {/* DESCRIPTION */}
      <section className={styles["project__container"]}>
        <div className={styles["project__info"]}>
          <div className={styles["project__description"]}>
            <p>{hmiData.workDescription}</p>
          </div>
          <div className={styles["project__technology"]}>
            <div className={styles["project__details"]}>
              <div className="project__timeframe">
                <h3>Timeframe</h3>
                <p>{hmiData.workTimeFrame}</p>
              </div>
              <div className="project__role">
                <h3>Role</h3>
                <p>{hmiData.workRole}</p>
              </div>
              <div className="project__technologies">
                <h3>Platforms</h3>
                <p>{hmiData.workTechnology}</p>
              </div>
              <div className="project__category">
                <h3>Category</h3>
                <p>{hmiData.workCategory}</p>
              </div>
            </div>
          </div>
          <div className={styles["project__btns"]}>
            <Button
              btnLabel="Visit Site"
              btnUrl={hmiData.workLiveLink}
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
              src={hmiData.workDesktopClip}
            ></video>
          </div>
        </div>
      </section>
      {/* WORK WALL */}
      <section className={styles["project__container-full"]}>
        <div className="project__work-wall">
          <img src={hmiData.workImagePath2} alt="" />
        </div>
      </section>
      {/* DESKTOP 2 */}
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
              src={hmiData.workDesktopClip2}
            ></video>
          </div>
        </div>
      </section>
      {/* MOBILE AND DESKTOP EXAMPLES */}
      <section className={styles["project__container-full"]}>
        <div className={styles["project__section-heading"]}>
          <h3>Responsive Design</h3>
        </div>
        <div className="project__work-wall">
          <img src={hmiData.workImagePath3} alt="" />
        </div>
      </section>
      {/* MOBILE */}
      <section className={styles["project__container-full"]}>
        <div className={styles["project__section-heading"]}>
          <h3>Mobile</h3>
        </div>
        <div className={styles["project__mobile"]}>
          <div className={styles["project__mobile-view"]}>
            <div className={styles["project__mobile-lockup"]}>
              <video
                className={`${styles["project__video"]} ${styles["project__mobile-website"]}`}
                muted={true}
                loop={true}
                autoPlay={true}
                playsInline={true}
                src={hmiData.workMobileClip2}
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
          <div className={styles["project__mobile-view"]}>
            <div className={styles["project__mobile-lockup"]}>
              <video
                className={`${styles["project__video"]} ${styles["project__mobile-website"]}`}
                muted={true}
                loop={true}
                autoPlay={true}
                playsInline={true}
                src={hmiData.workMobileClip1}
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
          <div className={styles["project__mobile-view"]}>
            <div className={styles["project__mobile-lockup"]}>
              <video
                className={`${styles["project__video"]} ${styles["project__mobile-website"]}`}
                muted={true}
                loop={true}
                autoPlay={true}
                playsInline={true}
                src={hmiData.workMobileClip3}
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
          <div className={styles["project__mobile-view"]}>
            <div className={styles["project__mobile-lockup"]}>
              <video
                className={`${styles["project__video"]} ${styles["project__mobile-website"]}`}
                muted={true}
                loop={true}
                autoPlay={true}
                playsInline={true}
                src={hmiData.workMobileClip4}
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
      {/* CUBE ANIMATION */}
      <section className={`${styles["project__container-full"]} ${styles["project__container-dark"]}`}>
        <div className={styles["project__section-heading"]}>
          <h3>Cube Animation</h3>
        </div>
        <div className="project__work-wall">
          <video
            className={`${styles["project__video"]} project__desktop-website`}
            muted={true}
            loop={true}
            autoPlay={true}
            playsInline={true}
            src={hmiData.workDesktopClip4}
          ></video>
        </div>
      </section>
      {/* MENUS */}
      <section className={styles["project__container"]}>
        <div className={styles["project__section-heading"]}>
          <h3>MENUS & 3D ART</h3>
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
              src={hmiData.workDesktopClip3}
            ></video>
          </div>
        </div>
      </section>

      {/* ALL PROJECTS */}
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
