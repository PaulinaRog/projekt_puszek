import Layout from "@/components/Layout";
import { getFileBySlug, getList } from "@/lib/mdParser";
import React from "react";

export const getStaticPaths = () => {
  const articles = getList(`_articles/_aquarium`);

  return {
    paths: articles.map((art) => ({ params: { slug: art.slug } })),
    fallback: false,
  };
};

export const getStaticProps = async (req) => {
  const { slug } = req.params;
  const article = await getFileBySlug("_articles/_aquarium", slug);

  return {
    props: { article },
  };
};

export default function SingleArticle({ article }) {
  return (
    <Layout>
      <div className="h-fit container lg:max-w-[60%] my-[50px]">
        <h1 className="font-bold text-3xl">{article.title}</h1>
        <p>{article.createdAt}</p>
        <div
          className="prose"
          dangerouslySetInnerHTML={{ __html: article.content }}
        ></div>
      </div>
    </Layout>
  );
}
