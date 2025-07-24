import Image from "next/image";
import React from "react";

export default function Hero() {
  return (
    <section className="pageHeader -type-1">
      <div className="pageHeader__bg">
        <div style={{ height: "500px", width: "100%", backgroundColor: "#f0f0f0" }}>
        <Image
          width={1800}
          height={500}
          src="/img/pageHeader/pageHeader1.png"
          alt="image"
          style={{ objectFit: "contain", width: "100%", height: "100%", position: "absolute" }}
          />
          </div>
        <Image
          width="1800"
          height="40"
          style={{ height: "auto", width: "auto" }}
          src="/img/hero/1/shape.svg"
          alt="image"
        />
      </div>

      {/* <div className="container">
        <div className="row justify-center">
          <div className="col-12">
            <div className="pageHeader__content">
              <h1 className="pageHeader__title text-dark">About Us</h1>
              <p className="pageHeader__text">A Companion, Not a Clinic</p>
            </div>
          </div>
        </div>
      </div> */}
    </section>
  );
}
