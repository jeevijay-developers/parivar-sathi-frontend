"use client";
import React from "react";
import { FaWhatsapp, FaMapMarkerAlt, FaBullhorn } from "react-icons/fa";
import { MdAddCall } from "react-icons/md";

export default function ContactCall() {
  const handleWhatsAppClick = () => {
    const phoneNumber = process.env.NEXT_PUBLIC_COUNSELLOR_WHATSAPP_NUMBER;
    const message = encodeURIComponent(
      "Hi Parivar Sathi, I have some questions about fertility support. Can you help?"
    );
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  const handleCallClick = () => {
    const phoneNumber = "+919230965019";
    if (typeof window !== 'undefined') {
      window.location.href = `tel:${phoneNumber}`;
    }
  };

  return (
    <section className="layout-pt-lg layout-pb-lg" >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-10 col-12">
            <div className="text-center">
              <h2 
                className="text-30 fw-700 mb-4 d-flex align-items-center justify-content-center" 
                style={{ 
                  color: "#5C2D91", 
                  fontFamily: "Poppins, sans-serif" 
                }}
              >
                <FaBullhorn className="me-3"  />
                LET'S TALK
              </h2>
              
              <p 
                className="text-18 mb-4" 
                style={{ 
                  color: "#2C2C2C",
                  fontFamily: "Open Sans, sans-serif",
                  lineHeight: "1.6"
                }}
              >
                Whether you've just started trying or are feeling unsure, our counselors are here to support you.
              </p>

              <div className="hero5-buttons bg-transparent p-2 rounded-200 w-fit d-flex flex-wrap justify-content-center gap-3">
                <div className="searchForm__button">
                  <button
                    onClick={handleCallClick}
                    className="button p-3 hero-5-buttons rounded-200 text-white d-flex align-items-center"
                  >
                    <MdAddCall className="hero5-icon" />
                    <p className="text-white ms-2 mb-0">Call Now to Speak with a Counselor</p>
                  </button>
                </div>
                
                <div className="searchForm__button">
                  <button
                    onClick={handleWhatsAppClick}
                    className="button p-3 hero-5-buttons rounded-200 text-white d-flex align-items-center"
                  >
                    <FaWhatsapp className="hero5-icon" />
                    <p className="text-white ms-2 mb-0">Message on WhatsApp</p>
                  </button>
                </div>
                
                <div className="searchForm__button">
                  <button
                    className="button p-3 hero-5-buttons rounded-200 text-white d-flex align-items-center"
                  >
                    <FaMapMarkerAlt className="hero5-icon" />
                    <p className="text-white ms-2 mb-0">Find a Camp Near You</p>
                  </button>
                </div>
              </div>

              <div 
                className="mt-4 p-3"
                style={{
                  backgroundColor: "#D6C9F0",
                  borderRadius: "12px",
                  border: "2px solid #5C2D91"
                }}
              >
                <p 
                  className="text-16 fw-600 mb-0" 
                  style={{ 
                    color: "#5C2D91",
                    fontFamily: "Poppins, sans-serif"
                  }}
                >
                   Operational in: Delhi, Punjab, Uttar Pradesh, Bihar, Jharkhand & West Bengal
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
