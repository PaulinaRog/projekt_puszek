import Layout from "@/components/Layout";
import Links from "@/components/Links";
import { getList } from "@/lib/mdParser";
import categories from "@/services/articleCategoriesList";
import { desc } from "@/services/siteDescriptions";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const getStaticProps = () => {
  const data = {};
  categories.forEach((category) => {
    data[category.name] = getList(`_articles/_${category.name}`);
  });

  return {
    props: data,
  };
};

const generateLinks = (posts) => {
  return posts.map((post) => {
    return (
      <Links
        post={post}
        key={post.slug}
        sub={post.tags && post.tags.length > 0 ? post.tags[0] : null}
      />
    );
  });
};

export default function Articles({
  cats,
  dogs,
  birds,
  rodents,
  aquarium,
  terrarium,
}) {
  return (
    <Layout>
      <div className="my-[50px] container">
        <h1 className="text-3xl self-start">Kategorie</h1>
        <div className=" max-w-lg h-[1px] bg-acc-light dark:bg-acc-dark m-auto my-10"></div>
        <p className="mt-8 lg:max-w-[60vw] m-auto">{desc[0].desc}</p>
        <div className=" max-w-lg h-[0.5px] bg-acc-light dark:bg-acc-dark m-auto my-10 mb-32"></div>
      </div>
      <div className="h-fit my-[50px] flex flex-col gap-5 container items-center">
        {categories.map((category) => (
          <div
            className="flex flex-col lg:w-[50vw] mb-10 border-[1px] rounded-2xl shadow-lg dark:shadow-shdw-dark  shadow-shdw-light border-acc-light dark:border-acc-dark"
            key={category.name}
          >
            <div className="lg:h-[250px] h-[150px] mb-8">
              <Image
                className="object-cover w-full h-full rounded-t-2xl"
                src={category.imageSrc}
                width={700}
                height={250}
                alt={category.alt}
              />
            </div>
            <div className="flex flex-col lg:px-8 px-2 mb-5">
              <div className="flex lg:flex-row flex-col justify-between mb-5">
                <h2 className="text-xl font-semibold">
                  {category.alt.toUpperCase()}
                </h2>
                <Link href={`/blog/${category.alt}/1`} className="text-sm">
                  więcej <i className="fa-solid fa-chevron-right text-xs"></i>
                </Link>
              </div>
              {generateLinks(eval(category.name))}
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
}
