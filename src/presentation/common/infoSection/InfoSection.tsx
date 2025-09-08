import { FC } from "react";
import styles from "./InfoSection.module.css";
import WhiteButton from "../WhiteButton";
import OutlineButton from "../outlineButton";
import { useRouter } from "next/navigation";

interface InfoSectionProps {
  title: string;
  textPrimaryButton: string;
  textSecondaryButton: string;
  infoTexts: string[];
  infoTextUpper?: boolean;
  primaryButtonLink?: string;
  secondaryButtonLink?: string;
}

const InfoSection: FC<InfoSectionProps> = ({
  title,
  textPrimaryButton,
  textSecondaryButton,
  infoTexts,
  infoTextUpper = false,
  primaryButtonLink = "#",
  secondaryButtonLink = "#",
}) => {
  const router = useRouter();

  // FUNCION PARA MANEJAR CLICK DEL BOTON PRIMARIO
  const handlePrimaryClick = () => {
    if (primaryButtonLink && primaryButtonLink !== "#") {
      // SI ES URL EXTERNA, USAR WINDOW.LOCATION
      if (
        primaryButtonLink.startsWith("http") ||
        primaryButtonLink.startsWith("https")
      ) {
        window.open(primaryButtonLink, "_blank");
      } else {
        // SI ES RUTA INTERNA, USAR NEXT ROUTER
        router.push(primaryButtonLink);
      }
    }
  };

  // FUNCION PARA MANEJAR CLICK DEL BOTON SECUNDARIO
  const handleSecondaryClick = () => {
    if (secondaryButtonLink && secondaryButtonLink !== "#") {
      // SI ES URL EXTERNA, USAR WINDOW.LOCATION
      if (
        secondaryButtonLink.startsWith("http") ||
        secondaryButtonLink.startsWith("https")
      ) {
        window.open(secondaryButtonLink, "_blank");
      } else {
        // SI ES RUTA INTERNA, USAR NEXT ROUTER
        router.push(secondaryButtonLink);
      }
    }
  };

  return (
    <section className={styles.infoSection}>
      {/* TITULO PRINCIPAL */}
      <h1 className={styles.title}>{title}</h1>

      {/* CONTENEDOR DE TEXTOS INFORMATIVOS */}
      <div className={styles.infoContainer}>
        {infoTexts.map((text, index) => (
          <div
            key={index}
            className={`${styles.infoText} ${
              index % 2 === 0 ? styles.textRight : styles.textLeft
            } ${infoTextUpper ? styles.textUpper : ""}`}
          >
            <p>{text}</p>
          </div>
        ))}
      </div>

      {/* CONTENEDOR DE BOTONES */}
      <div className={styles.buttonContainer}>
        <WhiteButton text={textPrimaryButton} onClick={handlePrimaryClick} />
        <OutlineButton
          text={textSecondaryButton}
          onClick={handleSecondaryClick}
        />
      </div>
    </section>
  );
};

export default InfoSection;
