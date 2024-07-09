import Link from "next/link";
import { CommonLink } from "@/presentation/common";
import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <strong className={styles.title}>
        <Link className={styles.titleLink} href={"/"}>
        Erika Amastal
        </Link>
      </strong>
      <ul className={styles.menu}>
        <li className={styles.menuItem}>
          <CommonLink text="Work" url="/#work" />
        </li>
        <li className={styles.menuItem}>
          <CommonLink text="About" url="/#about" />
        </li>
        <li className={styles.menuItem}>
          <CommonLink text="Contact" url="/contact" />
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
