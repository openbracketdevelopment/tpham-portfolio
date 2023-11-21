import React from "react";
import { Button } from "../components/Button";
import { Helmet } from "react-helmet-async";
import "../App.css";
import "./ProjectItem.css";
// import Fancybox from "./fancybox.js";
import { HashLink as Link } from "react-router-hash-link";

const earthxData = require("../projects/project-data/Earthx");

function earthx() {
  return (
    <>
      {/* METADATA INCLUDE */}
      <Helmet>
        <meta charSet="utf-8" />
        <title>{earthxData.pageTitle}</title>
        <meta name="description" content={earthxData.pageDescription} />
        <link rel="canonical" href={earthxData.canonical} />
        {/* FB OG META */}
        <meta property="og:url" content={earthxData.pageUrl} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={earthxData.pageTitle} />
        <meta property="og:description" content={earthxData.pageDescription} />
        <meta property="og:image" content={earthxData.pageImage} />
        <meta property="og:locale" content={earthxData.fbOgLocale} />
        <meta property="og:site_name" content={earthxData.fbOgSiteName} />
        <meta property="og:app_id" content={earthxData.fbOgAppId} />
        {/* TW OG META */}
        <meta name="twitter:card" content={earthxData.twOgCard} />
        <meta name="twitter:site" content={earthxData.twOgSite} />
        <meta name="twitter:creator" content={earthxData.twOgCreator} />
        <meta property="og:url" content={earthxData.pageUrl} />
        <meta property="twitter:title" content={earthxData.pageTitle} />
        <meta
          property="twitter:description"
          content={earthxData.pageDescription}
        />
        <meta property="twitter:image" content={earthxData.pageImage} />
      </Helmet>
      {/* WORK CONTENT */}
      <section className="project__hero">
        <div className="project__img-wrap">
          <img
            src={earthxData.workImagePath}
            alt={earthxData.workTitle}
            title={earthxData.workTitle}
            className="project__img"
          />
        </div>

        <h1 className="project__title">
          <img
            src={earthxData.workLogo}
            alt={earthxData.workTitle}
            title={earthxData.workTitle}
          />
        </h1>
      </section>
      <section className="project__container">
        <div className="project__info">
          <div className="project__description">
            <p>{earthxData.workDescription}</p>
          </div>
          <div className="project__technology">
            <div className="project__details">
              <div className="project__timeframe">
                <h3>Timeframe</h3>
                <p>{earthxData.workTimeFrame}</p>
              </div>
              <div className="project__role">
                <h3>Role</h3>
                <p>{earthxData.workRole}</p>
              </div>
              <div className="project__technologies">
                <h3>Platforms</h3>
                <p>{earthxData.workTechnology}</p>
              </div>
              <div className="project__category">
                <h3>Category</h3>
                <p>{earthxData.workCategory}</p>
              </div>
            </div>
          </div>
          <div className="project__btns">
            <Button
              btnLabel="Earthx2021"
              btnUrl={earthxData.workLiveLink}
              btnTarget="_blank"
            />
            <Button
              btnLabel="Earthx2020"
              btnUrl={earthxData.workLiveLink2}
              btnTarget="_blank"
            />
            <Button
              btnLabel="Earthx2019"
              btnUrl={earthxData.workLiveLink3}
              btnTarget="_blank"
            />
            <Button
              btnLabel="Eco-Art Competition"
              btnUrl={earthxData.workLiveLink4}
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
              src={earthxData.workDesktopClip1}
            ></video>
          </div>
        </div>
      </section>
      {/* WORK WALL */}
      <section className="project__container-full">
        <div className="project__work-wall">
          <img src={earthxData.workImagePath2} alt="" />
        </div>
      </section>
      {/* MENUS */}
      <section className="project__container">
        <div className="project__section-heading">
          <h3>Menus</h3>
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
              src={earthxData.workDesktopClip2}
            ></video>
          </div>
        </div>
      </section>
      {/* MOBILE AND DESKTOP EXAMPLES */}
      <section className="project__container-full">
        <div className="project__section-heading">
          <h3>E-Commerce & Eco-Art Competition</h3>
        </div>
        <div className="project__work-wall">
          <img src={earthxData.workImagePath3} alt="" />
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
                src={earthxData.workMobileClip1}
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
                src={earthxData.workMobileClip2}
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
      {/* Okta */}
      <section className="project__container">
        <div className="project__section-heading">
          <h3>Okta</h3>
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
            <img
              src={earthxData.workImagePath4}
              alt="EarthX Okta Sign On Screen"
            />
          </div>
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
            <img
              src={earthxData.workImagePath5}
              alt="EarthX Okta End-User Dashboard UI"
            />
          </div>
        </div>
      </section>
      {/* ALL WORK  */}
      <section className="project__container project__work-nav">
        <Link
          to="/#work"
          smooth={true}
          offset={0}
          duration={1500}
          className="project__all-work-btn"
        >
          All Projects
        </Link>
      </section>
    </>
  );
}

export default earthx;
