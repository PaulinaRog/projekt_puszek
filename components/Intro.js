import { nav } from "@/services/Nav";
import { useRouter } from "next/router";
import React from "react";

export default function Intro({ navCount }) {
  const router = useRouter();
  const query = router.query.query;

  const subCategory = nav[1].sub[navCount].cat.reduce((acc, sub) => {
    if (sub.query === query || sub.query === "") {
      return sub;
    }
    return acc;
  }, null);

  return (
    <>
      <h1 className="text-3xl self-start mt-[50px] container">
        {subCategory ? subCategory.title : ""}
      </h1>
      <div className="lg:max-w-lg max-w-xs h-[0.5px] bg-acc-light dark:bg-acc-dark m-auto my-10"></div>
      <p className="mt-8 lg:max-w-[60vw] m-auto max-w-[90vw]">
        {subCategory ? subCategory.desc : ""}
      </p>
      <div className="lg:max-w-lg max-w-xs h-[0.5px] bg-acc-light dark:bg-acc-dark m-auto my-10 mb-32"></div>
    </>
  );
}
