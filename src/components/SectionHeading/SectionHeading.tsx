import styles from "./SectionHeading.module.scss";

type SectionHeadingProps = {
  label: string;
  outlinedLabel?: string;
  id?: string;
};

export function SectionHeading({ label, outlinedLabel, id }: SectionHeadingProps) {
  return (
    <h2 id={id} className={styles.heading}>
      {label}
      {outlinedLabel && <> <span className={styles.outlined}>{outlinedLabel}</span></>}
    </h2>
  );
}
