import { destinationsNine } from "@/data/destinations";
import Image from "next/image";
import React from "react";
import HowWeHelp from "../Section/HowWeHelp";

export default function TourTypesTwo() {
  return (
    <section className="layout-pt-xl">
      <div className="container">
        <div className="row y-gap-10 justify-between items-end">
          <div className="col-auto">
            <h2 data-aos="fade-up" data-aos-delay="" className="text-30"  style={{ color: "#5C2D91", fontFamily: "Poppins, sans-serif" }}>
              Who We Are ?
            </h2>
          </div>

          {/* <div className="col-auto">
            <Link
              href={"/tour-list-1"}
              data-aos="fade-right"
              data-aos-delay=""
              className="buttonArrow d-flex items-center "
            >
              <span>See all</span>
              <i className="icon-arrow-top-right text-16 ml-10"></i>
            </Link>
          </div> */}
        </div>

        <div
          data-aos="fade-up"
          data-aos-delay=""
          className="row y-gap-20 pt-40"
        >
          {destinationsNine.map((elm, i) => (
            
            <div key={i} className="col-xl-4 col-md-4 col-12">
              <div
                // href={"/tour-list-1"}
                className="featureCard -type-5 -hover-accent-2"
              >
                <div className="featureCard__icon">
                  <Image width={i === 1 || i === 2 ? "53" : "40"} height="40" src={elm.iconSrc} alt="image" />
                </div>

                <h4 className="text-18 fw-500 mt-20">{elm.title}</h4>
                <h5 className="text-18 fw-500 mt-20">{elm.detail}</h5>
                {/* <div className="lh-13 mt-5">{elm.tourCount}+ Tours</div> */}
              </div>
            </div>
          ))}
        </div>
      </div>
      <HowWeHelp />
    </section>
  );
}
