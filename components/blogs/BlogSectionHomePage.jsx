"use client";

import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { axiosInstance } from '@/app/lib/axiousInstance';
import Image from 'next/image';
import Link from 'next/link';

const BlogSectionHomePage = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axiosInstance.get("/blogs/AllBlogs");
        // Ensure we're setting an array to the state
        const blogsData = Array.isArray(response.data) ? response.data : 
                         response.data.blogs ? response.data.blogs : [];
        setBlogs(blogsData);
        console.log("Blogs data:", blogsData);
      } catch (error) {
        console.error("Error fetching blogs:", error);
        setBlogs([]); // Set empty array on error
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <section className="layout-pt-md layout-pb-md">
      <div className="container">
        <div className="row justify-between items-end y-gap-10">
          <div className="col-auto">
            <h2 data-aos="fade-up" className="text-30 md:text-24 fw-600">
              Latest Health & Fertility Insights
            </h2>
            <p data-aos="fade-up" delay={100} className="mt-5">
              Expert articles to guide your fertility journey
            </p>
          </div>

          <div className="col-auto">
            <Link
              href="/blog-list-1"
              data-aos="fade-left"
              className="button -md -blue-1 bg-green-500 text-white"
            >
              View All Articles
              <i className="icon-arrow-top-right ml-10" />
            </Link>
          </div>
        </div>

        <div className="relative pt-40 sm:pt-20">
          <div className="overflow-hidden">
            {loading ? (
              <div className="text-center py-20">
                <div className="spinner-border text-green-500" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              </div>
            ) : (
              <Swiper
                spaceBetween={40}
                modules={[Navigation]}
                navigation={{
                  prevEl: ".js-prev-blog",
                  nextEl: ".js-next-blog"
                }}
                breakpoints={{
                  500: { slidesPerView: 1 },
                  768: { slidesPerView: 2 },
                  1024: { slidesPerView: 3 },
                  1200: { slidesPerView: 4 }
                }}
              >
                {blogs.map((blog) => (
                  <SwiperSlide key={blog._id} >
                    <Link 
                      href={`/blog-single/${blog._id}`}
                      className="blogCard -type-1 d-block bg-white rounded-12 shadow-3 transition-all hover:shadow-4 border-1 border-light-4 hover:border-light-3"
                    >
                      <div className="blogCard__image">
                        <div className="ratio ratio-4:3 rounded-top-12 overflow-hidden">
                          <img
                            width={400}
                            height={300}
                            className="img-ratio js-lazy"
                            src={blog.bannerImage || '/img/blog/1.png'}
                            alt={blog.title}
                          />
                        </div>
                      </div>                    <div className="px-20 py-20">                        
                        <div className="h-[60px] mb-2">
                          <h4 className="text-18 fw-500 lh-14 text-dark-1">
                            <div className="line-clamp-2" title={blog.title}>
                              {blog.title}
                            </div>
                          </h4>
                        </div>
                        <div className="text-15 lh-14 mt-10 line-clamp-2">
                          {blog.description}
                        </div>
                      </div>
                    </Link>
                  </SwiperSlide>
                ))}
              </Swiper>
            )}
            <div className="nav-arrows">
              <button className="nav-arrow -prev bg-white js-prev-blog">
                <i className="icon-arrow-left text-14 " />
              </button>
              <button className="nav-arrow -next bg-white js-next-blog">
                <i className="icon-arrow-right text-14 " />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSectionHomePage;