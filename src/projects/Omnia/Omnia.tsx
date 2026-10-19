"use client";

import React from "react";
import { Button } from "../../components/Button/Button";
import "../../styles/globals.css";
import "../ProjectItem/ProjectItem.css";
import Fancybox from "../Fancybox/Fancybox";
import Link from "next/link";

import omniaData from "../project-data/Omnia.json";

function Omnia() {
  return (
    <>
      {/* WORK CONTENT */}
      <section className="project__hero">
        <div className="project__img-wrap">
          <img
            src={omniaData.workImagePath}
            alt={omniaData.workTitle}
            title={omniaData.workTitle}
            className="project__img"
          />
        </div>

        <h1 className="project__title">
          <img
            src={omniaData.workLogo}
            alt={omniaData.workTitle}
            title={omniaData.workTitle}
          />
        </h1>
      </section>
      <section className="project__container">
        <div className="project__info">
          <div className="project__description">
            <p>{omniaData.workDescription}</p>
          </div>
          <div className="project__technology">
            <div className="project__details">
              <div className="project__timeframe">
                <h3>Timeframe</h3>
                <p>{omniaData.workTimeFrame}</p>
              </div>
              <div className="project__role">
                <h3>Role</h3>
                <p>{omniaData.workRole}</p>
              </div>
              <div className="project__technologies">
                <h3>Platforms</h3>
                <p>{omniaData.workTechnology}</p>
              </div>
              <div className="project__category">
                <h3>Category</h3>
                <p>{omniaData.workCategory}</p>
              </div>
            </div>
          </div>

          <div className="project__btns">
            <Button
              btnLabel="See it Live"
              btnUrl={omniaData.workLiveLink}
              btnTarget="_blank"
            />
          </div>
        </div>
      </section>
      {/* DESKTOP */}
      <section className="project__container">
        <div className="project__section-heading">
          <h3>Desktop</h3>
        </div>
        <div className="project__work-desktop">
          <div className="project__browser-head">
            <div className="project__browser-head-wrap">
              <div className="project__dot project__dot-1"></div>
              <div className="project__dot project__dot-2"></div>
              <div className="project__dot project__dot-3"></div>
            </div>
          </div>
          <div className="project__desktop-piece">
            <video
              className="project__video project__desktop-website"
              muted={true}
              loop={true}
              autoPlay={true}
              playsInline={true}
              src={omniaData.workDesktopClip}
            ></video>
          </div>
        </div>
      </section>
      {/* WORK WALL */}
      <section className="project__container-full">
        <div className="project__work-wall">
          <img src={omniaData.workImagePath2} alt="" />
        </div>
      </section>
      {/* DESKTOP */}
      <section className="project__container">
        <div className="project__section-heading">
          <h3>Menu</h3>
        </div>
        <div className="project__work-desktop">
          <div className="project__browser-head">
            <div className="project__browser-head-wrap">
              <div className="project__dot project__dot-1"></div>
              <div className="project__dot project__dot-2"></div>
              <div className="project__dot project__dot-3"></div>
            </div>
          </div>
          <div className="project__desktop-piece">
            <video
              className="project__video project__desktop-website"
              muted={true}
              loop={true}
              autoPlay={true}
              playsInline={true}
              src={omniaData.workDesktopClip2}
            ></video>
          </div>
        </div>
      </section>
      {/* MOBILE AND DESKTOP EXAMPLES */}
      <section className="project__container-full">
        <div className="project__section-heading">
          <h3>Responsive Design</h3>
        </div>
        <div className="project__work-wall">
          <img src={omniaData.workImagePath3} alt="" />
        </div>
      </section>
      {/* MOBILE */}
      <section className="project__container">
        <div className="project__section-heading">
          <h3>Mobile</h3>
        </div>
        <div className="project__mobile">
          <div className="project__mobile-view project__mobile-view-1">
            <div className="project__mobile-lockup">
              <video
                className="project__video project__mobile-website"
                muted={true}
                loop={true}
                autoPlay={true}
                playsInline={true}
                src={omniaData.workMobileClip2}
              ></video>
              <div className="project__mobile-bg">
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
          <div className="project__mobile-view project__mobile-view-2">
            <div className="project__mobile-lockup">
              <video
                className="project__video project__mobile-website"
                muted={true}
                loop={true}
                autoPlay={true}
                playsInline={true}
                src={omniaData.workMobileClip1}
              ></video>
              <div className="project__mobile-bg">
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
      <section className="project__container project__work-nav">
        <Link
          href="/#work"
          className="project__all-work-btn"
        >
          All Projects
        </Link>
      </section>
    </>
  );
}

export default Omnia;
