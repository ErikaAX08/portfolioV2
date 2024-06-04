import React from "react";
import styles from "./page.module.css";
import Image from "next/image";

function TimeTracker() {
  return (
    <article className={styles.container}>
      <div className={styles.imageContainer}>
        <Image
          className={styles.image}
          src="/projects/time_tracker/02.jpg"
          alt="Time tracker"
          fill
        />
      </div>
      <section className={styles.containerContent}>
        <h2 className={styles.title}>Increasing productivity with Time Tracker</h2>
        <div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Consequuntur est temporibus deleniti sunt magnam veritatis
            explicabo, pariatur numquam ad quod quisquam esse quis commodi
            asperiores, voluptatem, alias necessitatibus id. Beatae!
          </p>
        </div>
      </section>
    </article>
  );
}

export default TimeTracker;
