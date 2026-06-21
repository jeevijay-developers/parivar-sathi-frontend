"use client";

import React from "react";

// Small client-only island for the interactive footer buttons.
// Kept separate so BlogSingle can stay a Server Component and render
// the article body directly into the server HTML (SEO).
export default function BlogNavButtons() {
  return (
    <>
      {/* Navigation */}
      <div className="mt-40 pt-30 border-top-light">
        <div className="d-flex justify-between items-center flex-wrap gap-20">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="button -outline-accent-1 text-accent-1 px-20 py-10 rounded-8 hover:bg-accent-1 hover:text-white transition-all duration-200"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-up" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5" />
            </svg>
            Back to Top
          </button>
        </div>
      </div>

      {/* Back to Blog */}
      <div className="mt-40 pt-30 border-top-light">
        <div className="text-center">
          <div className="text-14 text-dark-3 mb-10">Thank you for reading!</div>
          <div className="d-flex justify-center">
            <button
              onClick={() => window.history.back()}
              className="button space-x-5 -outline-accent-1 text-accent-1 px-20 py-10 rounded-8 hover:bg-accent-1 hover:text-white transition-all duration-200"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8" />
              </svg>
              Back to Blog
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
