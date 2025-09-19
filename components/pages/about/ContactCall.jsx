"use client";
import React from "react";
import { useRouter } from 'next/navigation';
import { FaWhatsapp, FaMapMarkerAlt, FaBullhorn } from "react-icons/fa";
import { MdAddCall } from "react-icons/md";

export default function ContactCall() {
  const router = useRouter();

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

  const handleUpcomingcampNavigation = () => {
    sessionStorage.setItem('scrollToId', 'upcoming-opd-camp');
    router.push("/");
  }


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
                <FaBullhorn className="me-3" />
                LET'S TALK
              </h2>

              <p
                className="text-18 mb-5"
                style={{
                  color: "#2C2C2C",
                  fontFamily: "Open Sans, sans-serif",
                  lineHeight: "1.6"
                }}
              >
                Whether you've just started trying or are feeling unsure, our counselors are here to support you.
              </p>

              <div className="d-flex flex-wrap    justify-content-center lets-talk-buttons">
                <div className="w-100" style={{ maxWidth: "300px" }}>
                  <button
                    onClick={handleCallClick}
                    className="button p-3 hero-5-buttons rounded-200 text-white d-flex align-items-center justify-content-center w-100"
                    style={{ minHeight: "60px" }}
                  >
                    <MdAddCall className="hero5-icon flex-shrink-0" />
                    <span className="ms-2 text-center">Call Now to Speak with a Counselor</span>
                  </button>
                </div>

                <div className="w-100" style={{ maxWidth: "300px" }}>
                  <button
                    onClick={handleWhatsAppClick}
                    className="button p-3 hero-5-buttons rounded-200 text-white d-flex align-items-center justify-content-center w-100"
                    style={{ minHeight: "60px" }}
                  >
                    <FaWhatsapp className="hero5-icon flex-shrink-0" />
                    <span className="ms-2 text-center">Message on WhatsApp</span>
                  </button>
                </div>

                <div className="w-100" style={{ maxWidth: "300px" }}>
                  <button
                    onClick={handleUpcomingcampNavigation}
                    className="button p-3 hero-5-buttons rounded-200 text-white d-flex align-items-center justify-content-center w-100"
                    style={{ minHeight: "60px" }}
                  >
                    <FaMapMarkerAlt className="hero5-icon flex-shrink-0" />
                    <span className="ms-2 text-center">Find a Camp Near You</span>
                  </button>
                </div>
              </div>

              <div
                className="p-4"
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
                  Reaching couples across India & Dhaka with dedicated counselling support
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
