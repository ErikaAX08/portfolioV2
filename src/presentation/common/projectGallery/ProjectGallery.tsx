"use client";
import { FC } from "react";
import Link from "next/link";
import styles from "./ProjectGallery.module.css";
import Image from "next/image";

interface ProjectImage {
  src: string;
  alt: string;
  width: number;
  height: number;
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
  // FUNCION PARA DETERMINAR TAMAÑO DE IMAGEN SOLO EN DESKTOP
  const getImageSize = (index: number) => {
    if (index % 3 === 0) return styles.large;
    if (index % 3 === 1) return styles.medium;
    return styles.small;
  };

  // FUNCION PARA OBTENER COLOR DE FONDO CON PATRON MAS ALEATORIO
  const getBackgroundClass = (image: ProjectImage, index: number) => {
    if (image.backgroundColor) return styles[image.backgroundColor];

    // PATRON MAS ALEATORIO PARA COLORES
    const colorPatterns = [
      (i: number) => i % 5 === 0 || i % 7 === 0,
      (i: number) => (i * 3) % 11 < 5,
      (i: number) => i % 6 === 2 || i % 6 === 4,
    ];

    const patternIndex = index % colorPatterns.length;
    const shouldBeRed = colorPatterns[patternIndex](index);

    return shouldBeRed ? styles.redBackground : styles.purpleBackground;
  };

  return (
    <div className={`${styles.galleryContainer} ${className}`}>
      {title && <h2 className={styles.galleryTitle}>{title}</h2>}
      <div className={styles.gallery}>
        {images.map((image, index) => (
          <div
            key={`image-${index}`}
            className={`${styles.imageWrapper} ${getImageSize(
              index
            )} ${getBackgroundClass(image, index)}`}
            // AÑADIR DATA ATTRIBUTES PARA DEBUGGING SI ES NECESARIO
            data-index={index}
            data-size={getImageSize(index).split(".")[1]} // EXTRAE EL NOMBRE DE LA CLASE
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
                  width={image.width}
                  height={image.height}
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
                width={image.width}
                height={image.height}
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
