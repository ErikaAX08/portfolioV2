import Image from "next/image";
import styles from "./ProjectCard.module.css";
import Link from "next/link";
import { FC } from "react";
import { SelectedWork } from "@/domain/models/SelectedWork";

const ProjectCard: FC<SelectedWork> = ({
  name,
  article_link,
  description,
  link,
  images,
}) => {
  return (
    <article className={styles.project}>
      <div className={styles.projectInfo}>
        <h2 className={styles.title}>
          {article_link ? (
            <Link className={styles.titleLink} href={article_link}>
              {name}
            </Link>
          ) : (
            name
          )}
        </h2>

        <div
          className={styles.description}
          dangerouslySetInnerHTML={{ __html: description }}
        ></div>
        
        <Link className={styles.linkContainer} href={link.url} target="_blank">
          <span className={styles.link}>{link.name}</span>
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
        {images.map((image, key) => (
          <Image
            key={key}
            className={styles.image}
            src={image.src}
            alt={image.alt}
            width={500}
            height={500}
          />
        ))}
      </div>
    </article>
  );
};

export default ProjectCard;
