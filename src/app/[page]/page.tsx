import type { Metadata } from "next";
import { FirebaseArticleRepository } from "@/data/repositories/ArticleRepository";
import { GetArticle } from "@/domain/useCases/articles/GetArticle";
import { notFound } from "next/navigation";
import Article from "@/presentation/modules/project/page/Article";

export async function generateMetadata({
  params,
}: {
  params: { page: string };
}): Promise<Metadata> {
  const projectRepository = new FirebaseArticleRepository();
  const getProject = new GetArticle(projectRepository);
  const projectData = await getProject.execute(params.page);

  if (!projectData) return notFound();

  return {
    title: `${projectData.title} - Erika AX`,
    // description: page.seo?.description || page.bodySummary,
    openGraph: {
      // publishedTime: page.createdAt,
      // modifiedTime: page.updatedAt,
      type: "article",
    },
  };
}

export default async function Page({ params }: { params: { page: string } }) {
  const projectRepository = new FirebaseArticleRepository();
  const getPage = new GetArticle(projectRepository);
  const pageData = await getPage.execute(params.page);

  if (!pageData) return notFound();

  return <Article page={pageData} />;
}
