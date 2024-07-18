import { SubpageMessageRepository } from "@/data/repositories/SubpageMessageRepository";

export class SendSubpageMessage {
  constructor(
    private readonly subpageMessageRepository: SubpageMessageRepository
  ) {}

  async execute(
    page: string,
    subpage: string,
    data: Record<string, any>
  ): Promise<void> {
    return await this.subpageMessageRepository.sendMessage(page, subpage, data);
  }
}
