"use client";

import React from "react";

export default function Pagination({
  currentPage,
  totalPages,
  setPage,
}) {
  const handlePrevious = () => {
    setPage((prev) => (prev > 1 ? prev - 1 : 1));
  };

  const handleNext = () => {
    setPage((prev) => (prev < totalPages ? prev + 1 : totalPages));
  };

  const generatePages = () => {
    const pages = [];
    const maxVisiblePages = 5;

    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      if (currentPage <= 3) {
        pages.push(1, 2, 3, 4, "...", totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(1, "...", totalPages - 3, totalPages - 2, totalPages - 1, totalPages);
      } else {
        pages.push(1, "...", currentPage - 1, currentPage, currentPage + 1, "...", totalPages);
      }
    }

    return pages;
  };

  return (
    <div className="pagination justify-center">
      <button
        onClick={handlePrevious}
        className="pagination__button customStylePaginationPre button -accent-1 mr-15 -prev"
      >
        <i className="icon-arrow-left text-15"></i>
      </button>

      <div className="pagination__count">
        {generatePages().map((page, index) => (
          <div
            key={index}
            onClick={() => typeof page === "number" && setPage(page)}
            style={{ cursor: page === "..." ? "default" : "pointer" }}
            className={`px-10 ${currentPage === page ? "is-active" : ""}`}
          >
            {page}
          </div>
        ))}
      </div>

      <button
        onClick={handleNext}
        className="pagination__button customStylePaginationNext button -accent-1 ml-15 -next"
      >
        <i className="icon-arrow-right text-15"></i>
      </button>
    </div>
  );
}
