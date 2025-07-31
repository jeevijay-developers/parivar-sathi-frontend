"use client";
import React from "react";
import Image from "next/image";
import { FaCheckCircle, FaUserFriends } from "react-icons/fa";

export default function HeroBanner() {
  // Scroll to form section
  const handleApplyNow = () => {
    const formSection = document.getElementById("form-section");
    if (formSection) {
      formSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <section className="hero-section">
        <div className="container">
          <div className="row align-items-center hero-flex">
            {/* CONTENT LEFT (desktop), BELOW (mobile) */}
            <div className="col-lg-6 col-12 hero-text-col">
              <h1 className="hero-heading">Join Our League of Everyday Heroes</h1>
              <p className="hero-subheading mt-16">Make a meaningful difference in someone’s fertility journey.</p>
              <p className="hero-desc mt-16">We’re inviting compassionate professionals to join our team — doctors, counselors, coordinators, and more.</p>
              <button className="hero-cta mt-24" onClick={handleApplyNow}>
                🧡 Apply Now
              </button>
              {/* BADGES */}
              <div className="hero-badges mt-24">
                <div className="hero-badge">
                  <FaCheckCircle className="badge-icon" /> Ethical Work
                </div>
                <div className="hero-badge">
                  <FaUserFriends className="badge-icon" /> Flexible Engagement
                </div>
                <div className="hero-badge">
                  <FaCheckCircle className="badge-icon" /> Purpose-Led Impact
                </div>
              </div>
            </div>
            {/* IMAGE RIGHT (desktop), TOP (mobile) */}
            <div className="col-lg-6 col-12 hero-img-col text-center">
              <Image
                src="/img/avatars/joinImg2.png"
                alt="Pixar-style superhero team"
                width={650}
                height={700}
                className="image-rounded object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>
      <style jsx>{`
        .hero-section {
          min-height: 100vh;
          background: transparent;
          padding-top: 36px;
          padding-bottom: 0px;
          display: flex;
          align-items: center;
        }
        .hero-flex {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
        }
        .hero-img-col {
          display: flex;
          justify-content: center;
          align-items: center;
          margin-bottom: 32px;
        }
        .image-rounded {
          border-top-left-radius: 0;
          border-top-right-radius: 0;
          border-bottom-left-radius: 60px;
          border-bottom-right-radius: 60px;
          box-shadow: 0 20px 40px rgba(0,0,0,0.1);
          transition: all 0.3s ease;
          max-width: 520px;
          width: 100%;
          height: auto;
        }
        .image-rounded:hover {
          transform: translateY(-5px);
          box-shadow: 0 25px 50px rgba(0,0,0,0.15);
        }
        .hero-text-col {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: center;
        }
        .hero-heading {
          font-size: 2.5rem;
          font-weight: 700;
          color: #5C2D91;
          font-family: Poppins, Nunito, Open Sans;
        }
        .hero-subheading {
          font-size: 1.25rem;
          color: #333;
          font-weight: 500;
        }
        .hero-desc {
          font-size: 1.1rem;
          color: #555;
        }
        .hero-cta {
          background: #F4B400;
          color: #5C2D91;
          border: none;
          border-radius: 30px;
          padding: 12px 32px;
          font-size: 1.15rem;
          font-weight: 700;
          font-family: Poppins, Nunito, Open Sans;
          cursor: pointer;
          transition: background 0.2s;
          margin-top: 20px;
        }
        .hero-cta:hover {
          background: #ffe6a7;
        }
        .hero-badges {
          display: flex;
          gap: 18px;
          margin-top: 18px;
        }
        .hero-badge {
          display: flex;
          align-items: center;
          gap: 8px;
          background: #fff;
          border-radius: 20px;
          padding: 8px 18px;
          font-size: 1rem;
          color: #5C2D91;
          font-weight: 600;
          box-shadow: 0 2px 8px #5c2d9112;
        }
        .badge-icon {
          color: #F4B400;
          font-size: 1.2em;
        }
        @media (max-width: 991px) {
          .hero-flex {
            flex-direction: column;
          }
          .hero-img-col {
            margin-bottom: 18px;
          }
          .hero-text-col {
            align-items: flex-start;
            text-align: left;
          }
        }
        @media (max-width: 768px) {
          .hero-section {
            padding-top: 32px;
            padding-bottom: 32px;
          }
          .hero-flex {
            flex-direction: column-reverse;
          }
          .image-rounded {
            max-width: 320px;
            border-top-left-radius: 0;
            border-top-right-radius: 0;
            border-bottom-left-radius: 32px;
            border-bottom-right-radius: 32px;
          }
          .hero-heading {
            font-size: 2rem;
          }
          .hero-badges {
            flex-direction: column;
            gap: 10px;
            align-items: center;
            justify-content: center;
            margin-top: 18px;
          }
          .hero-badge {
            margin-bottom: 0;
          }
          .hero-text-col {
            align-items: center;
            text-align: center;
          }
          .hero-cta {
            display: inline-block;
            margin-top: 20px;
            margin-bottom: 0;
          }
        }
      `}</style>
    </>
  );
}