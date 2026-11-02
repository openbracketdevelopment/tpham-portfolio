import Link from "next/link";
import { collections, type Collection } from "../../projects/work-data";
import styles from "./Work.module.scss";

export function CollectionNav({ current }: { current?: Collection | "all" }) {
  return (
    <nav className={styles.nav} aria-label="Work collections">
      <Link href="/work" aria-current={current === "all" ? "page" : undefined}>All work</Link>
      {collections.map(collection => (
        <Link key={collection.id} href={`/work/${collection.id}`} aria-current={current === collection.id ? "page" : undefined}>
          {collection.name}
        </Link>
      ))}
    </nav>
  );
}
