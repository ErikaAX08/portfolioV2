import Image from "next/image";
import styles from "./ProjectCard.module.css";
import Link from "next/link";

function ProjectCard() {
  return (
    <article className={styles.project}>
      <div className={styles.projectInfo}>
        <h2 className={styles.title}>Time tracker</h2>
        <div className={styles.description}>
          <p>
            My most recent full-time role, where I led our design efforts as the
            Head of Design. I worked on our product, was involved in strategic
            business decisions, and managed a talented incredible design team as
            we built the future of financial wellness.
          </p>
          <p>
            I was involved in shipping countless features including Cash Flow,
            Retirement Calculator, Emergency Fund, Multicurrency Support, Global
            Advisors, Action Plan, Healthcare Comparison, and more.
          </p>
          <p>
            I was also in charge of creating and managing our design system,
            Bodega, at scale as we expanded our product offerings and pitched to
            larger companies. My contributions led to closing a $24.4M round of
            funding from GGV as well as landing deals with Snap, Workday,
            Discord, Superhuman, Nerdwallet, and more.
          </p>
        </div>
        <Link className={styles.linkContainer} href="#" target="_blank">
          <span className={styles.link}>Download app</span>
          <Image
            className={styles.iconLink}
            src="/icons/arrow-solid.svg"
            width={14}
            height={14}
            alt="Arrow icon"
          />
        </Link>
      </div>
      <div className={styles.imagenes}>
        <Image
          className={styles.image}
          src="/projects/image.png"
          alt="Project"
          width={500}
          height={500}
        />
        <Image
          className={styles.image}
          src="/projects/image.png"
          alt="Project"
          width={500}
          height={500}
        />
        <Image
          className={styles.image}
          src="/projects/image.png"
          alt="Project"
          width={500}
          height={500}
        />
        <Image
          className={styles.image}
          src="/projects/image.png"
          alt="Project"
          width={500}
          height={500}
        />
        <Image
          className={styles.image}
          src="/projects/image.png"
          alt="Project"
          width={500}
          height={500}
        />
        <Image
          className={styles.image}
          src="/projects/image.png"
          alt="Project"
          width={500}
          height={500}
        />
      </div>
    </article>
  );
}

export default ProjectCard;
