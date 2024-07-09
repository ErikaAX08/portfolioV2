import ProjectCard from "../projectCard";
import styles from "./Work.module.css";

function Work() {
  return (
    <section id="work" className={styles.section}>
      <div>
        <h2 className={styles.title}>Selected Work</h2>
      </div>
      <ProjectCard
        name="Time Tracker"
        description={[
          "In my latest project, I developed Time Tracker, an app designed to enhance time management through personalized timers and organizational tags. This tool allows users to set up and monitor time for various activities, increasing productivity and efficiency. The intuitive interface supports tailored timer creation, while the tagging system aids in better tracking. Additionally, the app includes a widget for easy timer control directly from the main screen, ideal for tasks such as studying, exercise, and work.",
          "I launched essential features like tag customization and widget integration, and managed a comprehensive design system to ensure consistency and scalability. My work on Time Tracker has significantly improved users' productivity and task organization. This project demonstrates my ability to develop user-centric applications that efficiently solve real-world problems, contributing to enhanced functionality and user experience in technological projects.          ",
        ]}
        link={{ name: "Download App", url: "https://play.google.com/store/apps/details?id=com.erikaax.timetracker" }}
        images={[
          { src: "/projects/time_tracker/01.jpg", alt: "Player timer" },
          { src: "/projects/time_tracker/02.jpg", alt: "Timers list" },
          { src: "/projects/time_tracker/03.jpg", alt: "Timer widget" },
          { src: "/projects/time_tracker/04.jpg", alt: "Auth Timer Tracker" },
        ]}
      />
    </section>
  );
}

export default Work;
