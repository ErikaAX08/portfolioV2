"use client"
import {FC, useEffect, useRef, useState} from "react";
import styles from "./Slider.module.css";

interface SliderProps {
    texts: string[];
    props?: React.AnchorHTMLAttributes<HTMLAnchorElement>;
    speed?: number;
}

const Slider: FC<SliderProps> = ({texts, props, speed}) => {
    const [duplicatedTexts, setDuplicatedTexts] = useState<string[]>([]);
    const trackRef = useRef<HTMLDivElement>(null);

    // Duplicar los textos para crear un efecto infinito
    useEffect(() => {
        // Asegurarnos de tener suficientes elementos para una animación fluida
        const multiplier = Math.max(3, Math.ceil(50 / texts.length));
        let duplicated: string[] = [];

        for (let i = 0; i < multiplier; i++) {
            duplicated = [...duplicated, ...texts];
        }

        setDuplicatedTexts(duplicated);
    }, [texts]);

    // Aplicar la animación con la velocidad personalizada
    useEffect(() => {
        if (trackRef.current) {
            const trackElement = trackRef.current;
            trackElement.style.animationDuration = `${speed}s`;
        }
    }, [speed, trackRef]);

    return (
        <div className={styles.sliderContainer}>
            <div className={styles.slider}>
                <div className={styles.slideTrack} ref={trackRef}>
                    {duplicatedTexts.map((text, index) => (
                        <div key={index} className={styles.slide}>
                            {text}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Slider;
