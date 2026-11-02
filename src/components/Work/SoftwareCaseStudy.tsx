import type { SoftwareProject } from "../../projects/work-data";
import { ProjectVisual } from "./ProjectCard";
import { CollectionNav } from "./CollectionNav";
import styles from "./Work.module.scss";

export function SoftwareCaseStudy({ project }: { project: SoftwareProject }) {
  const sections = [
    { title: "Implemented features", items: project.features },
    { title: "Engineering decisions", items: project.decisions },
    { title: "Testing & validation", items: project.validation },
    { title: "Current scope & limitations", items: project.limitations },
  ];
  return (
    <main className={`${styles.section} ${styles.study}`}>
      <p className={styles.meta}>Independent software project / {project.category}</p>
      <h1 className={styles.heading}>{project.name}</h1>
      <p className={styles.intro}>{project.summary}</p>
      <p>{project.status}</p>
      <div className={styles.links}>
        <a href={project.github} target="_blank" rel="noreferrer">Source on GitHub</a>
        {project.live && <a href={project.live} target="_blank" rel="noreferrer">Live demo</a>}
      </div>
      {!project.screenshots && (
        <>
          <ProjectVisual project={project} />
          <p className={styles.caption}>{project.image ? project.imageAlt : "Designed project cover; not an application screenshot."}</p>
        </>
      )}
      <section>
        <h2>Problem & audience</h2>
        <p>{project.problem}</p>
        <p>{project.audience}</p>
        <h2>My role</h2>
        <p>{project.role}</p>
        <ul className={styles.tags} aria-label="Verified technology stack">
          {project.technologies.map(technology => <li key={technology}>{technology}</li>)}
        </ul>
      </section>
      {sections.map(section => (
        <section key={section.title}>
          <h2>{section.title}</h2>
          <ul>{section.items.map(item => <li key={item}>{item}</li>)}</ul>
        </section>
      ))}
      {project.screenshots && (
        <div className={styles.screenshots}>
          {project.screenshots.map(screenshot => (
            <figure key={screenshot.image} className={screenshot.width < 600 ? styles.mobileScreenshot : undefined}>
              <img src={screenshot.image} alt={screenshot.alt} width={screenshot.width} height={screenshot.height} loading="lazy" decoding="async" />
              <figcaption>{screenshot.alt}</figcaption>
            </figure>
          ))}
        </div>
      )}
      <CollectionNav />
    </main>
  );
}
