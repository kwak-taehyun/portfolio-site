import Link from "next/link";
import { getSite } from "@/lib/data";
import * as styles from "./Footer.css";

export function Footer() {
  const site = getSite();
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.meta}>
          <p className={styles.title}>{site.meta.title}</p>
          <p className={styles.copy}>
            © {year} {site.meta.author}. Sementic Mark up &amp; Web Accessibility based UI Development.
          </p>
        </div>
        <nav className={styles.links} aria-label="푸터 링크">
          {site.nav.map((item) => (
            <Link key={item.href} href={item.href} className={styles.link}>
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
