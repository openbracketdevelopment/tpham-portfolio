import Image from "next/image";
import Link from "next/link";
import type { WorkProject } from "../../projects/work-data";
import styles from "./Work.module.scss";

export function ProjectVisual({ project }: { project: WorkProject }) {
  return (
    <div className={`${styles.visual}${project.github ? ` ${styles.appVisual}` : ""}`}>
      {project.image ? (
        <Image sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw" src={project.image} alt={project.imageAlt ?? `${project.name} project cover`} width={1440} height={810} loading="lazy" decoding="async" />
      ) : (
        <div className={styles.cover} role="img" aria-label={`${project.name} designed project cover, not an application screenshot`}>
          <strong>{project.name}</strong>
          <span>{project.technologies.slice(0, 3).join(" / ")}</span>
          <span>Project cover</span>
        </div>
      )}
    </div>
  );
}

export function ProjectCard({ project }: { project: WorkProject }) {
  return (
    <article data-reveal className={styles.card}>
      <ProjectVisual project={project} />
      <div className={styles.body}>
        <p className={styles.meta}>{project.context} / {project.category}</p>
        <h3>{project.name}</h3>
        <p>{project.summary}</p>
        {project.status && <p className={styles.meta}>{project.status}</p>}
        <ul className={styles.tags} aria-label={`${project.name} technologies`}>
          {project.technologies.slice(0, 5).map(technology => <li key={technology}>{technology}</li>)}
        </ul>
        <div className={styles.links}>
          <Link href={project.href} aria-label={`${project.name} case study`}>Case study</Link>
          {project.github && <a href={project.github} target="_blank" rel="noreferrer" aria-label={`${project.name} source on GitHub`}>GitHub</a>}
          {project.live && <a href={project.live} target="_blank" rel="noreferrer">Live site</a>}
        </div>
      </div>
    </article>
  );
}
