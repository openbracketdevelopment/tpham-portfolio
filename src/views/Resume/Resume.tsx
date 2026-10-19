import { Button } from "../../components/Button/Button";
import styles from "./Resume.module.scss";
import {
  profile,
  strengths,
  skillGroups,
  expertise,
  experience,
  education,
  awards,
  training,
  pdfPath,
} from "./resume-data";

function Resume() {
  return (
    <main className={styles["resume"]}>
      <div className={styles["resume__sheet"]}>
        <header className={styles["resume__header"]}>
          <div>
            <h1 className={styles["resume__name"]}>{profile.name}</h1>
            <p className={styles["resume__title"]}>{profile.title}</p>
          </div>
          <ul className={styles["resume__contact"]}>
            <li>{profile.location}</li>
            <li><a href={`tel:${profile.phone.replace(/\./g, "")}`}>{profile.phone}</a></li>
            <li><a href={`mailto:${profile.email}`}>{profile.email}</a></li>
            <li><a href={profile.siteUrl}>{profile.site}</a></li>
            <li><a href={profile.linkedinUrl}>{profile.linkedin}</a></li>
          </ul>
          <a className={styles["resume__download"]} href={pdfPath} download>
            Download PDF
          </a>
        </header>

        <section className={styles["resume__section"]}>
          <h2>Profile</h2>
          <p>{profile.summary}</p>
          <ul className={styles["resume__strengths"]}>
            {strengths.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </section>

        <section className={styles["resume__section"]}>
          <h2>Skills</h2>
          <dl className={styles["resume__skills"]}>
            {skillGroups.map((g) => (
              <div key={g.label}>
                <dt>{g.label}</dt>
                <dd>
                  {g.items.map((item) => (
                    <span
                      key={item}
                      className={g.featured?.includes(item) ? styles["is-featured"] : undefined}
                    >
                      {item}
                    </span>
                  ))}
                </dd>
              </div>
            ))}
          </dl>
        </section>

        <section className={styles["resume__section"]}>
          <h2>Experience</h2>
          {experience.map((job) => (
            <article key={job.company} className={styles["resume__job"]}>
              <div className={styles["resume__job-head"]}>
                <h3>
                  {job.role} <span>· {job.company}</span>
                </h3>
                <p>
                  {job.location} · {job.dates}
                </p>
              </div>
              <ul>
                {job.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
              {job.achievement && (
                <p className={styles["resume__achievement"]}>
                  <strong>Key achievement:</strong> {job.achievement}
                </p>
              )}
            </article>
          ))}
        </section>

        <div className={styles["resume__cols"]}>
          <section className={styles["resume__section"]}>
            <h2>Education</h2>
            <h3>{education.school}</h3>
            <p>
              {education.degree} · {education.date}
            </p>
            <ul>
              {education.notes.map((n) => (
                <li key={n}>{n}</li>
              ))}
            </ul>
          </section>
          <section className={styles["resume__section"]}>
            <h2>Areas of Expertise</h2>
            <ul className={styles["resume__expertise"]}>
              {expertise.map((e) => (
                <li key={e}>{e}</li>
              ))}
            </ul>
          </section>
        </div>

        <section className={styles["resume__section"]}>
          <h2>Awards &amp; Certifications</h2>
          <ul className={styles["resume__training"]}>
            {[...awards, ...training].map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </section>

        <div className={styles["resume__footer"]}>
          <Button btnLabel="Download Resume" btnUrl={pdfPath} btnTarget="_blank" />
        </div>
      </div>
    </main>
  );
}

export default Resume;
