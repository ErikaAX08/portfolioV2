"use client";
import { AccentLink, CommonLink } from "@components/common";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.contactContainer}>
        <p className={styles.contactContainerLink}>
          Have a project in mind?
        </p>
        <AccentLink
          className={styles.contactLink}
          text="Let's work together"
          url="/contact"
        />
      </div>
      <div className={styles.linksContainer}>
        <div className={styles.section}>
          <p className={styles.sectionTitle}>Contact</p>
          <CommonLink
            text="eamastalxochimitl@gmail.com"
            url="mailto:eamastalxochimitl@gmail.com"
          />
        </div>
        <div className={styles.section}>
          <p className={styles.sectionTitle}>Socials</p>
          <CommonLink
            text="github"
            url="https://github.com/ErikaAX08"
            linkProps={{ target: "_blank", rel: "noopener noreferrer" }}
          />
          <CommonLink
            text="linkedin"
            url="https://www.linkedin.com/in/erikaax/"
            linkProps={{ target: "_blank", rel: "noopener noreferrer" }}
          />
          <CommonLink
            text="twitter"
            url="https://twitter.com/ErikaAX08"
            linkProps={{ target: "_blank", rel: "noopener noreferrer" }}
          />
          <CommonLink
            text="instagram"
            url="https://www.instagram.com/erikaax08/"
            linkProps={{ target: "_blank", rel: "noopener noreferrer" }}
          />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
