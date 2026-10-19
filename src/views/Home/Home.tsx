import React from "react";

import About from "../../components/About/About";
import Connect from "../../components/Connect/Connect";
// import Skills from "../../components/Skills/Skills";
import Featured from "../../components/Featured/Featured";
import Hero from "../../components/Hero/Hero";

function Home() {
  return (
    <>
      {/* PAGE CONTENT */}
      <Hero />
      {/* <Skills /> */}
      <Featured />
      <About />
      <Connect />
    </>
  );
}

export default Home;
