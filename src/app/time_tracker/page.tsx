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
        <h2 className={styles.title}>
          Increasing productivity with Time Tracker
        </h2>
        <div className={styles.content}>
          <p>
            As a full-time student and programmer, time is one of the most
            valuable resources, making efficient time management a crucial
            skill. Recognizing this need, I developed Time Tracker, an
            application designed to help optimize time and avoid procrastination
            through the use of personalized timers and organizational tags.
            Here, I will discuss the features and benefits of this tool.
          </p>
          <h3>Intuitive Design and Customization</h3>
          <p>
            Time Tracker stands out for its intuitive and user-friendly
            interface, allowing users to create timers tailored to their
            specific needs. Customization is key in this application; users can
            set up multiple timers, each with a distinct tag, facilitating the
            organization and tracking of various activities. Whether for working
            on projects, school tasks, remembering important events, or even
            managing breaks, Time Tracker adapts to any scenario, ensuring that
            every minute counts.
          </p>
          <h3>Widgets for Quick Access</h3>
          <p>
            One of Time Tracker’s most innovative features is its widget, which
            allows users to view and control their timers directly from their
            device’s main screen. This functionality eliminates the need to
            constantly open the application, providing quick and easy access to
            the remaining time of each timer. This integration is especially
            useful for those who need to monitor their time without
            interruptions, staying focused on the task at hand.
          </p>
          <h3>Enhancing Productivity</h3>
          <p>
            The ability to classify and tag timers is a powerful tool for
            improving productivity. By allowing users to group similar tasks,
            Time Tracker facilitates the planning and execution of activities
            more efficiently. This organization not only helps prioritize
            important tasks but also reduces the stress associated with time
            management, providing a clear view of what has been accomplished and
            what remains to be done.
          </p>
          <h3>Scalable and Consistent Design</h3>
          <p>
            During the development of Time Tracker, I implemented a
            comprehensive design system to ensure the application’s consistency
            and scalability. This approach allows the app to expand and easily
            adapt to new features without compromising the user experience. The
            robustness of the design system ensures that Time Tracker is not
            only a useful tool today but will continue to evolve to meet the
            changing needs of users in the future.
          </p>
          <h3>Impact and Future</h3>
          <p>
            By focusing on essential features and a user-centered design, Time
            Tracker not only improves productivity but also contributes to a
            better quality of life, helping users make the most of each day.
          </p>
          <p>
            In conclusion, Time Tracker is a clear example of how technology can
            be used to efficiently solve everyday problems. With Time Tracker,
            every user has the opportunity to transform their time management,
            making every minute truly count.
          </p>
        </div>
      </section>
    </article>
  );
}

export default TimeTracker;
