"use client"
import {FC, useState, useEffect, useRef} from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./ProjectGallery.module.css";

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
    rearrangeInterval?: number;
    className?: string;
}

const ProjectGallery: FC<ProjectGalleryProps> = ({
                                                     title,
                                                     images,
                                                     rearrangeInterval = 0, // Por defecto, sin reorganización automática
                                                     className = "",
                                                 }) => {
    const [positions, setPositions] = useState<number[]>(images.map((_, i) => i));
    const [isAnimating, setIsAnimating] = useState(false);
    const galleryRef = useRef<HTMLDivElement>(null);

    // Función para reorganizar los contenedores manteniendo las mismas imágenes
    const shuffleContainers = () => {
        if (isAnimating) return;

        setIsAnimating(true);

        // Esperar a que termine la animación de salida
        setTimeout(() => {
            // Create a new array of shuffled positions
            const shuffled = [...positions];
            for (let i = shuffled.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
            }
            setPositions(shuffled);

            // Wait for the enter animation to complete
            setTimeout(() => {
                setIsAnimating(false);
            }, 800);
        }, 400);
    };

    useEffect(() => {
        if (rearrangeInterval > 0) {
            const intervalId = setInterval(shuffleContainers, rearrangeInterval);
            return () => clearInterval(intervalId);
        }
    }, [rearrangeInterval, isAnimating]);

    const getImageSize = (index: number) => {
        if (index % 3 === 0) return styles.large;
        if (index % 3 === 1) return styles.medium;
        return styles.small;
    };

    const getBackgroundClass = (image: ProjectImage, index: number) => {
        if (image.backgroundColor) return styles[image.backgroundColor];
        return index % 2 === 0 ? styles.redBackground : styles.purpleBackground;
    };

    const orderedImages = positions.map(pos => images[pos]);

    return (
        <div className={`${styles.galleryContainer} ${className}`}>
            <div
                className={`${styles.gallery} ${isAnimating ? styles.animating : ""}`}
                ref={galleryRef}
            >
                {orderedImages.map((image, displayIndex) => {
                    // Find the original index of this image
                    const originalIndex = images.findIndex(img => img.src === image.src);

                    return (
                        <div
                            key={`image-${originalIndex}`}
                            className={`${styles.imageWrapper} ${getImageSize(displayIndex)} ${getBackgroundClass(image, displayIndex)}`}
                            style={{
                                zIndex: isAnimating ? orderedImages.length - displayIndex : 1
                            }}
                        >
                            {image.link ? (
                                <Link href={image.link} className={styles.imageLink}>
                                    <Image
                                        src={image.src}
                                        alt={image.alt}
                                        width={image.width}
                                        height={image.height}
                                        className={styles.projectImage}
                                    />
                                </Link>
                            ) : (
                                <Image
                                    src={image.src}
                                    alt={image.alt}
                                    width={image.width}
                                    height={image.height}
                                    className={styles.projectImage}
                                />
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default ProjectGallery;