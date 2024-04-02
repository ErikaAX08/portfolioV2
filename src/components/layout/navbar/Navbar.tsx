import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <strong className={styles.title}>Erika AX</strong>
      <ul className={styles.menu}>
        <li className={styles.menuItem}>Work</li>
        <li className={styles.menuItem}>About</li>
        <li className={styles.menuItem}>Contact</li>
      </ul>
    </nav>
  );
}

export default Navbar;
