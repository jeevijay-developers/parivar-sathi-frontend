"use client";
import React from "react";
import { FaCalendarAlt, FaHandsHelping, FaDna, FaCompass } from "react-icons/fa";

export default function WhatWeDo() {
  const services = [
    {
      icon: <FaCalendarAlt />,
      title: "Fertility Counseling Camps",
      description: "Conducted across cities and towns to bring expert guidance closer to families"
    },
    {
      icon: <FaHandsHelping />,
      title: "Personalized Support", 
      description: "One-on-one sessions with trained fertility counselors"
    },
    {
      icon: <FaDna />,
      title: "Ethical Referrals",
      description: "We suggest only experienced and transparent care providers"
    },
    {
      icon: <FaCompass />,
      title: "Clarity, Not Confusion",
      description: "We help you understand, not decide for you"
    }
  ];

  return (
    <section className="layout-pt-lg layout-pb-sm">
      <div className="container">
        {/* OUR MISSION Section */}
        <div className="row mb-5">
          <div className="col-12 text-center">
            <h2 
              className="text-30 fw-700 mb-2" 
              style={{ 
                color: "#5C2D91", 
                fontFamily: "Poppins, sans-serif" 
              }}
            >
              OUR MISSION
            </h2>
            <p 
              className="text-20 lh-16 mb-4 mx-auto" 
              style={{ 
                color: "#2C2C2C",
                fontFamily: "Open Sans, sans-serif",
                maxWidth: "800px"
              }}
            >
              Helping families make informed fertility choices with clarity, care, and confidence
            </p>
          </div>
        </div>

        {/* WHAT WE DO Section */}
        <div className="row">
          <div className="col-12 text-center">
            <h2 
              className="text-30 fw-700 mb-2" 
              style={{ 
                color: "#5C2D91", 
                fontFamily: "Poppins, sans-serif" 
              }}
            >
              WHAT WE DO (At a Glance)
            </h2>
          </div>
        </div>

        <div className="row y-gap-20 pt-40 justify-content-center">
          {services.map((service, i) => (
            <div key={i} className="col-xl-5 col-lg-6 col-md-8 col-sm-10 col-12">
              <div 
                className="d-flex flex-column align-items-center text-center p-4 h-100"
                style={{
                  backgroundColor: "#FFF9F2",
                  borderRadius: "12px",
                  boxShadow: "0 4px 15px rgba(92, 45, 145, 0.08)",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  minHeight: "200px",
                  maxWidth: "400px",
                  margin: "0 auto",
                  cursor: "pointer"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-5px)";
                  e.currentTarget.style.boxShadow = "0 8px 25px rgba(92, 45, 145, 0.15)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 4px 15px rgba(92, 45, 145, 0.08)";
                }}
              >
                <div 
                  className="mb-3 d-flex align-items-center justify-content-center"
                  style={{
                    fontSize: "1.8rem",
                    width: "60px",
                    height: "60px",
                    backgroundColor: "#D6C9F0",
                    borderRadius: "50%",
                    flexShrink: 0,
                    color: "#5C2D91"
                  }}
                >
                  {service.icon}
                </div>
                
                <div className="flex-grow-1">
                  <h4 
                    className="text-18 fw-600 mb-3" 
                    style={{ 
                      color: "#2C2C2C",
                      fontFamily: "Poppins, sans-serif"
                    }}
                  >
                    {service.title}
                  </h4>
                  <p 
                    className="text-15 lh-16 mb-0" 
                    style={{ 
                      color: "#666",
                      fontFamily: "Open Sans, sans-serif"
                    }}
                  >
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
