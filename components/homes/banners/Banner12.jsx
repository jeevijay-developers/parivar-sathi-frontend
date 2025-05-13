"use client";
import Image from "next/image";
import React from "react";
import { useRouter } from "next/navigation";
export default function Banner12() {
  const router = useRouter();
  return (
    <section className="cta -type-4 mt-30">
      <div className="container">
        <div className="cta__content">
          <div className="row justify-between">
            <div className="col-xl-7 col-lg-8">
              <h2 data-aos="fade-up" className="text-24 lh-13">
                Are You Trying to Conceive?
              </h2>

              <p data-aos="fade-up" className="mt-10">
                You’re not alone if you’ve been trying for a few months and feel
                unsure. Not every delay means a big problem. But knowing when to
                talk to someone helps.
              </p>

              <button
                data-aos="fade-right"
                className="button -md -success-2 bg-green-3 text-white mt-10"
                onClick={() => router.push("/contact")}
              >
                Talk to a Fertility Counselor Now
                <i className="icon-arrow-top-right ml-10"></i>
              </button>
            </div>

            <div className="col-lg-6">
              <div className="cta__image">
                <Image
                  src="/img/cta/11/1.jpg"
                  width={730}
                  height={375}
                  alt="Couple seeking support"
                />
                <Image
                  src="/img/cta/11/shape.svg"
                  width="21"
                  height="250"
                  style={{ width: "auto", height: "100%" }}
                  alt=""
                />
                <Image
                  src="/img/cta/11/mobileShape.svg"
                  width="254"
                  height="23"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
