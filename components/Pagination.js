import Link from "next/link";
import React from "react";

export default function Pagination({ path, currentPage, totalPages, query }) {
  return (
    <div className="flex justify-center mt-8">
      {currentPage !== 1 && (
        <Link
          href={{
            pathname: `/blog/${path}/${currentPage - 1}`,
            query: { query: query.query },
          }}
          className="px-4 py-2 mr-4"
        >
          Poprzednia
        </Link>
      )}
      {Array.from({ length: totalPages }).map((_, index) => (
        <Link
          href={{
            pathname: `/blog/${path}/${index + 1}`,
            query: { query: query.query },
          }}
          key={index}
          className={`px-4 py-2 ${
            index + 1 === currentPage ? "text-acc-light dark:text-acc-dark" : ""
          }`}
        >
          {index + 1}
        </Link>
      ))}
      {currentPage !== totalPages && (
        <Link
          href={{
            pathname: `/blog/${path}/${currentPage + 1}`,
            query: { query: query.query },
          }}
          className="px-4 py-2 ml-4"
        >
          Następna
        </Link>
      )}
    </div>
  );
}
