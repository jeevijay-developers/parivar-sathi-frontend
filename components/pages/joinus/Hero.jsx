import Image from "next/image";
import React from "react";

export default function Hero() {
  return (
    <section className="pageHeader -type-1">
      <div className="pageHeader__bg">
        <Image
          width={1800}
          height={500}
          src="/img/pageHeader/1.jpg"
          alt="image"
        />
        <Image
          width="1800"
          height="40"
          style={{ height: "auto" }}
          src="/img/hero/1/shape.svg"
          alt="image"
        />
      </div>

      <div className="container">
        <div className="row justify-center">
          <div className="col-12">
            <div className="pageHeader__content">
              <h1 className="pageHeader__title text-dark">
                {" "}
                Partner with Us to Reach More People Ethically
              </h1>
              {/* <p className="pageHeader__text">
                At <strong>Parivar Sathi</strong>, we help people who are
                silently struggling with fertility concerns and don’t know where
                to begin. We're not a hospital, clinic, or NGO—but we operate
                with the compassion and community spirit of one.
              </p> */}
              <p className="pageHeader__text">
                Parivar Sathi is a lead-generation and referral platform that
                brings pre-counseled, informed clients to your clinic. We handle
                awareness, engagement, and trust-building—so you can focus on
                care.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
