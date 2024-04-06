import Link from "next/link";
import { FC } from "react";
import styles from "./AccentLink.module.css";

interface AccentLinkProps {
  text: string;
  url: string;
  className?: string;
}

const AccentLink: FC<AccentLinkProps> = ({ text, url, className }) => {
  return (
    <p className={`${styles.linkContainer} ${className}`}>
      <Link className={styles.link} href={url}>
        {text}
      </Link>
    </p>
  );
};

export default AccentLink;
