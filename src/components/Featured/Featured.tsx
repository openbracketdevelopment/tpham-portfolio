import { professionalProjects } from "../../projects/work-data";
import { softwareProjects } from "../../projects/software-data";
import { ProjectCard } from "../Work/ProjectCard";
import { CollectionNav } from "../Work/CollectionNav";
import styles from "../Work/Work.module.scss";
import { MarqueeHeading } from "../MarqueeHeading/MarqueeHeading";

function Featured() {
  const featuredIds = ["fidium", "diageo", "esps-parts", "hookline-and-sender", "toro", "bytedown"];
  const allProjects = [...professionalProjects, ...softwareProjects];
  const projects = featuredIds.flatMap(id => allProjects.filter(project => project.id === id));
  return (
    <section id="work" className={`${styles.section} ${styles.tileSection}`} aria-labelledby="featured-work-title">
      <MarqueeHeading id="featured-work-title" label="A FEW PROUD ONES" />
      <CollectionNav />
      <div className={styles.grid}>
        {projects.map(project => <ProjectCard key={project.id} project={project} />)}
      </div>
    </section>
  );
}

export default Featured;
