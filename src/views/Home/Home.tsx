import React from "react";

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
    </>
  );
}

export default Home;
