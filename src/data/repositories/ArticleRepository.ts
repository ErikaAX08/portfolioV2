import { Page } from "@/domain/models/Page";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";
import { Article } from "@/domain/models/Article";

export interface ArticleRepository {
  getArticleByUrl(url: string): Promise<Page | null>;
}

export class FirebaseArticleRepository implements ArticleRepository {
  async getArticleByUrl(url: string): Promise<Page | null> {
    try {
      const docRef = doc(db, "articles", url);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const projectData = docSnap.data();
        const article: Article = {
          title: projectData.title,
          image: projectData.image,
          content: projectData.content,
          lastUpdated: projectData.lastUpdated,
        }
        const project: Page = {
          type: projectData.type,
          data: article
        };
        return project;
      } else {
        return null;
      }
    } catch (error) {
      console.error("Error fetching project:", error);
      return null;
    }
  }
}
