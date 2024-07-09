import { MessageRepository } from "@/data/repositories/ContactRepository";
import { Message } from "@/domain/models/Message";

export class SubmitMessage {
  private messageRepository: MessageRepository;

  constructor(messageRepository: MessageRepository) {
    this.messageRepository = messageRepository;
  }

  async execute(message: Message): Promise<void> {
    await this.messageRepository.addMessage(message);
  }
}
