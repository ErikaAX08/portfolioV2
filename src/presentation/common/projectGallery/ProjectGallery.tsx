"use client";
import { FC, useMemo } from "react";
import Link from "next/link";
import styles from "./ProjectGallery.module.css";
import Image from "next/image";

interface ProjectImage {
  src: string;
  alt: string;
  link?: string;
  backgroundColor?: "redBackground" | "purpleBackground";
}

interface ProjectGalleryProps {
  title?: string;
  images: ProjectImage[];
  className?: string;
}

const ProjectGallery: FC<ProjectGalleryProps> = ({
  title,
  images,
  className = "",
}) => {
  // FUNCION ALEATORIA PARA LAS IMAGENES
  const imageSizes = useMemo(() => {
    if (images.length === 0) return [];

    if (images.length !== 4) {
      return Array(images.length).fill(styles.medium);
    }

    // PATRON DE IMAGENES
    const patterns = [
      [styles.large, styles.medium, styles.large, styles.small],
      [styles.large, styles.small, styles.large, styles.medium],
      [styles.medium, styles.large, styles.small, styles.large],
      [styles.small, styles.large, styles.medium, styles.large],
      [styles.large, styles.medium, styles.small, styles.large],
    ];

    // SELECCIONAR UN PATRON ALEATORIO
    const patternIndex = Math.floor(Math.random() * patterns.length);
    return patterns[patternIndex];
  }, [images.length]);

  // GENERAR FONDO
  const getBackgroundClass = (image: ProjectImage, index: number) => {
    if (image.backgroundColor) return styles[image.backgroundColor];

    const colors = [styles.redBackground, styles.purpleBackground];
    const colorIndex = (index * 13 + 7) % colors.length;
    return colors[colorIndex];
  };

  return (
    <div className={`${styles.galleryContainer} ${className}`}>
      {title && <h2 className={styles.galleryTitle}>{title}</h2>}
      <div className={styles.gallery}>
        {images.map((image, index) => (
          <div
            key={`image-${index}`}
            className={`${styles.imageWrapper} ${
              imageSizes[index] || styles.medium
            } ${getBackgroundClass(image, index)}`}
            // AÑADIR DATA ATTRIBUTES PARA DEBUGGING
            data-index={index}
            data-size={imageSizes[index]?.split(".")[1] || "medium"}
          >
            {image.link ? (
              <Link
                href={image.link}
                className={styles.imageLink}
                aria-label={`Ver proyecto: ${image.alt}`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className={styles.projectImage}
                  // OPTIMIZACIONES DE NEXT.JS
                  priority={index < 2} // PRIORIZAR LAS PRIMERAS 2 IMAGENES
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                />
              </Link>
            ) : (
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className={styles.projectImage}
                // OPTIMIZACIONES DE NEXT.JS
                priority={index < 2} // PRIORIZAR LAS PRIMERAS 2 IMAGENES
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectGallery;
