import Image from "next/image";
import styles from "./ProjectCard.module.css";
import Link from "next/link";
import { FC } from "react";

interface ProjectCardProps {
  name: string;
  description: string[];
  link: {
    name: string;
    url: string;
  };
  images: {
    src: string;
    alt: string;
  }[];
}

const ProjectCard: FC<ProjectCardProps> = ({
  name,
  description,
  link,
  images,
}) => {
  return (
    <article className={styles.project}>
      <div className={styles.projectInfo}>
        <h2 className={styles.title}>{name}</h2>
        <div className={styles.description}>
          {description.map((pharagrap, key) => (
            <p key={key}>{pharagrap}</p>
          ))}
        </div>
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
