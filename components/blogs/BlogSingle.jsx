"use client";

import React from "react";
import Image from "next/image";
import parse from 'html-react-parser';
import styles from './BlogContent.module.css';
// import Reviews from "./Reviews";
// import CommentBox from "./CommentBox";

export default function BlogSingle({ blog }) {
  console.log("Blog data: ", blog);
  
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
                  <button 
                    onClick={() => window.history.back()}
                    className="button -outline-accent-1 text-accent-1"
                  >
                    Go Back
                  </button>
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
                  {/* {blog.author && (
                    <div className="d-flex items-center">
                      <i className="icon-user mr-8"></i>
                      <span>By {blog.author}</span>
                    </div>
                  )} */}
                  
                  {/* {blog.createdAt && (
                    <div className="d-flex items-center">
                      <i className="icon-calendar mr-8"></i>
                      <span>
                        {new Date(blog.createdAt).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </span>
                    </div>
                  )} */}

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

              {/* Blog Content */}
              <div className={styles.blogContent}>
                {blog.content ? (
                  <div className="prose prose-lg max-w-none">
                    {parse(blog.content)}
                  </div>
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
                        <div className="relative overflow-hidden rounded-12">
                          <Image
                            width={410}
                            height={300}
                            src={img}
                            alt={`Gallery image ${idx + 1}`}
                            className="w-full object-cover hover:scale-105 transition-transform duration-300"
                            style={{ height: '300px' }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Tags */}
              {/* {blog.tags && blog.tags.length > 0 && (
                <div className="mt-40 pt-30 border-top-light">
                  <div className="text-16 fw-500 mb-15">Tags:</div>
                  <div className="d-flex flex-wrap gap-10">
                    {blog.tags.map((tag, idx) => (
                      <span 
                        key={idx}
                        className="bg-light-1 text-dark-1 px-15 py-8 rounded-8 text-14 hover:bg-accent-1 hover:text-white transition-colors duration-200 cursor-pointer"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              )} */}

              {/* Social Share */}
              {/* <div className="mt-40 pt-30 border-top-light">
                <div className="text-16 fw-500 mb-15">Share this post:</div>
                <div className="d-flex flex-wrap items-center gap-15">
                  <button 
                    onClick={() => {
                      const url = encodeURIComponent(window.location.href);
                      const title = encodeURIComponent(blog.title || '');
                      window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank');
                    }}
                    className="button -outline-accent-1 text-accent-1 px-15 py-8 rounded-8 hover:bg-accent-1 hover:text-white transition-all duration-200"
                  >
                    <i className="icon-facebook mr-8"></i>
                    Facebook
                  </button>
                  <button 
                    onClick={() => {
                      const url = encodeURIComponent(window.location.href);
                      const title = encodeURIComponent(blog.title || '');
                      window.open(`https://twitter.com/intent/tweet?url=${url}&text=${title}`, '_blank');
                    }}
                    className="button -outline-accent-1 text-accent-1 px-15 py-8 rounded-8 hover:bg-accent-1 hover:text-white transition-all duration-200"
                  >
                    <i className="icon-twitter mr-8"></i>
                    Twitter
                  </button>
                  <button 
                    onClick={() => {
                      const url = encodeURIComponent(window.location.href);
                      const title = encodeURIComponent(blog.title || '');
                      window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`, '_blank');
                    }}
                    className="button -outline-accent-1 text-accent-1 px-15 py-8 rounded-8 hover:bg-accent-1 hover:text-white transition-all duration-200"
                  >
                    <i className="icon-linkedin mr-8"></i>
                    LinkedIn
                  </button>
                </div>
              </div> */}

              {/* Navigation */}
              <div className="mt-40 pt-30 border-top-light">
                <div className="d-flex justify-between items-center flex-wrap gap-20">
                  <button
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    className="button -outline-accent-1 text-accent-1 px-20 py-10 rounded-8 hover:bg-accent-1 hover:text-white transition-all duration-200"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up" viewBox="0 0 16 16">
                      <path fill-rule="evenodd" d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5" />
                    </svg>
                    Back to Top
                  </button>

                  {blog.relatedPosts && blog.relatedPosts.length > 0 && (
                    <div className="text-14 text-dark-3">
                      {blog.relatedPosts.length} related post{blog.relatedPosts.length !== 1 ? 's' : ''} available
                    </div>
                  )}
                </div>
              </div>

              {/* Reading Progress Indicator */}
              <div className="mt-40 pt-30 border-top-light">
                <div className="text-center">
                  <div className="text-14 text-dark-3 mb-10">
                    Thank you for reading!
                  </div>
                  <div className="d-flex justify-center">
                    <button
                      onClick={() => window.history.back()}

                      className="button space-x-5 -outline-accent-1 text-accent-1 px-20 py-10 rounded-8 hover:bg-accent-1 hover:text-white transition-all duration-200"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8" />
                      </svg>
                      Back to Blog
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews and Comments */}
      {/* <Reviews />
      <CommentBox /> */}
    </>
  );
}