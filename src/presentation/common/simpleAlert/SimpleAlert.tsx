"use client";

import Image from "next/image";
import { FC, useEffect, useState } from "react";
import styles from "./SimpleAlert.module.css";

interface SimpleAlertProps {
  type: "Successful" | "Warning" | "Error";
  text: string;
  onClose: () => void;
}

const SimpleAlert: FC<SimpleAlertProps> = ({ type, text, onClose }) => {
  const [isVisible, setIsVisible] = useState(true);

  const alertColors: { [key in SimpleAlertProps["type"]]: string } = {
    Successful: "#A8FFC5",
    Warning: "#FFEEA8",
    Error: "#FFABA8",
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      onClose()
    }, 20000); 

    return () => clearTimeout(timer);
  }, [onClose]);

  const handleClose = () => {
    setIsVisible(false);
    onClose();
  };

  if (!isVisible) return null;

  return (
    <div
      style={{ backgroundColor: alertColors[type] }}
      className={styles.container}
    >
      <p className={styles.text}>{text}</p>
      <div onClick={handleClose} className={styles.imageContainer}>
        <Image src="/icons/close.svg" width={30} height={30} alt="Close" />
      </div>
      <div className={styles.progressBar}></div>
    </div>
  );
};

export default SimpleAlert;
