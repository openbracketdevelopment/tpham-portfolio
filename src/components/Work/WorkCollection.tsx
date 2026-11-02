import { collections, professionalProjects, type Collection } from "../../projects/work-data";
import { softwareProjects } from "../../projects/software-data";
import { CollectionNav } from "./CollectionNav";
import { ProjectCard } from "./ProjectCard";
import styles from "./Work.module.scss";

export function WorkCollection({ collection }: { collection?: Collection }) {
  const selected = collections.find(item => item.id === collection);
  const projects = [professionalProjects[0], ...softwareProjects, ...professionalProjects.slice(1)]
    .filter(project => !collection || project.collection === collection);
  return (
    <main className={`${styles.section} ${styles.tileSection} ${styles.collection}`}>
      <h1 className={styles.heading}>{selected?.name ?? "All work"}</h1>
      <p className={styles.intro}>{selected?.description ?? "Software projects, professional websites and video work. Independent projects are kept distinct from client delivery."}</p>
      <CollectionNav current={collection ?? "all"} />
      <div className={styles.grid}>
        {projects.map(project => <ProjectCard key={project.id} project={project} />)}
      </div>
    </main>
  );
}
