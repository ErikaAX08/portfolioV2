import { Message } from "@/domain/models/Message";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";

export interface MessageRepository {
  addMessage(message: Message): Promise<void>;
}

export class FirebaseMessageRepository implements MessageRepository {
  async addMessage(message: Message): Promise<void> {
    const messagesRef = collection(db, "messages");
    await addDoc(messagesRef, message);
  }
}
