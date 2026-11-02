import { professionalProjects } from "../../projects/work-data";
import { softwareProjects } from "../../projects/software-data";
import { ProjectCard } from "../Work/ProjectCard";
import { CollectionNav } from "../Work/CollectionNav";
import styles from "../Work/Work.module.scss";

function Featured() {
  const projects = [
    ...professionalProjects.filter(project => ["fidium", "diageo", "esps-parts", "toro", "earthx"].includes(project.id)),
    ...softwareProjects,
  ];
  return (
    <section id="work" className={`${styles.section} ${styles.tileSection}`} aria-labelledby="featured-work-title">
      <h2 id="featured-work-title" className={styles.heading}>Featured Software &amp; Web Projects</h2>
      <p className={styles.intro}>Enterprise delivery and independent tools: from shared content platforms to image processing, website audits and webhook delivery.</p>
      <CollectionNav />
      <div className={styles.grid}>
        {projects.map(project => <ProjectCard key={project.id} project={project} />)}
      </div>
    </section>
  );
}

export default Featured;
