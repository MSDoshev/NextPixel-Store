"use client";

import PagePagination from "@/components/ui/Page-Pagination.js";
import { DUMMY_NEWS } from "../../../dummy-data";

import React, { useState } from "react";
import NewsList from "@/components/news/news-list.js";

export default function NewsPage() {
  const newsPerPage = 3;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(DUMMY_NEWS.length / newsPerPage);
  const currentNews = DUMMY_NEWS.slice(
    (currentPage - 1) * newsPerPage,
    currentPage * newsPerPage
  );

  const goToPage = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="flex flex-col gap-36 pb-5">
      <h1 className="flex justify-center items-center pt-24 font-bold text-6xl">
        Pixel <span className="text-sky-500">News</span>
      </h1>
      <NewsList articles={currentNews} />
      <PagePagination
        totalPages={totalPages}
        currentPage={currentPage}
        goToPage={goToPage}
      />
    </div>
  );
}
