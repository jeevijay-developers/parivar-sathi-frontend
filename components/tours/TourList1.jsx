"use client";

import React from "react";
import { tourDataTwo } from "@/data/tours";
import Image from "next/image";
import Link from "next/link";
import Pagination from "../common/Pagination";

export default function TourList1() {
  return (
    <section className="layout-pb-xl">
      <div className="container">
        <div className="row">
          <div className="col-xl-9 col-lg-8">
            <div className="row y-gap-30 pt-30">
              {tourDataTwo.map((elm, i) => (
                <div className="col-12" key={i}>
                  <div className="tourCard -type-2">
                    <div className="tourCard__image">
                      <Image
                        width={420}
                        height={390}
                        src={elm.imageSrc}
                        alt="image"
                      />

                      {/* {elm.badgeText && (
                        <div className="tourCard__badge">
                          <div className="bg-accent-1 rounded-12 text-white lh-11 text-13 px-15 py-10">
                            {elm.badgeText}
                          </div>
                        </div>
                      )} */}

                      {/* {elm.featured && (
                        <div className="tourCard__badge">
                          <div className="bg-accent-2 rounded-12 text-white lh-11 text-13 px-15 py-10">
                            FEATURED
                          </div>
                        </div>
                      )} */}

                      {elm.date && (
                        <div className="tourCard__badge">
                          <div className="bg-accent-2 rounded-12 text-white lh-11 text-13 px-15 py-10">
                            <div>
                              <div className="d-flex items-center text-14">
                                <i className="icon-clock mr-10"></i>
                                {elm.date}
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="tourCard__content">
                      <div className="tourCard__location">
                        <i className="icon-pin"></i>
                        {elm.location}
                      </div>

                      <h3 className="tourCard__title mt-5">
                        <span>{elm.title}</span>
                      </h3>

                      <p className="tourCard__text mt-5">{elm.description}</p>
                      <Link
                        href={`/tour-single-1/${elm.id}`}
                        className="button -outline-accent-1 text-accent-1 inline-flex items-center mt-10 py-4 px-6 text-sm rounded"
                      >
                        View Details
                        <i className="icon-arrow-top-right ml-10"></i>
                      </Link>
                    </div>

                    {/* <div className="tourCard__info">
                      <div>
                        <div className="d-flex items-center text-14">
                          <i className="icon-clock mr-10"></i>
                          {elm.date}
                        </div>
                      </div>

                      <button className="button -outline-accent-1 text-accent-1">
                        <Link href={`/tour-single-1/${elm.id}`}>
                          View Details
                          <i className="icon-arrow-top-right ml-10"></i>
                        </Link>
                      </button>
                    </div> */}
                  </div>
                </div>
              ))}
            </div>

            <div className="d-flex justify-center flex-column mt-60">
              <Pagination />
              {/* <div className="text-14 text-center mt-20">
                Showing results 1-30 of 1,415
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
