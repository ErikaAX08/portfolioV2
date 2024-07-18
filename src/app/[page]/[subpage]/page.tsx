import type { Metadata } from "next";
import { FirebaseSubpageRepository } from "@/data/repositories/SubpageRepository";
import { GetSubpage } from "@/domain/useCases/articles/GetSubpage";
import { notFound } from "next/navigation";
import Article from "@/presentation/modules/project/page/Article";
import { Article as ArticleModel } from "@/domain/models/Article";
import { Form as FormModel } from "@/domain/models/Form";
import Form from "@/presentation/modules/project/form/Form";

export async function generateMetadata({
  params,
}: {
  params: { page: string; subpage: string };
}): Promise<Metadata> {
  const subpageRepository = new FirebaseSubpageRepository();
  const getSubpage = new GetSubpage(subpageRepository);
  const projectData = await getSubpage.execute(params.page, params.subpage);

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

export default async function Subpage({
  params,
}: {
  params: { page: string; subpage: string };
}) {

  const subpageRepository = new FirebaseSubpageRepository();
  const getSubpage = new GetSubpage(subpageRepository);
  const subpageData = await getSubpage.execute(params.page, params.subpage);

  if (!subpageData) return notFound();

  if (subpageData.type === "article") {
    return <Article page={subpageData.data as ArticleModel} />;
  } else if (subpageData.type === "form") {
    return (
      <Form
        urlPage={params.page}
        urlSubpage={params.subpage}
        page={subpageData.data as FormModel}
      />
    );
  } else {
    return notFound();
  }
}
