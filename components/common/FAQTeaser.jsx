"use client";

import { useRouter } from "next/navigation";
import React from "react";

export default function FAQTeaser() {
  const router = useRouter();
  return (
    <section className="relative layout-pt-sm layout-pb-sm ">
      <div className="sectionBg -mx-30 bg-accent-1-05 rounded-24"></div>

      <div className="container">
        <div className="row justify-center text-center">
          <div className="col-auto">
            <h2
              data-aos="fade-up"
              data-aos-delay=""
              className="text-30 text-white md:text-24 fw-700"
            >
              Have questions?
            </h2>
            <p
              data-aos="fade-up"
              data-aos-delay="100"
              className="mt-10 text-white text-16 md:text-14"
            >
              See how Parivar Sathi works for you.
            </p>
          </div>
        </div>

        <div
          data-aos="fade-up"
          data-aos-delay="200"
          className="row pt-20 md:pt-20 justify-center"
        >
          <div className="col-auto">
            <button
              onClick={() => router.push("/help-center")}
              className="button -dark-1 -bg-white-button  text-white rounded-200 px-30 py-15"
            >
              Go to FAQs
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
