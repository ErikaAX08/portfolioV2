import { FC } from "react";
import styles from "./CommonLink.module.css";
import Link from "next/link";

interface CommonLinkProps {
  text: string;
  url?: string;
  linkProps?: React.AnchorHTMLAttributes<HTMLAnchorElement>;
}

const CommonLink: FC<CommonLinkProps> = ({ text, url, linkProps }) => {
  return (
    <strong className={styles.linkContainer}>
      {url ? <Link className={styles.link} href={url} {...linkProps}>{text}</Link> : text}
    </strong>
  );
};

export default CommonLink;
