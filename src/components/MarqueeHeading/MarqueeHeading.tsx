import styles from "./MarqueeHeading.module.scss";

type MarqueeHeadingProps = {
  id: string;
  label: string;
  reverse?: boolean;
  items?: (string | { text: string; lang: string })[];
  as?: "h1" | "h2";
  className?: string;
};

export function MarqueeHeading({ id, label, reverse = false, items, as: Tag = "h2", className = "" }: MarqueeHeadingProps) {
  const phrases = items ?? [label, label];
  return (
    <Tag id={id} className={`${styles.heading} ${className}`} aria-label={label}>
      <span className={`${styles.track} ${reverse ? styles.reverse : ""}`} aria-hidden="true">
        {[0, 1].map(copy => (
          <span key={copy} className={styles.group}>
            {phrases.map((phrase, index) => {
              const text = typeof phrase === "string" ? phrase : phrase.text;
              const lang = typeof phrase === "string" ? undefined : phrase.lang;
              return (
                <span key={`${index}-${text}`} className={styles.item}>
                  <span lang={lang} className={index % 2 === 0 ? styles.filled : styles.outlined}>{text}</span>
                  <span className={styles.star}>✳</span>
                </span>
              );
            })}
          </span>
        ))}
      </span>
    </Tag>
  );
}
