import React from "react";
import { Helmet } from "react-helmet-async";
import "../App.css";
// import { Button } from "../components/Button";
import "./ProjectItem.css";
import * as FaIcons from "react-icons/fa";
import Fancybox from "./fancybox.js";
import { HashLink as Link } from "react-router-hash-link";

const JohnnieWalkerData = require("../projects/project-data/JohnnieWalker");

function JohnnieWalker() {
  return (
    <>
      {/* METADATA INCLUDE */}
      <Helmet>
        <meta charSet="utf-8" />
        <title>{JohnnieWalkerData.pageTitle}</title>
        <meta name="description" content={JohnnieWalkerData.pageDescription} />
        <link rel="canonical" href={JohnnieWalkerData.canonical} />
        {/* FB OG META */}
        <meta property="og:url" content={JohnnieWalkerData.pageUrl} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={JohnnieWalkerData.pageTitle} />
        <meta
          property="og:description"
          content={JohnnieWalkerData.pageDescription}
        />
        <meta property="og:image" content={JohnnieWalkerData.pageImage} />
        <meta property="og:locale" content={JohnnieWalkerData.fbOgLocale} />
        <meta
          property="og:site_name"
          content={JohnnieWalkerData.fbOgSiteName}
        />
        <meta property="og:app_id" content={JohnnieWalkerData.fbOgAppId} />
        {/* TW OG META */}
        <meta name="twitter:card" content={JohnnieWalkerData.twOgCard} />
        <meta name="twitter:site" content={JohnnieWalkerData.twOgSite} />
        <meta name="twitter:creator" content={JohnnieWalkerData.twOgCreator} />
        <meta property="og:url" content={JohnnieWalkerData.pageUrl} />
        <meta property="twitter:title" content={JohnnieWalkerData.pageTitle} />
        <meta
          property="twitter:description"
          content={JohnnieWalkerData.pageDescription}
        />
        <meta property="twitter:image" content={JohnnieWalkerData.pageImage} />
      </Helmet>
      {/* WORK CONTENT */}
      <section className="project__hero">
        <div className="project__img-wrap">
          <img
            src={JohnnieWalkerData.workImagePath}
            alt={JohnnieWalkerData.workTitle}
            title={JohnnieWalkerData.workTitle}
            className="project__img"
          />
        </div>

        <h1 className="project__title">
          <img
            src={JohnnieWalkerData.workLogo}
            alt={JohnnieWalkerData.workTitle}
            title={JohnnieWalkerData.workTitle}
          />
        </h1>
      </section>
      <section className="project__container">
        <div className="project__info">
          <div className="project__description">
            <p>{JohnnieWalkerData.workDescription}</p>
          </div>
          <div className="project__technology">
            <div className="project__details">
              <div className="project__timeframe">
                <h3>Timeframe</h3>
                <p>{JohnnieWalkerData.workTimeFrame}</p>
              </div>
              <div className="project__role">
                <h3>Role</h3>
                <p>{JohnnieWalkerData.workRole}</p>
              </div>
              <div className="project__technologies">
                <h3>Platforms</h3>
                <p>{JohnnieWalkerData.workTechnology}</p>
              </div>
              <div className="project__category">
                <h3>Category</h3>
                <p>{JohnnieWalkerData.workCategory}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="project__container">
        <div className="project__section-heading">
          <h3>Play Video</h3>
        </div>
        <div className="project__logo-showcase project__logo-showcase-full">
          <Fancybox>
            <a
              className="project__video-link"
              data-fancybox
              href={JohnnieWalkerData.workDesktopClip}
            >
              <FaIcons.FaPlay className="project__video-icon" />
              <img
                src="/assets/images/jwalker-video-thumb.webp"
                alt="Johnnie Walker Video 2022"
              />
            </a>
          </Fancybox>
        </div>
      </section>
      {/* ALL WORK */}
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

export default JohnnieWalker;
