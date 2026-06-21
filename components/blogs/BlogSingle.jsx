import React from "react";
import Image from "next/image";
import styles from "./BlogContent.module.css";
import BlogNavButtons from "./BlogNavButtons";

// Server Component: the article body is rendered into the server HTML via
// dangerouslySetInnerHTML so headings, paragraphs, and internal links are
// present in the page source for crawlers (SEO). Only the small interactive
// footer buttons live in a client island (BlogNavButtons).
export default function BlogSingle({ blog }) {
  if (!blog) {
    return (
      <section className="layout-pt-md layout-pb-xl">
        <div className="container">
          <div className="row y-gap-30 justify-center">
            <div className="col-lg-8">
              <div className="d-flex justify-center items-center py-60">
                <div className="text-center">
                  <div className="text-red-500 text-18 mb-20">
                    Blog post not found
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <>
      <section className="layout-pt-md layout-pb-xl">
        <div className="container">
          <div className="row y-gap-30 justify-center">
            <div className="col-lg-8">

              {/* Blog Header */}
              <div className="mb-30">
                <h1 className="text-40 lg:text-30 md:text-24 fw-600 mb-10">
                  {blog.title || "Untitled Blog Post"}
                </h1>

                {blog.desc && (
                  <p className="text-18 text-dark-3 italic mb-20">
                    {blog.desc}
                  </p>
                )}

                {/* Blog Meta Info */}
                <div className="d-flex flex-wrap items-center text-14 text-dark-3 gap-20">
                  {blog.category && (
                    <div className="d-flex items-center">
                      <i className="icon-tag mr-8"></i>
                      <span className="bg-accent-1 text-white px-10 py-5 rounded-8 text-12">
                        {blog.category}
                      </span>
                    </div>
                  )}
                </div>
              </div>

              {/* Blog Content (server-rendered HTML) */}
              <div className={styles.blogContent}>
                {blog.content ? (
                  <div
                    className="prose prose-lg max-w-none"
                    dangerouslySetInnerHTML={{ __html: blog.content }}
                  />
                ) : (
                  <div className="text-16 text-dark-1">
                    <p>No content available for this blog post.</p>
                  </div>
                )}
              </div>

              {/* Content Images Gallery */}
              {blog.contentImages && blog.contentImages.length > 0 && (
                <div className="mt-40">
                  <h3 className="text-24 fw-600 mb-20">Gallery</h3>
                  <div className="row y-gap-20">
                    {blog.contentImages.map((img, idx) => (
                      <div
                        key={idx}
                        className={blog.contentImages.length === 1 ? "col-12" : "col-md-6"}
                      >
                        <div className="relative overflow-hidden rounded-12" style={{ aspectRatio: "410/300" }}>
                          <Image
                            fill
                            src={img}
                            alt={`Gallery image ${idx + 1}`}
                            className="w-full object-cover hover:scale-105 transition-transform duration-300"
                            sizes="(max-width: 768px) 100vw, 50vw"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Interactive footer buttons (client island) */}
              <BlogNavButtons />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
