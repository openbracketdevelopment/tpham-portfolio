import React from "react";

import Connect from "../../components/Connect/Connect";
// import Skills from "../../components/Skills/Skills";
import Featured from "../../components/Featured/Featured";
import Brands from "../../components/Brands/Brands";
import Hero from "../../components/Hero/Hero";

function Home() {
  return (
    <>
      {/* PAGE CONTENT */}
      <Hero />
      {/* <Skills /> */}
      <Featured />
      <Brands />
      <Connect />
    </>
  );
}

export default Home;
