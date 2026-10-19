import styles from "./Projects.module.scss";
import React from "react";
import AllProjects from "../../components/AllProjects/AllProjects";

const Projects = () => {
  return (
    <>
      <section className={styles["projects__header"]}>
        <h1>Projects</h1>
      </section>
      <section className={styles["projects__all"]}>
        <AllProjects />
      </section>
    </>
  );
};

export default Projects;
