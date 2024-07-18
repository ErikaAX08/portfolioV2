import { Page } from "@/domain/models/Page";
import { Article } from "@/domain/models/Article";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";
import { Form } from "@/domain/models/Form";

export interface SubpageRepository {
  getSubpage(page: string, subpage: string): Promise<Page | null>;
}

export class FirebaseSubpageRepository implements SubpageRepository {
  async getSubpage(page: string, subpage: string): Promise<Page | null> {
    try {
      const docRef = doc(db, "articles", page, "subpages", subpage);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const projectData = docSnap.data();

        let subpageData: Article | Form | undefined;

        switch (projectData.type) {
          case "article":
            subpageData = {
              title: projectData.title,
              image: projectData.image,
              content: projectData.content,
              lastUpdated: projectData.lastUpdated,
            } as Article;
            break;
          case "form":
            subpageData = {
              title: projectData.title,
              form: projectData.form,
            } as Form;
            break;
          default:
            subpageData = undefined;
        }

        const project: Page = {
          type: projectData.type,
          data: subpageData,
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
