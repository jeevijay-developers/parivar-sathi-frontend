"use client";
import React from "react";
import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";

export default function Information() {
  const handleWhatsAppClick = () => {
    const phoneNumber = process.env.NEXT_PUBLIC_COUNSELLOR_WHATSAPP_NUMBER;
    const message = encodeURIComponent(
      "Hi Parivar Sathi, I have some questions about fertility support. Can you help?"
    );
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  return (
    <>
      <section 
        className="information-section"
        style={{ 
          minHeight: "100vh !important", 
          backgroundColor: "#f8f9fa !important", 
          paddingTop: "80px !important", 
          paddingBottom: "80px !important",
          position: "relative !important",
          display: "block !important"
        }}
      >
        <div className="container">
          <div className="row y-gap-40 justify-between items-center flex-wrap-reverse md:flex-nowrap">
            {/* LEFT SIDE */}
            <div className="col-lg-6 col-12">
              <h2 className="text-30 fw-700 text-accent-2">WHO WE ARE</h2>

            {/* Sub-heading */}
            <h4 className="text-24 fw-600 mt-20 text-accent-2">
              Your Guide Through the Fertility Journey
            </h4>

            {/* Short description under heading */}
            <p className="mt-10 text-gray-2">
              We walk with you through one of life’s most delicate paths — offering support, clarity, and hope.
            </p>

            {/* Paragraph */}
            <p className="mt-20 text-gray-2">
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

            {/* Button */}
            <div className="alignment-center">
              <button
                onClick={handleWhatsAppClick}
                className="mt-4 button p-3 hero-5-buttons rounded-200 text-white d-flex align-items-center justify-content-center"
              >
                <FaWhatsapp className="me-2" style={{ fontSize: "18px" }} />
                Talk to a Counselor
              </button>
            </div>
          </div>

          {/* RIGHT SIDE IMAGE */}
          <div className="col-lg-6 col-12 mb-20 md:mb-0 text-center">
            <Image
              src="/img/about/about-parivarsathi.png"
              alt="Fertility Support"
              width={1000}
              height={1100}
              className="image-rounded object-cover"
              style={{
                width: "100%",
                height: "auto",
                maxWidth: "900px",
                borderRadius: "40px"
              }}
            />
          </div>
        </div>
      </div>
      </section>

      <style jsx>{`
        .information-section {
          min-height: 100vh !important;
          background-color: #f8f9fa !important;
          padding-top: 80px !important;
          padding-bottom: 80px !important;
          position: relative !important;
          display: block !important;
        }

        .image-rounded {
          border-radius: 40px !important;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1) !important;
          transition: all 0.3s ease !important;
        }

        .image-rounded:hover {
          transform: translateY(-5px) !important;
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15) !important;
        }

        @media (max-width: 768px) {
          .image-rounded {
            border-radius: 30px !important;
            max-width: 95% !important;
          }
        }
      `}</style>
    </>
  );
}