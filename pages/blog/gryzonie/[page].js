import Layout from "@/components/Layout";
import Posts from "@/components/Posts";
import React from "react";
import { useRouter } from "next/router";
import Pagination from "@/components/Pagination";
import { getPaginatedPosts } from "@/services/getPaginatedPosts";
import SubNav from "@/components/SubNav";
import Intro from "@/components/Intro";

export async function getServerSideProps({ query }) {
  const page = query.page ? parseInt(query.page, 10) : 1;
  const { filteredPosts, totalPages } = getPaginatedPosts(
    "_rodents",
    page,
    query.query
  );

  return {
    props: {
      pets: filteredPosts,
      currentPage: page,
      totalPages,
    },
  };
}

export default function PetsArticles({ pets, currentPage, totalPages }) {
  const router = useRouter();
  const { query } = router;

  const path = "gryzonie";
  const navCount = 2;

  return (
    <Layout>
      <SubNav path={path} navCount={navCount} />
      <Intro navCount={navCount} query={query} />
      <div className="h-fit container my-[50px]">
        <div className="flex flex-wrap gap-10">
          {pets.length > 0
            ? pets.map((post) => (
                <Posts post={post} key={post.slug} sub={post.tags[0]} />
              ))
            : null}
        </div>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          query={query}
          path={path}
        />
      </div>
    </Layout>
  );
}
