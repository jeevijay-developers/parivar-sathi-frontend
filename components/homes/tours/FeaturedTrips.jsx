"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { useEffect, useState } from "react";
import { axiosInstance } from "@/app/lib/axiousInstance";
import Image from "next/image";

export default function FeaturedTrips() {
  const [opdCamps, setOpdCamps] = useState([]);
  const [loading, setLoading] = useState(true);
  const [noOpdCamps, setNoOpdCamps] = useState(false); 
  const skeletonCards = [1, 2, 3, 4];

  useEffect(() => {
    const fetchOpdCamps = async () => {
      try {
        const response = await axiosInstance.get("/opds/opdcampsfour");
        setOpdCamps(response.data);
        if(response.data.length <= 0){
          setNoOpdCamps(true);
        }
        console.log("Upcoming OPD Camps: ",response.data);
      } catch (error) {
        console.error("Error fetching OPD camps:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchOpdCamps();
  }, []);

  return (
    <section className="layout-pt-xl layout-pb-xl">
      <div className="container">
        <div className="row y-gap-10 justify-between items-center">
          <div className="col-auto">
            <h2 data-aos="fade-up" data-aos-delay="" className="text-30">
              Upcoming OPD camps
            </h2>
            <p className="text-light-1 mt-6 mb-0" style={{ fontSize: "15px" }}>
              Discover our next scheduled camps and plan your visit in advance.
            </p>
          </div>
        </div>
      
      {noOpdCamps ? (
        <div className="py-60 text-center border-1 mt-lg-3" style={{borderRadius:"10px"}}>No Upcoming OPD camps</div>

      ): (
        <div className="relative pt-40 sm:pt-20">
          <div className="overflow-hidden js-section-slider">
            <div data-aos="fade-up" data-aos-delay="" className="">
              {loading ? (
                <div className="row y-gap-20">
                  {skeletonCards.map((item) => (
                    <div key={item} className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                      <div className="featured-opd-card">
                        <div className="featured-opd-image-wrap">
                          <div className="featured-opd-skeleton featured-opd-skeleton-image"></div>
                        </div>
                        <div className="tourCard__content" style={{ padding: "14px 14px 12px" }}>
                          <div className="featured-opd-skeleton" style={{ height: "14px", width: "65%", marginBottom: "10px" }}></div>
                          <div className="featured-opd-skeleton" style={{ height: "18px", width: "90%", marginBottom: "8px" }}></div>
                          <div className="featured-opd-skeleton" style={{ height: "18px", width: "72%", marginBottom: "12px" }}></div>
                          <div className="featured-opd-skeleton" style={{ height: "34px", width: "100%" }}></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <Swiper
                  spaceBetween={30}
                  className="w-100"
                  navigation={{
                    prevEl: ".pbp1",
                    nextEl: ".pbn1",
                  }}
                  modules={[Navigation]}
                  breakpoints={{
                    500: {
                      slidesPerView: 1,
                    },
                    768: {
                      slidesPerView: 2,
                    },
                    1024: {
                      slidesPerView: 3,
                    },
                    1200: {
                      slidesPerView: 4,
                    },
                  }}
                >
                  {opdCamps?.map((camp) => (
                    <SwiperSlide
                      key={camp._id}
                    >
                      <div className="tourCard -type-1 d-block bg-white featured-opd-card">
                        <div className="tourCard__header featured-opd-header" style={{ position: "relative" }}>
                          <div className="tourCard__image ratio ratio-28:20 featured-opd-image-wrap">
                            <Image
                              width={421}
                              height={301}
                              src={camp.image}
                              alt={camp.title}
                              className="img-ratio rounded-12 featured-opd-image"
                            />
                            <div className="featured-opd-overlay"></div>
                          </div>

                          <div
                            className="d-flex items-center"
                            style={{
                              position: "absolute",
                              top: "14px",
                              left: "14px",
                              background: "rgba(255,255,255,0.9)",
                              borderRadius: "999px",
                              padding: "6px 10px",
                              fontSize: "12px",
                              fontWeight: 600,
                              color: "#102039",
                              boxShadow: "0 4px 14px rgba(16, 32, 57, 0.12)",
                            }}
                          >
                            <i className="icon-calendar text-14 mr-5"></i>
                            {new Date(camp.date).toLocaleDateString()}
                          </div>
                        </div>

                        <div className="tourCard__content" style={{ padding: "14px 14px 12px" }}>
                          <div className="tourCard__location d-flex items-center text-13 text-light-2" style={{ marginBottom: "6px" }}>
                            <i className="icon-pin d-flex text-16 text-light-2 mr-5"></i>
                            {camp.location}
                          </div>

                          <h3 className="tourCard__title text-16 fw-500" style={{ lineHeight: "1.35", minHeight: "44px" }}>
                            <span>{camp.title}</span>
                          </h3>

                          <div
                            className="d-flex justify-between items-center border-1-top text-13 text-dark-1"
                            style={{ marginTop: "12px", paddingTop: "10px" }}
                          >
                            <span
                              style={{
                                background: "#f2f6ff",
                                color: "#1e40af",
                                borderRadius: "999px",
                                fontSize: "12px",
                                fontWeight: 600,
                                padding: "4px 10px",
                              }}
                            >
                              Upcoming
                            </span>

                            <div className="d-flex items-center">
                              <i className="icon-clock text-16 mr-5"></i>
                              <span className="text-16 fw-500">{camp.time}</span>
                            </div>
                          </div>

                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              )}
            </div>
          </div>

          <div className="navAbsolute">
            <button className="navAbsolute__button bg-white js-slider1-prev pbp1">
              <i className="icon-arrow-left text-14"></i>
            </button>

            <button className="navAbsolute__button bg-white js-slider1-next pbn1">
              <i className="icon-arrow-right text-14"></i>
            </button>
          </div>
        </div>
            )}
      </div>

      <style jsx>{`
        .featured-opd-card {
          border-radius: 16px;
          overflow: hidden;
          border: 1px solid #ece8e0;
          box-shadow: 0 10px 30px rgba(15, 23, 42, 0.08);
          transition: transform 0.25s ease, box-shadow 0.25s ease;
          background: #fff;
        }

        .featured-opd-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 16px 34px rgba(15, 23, 42, 0.16);
        }

        .featured-opd-header {
          position: relative;
        }

        .featured-opd-image-wrap {
          overflow: hidden;
          position: relative;
        }

        .featured-opd-image {
          transition: transform 0.45s ease;
        }

        .featured-opd-card:hover .featured-opd-image {
          transform: scale(1.07);
        }

        .featured-opd-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(10, 20, 45, 0.28), rgba(10, 20, 45, 0));
          pointer-events: none;
        }

        .featured-opd-skeleton {
          border-radius: 10px;
          background: linear-gradient(90deg, #efefef 25%, #f8f8f8 50%, #efefef 75%);
          background-size: 200% 100%;
          animation: opdSkeletonPulse 1.4s ease infinite;
        }

        .featured-opd-skeleton-image {
          height: 220px;
          width: 100%;
          border-radius: 0;
        }

        @keyframes opdSkeletonPulse {
          0% {
            background-position: 200% 0;
          }
          100% {
            background-position: -200% 0;
          }
        }
      `}</style>
    </section>
  );
}
