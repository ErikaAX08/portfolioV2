import { Page } from "@/domain/models/Page";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";

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
        const project: Page = {
          title: projectData.title,
          image: projectData.image,
          content: projectData.content,
          lastUpdated: projectData.lastUpdated,
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
