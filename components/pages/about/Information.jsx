"use client";
import React from "react";

export default function Information() {
  const handleWhatsAppClick = () => {
    const phoneNumber = process.env.NEXT_PUBLIC_COUNSELLOR_WHATSAPP_NUMBER;
    const message = encodeURIComponent(
      "Hi Parivar Sathi, I have some questions about fertility support. Can you help?"
    );
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  return (
    <section className="layout-pt-lg">
      <div className="container">
        <div className="row y-gap-20 justify-between">
          <div className="col-lg-6">
            <h2 className="text-30 fw-700 text-accent-2 ">
              WHO WE ARE


            </h2>
            <h4 className="text-24 fw-600 mt-20 text-accent-2 " >  Your Guide Through the Fertility Journey</h4>
          </div>

          <div className="col-lg-5 text-gray-2">
            <p>
              Parivar Saathi is a community-first initiative by Morskap Healthcare LLP, dedicated to supporting families navigating fertility challenges. We provide trusted information, emotional support, and connections to experienced fertility professionals across India.
              <br />
              <br />
              Our team of trained fertility counselors is here to:
              <br />
              - Help you understand your situation
              <br />
              - Explain available treatment paths
              <br />
              - Connect you with reliable, ethical fertility care providers
              <br />
              <br />
              We stand for clarity, care, and compassion at every step.
            </p>

            <div className="alignment-center">
              <button
                onClick={handleWhatsAppClick}
                className="mt-3 button  p-3   hero-5-buttons rounded-200 text-white"
              >
                Talk to a Counselor
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
