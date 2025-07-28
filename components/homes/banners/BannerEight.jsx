'use client';
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { axiosInstance } from "@/app/lib/axiousInstance";

export default function BannerEight() {
  const [opdCamp, setOpdCamp] = useState({});
  const [isLoaded, setIsLoaded] = useState(false); // new state

  useEffect(() => {
    const fetchOpdCamp = async () => {
      try {
        const response = await axiosInstance.get("/opds/opdcampsfour");
        setOpdCamp(response.data[0]);
        setIsLoaded(true); // signal that data is loaded
      } catch (error) {
        console.error("Error fetching OPD camp:", error);
      }
    };

    fetchOpdCamp();
  }, []);

  useEffect(() => {
    // wait for data + DOM
    if (isLoaded) {
      const targetId = sessionStorage.getItem('scrollToId');
      if (targetId) {
        setTimeout(() => {
          const el = document.getElementById(targetId);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
            sessionStorage.removeItem('scrollToId');
          }
        }, 100); // wait a bit to ensure DOM is ready
      }
    }
  }, [isLoaded]);

  return (
    <section className="cta -type-2" id="upcoming-opd-camp">
      <div className="cta__bg">
        <Image src="/img/cta/7/bg.png" width={1093} height={600} alt="image" />
        <div className="cta__image">
          <Image
            src={opdCamp?.image || '/img/cta/7/default.jpg'}
            width={750}
            height={600}
            alt="image"
          />
          <Image
            src="/img/cta/7/shape.svg"
            width="40"
            height="600"
            alt="image"
          />
          <Image
            src="/img/cta/7/shape2.svg"
            width="600"
            height="40"
            alt="image"
          />
        </div>
      </div>

      <div className="container" >
        <div className="row">
          <div className="col-xxl-4 col-xl-5 col-lg-6 col-md-7">
            <div className="cta__content">
              {!(opdCamp?.location && opdCamp.date) ? (
                <h2 className="text-40 text-accent-3 md:text-30 lh-13">
                  Our next OPD Camp coming Soon...
                </h2>
              ) : (
                <h2 className="text-40 text-accent-3 md:text-30 lh-13">
                  Register to our next{" "}
                  OPD Camp in{" "}
                  <br className="lg:d-none" />
                  <span className="text-accent-2">{opdCamp?.location}</span>
                  <br className="lg:d-none" />
                  Destination on <br className="lg:d-none" />
                  <span className="text-accent-2">
                    {new Date(opdCamp?.date).toLocaleDateString()}
                  </span>
                </h2>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
