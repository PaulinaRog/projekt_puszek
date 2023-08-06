import Link from "next/link";
import React from "react";

export default function Links({ post, sub }) {
  return (
    <div className="pb-3">
      <i className="fa-solid fa-link text-xs pr-3"></i>
      <Link href={`/blog/${sub}/post/${post.slug}`}>{post.title}</Link>
    </div>
  );
}
