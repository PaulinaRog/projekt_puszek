import { getList } from "@/lib/mdParser";

export const getAllPosts = ({ folder }) => {
  const posts = getList(`_articles/${folder}`);

  const sortedPosts = posts.sort((a, b) => {
    const dateA = new Date(a.date.split(".").reverse().join("-"));
    const dateB = new Date(b.date.split(".").reverse().join("-"));

    return dateB - dateA;
  });

  const serializedPosts = sortedPosts.map((post) => ({
    ...post,
    createdAt: post.createdAt,
  }));

  return serializedPosts;
};
