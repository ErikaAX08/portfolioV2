import { FC } from "react";
import styles from "./CommonLink.module.css";
import Link from "next/link";

interface CommonLinkProps {
  text: string;
  url?: string;
}

const CommonLink: FC<CommonLinkProps> = ({ text, url }) => {
  return (
    <strong className={styles.linkContainer}>
      {url ? <Link className={styles.link} href={url}>{text}</Link> : text}
    </strong>
  );
};

export default CommonLink;
