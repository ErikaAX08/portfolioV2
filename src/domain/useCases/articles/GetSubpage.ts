import { SubpageRepository } from "@/data/repositories/SubpageRepository";
import { Page } from "@/domain/models/Page";

export class GetSubpage {
  constructor(private readonly subpageRepository: SubpageRepository) {}

  async execute(page: string, subpage: string): Promise<Page | null> {
    return await this.subpageRepository.getSubpage(page, subpage);
  }
}