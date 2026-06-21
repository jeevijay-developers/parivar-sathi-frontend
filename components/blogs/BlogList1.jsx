"use client";

import React, { useEffect, useState } from "react";
import Pagination from "../common/Pagination";
import Image from "next/image";
import Link from "next/link";

const ITEMS_PER_PAGE = 9; // matches the 3-column grid (col-lg-4)

// Safely format a blog date; falls back to empty string for invalid/missing dates
function formatBlogDate(value) {
  const d = new Date(value);
  return isNaN(d.getTime())
    ? ""
    : d.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
}

export default function BlogList1({ ssrBlogs = [] }) {
  const [filteredItems, setFilteredItems] = useState(ssrBlogs);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setFilteredItems(ssrBlogs);
    setCurrentPage(1);
  }, [ssrBlogs]);

  const totalPages = Math.ceil(filteredItems.length / ITEMS_PER_PAGE) || 1;

  // Clamp current page if the list shrinks
  const safePage = Math.min(currentPage, totalPages);
  const startIndex = (safePage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const pageItems = filteredItems.slice(startIndex, endIndex);

  return (
    <section className="layout-pt-md layout-pb-xl">
      <div className="container">
        <div className="row y-gap-30 pt-30">
          {pageItems.map((elm, i) => {
            const displayDate = formatBlogDate(elm.createdAt);
            return (
              <div key={elm._id || i} className="col-lg-4 col-md-6">
                <Link
                  href={`/blog/${elm.slug || elm._id}`}
                  className="blogCard -type-1"
                >
                  <div className="blogCard__image ratio ratio-41:30">
                    <Image
                      width={616}
                      height={451}
                      src={elm.bannerImage || "/img/blogCards/1/1.png"}
                      alt={elm.title || "image"}
                      className="img-ratio rounded-12"
                    />
                    {elm.badge && (
                      <div className="blogCard__badge">{elm.badge}</div>
                    )}
                  </div>

                  <div className="blogCard__content mt-30">
                    <div className="blogCard__info text-14">
                      {displayDate && <div className="lh-13">{displayDate}</div>}
                      <div className="blogCard__line"></div>
                      <div className="lh-13">By Parivar Saathi</div>
                    </div>

                    <h3 className="blogCard__title text-18 fw-500 mt-10">
                      {elm.title}
                    </h3>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center mt-40">No blogs found.</div>
        )}

        {filteredItems.length > 0 && (
          <div className="d-flex justify-center flex-column mt-60">
            {totalPages > 1 && (
              <Pagination
                currentPage={safePage}
                totalPages={totalPages}
                setPage={setCurrentPage}
              />
            )}
            <div className="text-14 text-center mt-20">
              Showing results {startIndex + 1}-
              {Math.min(endIndex, filteredItems.length)} of {filteredItems.length}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
