import Image from "next/image";
import styles from "./About.module.css";

function About() {
  return (
    <section id="about" className={styles.section}>
      <div>
        <h2 className={styles.title}>Make things & help others</h2>
      </div>
      <div className={styles.gridImages}>
        <div className={styles.gridCol}>
          <Image
            className={styles.image}
            src="/photos/buap.jpg"
            alt="Gato"
            width={600}
            height={800}
          />
          <Image
            className={styles.image}
            src="/photos/gordita.jpg"
            alt="Gato"
            width={600}
            height={800}
          />
        </div>
        <div className={styles.gridCol}>
          <Image
            className={styles.image}
            src="/photos/boti.jpg"
            alt="Gato"
            width={600}
            height={800}
          />
          <Image
            className={styles.image}
            src="/photos/atomica.jpg"
            alt="Gato"
            width={600}
            height={800}
          />
        </div>
        <div className={styles.gridCol}>
          <Image
            className={styles.image}
            src="/photos/copo.jpg"
            alt="Gato"
            width={600}
            height={800}
          />
          <Image
            className={styles.image}
            src="/photos/alex.jpg"
            alt="Gato"
            width={600}
            height={800}
          />
        </div>
        <div className={styles.gridCol}>
          <Image
            className={styles.image}
            src="/photos/lago.jpg"
            alt="Gato"
            width={600}
            height={800}
          />
          <Image
            className={styles.image}
            src="/photos/my_future.jpg"
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
            <div className={styles.aboutItemContainer}>
              <div className={styles.indicatorContainer}>
                <div className={styles.numberContainer}>
                  <Image
                    alt="Icon"
                    src="/icons/circle.png"
                    width={50}
                    height={50}
                  />
                  <span>1</span>
                </div>
                <div className={styles.line}></div>
              </div>
              <p>
                I am originally from Mexico and currently reside in the state of
                Puebla, where I am pursuing a degree in Computer Science
                Engineering at the Benemérita Universidad Autónoma de Puebla.
                From a young age, I have been fascinated by the world of
                technology and programming, which has led me to develop a wide
                range of skills across various platforms and programming
                languages.
              </p>
            </div>
            <div className={styles.aboutItemContainer}>
              <div className={styles.indicatorContainer}>
                <div className={styles.numberContainer}>
                  <Image
                    alt="Icon"
                    src="/icons/circle.png"
                    width={50}
                    height={50}
                  />
                  <span>2</span>
                </div>
                <div className={styles.line}></div>
              </div>
              <p>
                My journey in programming began at the age of 14 when I started
                creating video games using the Godot engine. This initial
                experience allowed me to understand the fundamentals of
                programming and game design, which eventually led me to explore
                development in Unity. The creation of video games captivated me
                and solidified my passion for programming, driving me to delve
                deeper into software development.
              </p>
            </div>
            <div className={styles.aboutItemContainer}>
              <div className={styles.indicatorContainer}>
                <div className={styles.numberContainer}>
                  <Image
                    alt="Icon"
                    src="/icons/circle.png"
                    width={50}
                    height={50}
                  />
                  <span>3</span>
                </div>
                <div className={`${styles.line} ${styles.hiddeLine}`}></div>
              </div>
              <p>
                Over time, my interest expanded to mobile application
                development, starting with the Xamarin framework. This new focus
                allowed me to combine my programming skills with the creation of
                useful tools for mobile devices. Later, my curiosity led me to
                explore web development, where I began working with PHP,
                JavaScript, HTML, and CSS. This enabled me to understand the
                basics of web development and eventually learn advanced
                frameworks such as React.
              </p>
            </div>
          </div>
          <div className={styles.contentCols}>
            <div className={styles.aboutItemContainer}>
              <div className={styles.indicatorContainer}>
                <div className={styles.numberContainer}>
                  <Image
                    alt="Icon"
                    src="/icons/circle.png"
                    width={50}
                    height={50}
                  />
                  <span>4</span>
                </div>
                <div className={styles.line}></div>
              </div>
              <p>
                After gaining a solid foundation in web development, I decided
                to return to mobile application development, this time using
                React Native. This tool allowed me to efficiently create
                cross-platform applications, combining the best of my web and
                mobile development skills. However, my interest in native
                applications led me to focus on developing Android applications
                using Android Studio.
              </p>
            </div>
            <div className={styles.aboutItemContainer}>
              <div className={styles.indicatorContainer}>
                <div className={styles.numberContainer}>
                  <Image
                    alt="Icon"
                    src="/icons/circle.png"
                    width={50}
                    height={50}
                  />
                  <span>5</span>
                </div>
                <div className={styles.line}></div>
              </div>
              <p>
                Currently, in addition to being a student, I work as a freelance
                programmer. In this role, I specialize in creating
                cross-platform applications and developing web pages. My
                experience ranges from designing and implementing technological
                solutions to optimizing and maintaining existing projects. This
                duality between my studies and freelance work allows me to apply
                my academic knowledge to real projects and continue learning and
                improving my skills.
              </p>
            </div>
            <div className={styles.aboutItemContainer}>
              <div className={styles.indicatorContainer}>
                <div className={styles.numberContainer}>
                  <Image
                    alt="Icon"
                    src="/icons/circle.png"
                    width={50}
                    height={50}
                  />
                  <span>6</span>
                </div>
              </div>
              <p>
                My passion for programming and my constant desire to learn have
                enabled me to grow professionally in the world of technology. I
                am always seeking new challenges and opportunities to innovate,
                whether in the academic or professional field, contributing with
                my work to the development of technological solutions that make
                people&apos;s lives easier.
              </p>
            </div>
          </div>
        </div>
      </article>
      <article className={styles.article}>
        <h3 className={styles.subtitle}>Services</h3>
        <div className={styles.contentContainer}>
          <div className={styles.contentCols}>
            <div className={styles.serviceContainer}>
              <h4 className={styles.serviceTitle}>
                Custom Mobile Application Development
              </h4>
              <p className={styles.serviceInfo}>
                Development of tailored mobile applications for Android and iOS,
                customized to meet specific client needs. These apps feature
                intuitive design, advanced functionalities, and seamless system
                integration, ensuring high-quality user experience and robust
                performance.
              </p>
            </div>
            <div className={styles.serviceContainer}>
              <h4 className={styles.serviceTitle}>
                E-Commerce Applications and Websites
              </h4>
              <p className={styles.serviceInfo}>
                Design and development of online stores and mobile e-commerce
                applications, with secure payment integration, inventory
                management, and optimized user experience. These solutions
                provide seamless shopping and multiple payment methods.
              </p>
            </div>
            <div className={styles.serviceContainer}>
              <h4 className={styles.serviceTitle}>
                Enterprise Management Applications
              </h4>
              <p className={styles.serviceInfo}>
                Creation of mobile and web applications for efficient enterprise
                resource management, including CRM, ERP, and customized
                productivity tools. These apps streamline processes, improve
                data accuracy, and enhance decision-making with real-time
                insights.
              </p>
            </div>
          </div>
          <div className={styles.contentCols}>
            <div className={styles.serviceContainer}>
              <h4 className={styles.serviceTitle}>
                Personal Portfolio Design and Development
              </h4>
              <p className={styles.serviceInfo}>
                Crafting personalized online portfolios for professionals, with
                an attractive design that effectively showcases their work and
                skills. These portfolios include interactive elements,
                responsive design, and SEO optimization to attract clients or
                employers.
              </p>
            </div>
            <div className={styles.serviceContainer}>
              <h4 className={styles.serviceTitle}>
                Landing Pages for Businesses and Institutions
              </h4>
              <p className={styles.serviceInfo}>
                Development of effective and visually appealing landing pages
                for marketing campaigns, product and service promotions. These
                pages are optimized for SEO, fast loading times, and compelling
                calls-to-action to maximize engagement and conversions.
              </p>
            </div>
            <div className={styles.serviceContainer}>
              <h4 className={styles.serviceTitle}>Administrative Systems</h4>
              <p className={styles.serviceInfo}>
                Implementation of web-based administrative systems for
                comprehensive management of human resources, finances,
                inventories, and more, optimizing processes and improving
                organizational efficiency.
              </p>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
}

export default About;
