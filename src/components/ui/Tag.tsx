import * as styles from "./Tag.css";

type Props = { children: React.ReactNode };

export function Tag({ children }: Props) {
  return <span className={styles.tag}>{children}</span>;
}
