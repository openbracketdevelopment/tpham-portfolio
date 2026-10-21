"use client";

import styles from "../ProjectItem/ProjectItem.module.scss";
import React from "react";
import { Button } from "../../components/Button/Button";
import Fancybox from "../Fancybox/Fancybox";
import Link from "next/link";

import wilsonsSeafoodData from "../project-data/WilsonsSeafood.json";

function wilsonsSeafood() {
  return (
    <>
      {/* WORK CONTENT */}
      <section className={styles["project__hero"]}>
        <div className={styles["project__img-wrap"]}>
          <img
            src={wilsonsSeafoodData.workImagePath}
            alt={wilsonsSeafoodData.workTitle}
            title={wilsonsSeafoodData.workTitle}
            className={styles["project__img"]}
          />
        </div>

        <h1 className={styles["project__title"]}>
          <img
            src={wilsonsSeafoodData.workLogo}
            alt={wilsonsSeafoodData.workTitle}
            title={wilsonsSeafoodData.workTitle}
          />
        </h1>
      </section>
      <section className={styles["project__container"]}>
        <div className={styles["project__info"]}>
          <div className={styles["project__description"]}>
            <p>{wilsonsSeafoodData.workDescription}</p>
          </div>
          <div className={styles["project__technology"]}>
            <div className={styles["project__details"]}>
              <div className="project__timeframe">
                <h3>Timeframe</h3>
                <p>{wilsonsSeafoodData.workTimeFrame}</p>
              </div>
              <div className="project__role">
                <h3>Role</h3>
                <p>{wilsonsSeafoodData.workRole}</p>
              </div>
              <div className="project__technologies">
                <h3>Platforms</h3>
                <p>{wilsonsSeafoodData.workTechnology}</p>
              </div>
              <div className="project__category">
                <h3>Category</h3>
                <p>{wilsonsSeafoodData.workCategory}</p>
              </div>
            </div>
          </div>

          <div className={styles["project__btns"]}>
            <Button
              btnLabel="See it Live"
              btnUrl={wilsonsSeafoodData.workLiveLink}
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
              src={wilsonsSeafoodData.workDesktopClip}
            ></video>
          </div>
        </div>
      </section>
      {/* WORK WALL */}
      <section className={styles["project__container-full"]}>
        <div className="project__work-wall">
          <img src={wilsonsSeafoodData.workImagePath2} alt="" />
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
              src={wilsonsSeafoodData.workDesktopClip2}
            ></video>
          </div>
        </div>
      </section>
      {/* MOBILE AND DESKTOP EXAMPLES */}
      <section className={styles["project__container-full"]}>
        <div className="project__work-wall">
          <img src={wilsonsSeafoodData.workImagePath3} alt="" />
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
                src={wilsonsSeafoodData.workMobileClip2}
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
                src={wilsonsSeafoodData.workMobileClip1}
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
      {/* Branding */}
      <section className={styles["project__container"]}>
        <div className={`${styles["project__logo-showcase"]} ${styles["project__logo-showcase-full"]}`}>
          <Fancybox>
            <a data-fancybox href="/assets/images/ws-logo-01.svg">
              <img
                src="/assets/images/ws-logo-01.svg"
                alt="Wilson's Seafood Logo 1"
              />
            </a>
          </Fancybox>
          <Fancybox>
            <a data-fancybox href="/assets/images/ws-logo-02.svg">
              <img
                src="/assets/images/ws-logo-02.svg"
                alt="Wilson's Seafood Logo 2"
              />
            </a>
          </Fancybox>
        </div>
        <div className={`${styles["project__logo-showcase"]} ${styles["project__logo-showcase-thirds"]}`}>
          <Fancybox>
            <a data-fancybox href="/assets/images/ws-logo-03.svg">
              <img
                src="/assets/images/ws-logo-03.svg"
                alt="Wilson's Seafood Icon 1"
              />
            </a>
          </Fancybox>
          <Fancybox>
            <a data-fancybox href="/assets/images/ws-logo-04.svg">
              <img
                src="/assets/images/ws-logo-04.svg"
                alt="Wilson's Seafood Icon 2"
              />
            </a>
          </Fancybox>

          <Fancybox>
            <a data-fancybox href="/assets/images/ws-logo-05.svg">
              <img
                src="/assets/images/ws-logo-05.svg"
                alt="Wilson's Seafood Icon 3"
              />
            </a>
          </Fancybox>
        </div>
      </section>
      {/* Other Brand Concepts */}
      <section className={styles["project__container"]}>
        <div className={`${styles["project__logo-showcase"]} ${styles["project__logo-showcase-full"]}`}>
          <Fancybox>
            <a data-fancybox href="/assets/images/ws-logo-weave_1@3x-100.jpg">
              <img
                src="/assets/images/ws-logo-weave_1@3x-100.jpg"
                alt="Wilson's Seafood Concept 1"
              />
            </a>
          </Fancybox>
          <Fancybox>
            <a data-fancybox href="/assets/images/ws-monogram_1@3x-100.jpg">
              <img
                src="/assets/images/ws-monogram_1@3x-100.jpg"
                alt="Wilson's Seafood Concept 2"
              />
            </a>
          </Fancybox>
          <Fancybox>
            <a
              data-fancybox
              href="/assets/images/ws-former-concept_1@3x-100.jpg"
            >
              <img
                src="/assets/images/ws-former-concept_1@3x-100.jpg"
                alt="Wilson's Seafood Concept 3"
              />
            </a>
          </Fancybox>
          <Fancybox>
            <a
              data-fancybox
              href="/assets/images/ws-former-concept-2_1@3x-100.jpg"
            >
              <img
                src="/assets/images/ws-former-concept-2_1@3x-100.jpg"
                alt="Wilson's Seafood Concept 4"
              />
            </a>
          </Fancybox>
          <Fancybox>
            <a
              data-fancybox
              href="/assets/images/aws-former-concept-3@3x-100.jpg"
            >
              <img
                src="/assets/images/aws-former-concept-3@3x-100.jpg"
                alt="Wilson's Seafood Concept 5"
              />
            </a>
          </Fancybox>
        </div>
      </section>
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

export default wilsonsSeafood;
