"use client";

import { useEffect, useState } from "react";
import ProjectCard from "../projectCard";
import styles from "./Work.module.css";
import { SelectedWork } from "@/domain/models/SelectedWork";
import { FirebaseSelectedWorkRepository } from "@/data/repositories/SelectedWorkRepository";

function Work() {
  const [selectedWorks, setSelectedWorks] = useState<SelectedWork[]>([]);

  useEffect(() => {
    const fetchSelectedWorks = async () => {
      const repository = new FirebaseSelectedWorkRepository();
      try {
        const works = await repository.getSelectedWork();
        setSelectedWorks(works);
      } catch (error) {
        console.error("Error fetching selected work: ", error);
      }
    };

    fetchSelectedWorks();
  }, []);

  useEffect(() => {
    console.log(selectedWorks);
  }, [selectedWorks]);

  return (
    <section id="work" className={styles.section}>
      <div>
        <h2 className={styles.title}>Selected Work</h2>
      </div>
      {selectedWorks.map((work, index) => (
        <ProjectCard
          key={index}
          name={work.name}
          article_link={work.article_link}
          description={work.description}
          link={work.link}
          images={work.images}
        />
      ))}
    </section>
  );
}

export default Work;
