import { getList } from "@/lib/mdParser";

const postsPerPage = 9;

export function getPaginatedPosts(category, page, queryCategory) {
  const startIndex = (page - 1) * postsPerPage;
  const allPosts = getList(`_articles/${category}`);

  const filteredPosts = queryCategory
    ? allPosts.filter((post) => post.category === queryCategory)
    : allPosts;

  const paginatedPosts = filteredPosts.slice(
    startIndex,
    startIndex + postsPerPage
  );
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  return {
    filteredPosts: paginatedPosts,
    totalPages,
  };
}
