import styles from "./Brands.module.scss";

type Brand = { name: string; logo?: string };

const brands: Brand[] = [
  { name: "Fidium", },
  { name: "Fluval" },
  { name: "Nutrience" },
  { name: "Toro" },
  { name: "Diageo", logo: "/assets/images/client-logos_Diageo.svg" },
  { name: "EarthX", logo: "/assets/images/client-logos_EarthX.svg" },
  { name: "Baileys", logo: "/assets/images/baileys-logo.svg" },
  { name: "Crown Royal", logo: "/assets/images/crown-royal-logo.svg" },
  { name: "Johnnie Walker", logo: "/assets/images/johnniewalker-logo.png" },
  { name: "Trinity Rail", logo: "/assets/images/trinity-rail-logo.svg" },
  { name: "Wilson's Seafood", logo: "/assets/images/ws-logo.svg" },
  { name: "Brain Styles", logo: "/assets/images/brainstyles-logo.png" },
];

function Brands() {
  return (
    <section className={`${styles["brands"]} section__wrap`} aria-labelledby="brands-title">
      <h2 id="brands-title" className={styles["brands__title"]}>
        Brands I&apos;ve worked with
      </h2>
      <ul className={styles["brands__grid"]}>
        {brands.map((b) => (
          <li key={b.name} className={styles["brands__item"]}>
            {b.logo ? (
              <img src={b.logo} alt={b.name} className={styles["brands__logo"]} loading="lazy" />
            ) : (
              <span className={styles["brands__word"]}>{b.name}</span>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Brands;
