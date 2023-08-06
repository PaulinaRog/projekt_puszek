import { nav } from "@/services/Nav";
import Link from "next/link";
import React, { useState } from "react";

export default function SubNav({ path, navCount }) {
  const [visible, setVisible] = useState(false);

  return (
    <div className="pt-5 lg:pt-0 px-5 lg:px-0">
      <div
        className="w-[90vw] lg:hidden flex gap-5 items-center mb-5"
        onClick={() => {
          setVisible(!visible);
        }}
      >
        KATEGORIE <i className="fa-solid fa-filter"></i>
      </div>
      <nav
        className={`w-full lg:h-[7vh] h-fit px-5 pb-5 lg:px-0 lg:pb-0 flex-wrap lg:flex-nowrap flex flex-col lg:flex-row lg:justify-evenly lg:items-center border-b-2 border-secondary-light dark:border-secondary-dark
      ${visible ? "flex" : "lg:flex hidden"}
      `}
      >
        {nav[1].sub[navCount].cat.map((cat) => {
          return (
            <Link
              key={cat.id}
              href={{
                pathname: `/blog/${path}/1`,
                ...(cat.query ? { query: { query: cat.query } } : {}),
              }}
            >
              {cat.name}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
