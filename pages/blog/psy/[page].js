import Link from "next/link";
import Layout from "@/components/Layout";
import Posts from "@/components/Posts";
import { getList } from "@/lib/mdParser";
import React from "react";

const postsPerPage = 10;

export async function getServerSideProps({ query }) {
  const page = query.page ? parseInt(query.page, 10) : 1;
  const startIndex = (page - 1) * postsPerPage;

  const allPosts = getList(`_articles/_dogs`);
  const paginatedPosts = allPosts.slice(startIndex, startIndex + postsPerPage);
  const totalPages = Math.ceil(allPosts.length / postsPerPage);

  return {
    props: {
      dogs: paginatedPosts,
      currentPage: page,
      totalPages,
    },
  };
}

export default function Dog({ dogs, currentPage, totalPages }) {
  const path = "psy";

  return (
    <Layout>
      <h1 className="text-3xl self-start mt-[50px] container">
        Psy - artykuły
      </h1>
      <div className="h-[100vh] container my-[50px]">
        {dogs.map((post) => (
          <Posts post={post} key={post.slug} sub={post.tags[0]} />
        ))}

        {/* Pagination buttons */}
        <div className="flex justify-center mt-8">
          {currentPage !== 1 && (
            <Link
              href={`/blog/${path}/${currentPage - 1}`}
              className="px-4 py-2 mr-4"
            >
              Previous
            </Link>
          )}
          {Array.from({ length: totalPages }).map((_, index) => (
            <Link
              href={`/blog/${path}/${index + 1}`}
              key={index}
              className={`px-4 py-2 ${
                index + 1 === currentPage
                  ? "text-acc-light dark:text-acc-dark"
                  : ""
              }`}
            >
              {index + 1}
            </Link>
          ))}
          {currentPage !== totalPages && (
            <Link
              href={`/blog/${path}/${currentPage + 1}`}
              className="px-4 py-2 ml-4"
            >
              Next
            </Link>
          )}
        </div>
      </div>
    </Layout>
  );
}
