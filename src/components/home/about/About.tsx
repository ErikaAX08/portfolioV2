import Image from "next/image";
import styles from "./About.module.css";
import Link from "next/link";

function About() {
  return (
    <section className={styles.section}>
      <div>
        <h2 className={styles.title}>Make things & help others</h2>
      </div>
      <div className={styles.gridImages}>
        <div className={styles.gridCol}>
          <Image
            className={styles.image}
            src="/photos/cat.png"
            alt="Gato"
            width={600}
            height={800}
          />
          <Image
            className={styles.image}
            src="/photos/cat.png"
            alt="Gato"
            width={600}
            height={800}
          />
        </div>
        <div className={styles.gridCol}>
          <Image
            className={styles.image}
            src="/photos/cat.png"
            alt="Gato"
            width={600}
            height={800}
          />
          <Image
            className={styles.image}
            src="/photos/cat.png"
            alt="Gato"
            width={600}
            height={800}
          />
        </div>
        <div className={styles.gridCol}>
          <Image
            className={styles.image}
            src="/photos/cat.png"
            alt="Gato"
            width={600}
            height={800}
          />
          <Image
            className={styles.image}
            src="/photos/cat.png"
            alt="Gato"
            width={600}
            height={800}
          />
        </div>
        <div className={styles.gridCol}>
          <Image
            className={styles.image}
            src="/photos/cat.png"
            alt="Gato"
            width={600}
            height={800}
          />
          <Image
            className={styles.image}
            src="/photos/cat.png"
            alt="Gato"
            width={600}
            height={800}
          />
        </div>
      </div>
      <article className={styles.article}>
        <h3 className={styles.subtitle}>About Me</h3>
        <div className={styles.contentContainer}>
          <div className={styles.contentCols}>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis,
              deleniti nostrum atque esse excepturi quam mollitia voluptates
              laudantium quaerat delectus, <strong>algo importante aqui</strong>{" "}
              neque, qui quibusdam voluptas ipsam iusto impedit ipsa quia quae!
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Molestias minus, neque eligendi reiciendis dicta, rem aliquam
              accusantium illum, ut nemo ipsam? Tempora iure dolor iste magnam!
              Voluptas iusto ut molestiae!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
              ipsam, earum ab impedit quibusdam voluptatem natus pariatur eius,
              nam asperiores rem, repudiandae harum. Sapiente, fuga explicabo?
              Incidunt molestiae saepe maiores.
            </p>
          </div>
          <div className={styles.contentCols}>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis,
              deleniti nostrum atque esse excepturi quam mollitia voluptates
              laudantium quaerat delectus, neque, qui quibusdam voluptas ipsam
              iusto impedit ipsa quia quae!
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Molestias minus, neque eligendi reiciendis dicta, rem aliquam
              accusantium illum, ut nemo ipsam? Tempora iure dolor iste magnam!
              Voluptas iusto ut molestiae!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
              ipsam, earum ab impedit quibusdam voluptatem natus pariatur eius,
              nam asperiores rem, repudiandae harum. Sapiente, fuga explicabo?
              Incidunt molestiae saepe maiores.
            </p>
          </div>
        </div>
      </article>
      <article className={styles.article}>
        <h3 className={styles.subtitle}>Services</h3>
        <div className={styles.contentContainer}>
          <div className={styles.contentCols}>
            <div className={styles.serviceContainer}>
              <h4 className={styles.serviceTitle}>Lorem ipsum dolor</h4>
              <p className={styles.serviceInfo}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Debitis, deleniti nostrum atque esse excepturi quam mollitia
                voluptates laudantium quaerat delectus,{" "}
                <strong>algo importante aqui</strong> neque, qui quibusdam
                voluptas ipsam iusto impedit ipsa quia quae!
              </p>
            </div>
            <div className={styles.serviceContainer}>
              <h4 className={styles.serviceTitle}>Lorem ipsum dolor</h4>
              <p className={styles.serviceInfo}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Debitis, deleniti nostrum atque esse excepturi quam mollitia
                voluptates laudantium quaerat delectus,{" "}
                <strong>algo importante aqui</strong> neque, qui quibusdam
                voluptas ipsam iusto impedit ipsa quia quae!
              </p>
            </div>
            <div className={styles.serviceContainer}>
              <h4 className={styles.serviceTitle}>Lorem ipsum dolor</h4>
              <p className={styles.serviceInfo}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Debitis, deleniti nostrum atque esse excepturi quam mollitia
                voluptates laudantium quaerat delectus,{" "}
                <strong>algo importante aqui</strong> neque, qui quibusdam
                voluptas ipsam iusto impedit ipsa quia quae!
              </p>
            </div>
          </div>
          <div className={styles.contentCols}>
            <div className={styles.serviceContainer}>
              <h4 className={styles.serviceTitle}>Lorem ipsum dolor</h4>
              <p className={styles.serviceInfo}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Debitis, deleniti nostrum atque esse excepturi quam mollitia
                voluptates laudantium quaerat delectus,{" "}
                <strong>algo importante aqui</strong> neque, qui quibusdam
                voluptas ipsam iusto impedit ipsa quia quae!
              </p>
            </div>
            <div className={styles.serviceContainer}>
              <h4 className={styles.serviceTitle}>Lorem ipsum dolor</h4>
              <p className={styles.serviceInfo}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Debitis, deleniti nostrum atque esse excepturi quam mollitia
                voluptates laudantium quaerat delectus,{" "}
                <strong>algo importante aqui</strong> neque, qui quibusdam
                voluptas ipsam iusto impedit ipsa quia quae!
              </p>
            </div>
            <div className={styles.serviceContainer}>
              <h4 className={styles.serviceTitle}>Lorem ipsum dolor</h4>
              <p className={styles.serviceInfo}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Debitis, deleniti nostrum atque esse excepturi quam mollitia
                voluptates laudantium quaerat delectus,{" "}
                <strong>algo importante aqui</strong> neque, qui quibusdam
                voluptas ipsam iusto impedit ipsa quia quae!
              </p>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
}

export default About;
