import Image from "next/image";
import styles from "./Header.module.css";
import { AccentLink } from "@/components/common";

function Header() {
  return (
    <header className={styles.header}>
      <p className={styles.subtitle}>
        <Image
          src="/icons/terminal-solid.svg"
          alt="Termial icon"
          width={32}
          height={32}
          className={styles.contactIcon}
        />
        Available for new projects
      </p>
      <h1 className={styles.title}>
        I BUILD digital EXPERIENCES through code
      </h1>
      <p className={styles.description}>
        Full stack <strong>web</strong> & <strong>mobile app</strong> developer,
        turning dreams into <strong>digital realities.</strong>
      </p>
      <AccentLink
        className={styles.contactLink}
        text="Let's work together"
        url="#"
      />
    </header>
  );
}

export default Header;
