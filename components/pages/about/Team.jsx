import { teamData } from "@/data/team";
import Image from "next/image";
import React from "react";

export default function Team() {
  return (
    <section className="layout-pt-xl">
      <div className="container">
        <div className="row">
          <div className="col-auto">
            <h2 className="text-30">Meet Our Team</h2>
          </div>
        </div>

        <div className="row y-gap-30 pt-40 sm:pt-20">
          {teamData.map((elm, i) => (
            <div key={i} className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12" style={{flexBasis: '20%', maxWidth: '20%'}}>
              <div className="ratio ratio-23:26" style={{height: "auto"}}>
                <Image
                  width={345}
                  height={400}
                  src={elm.imgPath}
                  alt="image"
                  className="img-ratio bg-light-1 rounded-12"
                  
                />
              </div>

              <h3 className="text-16 fw-500 mt-20">{elm.name}</h3>
              <p className="text-14 lh-16">{elm.position}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}