"use client";
import styles from "./Header.module.css";
import { AccentLink } from "@/presentation/common";
import { useInView } from "@/presentation/hooks";
import { useRef } from "react";

function Header() {
  const headerRef = useRef<HTMLElement>(null);
  const isInView = useInView(headerRef);

  return (
    <header
      ref={headerRef}
      className={`${styles.header} ${
        isInView ? "fadeInUp" : "fadeInUp_hidden"
      }`}
    >
      <p className={styles.subtitle}>
        <span>fullstack</span>
        <span>/</span>
        <span>mobile</span>
        <span>/</span>
        <span>web</span>
        <span>/</span>
        <span>gamedev</span>
      </p>
      <h1 className={styles.title}>I BUILD digital EXPERIENCES through code</h1>
      <p className={styles.description}>
        Full stack <strong>web</strong> & <strong>mobile app</strong> developer,
        turning dreams into <strong>digital realities.</strong>
      </p>
      <AccentLink
        className={styles.contactLink}
        text="Let's work together"
        url="/contact"
      />
    </header>
  );
}

export default Header;
