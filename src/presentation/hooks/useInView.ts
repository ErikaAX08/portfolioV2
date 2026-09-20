import { useState, useEffect, RefObject } from "react";

function useInView(ref: RefObject<HTMLElement | null>): boolean {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect(); // Desconecta el observer después de la primera intersección si no necesitas observar continuamente
        }
      },
      {
        threshold: 0.1, // Puedes ajustar el umbral según tus necesidades
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref]);

  return isInView;
}

export default useInView;
