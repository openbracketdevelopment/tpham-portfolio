"use client";

import React from "react";
import { Button } from "../../components/Button/Button";
import "../../styles/globals.css";
import "../ProjectItem/ProjectItem.css";
import Fancybox from "../Fancybox/Fancybox";
import Link from "next/link";

import cintraData from "../project-data/Cintra.json";

function cintra() {
  return (
    <>
      {/* WORK CONTENT */}
      <section className="project__hero">
        <div className="project__img-wrap">
          <img
            src={cintraData.workImagePath}
            alt={cintraData.workTitle}
            title={cintraData.workTitle}
            className="project__img"
          />
        </div>

        <h1 className="project__title">
          <img
            src={cintraData.workLogo}
            alt={cintraData.workTitle}
            title={cintraData.workTitle}
          />
        </h1>
      </section>
      <section className="project__container">
        <div className="project__info">
          <div className="project__description">
            <p>{cintraData.workDescription}</p>
          </div>
          <div className="project__technology">
            <div className="project__details">
              <div className="project__timeframe">
                <h3>Timeframe</h3>
                <p>{cintraData.workTimeFrame}</p>
              </div>
              <div className="project__role">
                <h3>Role</h3>
                <p>{cintraData.workRole}</p>
              </div>
              <div className="project__technologies">
                <h3>Platforms</h3>
                <p>{cintraData.workTechnology}</p>
              </div>
              <div className="project__category">
                <h3>Category</h3>
                <p>{cintraData.workCategory}</p>
              </div>
            </div>
          </div>
          {/* BUTTONS */}
          <div className="project__btns">
            <Button
              btnLabel="Launch the App"
              btnUrl={cintraData.workLiveLink}
              btnTarget="_blank"
            />
          </div>
        </div>
      </section>
      {/* MOBILE */}
      <section className="project__container">
        <div className="project__section-heading">
          <h3>Mobile App Design</h3>
        </div>
        <div className="project__mobile project__mobile-thirds">
          <div className="project__mobile-view project__mobile-view-1">
            <div className="project__mobile-lockup">
              <video
                className="project__video project__mobile-website"
                muted={true}
                loop={true}
                autoPlay={true}
                playsInline={true}
                src={cintraData.workMobileClip1}
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
                src={cintraData.workMobileClip2}
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
          <div className="project__mobile-view project__mobile-view-3">
            <div className="project__mobile-lockup">
              <video
                className="project__video project__mobile-website"
                muted={true}
                loop={true}
                autoPlay={true}
                playsInline={true}
                src={cintraData.workMobileClip3}
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
      {/* WORK WALL */}
      <section className="project__container-full">
        <div className="project__work-wall">
          <img src={cintraData.workImagePath3} alt="" />
        </div>
      </section>
      {/* THE APP */}
      <section className="project__container">
        <div className="project__section-heading">
          <h3>The App</h3>
        </div>
        <div className="project__launcher-box project__launcher-box-cintra">
          <Button
            btnLabel="Launch the App"
            btnUrl={cintraData.workLiveLink}
            btnTarget="_blank"
          />
        </div>
      </section>
      {/* UIUX FLOW CHARTS */}
      <section className="project__container">
        <div className="project__section-heading">
          <h3>UI/UX and Flow Charts</h3>
        </div>
        <div className="project__section-heading-full">
          <h4>Sign Up Experience</h4>
        </div>
        <Fancybox>
          <a
            className="project__img-lightbox"
            data-fancybox
            href="/assets/images/TEXpress-$aver---Sign-Up-Process-full-res.webp"
          >
            <img
              src="/assets/images/TEXpress %24aver - Sign Up Process.webp"
              alt="Cintra TexPress Saver Sign Up Process"
            />
          </a>
        </Fancybox>
        <div className="project__section-heading-full">
          <h4>Dashboard Interface and UX</h4>
        </div>
        <Fancybox>
          <a
            className="project__img-lightbox"
            data-fancybox
            href="/assets/images/TEXpress-$aver---Dashboard-full-res.webp"
          >
            <img
              src="/assets/images/TEXpress %24aver - Dashboard.webp"
              alt="Cintra TexPress Saver Sign Up Process"
            />
          </a>
        </Fancybox>
      </section>
      {/* ALL WORK */}
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

export default cintra;
