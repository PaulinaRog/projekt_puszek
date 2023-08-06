import React from "react";

export default function Article({ article }) {
  return (
    <div className="h-fit container lg:max-w-[60%] my-[50px]">
      <h1 className="font-bold text-3xl mb-6">{article.title}</h1>
      <p className="text-sm mb-2">{article.date}</p>
      <div
        className="prose"
        dangerouslySetInnerHTML={{ __html: article.content }}
      ></div>
    </div>
  );
}
