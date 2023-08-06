import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Posts({ post, sub }) {
  return (
    <Link
      href={`/blog/${sub}/post/${post.slug}`}
      className="flex flex-col lg:w-[30vw] mb-10 border-[1px] rounded-2xl shadow-lg dark:shadow-shdw-dark  shadow-shdw-light border-acc-light dark:border-acc-dark"
    >
      <div className="h-[200px] mb-2">
        <Image
          src={post.cover}
          width={200}
          height={200}
          alt={post.title}
          className="object-cover w-full h-full rounded-t-2xl"
        />
      </div>
      <h2 className="m-3 font-medium text-lg">{post.title}</h2>
      <p className=" m-3 text-sm">{`${post.description.slice(0, 150)}...`}</p>
    </Link>
  );
}
