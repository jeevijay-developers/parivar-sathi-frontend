import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function BannerEight() {
  return (
    <section className="cta -type-2">
      <div className="cta__bg">
        <Image src="/img/cta/7/bg.png" width={1093} height={600} alt="image" />

        <div className="cta__image">
          <Image
            src="/img/tourCards/1/5.jpg"
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

      <div className="container">
        <div className="row">
          <div className="col-xxl-4 col-xl-5 col-lg-6 col-md-7">
            <div className="cta__content">
              <h2
                data-aos="fade-up"
                data-aos-delay=""
                className="text-40 md:text-30  lh-13"
              >
                Rigister to our next{" "}
                <span className="text-accent-2">OPD Camp</span> in{" "}
                <br className="lg:d-none" />
                Kota rajasthan
                <br className="lg:d-none" />
                Destination
              </h2>

              {/* <p data-aos="fade-up" data-aos-delay="" className="mt-10"> */}
              {/* <div className="d-flex justify-between items-center border-1-top text-13 text-dark-1 pt-10 mt-10">
                <div className="d-flex items-center">
                  <i className="icon-calendar text-16 mr-5"></i>
                  "12/12/2025"
                </div>

                <div>
                  <i className="icon-clock text-16 mr-5"></i>
                  <span className="text-16 fw-500">"12:20 PM"</span>
                </div>
              </div> */}
              {/* </p> */}

              <div
                data-aos="fade-right"
                data-aos-delay=""
                className="mt-30 md:mt-20"
              >
                <button className="button -md -dark-1 bg-accent-2 text-white">
                  <Link href="/">
                    Rigister
                    <i className="icon-arrow-top-right ml-10 text-16"></i>
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
