import Image from "next/image";
import React from "react";

export default function Hero() {
  return (
    <section className="pageHeader -type-1" style={{backgroundColor: "#c79462", padding: "88px 0px"}}>
      <div className="container" >
        <div className="row align-items-center">
          {/* Text Content - Left side on desktop */}
          <div className="col-lg-6 col-md-12 order-2" style={{position: "relative", top: "2.5rem"}}>
            <div className="text-content">
              <h1 className="pageHeader__title text-dark">
                Find a Fertility OPD Camp Near You
              </h1>
              <p className="pageHeader__text">
                Register for a one-on-one consultation with a trusted counselor — no cost, no pressure.
              </p>
              <button 
                onClick={() => {
                  const formSection = document.getElementById('registration-form');
                  if (formSection) formSection.scrollIntoView({ behavior: 'smooth' });
                }}
                className="button -md -dark-1 bg-accent-1 text-white mb-30"
                style={{ marginTop: '20px' }}
              >
                🧡 Register Now
              </button>
              <div className="badges-section d-flex flex-row" style={{columnGap: '1rem'}}>
                <div className="badge-item align-items-center mb-2">
                  <span style={{ color: '#4CAF50' }}>✅</span>
                  <span>First Consultation Free</span>
                </div>
                <div className="badge-item align-items-center mb-2">
                  <span style={{ color: '#4CAF50' }}>✅</span>
                  <span>100% Confidential</span>
                </div>
                <div className="badge-item align-items-center mb-2">
                  <span style={{ color: '#4CAF50' }}>✅</span>
                  <span>Guided by Experts</span>
                </div>
              </div>
            </div>
          </div>
          {/* Image - Right side on desktop, below text on mobile */}
          <div className="col-lg-6 col-md-12 order-lg-2 order-1" style={{position: "relative"}}>
            <div className="hero-img-wrapper">
              <Image
                width={800}
                height={500}
                src="/img/general/OPDCampspng.png"
                alt="image"
                style={{ objectFit: "contain", width: "100%", maxWidth: "100%", height: "auto", maxHeight: "500px", display: "block", margin: "0 auto", borderRadius: "50%" }}
              />
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        @media (max-width: 991px) {
          .order-1 {
            order: 1 !important;
          }
          .order-2 {
            order: 2 !important;
          }
          .hero-img-wrapper img {
            max-width: 80% !important;
            height: auto !important;
            max-height: 250px !important;
            margin-bottom: 2rem !important;
          }
          .pageHeader__title {
            font-size: 2rem !important;
            text-align: center !important;
          }
          .pageHeader__text {
            text-align: center !important;
            font-size: 1rem !important;
          }
          .badges-section {
            flex-direction: column !important;
            align-items: center !important;
            gap: 0.5rem !important;
          }
          .badge-item {
            text-align: center !important;
            width: 100% !important;
          }
          .button {
            width: 100% !important;
            text-align: center !important;
          }
          .col-lg-6 {
            padding: 1rem !important;
          }
        }
        
        @media (max-width: 768px) {
          .pageHeader__title {
            font-size: 1.75rem !important;
          }
          .pageHeader__text {
            font-size: 0.95rem !important;
          }
          .hero-img-wrapper img {
            max-width: 70% !important;
            max-height: 200px !important;
          }
        }
        
        .hero-img-wrapper {
          width: 100%;
          max-width: 800px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .hero-img-wrapper img {
          max-width: 100%;
          height: auto;
          max-height: 500px;
          display: block;
        }
        .badge-item {
          font-size: 0.9rem;
          margin-bottom: 8px;
        }
        .button:hover {
          transform: translateY(-2px);
          transition: all 0.3s ease;
        }
      `}</style>
    </section>
  );
}
