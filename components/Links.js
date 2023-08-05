import Link from "next/link";
import React from "react";

export default function Links({ post, sub }) {
  return <Link href={`/blog/${sub}/post/${post.slug}`}>{post.title}</Link>;
}
