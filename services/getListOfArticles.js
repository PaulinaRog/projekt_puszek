import { getList, getFileBySlug } from "../lib/mdParser";

export const getListOfArticles = ({ folder }) => {
  const articles = getList(`_articles/${folder}`);

  return articles.sort((a, b) => a.createdAt - b.createdAt).reverse();
};

export const getArticle = async (slug) => {
  const article = await getFileBySlug(`_articles/${folder}`, slug);

  return article;
};
