import React from "react";
import { Helmet } from "react-helmet-async";
import "../App.css";
// import { Button } from "../components/Button";
import "./ProjectItem.css";
import * as FaIcons from "react-icons/fa";
import Fancybox from "./fancybox.js";
import { HashLink as Link } from "react-router-hash-link";

const CrownRoyalData = require("../projects/project-data/CrownRoyal");

function crownRoyal() {
  return (
    <>
      {/* METADATA INCLUDE */}
      <Helmet>
        <meta charSet="utf-8" />
        <title>{CrownRoyalData.pageTitle}</title>
        <meta name="description" content={CrownRoyalData.pageDescription} />
        <link rel="canonical" href={CrownRoyalData.canonical} />
        {/* FB OG META */}
        <meta property="og:url" content={CrownRoyalData.pageUrl} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={CrownRoyalData.pageTitle} />
        <meta
          property="og:description"
          content={CrownRoyalData.pageDescription}
        />
        <meta property="og:image" content={CrownRoyalData.pageImage} />
        <meta property="og:locale" content={CrownRoyalData.fbOgLocale} />
        <meta property="og:site_name" content={CrownRoyalData.fbOgSiteName} />
        <meta property="og:app_id" content={CrownRoyalData.fbOgAppId} />
        {/* TW OG META */}
        <meta name="twitter:card" content={CrownRoyalData.twOgCard} />
        <meta name="twitter:site" content={CrownRoyalData.twOgSite} />
        <meta name="twitter:creator" content={CrownRoyalData.twOgCreator} />
        <meta property="og:url" content={CrownRoyalData.pageUrl} />
        <meta property="twitter:title" content={CrownRoyalData.pageTitle} />
        <meta
          property="twitter:description"
          content={CrownRoyalData.pageDescription}
        />
        <meta property="twitter:image" content={CrownRoyalData.pageImage} />
      </Helmet>
      {/* WORK CONTENT */}
      <section className="project__hero">
        <div className="project__img-wrap">
          <img
            src={CrownRoyalData.workImagePath}
            alt={CrownRoyalData.workTitle}
            title={CrownRoyalData.workTitle}
            className="project__img"
          />
        </div>

        <h1 className="project__title">
          <img
            src={CrownRoyalData.workLogo}
            alt={CrownRoyalData.workTitle}
            title={CrownRoyalData.workTitle}
          />
        </h1>
      </section>
      <section className="project__container">
        <div className="project__info">
          <div className="project__description">
            <p>{CrownRoyalData.workDescription}</p>
          </div>
          <div className="project__technology">
            <div className="project__details">
              <div className="project__timeframe">
                <h3>Timeframe</h3>
                <p>{CrownRoyalData.workTimeFrame}</p>
              </div>
              <div className="project__role">
                <h3>Role</h3>
                <p>{CrownRoyalData.workRole}</p>
              </div>
              <div className="project__technologies">
                <h3>Platforms</h3>
                <p>{CrownRoyalData.workTechnology}</p>
              </div>
              <div className="project__category">
                <h3>Category</h3>
                <p>{CrownRoyalData.workCategory}</p>
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
              href={CrownRoyalData.workDesktopClip}
            >
              <FaIcons.FaPlay className="project__video-icon" />
              <img
                src="/assets/images/crown-video-thumb.webp"
                alt="Crown Royal and NFL 2022"
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

export default crownRoyal;
