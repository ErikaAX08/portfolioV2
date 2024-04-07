"use client";
import { AccentLink, CommonLink } from "@components/common";
import styles from "./Footer.module.css";
import Image from "next/image";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.contactContainer}>
        <p className={styles.contactContainerLink}>
          <Image
            src="/icons/terminal-solid.svg"
            alt="Termial icon"
            width={32}
            height={32}
            className={styles.contactIcon}
          />
          Have a project in mind?
        </p>
        <AccentLink
          className={styles.contactLink}
          text="Let's work together"
          url="#"
        />
      </div>
      <div className={styles.linksContainer}>
        <div className={styles.section}>
          <p className={styles.sectionTitle}>Contact</p>
          <CommonLink text="hello@erikaax.com" url="hello@erikaax.dev" />
        </div>
        <div className={styles.section}>
          <p className={styles.sectionTitle}>Socials</p>
          <CommonLink
            text="x.com"
            url="https://twitter.com/ErikaAX08"
            linkProps={{ target: "_blank", rel: "noopener noreferrer" }}
          />
          <CommonLink
            text="instagram"
            url="https://www.instagram.com/erikaax08/"
            linkProps={{ target: "_blank", rel: "noopener noreferrer" }}
          />
          <CommonLink
            text="github"
            url="https://github.com/ErikaAX08"
            linkProps={{ target: "_blank", rel: "noopener noreferrer" }}
          />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
