'use client';
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { axiosInstance } from "@/app/lib/axiousInstance";
import Header4 from "@/components/layout/header/Header4";
import FooterThree from "@/components/layout/footers/FooterThree";

export default function AllPreviousCamps() {
  const [opdCamps, setOpdCamps] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOpdCamps = async () => {
      try {
        const response = await axiosInstance.get("/opds/opdcamps/previous-all");
        setOpdCamps(response.data);
      } catch (error) {
        console.error("Error fetching OPD camps:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchOpdCamps();
  }, []);

  return (
    <main>
      <Header4 />
      
      {/* Page Title Section */}
      <section className="breadcrumbs py-30 md:py-20 relative mt-60">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="text-center">
                <h1 className="text-40 md:text-30">Previous Camps</h1>
                <p className="text-16 mt-5 text-opacity-70">View all past OPD camps and medical services</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Camps Grid Section */}
      <section className="layout-pt-lg layout-pb-lg">
        <div className="container">
          {loading ? (
            <div className="text-center w-full py-40">
              <p className="text-18">Loading camps...</p>
            </div>
          ) : opdCamps.length === 0 ? (
            <div className="text-center w-full py-40">
              <p className="text-18">No camps found</p>
            </div>
          ) : (
            <div className="row y-gap-30 md:x-gap-10 md:y-gap-10">
              {opdCamps.map((camp) => (
                <div key={camp._id} className="w-1/4 lg:w-1/3 md:w-1/2 sm:w-full">
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
              ))}
            </div>
          )}
        </div>
      </section>

      <FooterThree />
    </main>
  );
}
