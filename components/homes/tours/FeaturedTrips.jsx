"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { useEffect, useState } from "react";
import { axiosInstance } from "@/app/lib/axiousInstance";

export default function FeaturedTrips() {
  const [opdCamps, setOpdCamps] = useState([]);
  const [loading, setLoading] = useState(true);
  const [noOpdCamps, setNoOpdCamps] = useState(false); 

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
          </div>
        </div>
      
      {noOpdCamps ? (
        <div className="py-60 text-center border-1 mt-lg-3" style={{borderRadius:"10px"}}>No Upcoming OPD camps</div>

      ): (
        <div className="relative pt-40 sm:pt-20">
          <div className="overflow-hidden js-section-slider">
            <div data-aos="fade-up" data-aos-delay="" className="">
              {loading ? (
                <div className="text-center">Loading...</div>
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
                      style={{
                        width: "100vw ! important",
                      }}
                    >
                      <div className="tourCard -type-1 d-block bg-white">
                        <div className="tourCard__header">
                          <div className="tourCard__image ratio ratio-28:20">
                            <img
                              width={421}
                              height={301}
                              src={camp.image}
                              alt={camp.title}
                              className="img-ratio rounded-12"
                            />
                          </div>
                        </div>

                        <div className="tourCard__content pt-10">
                          <div className="tourCard__location d-flex items-center text-13 text-light-2">
                            <i className="icon-pin d-flex text-16 text-light-2 mr-5"></i>
                            {camp.location}
                          </div>

                          <h3 className="tourCard__title text-16 fw-500 mt-5">
                            <span>{camp.title}</span>
                          </h3>

                          <div className="d-flex justify-between items-center border-1-top text-13 text-dark-1 pt-10 mt-10">
                            <div className="d-flex items-center">
                              <i className="icon-calendar text-16 mr-5"></i>
                              {new Date(camp.date).toLocaleDateString()}
                            </div>

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
    </section>
  );
}
