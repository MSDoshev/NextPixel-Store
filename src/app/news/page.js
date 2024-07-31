"use client";

import React, { useState } from "react";

export default function NewsPage() {
  const articlesPerPage = 5; // Number of articles per page
  const [currentPage, setCurrentPage] = useState(1);

  const articles = [
    {
      id: 1,
      title: "News 1",
      date: "01/01/2024",
      content:
        "Lorem ipsum odor amet, consectetuer adipiscing elit. Dis dui augue arcu porttitor bibendum mus. Egestas viverra nec molestie malesuada suspendisse, felis vestibulum. Cubilia ac morbi hendrerit et fusce donec. Lorem mi in lobortis luctus id. Justo maximus erat nibh tortor ac class sit urna.",
    },
    {
      id: 2,
      title: "News 2",
      date: "01/02/2024",
      content: "Lorem ipsum odor amet, consectetuer adipiscing elit. Dis dui augue arcu porttitor bibendum mus. Egestas viverra nec molestie malesuada suspendisse, felis vestibulum. Cubilia ac morbi hendrerit et fusce donec. Lorem mi in lobortis luctus id. Justo maximus erat nibh tortor ac class sit urna.",
    },
    {
      id: 3,
      title: "News 3",
      date: "01/03/2024",
      content: "Lorem ipsum odor amet, consectetuer adipiscing elit. Dis dui augue arcu porttitor bibendum mus. Egestas viverra nec molestie malesuada suspendisse, felis vestibulum. Cubilia ac morbi hendrerit et fusce donec. Lorem mi in lobortis luctus id. Justo maximus erat nibh tortor ac class sit urna.",
    },
    {
      id: 4,
      title: "News 4",
      date: "01/04/2024",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 5,
      title: "News 5",
      date: "01/05/2024",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 6,
      title: "News 6",
      date: "01/06/2024",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 7,
      title: "News 7",
      date: "01/07/2024",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 8,
      title: "News 8",
      date: "01/08/2024",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ];

  const totalPages = Math.ceil(articles.length / articlesPerPage);
  const currentArticles = articles.slice(
    (currentPage - 1) * articlesPerPage,
    currentPage * articlesPerPage
  );

  const goToPage = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="flex flex-col gap-36 pb-5">
      <h1 className="flex justify-center items-center pt-24 font-bold text-6xl">
        Pixel <span className="text-sky-500">News</span>
      </h1>

      <ul className="flex flex-col gap-5 pb-32">
        {currentArticles.map((article) => (
          <li key={article.id} className="flex justify-center">
            <div className="flex flex-row bg-stone-400 w-2/4 rounded-3xl gap-8">
              <img
                src="/images/home/news.jpg"
                className="w-64 h-56 rounded-3xl"
                alt={article.title}
              />
              <div
                className="flex flex-col justify-between pt-5 pb-5 pr-5"
                style={{ width: "calc(100% - 19rem)" }} // Adjust this width based on the image size
              >
                <div
                  className="flex flex-col gap-1"
                  style={{
                    maxHeight: "120px", // Adjust this max-height as needed
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  <h2 className="font-bold text-2xl">{article.title}</h2>
                  <p className="text-stone-700 text-sm">{article.date}</p>
                  <p className="overflow-hidden text-ellipsis">
                    {article.content}
                  </p>
                </div>
                <div className="flex justify-end items-end mt-auto">
                  <a href="/" className="text-blue-600 hover:underline">
                    Read More &gt;
                  </a>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>

      {/* Pagination Controls */}
      <div className="flex justify-center gap-4">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => goToPage(index + 1)}
            className={`px-4 py-2 rounded-lg ${
              currentPage === index + 1
                ? "bg-blue-600 text-white"
                : "bg-gray-300 text-black hover:bg-gray-400"
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
}
