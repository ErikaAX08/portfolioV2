import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";
import { SelectedWork } from "@/domain/models/SelectedWork";

export interface SelectedWorkRepository {
  getSelectedWork(): Promise<SelectedWork[]>;
}

export class FirebaseSelectedWorkRepository implements SelectedWorkRepository {
  async getSelectedWork(): Promise<SelectedWork[]> {
    const collRef = collection(db, "selected_work");
    const docsSnap = await getDocs(collRef);

    const selectedWork: SelectedWork[] = docsSnap.docs.map((doc) => ({
      ...(doc.data() as SelectedWork),
    }));

    return selectedWork;
  }
}
