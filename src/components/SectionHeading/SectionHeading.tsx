import styles from "./SectionHeading.module.scss";

type SectionHeadingProps = {
  label: string;
  outlinedLabel?: string;
  id?: string;
  align?: "left" | "center";
};

export function SectionHeading({ label, outlinedLabel, id, align = "left" }: SectionHeadingProps) {
  return (
    <h2 id={id} className={`${styles.heading} ${align === "center" ? styles.centered : ""}`}>
      {label}
      {outlinedLabel && <> <span className={styles.outlined}>{outlinedLabel}</span></>}
    </h2>
  );
}
