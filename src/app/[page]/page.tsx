import type { Metadata } from "next";
import { FirebaseArticleRepository } from "@/data/repositories/ArticleRepository";
import { GetArticle } from "@/domain/useCases/articles/GetArticle";
import { notFound } from "next/navigation";
import Article from "@/presentation/modules/project/page/Article";
import { Article as ArticleModel } from "@/domain/models/Article";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ page: string }>;
}): Promise<Metadata> {
  const { page } = await params;
  const projectRepository = new FirebaseArticleRepository();
  const getProject = new GetArticle(projectRepository);
  const projectData = await getProject.execute(page);

  if (!projectData) return notFound();

  return {
    title: `${projectData.data?.title} - Erika AX`,
    // description: page.seo?.description || page.bodySummary,
    openGraph: {
      // publishedTime: page.createdAt,
      // modifiedTime: page.updatedAt,
      type: "article",
    },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ page: string }>;
}) {
  const { page } = await params;
  const projectRepository = new FirebaseArticleRepository();
  const getPage = new GetArticle(projectRepository);
  const pageData = await getPage.execute(page);

  if (!pageData) return notFound();

  return <Article page={pageData.data as ArticleModel} />;
}
