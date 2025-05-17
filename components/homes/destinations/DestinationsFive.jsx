'use client';
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { axiosInstance } from "@/app/lib/axiousInstance";
import { useEffect, useState } from "react";

export default function DestinationsFive() {
  const [opdCamps, setOpdCamps] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOpdCamps = async () => {
      try {
        const response = await axiosInstance.get("/opds/opdcamps/previous-all");
        // Take only the first 5 camps
        setOpdCamps(response.data.slice(0, 5));
        console.log("Previous camps:", response.data);
      } catch (error) {
        console.error("Error fetching OPD camps:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchOpdCamps();
  }, []);

  return (
    <section className="layout-pt-lg layout-pb-lg">
      <div className="container">
        <div className="row justify-between items-end y-gap-10">
          <div className="col-auto">
            <h2
              data-aos="fade-up"
              data-aos-delay=""
              className="text-30 md:text-24"
            >
              Previous Camps
            </h2>
          </div>

          <div className="col-auto">
            <Link
              href="/tour-list-1"
              data-aos="fade-left"
              data-aos-delay=""
              className="buttonArrow d-flex items-center"
            >
              <span>See all</span>
              <i className="icon-arrow-top-right text-16 ml-10"></i>
            </Link>
          </div>
        </div>

        <div
          data-aos="fade-up"
          data-aos-delay=""
          className="row y-gap-30 md:x-gap-10 md:y-gap-10 pt-40 sm:pt-20"
        >
          {loading ? (
            <div className="text-center w-full">Loading...</div>
          ) : (
            opdCamps.map((camp) => (
              <div key={camp._id} className="w-1/5 lg:w-1/3 md:w-1/2">
                <div className="featureCard -type-4 -hover-image-scale">
                  <div className="featureCard__image ratio ratio-3:4 -hover-image-scale__image rounded-12">
                    <Image
                      width={450}
                      height={600}
                      src={camp.image}
                      alt={camp.title}
                      className="img-ratio"
                    />
                  </div>

                  <div className="featureCard__content text-center">
                    <h4 className="text-20 fw-500 text-white">{camp.title}</h4>
                    <div className="text-14 lh-14 text-white">
                      {camp.location}
                    </div>
                    <div className="text-14 lh-14 text-white mt-1">
                      {new Date(camp.date).toLocaleDateString()}
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
}
