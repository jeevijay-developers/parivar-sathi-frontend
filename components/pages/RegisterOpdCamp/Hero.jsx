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
            <h1 className="pageHeader__title text-dark">
              Find Support Closer to Home
            </h1>
            <p className="pageHeader__text">
              Register for a free OPD camp near you and talk to a trained
              fertility counselor—no pressure, just support.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
