import React from "react";
import AllProjects from "../components/AllProjects";
import "../App.css";
import "./Projects.css";

const Projects = () => {
  return (
    <>
      <section className="projects__header">
        <h1>Projects</h1>
      </section>
      <section className="projects__all">
        <AllProjects />
      </section>
    </>
  );
};

export default Projects;
