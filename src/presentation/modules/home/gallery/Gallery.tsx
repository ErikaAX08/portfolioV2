"use client";
import Image from "next/image";
import styles from "./Gallery.module.css";
import { useEffect, useRef } from "react";

function Gallery() {
  const imagesCol1 = useRef<HTMLDivElement>(null);
  const imagesCol2 = useRef<HTMLDivElement>(null);
  const imagesCol3 = useRef<HTMLDivElement>(null);
  const titleSlider = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (
      imagesCol1.current != null &&
      imagesCol2.current != null &&
      imagesCol3.current != null &&
      titleSlider.current != null
    ) {
      const cols = [
        imagesCol1.current,
        imagesCol2.current,
        imagesCol3.current,
        titleSlider.current,
      ];

      cols.forEach((col) => {
        const copy = col.children[0].cloneNode(true) as HTMLDivElement;
        col.appendChild(copy);
      });
    }
  }, []);

  return (
    <section className={styles.section}>
      <div ref={titleSlider} className={styles.sliderTitle}>
        <ul className={styles.titleContainer}>
          <li>
            <h2 className={styles.title}>Gallery</h2>
          </li>
          <li>
            <h2 className={styles.title}>Gallery</h2>
          </li>
          <li>
            <h2 className={styles.title}>Gallery</h2>
          </li>
          <li>
            <h2 className={styles.title}>Gallery</h2>
          </li>
          <li>
            <h2 className={styles.title}>Gallery</h2>
          </li>
        </ul>
      </div>
      <div className={styles.gallery}>
        <div ref={imagesCol1} className={styles.sectionCol}>
          <div className={styles.imagesContainer}>
            <div className={styles.imageWrapper}>
              <Image
                className={styles.image}
                src="/gallery/img-1.jpg"
                width={563}
                height={676}
                alt="img 1"
              />
            </div>
            <div className={styles.imageWrapper}>
              <Image
                className={styles.image}
                src="/gallery/img-1.jpg"
                width={563}
                height={676}
                alt="img 1"
              />
            </div>
            <div className={styles.imageWrapper}>
              <Image
                className={styles.image}
                src="/gallery/img-1.jpg"
                width={563}
                height={676}
                alt="img 1"
              />
            </div>
            <div className={styles.imageWrapper}>
              <Image
                className={styles.image}
                src="/gallery/img-1.jpg"
                width={563}
                height={676}
                alt="img 1"
              />
            </div>
          </div>
        </div>
        <div ref={imagesCol2} className={styles.sectionCol}>
          <div className={styles.imagesContainer}>
            <div className={styles.imageWrapper}>
              <Image
                className={styles.image}
                src="/gallery/img-1.jpg"
                width={563}
                height={676}
                alt="img 1"
              />
            </div>
            <div className={styles.imageWrapper}>
              <Image
                className={styles.image}
                src="/gallery/img-1.jpg"
                width={563}
                height={676}
                alt="img 1"
              />
            </div>
            <div className={styles.imageWrapper}>
              <Image
                className={styles.image}
                src="/gallery/img-1.jpg"
                width={563}
                height={676}
                alt="img 1"
              />
            </div>
            <div className={styles.imageWrapper}>
              <Image
                className={styles.image}
                src="/gallery/img-1.jpg"
                width={563}
                height={676}
                alt="img 1"
              />
            </div>
          </div>
        </div>
        <div ref={imagesCol3} className={styles.sectionCol}>
          <div className={styles.imagesContainer}>
            <div className={styles.imageWrapper}>
              <Image
                className={styles.image}
                src="/gallery/img-1.jpg"
                width={563}
                height={676}
                alt="img 1"
              />
            </div>
            <div className={styles.imageWrapper}>
              <Image
                className={styles.image}
                src="/gallery/img-1.jpg"
                width={563}
                height={676}
                alt="img 1"
              />
            </div>
            <div className={styles.imageWrapper}>
              <Image
                className={styles.image}
                src="/gallery/img-1.jpg"
                width={563}
                height={676}
                alt="img 1"
              />
            </div>
            <div className={styles.imageWrapper}>
              <Image
                className={styles.image}
                src="/gallery/img-1.jpg"
                width={563}
                height={676}
                alt="img 1"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Gallery;
