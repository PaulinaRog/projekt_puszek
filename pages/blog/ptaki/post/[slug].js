import Article from "@/components/Article";
import Layout from "@/components/Layout";
import SubNav from "@/components/SubNav";
import { getFileBySlug, getList } from "@/lib/mdParser";
import React from "react";

export const getStaticPaths = () => {
  const articles = getList(`_articles/_birds`);

  return {
    paths: articles.map((art) => ({ params: { slug: art.slug } })),
    fallback: false,
  };
};

export const getStaticProps = async (req) => {
  const { slug } = req.params;
  const article = await getFileBySlug("_articles/_birds", slug);

  return {
    props: { article },
  };
};

export default function SingleArticle({ article }) {
  const path = "ptaki";
  const navCount = 3;

  return (
    <Layout>
      <SubNav path={path} navCount={navCount} />
      <Article article={article} />
    </Layout>
  );
}
