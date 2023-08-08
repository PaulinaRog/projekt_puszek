import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function LastArticles({ last4Posts }) {
  return (
    <div className="my-[50px] container">
      <h2 className="text-2xl mb-10">Ostatnie artykuły</h2>
      <div className="flex lg:flex-row flex-col lg:flex-wrap lg:justify-center items-center gap-7">
        {last4Posts.map((last) => {
          return (
            <Link
              href={`/blog/${last.tags[0]}/post/${last.slug}`}
              key={last.datetime}
              className="lg:w-[300px] w-[90vw] lg:h-[300px] h-fit flex flex-col border-[1px] border-secondary-light dark:border-acc-dark rounded-2xl dark:shadow-shdw-dark shadow-shdw-light shadow-md bg-secondary-light dark:bg-bg-dark"
            >
              <div className="w-full h-[170px] mb-5">
                <Image
                  src={last.cover}
                  width={200}
                  height={200}
                  alt={last.title}
                  className="object-cover w-full h-full rounded-t-2xl"
                />
              </div>
              <div className="px-3 pb-5">
                <h3>{last.title}</h3>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
