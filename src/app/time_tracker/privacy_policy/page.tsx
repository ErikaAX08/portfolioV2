import React from "react";
import styles from "../page.module.css";

function Page() {
  return (
    <article className={styles.container}>
      <section className={styles.containerContent}>
        <h2 className={styles.title}>Time Tracker: Privacy Policy</h2>
        <div className={styles.content}>
          <strong>Last Updated: June 7, 2024</strong>
          <p>
            At Time Tracker, we value and respect your privacy. This privacy
            policy describes how we collect, use, and protect your personal
            information when you use our application.
          </p>
          <h3>Information We Collect</h3>
          <ol>
            <li>
              <strong>Authentication and Personalization:</strong> We use
              authentication information to create and manage your account on
              Time Tracker, as well as to personalize your experience within the
              application.
            </li>
            <li>
              <strong>Timer and Label Management:</strong> Stored data is used
              to maintain and manage the timers and labels created by the user,
              enabling efficient tracking of time spent on different activities.
            </li>
            <li>
              <strong>App Improvement and Development:</strong> We use usage and
              storage data to analyze the performance of the application,
              identify areas for improvement, and develop new features that may
              benefit our users.
            </li>
          </ol>
          <h3>Sharing of Information</h3>
          <p>
            Time Tracker does not share your personal information with third
            parties, except in the following circumstances:
          </p>
          <ol>
            <li>
              <strong>Service Providers:</strong> We may use trusted service
              providers to assist in the operation of the application, such as
              data hosting, data analysis, and infrastructure management. These
              providers are subject to strict confidentiality agreements and
              only have access to the information necessary to perform their
              functions.
            </li>
            <li>
              <strong>Legal Compliance:</strong> We may disclose information if
              required by law or if we believe in good faith that such action is
              necessary to comply with a legal obligation, protect our rights,
              or investigate potential fraudulent or illegal activities.
            </li>
          </ol>
          <h3>Information Security</h3>
          <p>
            We take reasonable measures to protect personal information against
            loss, misuse, unauthorized access, disclosure, alteration, or
            destruction. This includes the use of physical, electronic, and
            procedural security measures.
          </p>
          <h3>Contact</h3>
          <p>
            If you have any questions or concerns about our privacy policy, feel
            free to contact us at <strong>petateck@gmail.com</strong>.
          </p>
          <p>
            By using Time Tracker, you agree to the terms and conditions of this
            privacy policy. We recommend reviewing this policy periodically to
            stay informed of any updates or changes.
          </p>
        </div>
      </section>
    </article>
  );
}

export default Page;
