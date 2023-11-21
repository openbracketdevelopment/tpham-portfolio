import React from "react";
import "../App.css";
import { Helmet } from "react-helmet-async";

import About from "../components/About";
import Connect from "../components/Connect";
import Featured from "../components/Featured";
import Hero from "../components/Hero";

const homeData = require("./page-data/Home");

function Home() {
  return (
    <>
      {/* METADATA INCLUDE */}
      <Helmet>
        <meta charSet="utf-8" />
        <title>{homeData.pageTitle}</title>
        <meta name="description" content={homeData.pageDescription} />
        <link rel="canonical" href={homeData.canonical} />
        {/* FB OG META */}
        <meta property="og:url" content={homeData.pageUrl} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={homeData.pageTitle} />
        <meta property="og:description" content={homeData.pageDescription} />
        <meta property="og:image" content={homeData.pageImage} />
        <meta property="og:locale" content={homeData.fbOgLocale} />
        <meta property="og:site_name" content={homeData.fbOgSiteName} />
        <meta property="og:app_id" content={homeData.fbOgAppId} />
        {/* TW OG META */}
        <meta name="twitter:card" content={homeData.twOgCard} />
        <meta name="twitter:site" content={homeData.twOgSite} />
        <meta name="twitter:creator" content={homeData.twOgCreator} />
        <meta property="og:url" content={homeData.pageUrl} />
        <meta property="twitter:title" content={homeData.pageTitle} />
        <meta
          property="twitter:description"
          content={homeData.pageDescription}
        />
        <meta property="twitter:image" content={homeData.pageImage} />
      </Helmet>
      {/* PAGE CONTENT */}
      <Hero />
      <Featured />
      <About />
      <Connect />
    </>
  );
}

export default Home;
