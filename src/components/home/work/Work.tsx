import ProjectCard from "../projectCard";
import styles from "./Work.module.css";

function Work() {
  return (
    <section id="work" className={styles.section}>
      <div>
        <h2 className={styles.title}>Selected Work</h2>
      </div>
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
    </section>
  );
}

export default Work;
