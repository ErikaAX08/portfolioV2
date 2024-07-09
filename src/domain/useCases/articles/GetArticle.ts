import { ArticleRepository } from "@/data/repositories/ArticleRepository";
import { Page } from "@/domain/models/Page";

export class GetArticle {
  constructor(private readonly articleRepository: ArticleRepository) {}

  async execute(url: string): Promise<Page | null> {
    return await this.articleRepository.getArticleByUrl(url);
  }
}