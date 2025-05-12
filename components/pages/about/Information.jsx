import React from "react";

export default function Information() {
  return (
    <section className="layout-pt-lg">
      <div className="container">
        <div className="row y-gap-20 justify-between">
          <div className="col-lg-6">
            <h2 className="text-30 fw-700">
              We’re not a hospital. Not a clinic. Not an NGO.
              <br />
              But we care like one.
            </h2>
          </div>

          <div className="col-lg-5">
            <p>
              Parivar Sathi was created to support people quietly facing
              fertility concerns and unsure of where to begin. We guide you with
              empathy, not pressure.
              <br />
              <br />
              Our mission is to help you understand your options, connect you to
              trusted support, and make informed decisions—based on your needs,
              your location, and your budget.
              <br />
              <br />
              We believe in: Respect over judgment, Information over pressure,
              and Partnership over promotion.
            </p>

            <button className=" mt-3 button -dark-1 p-3 bg-accent-3-v rounded-200 text-white">
              Talk to a Counselor
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
