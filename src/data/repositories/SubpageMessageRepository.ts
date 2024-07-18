import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";

export interface SubpageMessageRepository {
  sendMessage(
    page: string,
    subpage: string,
    data: Record<string, any>
  ): Promise<void>;
}

export class FirebaseSubpageMessageRepository
  implements SubpageMessageRepository
{
  async sendMessage(
    page: string,
    subpage: string,
    data: Record<string, any>
  ): Promise<void> {
    try {
      const messagesRef = collection(
        db,
        "articles",
        page,
        "subpages",
        subpage,
        "messages"
      );
      await addDoc(messagesRef, data);
    } catch (error) {
      console.error("Error sending message:", error);
      throw error;
    }
  }
}
