import Image from "next/image";
import styles from "./page.module.css";
import { FC } from "react";
import { Article as ArticleModel } from "@/domain/models/Article";

interface ArticleProps {
  page: ArticleModel;
}

const Article: FC<ArticleProps> = ({ page }) => {
  return (
    <article className={styles.container}>
      <h2 className={styles.title}>{page.title}</h2>
      {page.image && (
        <div className={styles.imageContainer}>
          <Image
            className={styles.image}
            src={page.image}
            alt="Article image"
            fill
          />
        </div>
      )}

      <section className={styles.containerContent}>
        <div
          className={styles.content}
          dangerouslySetInnerHTML={{ __html: page.content }}
        />
      </section>
    </article>
  );
};

export default Article;
