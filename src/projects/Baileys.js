import React from "react";
import { Helmet } from "react-helmet-async";
import "../App.css";
import { Button } from "../components/Button";
import "./ProjectItem.css";
import * as FaIcons from "react-icons/fa";
import Fancybox from "./fancybox.js";
import { HashLink as Link } from "react-router-hash-link";

const BaileysData = require("../projects/project-data/Baileys");

function Baileys() {
  return (
    <>
      {/* METADATA INCLUDE */}
      <Helmet>
        <meta charSet="utf-8" />
        <title>{BaileysData.pageTitle}</title>
        <meta name="description" content={BaileysData.pageDescription} />
        <link rel="canonical" href={BaileysData.canonical} />
        {/* FB OG META */}
        <meta property="og:url" content={BaileysData.pageUrl} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={BaileysData.pageTitle} />
        <meta property="og:description" content={BaileysData.pageDescription} />
        <meta property="og:image" content={BaileysData.pageImage} />
        <meta property="og:locale" content={BaileysData.fbOgLocale} />
        <meta property="og:site_name" content={BaileysData.fbOgSiteName} />
        <meta property="og:app_id" content={BaileysData.fbOgAppId} />
        {/* TW OG META */}
        <meta name="twitter:card" content={BaileysData.twOgCard} />
        <meta name="twitter:site" content={BaileysData.twOgSite} />
        <meta name="twitter:creator" content={BaileysData.twOgCreator} />
        <meta property="og:url" content={BaileysData.pageUrl} />
        <meta property="twitter:title" content={BaileysData.pageTitle} />
        <meta
          property="twitter:description"
          content={BaileysData.pageDescription}
        />
        <meta property="twitter:image" content={BaileysData.pageImage} />
      </Helmet>
      {/* WORK CONTENT */}
      <section className="project__hero">
        <div className="project__img-wrap">
          <img
            src={BaileysData.workImagePath}
            alt={BaileysData.workTitle}
            title={BaileysData.workTitle}
            className="project__img"
          />
        </div>

        <h1 className="project__title">
          <img
            src={BaileysData.workLogo}
            alt={BaileysData.workTitle}
            title={BaileysData.workTitle}
          />
        </h1>
      </section>
      <section className="project__container">
        <div className="project__info">
          <div className="project__description">
            <p>{BaileysData.workDescription}</p>
          </div>
          <div className="project__technology">
            <div className="project__details">
              <div className="project__timeframe">
                <h3>Timeframe</h3>
                <p>{BaileysData.workTimeFrame}</p>
              </div>
              <div className="project__role">
                <h3>Role</h3>
                <p>{BaileysData.workRole}</p>
              </div>
              <div className="project__technologies">
                <h3>Platforms</h3>
                <p>{BaileysData.workTechnology}</p>
              </div>
              <div className="project__category">
                <h3>Category</h3>
                <p>{BaileysData.workCategory}</p>
              </div>
            </div>
          </div>
          <div className="project__btns">
            <h3>Project Affiliation: </h3>
            <Button
              btnLabel="Diageo Innovation"
              btnUrl={BaileysData.workLiveLink}
              btnTarget=""
            />
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
              href={BaileysData.workDesktopClip}
            >
              <FaIcons.FaPlay className="project__video-icon" />
              <img
                src="/assets/images/baileys-video-thumb.webp"
                alt="Baileys S'mores Video 2022"
              />
            </a>
          </Fancybox>
        </div>
      </section>
      <section className="project__container">
        <div className="project__section-heading">
          <h3>Various Video Sizes and Formats</h3>
          <p>
            Readjusted the graphics and video to fit each of the 4 sizes. Some
            of the visual effects were redone to fit the appropriate format and
            optimized for posting on social media.
          </p>
        </div>
        <div className="project__4col-showcase">
          <div className="project__thumbnail">
            <Fancybox>
              <a
                className="project__video-link"
                data-fancybox
                href={BaileysData.workDesktopClip2}
              >
                <img
                  className="project__thumbnail-img"
                  src={BaileysData.workImagePath2}
                  alt="Baileys S'mores 1x1"
                />
              </a>
            </Fancybox>
            <p className="project__thumbnail-text">1x1</p>
          </div>
          <div className="project__thumbnail">
            <Fancybox>
              <a
                className="project__video-link"
                data-fancybox
                href={BaileysData.workDesktopClip3}
              >
                <img
                  className="project__thumbnail-img"
                  src={BaileysData.workImagePath3}
                  alt="Baileys S'mores 9x16"
                />
              </a>
            </Fancybox>
            <p className="project__thumbnail-text">9x16</p>
          </div>
          <div className="project__thumbnail">
            <Fancybox>
              <a
                className="project__video-link"
                data-fancybox
                href={BaileysData.workDesktopClip4}
              >
                <img
                  className="project__thumbnail-img"
                  src={BaileysData.workImagePath4}
                  alt="Baileys S'mores 4x5"
                />
              </a>
            </Fancybox>
            <p className="project__thumbnail-text">4x5</p>
          </div>
          <div className="project__thumbnail">
            <Fancybox>
              <a
                className="project__video-link"
                data-fancybox
                href={BaileysData.workDesktopClip5}
              >
                <img
                  className="project__thumbnail-img"
                  src={BaileysData.workImagePath5}
                  alt="Baileys S'mores 16x9"
                />
              </a>
            </Fancybox>
            <p className="project__thumbnail-text">16x9</p>
          </div>
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

export default Baileys;
