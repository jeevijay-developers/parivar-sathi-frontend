"use client";
import Image from "next/image";
import React from "react";
import { useRouter } from "next/navigation";

export default function Banner12() {
  const router = useRouter();
  const handleWhatsAppClick = () => {
    const phoneNumber = process.env.NEXT_PUBLIC_COUNSELLOR_WHATSAPP_NUMBER;
    const message = encodeURIComponent(
      "Hi Parivar Sathi, I have some questions about fertility support. Can you help?"
    );
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };
  return (
    <section className="cta -type-4 layout-pt-lg layout-pb-lg">
      <div className="container">
        <div className="cta__content">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="cta__text-content">
              <h2 data-aos="fade-up" className="text-24 lh-13 break-words">
                Are You Trying to Conceive?
              </h2>

              <p data-aos="fade-up" className="mt-10 break-words">
                It’s okay to have questions. We’re here for that.
              </p>

              <p data-aos="fade-up" className="mt-10 break-words">
                You’re not alone if you’ve been trying to conceive for a few
                months and feel unsure.
              </p>

              <p data-aos="fade-up" className="mt-10 break-words">
                Not every delay means a big problem. But knowing when to talk to
                someone helps.
              </p>

              <ul
                data-aos="fade-up"
                className="mt-10 list-disc pl-5 break-words"
              >
                <li>Understand common fertility signals</li>
                <li>Know when it’s time to consult a doctor</li>
                <li>Learn about your options in a simple way</li>
              </ul>

              <button
                data-aos="fade-right"
                className="button -md -success-2 bg-green-3 text-white mt-20 cta-button"
                onClick={() => handleWhatsAppClick()}
              >
                Talk to a Fertility Counselor Now
                <i className="icon-arrow-top-right ml-10"></i>
              </button>
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="cta__image hide-on-mobile">
                <Image
                  src="/img/cta/concieve.jpg"
                  width={600}
                  height={400}
                  alt="Couple seeking support"
                  className="cta-main-image"
                />
                <Image
                  src="/img/cta/11/shape.svg"
                  width="21"
                  height="250"
                  style={{ width: "auto", height: "100%" }}
                  alt=""
                  className="cta-shape-desktop"
                />
                <Image
                  src="/img/cta/11/mobileShape.svg"
                  width="200"
                  height="23"
                  alt=""
                  className="cta-shape-mobile"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Responsive Styles */}
      <style jsx>{`
        .hide-on-mobile {
          display: block;
        }
        @media (max-width: 768px) {
          .hide-on-mobile {
            display: none !important;
          }
            .cta__content{
            padding: 0 ;
            }
        }
        /* Base Layout - 50-50 split on desktop */
        .cta__content .row {
          align-items: center;
        }
        
        .cta__text-content {
          padding-right: 30px;
        }
        
        .cta__image {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        
        .cta-main-image {
          width: 100%;
          height: auto;
          border-radius: 16px;
          object-fit: cover;
        }
        
        .cta-shape-desktop {
          position: absolute;
          left: -10px;
          top: 50%;
          transform: translateY(-50%);
          z-index: 2;
        }
        
        .cta-shape-mobile {
          display: none;
        }

        /* Large Desktop */
        @media (min-width: 1400px) {
        /* Medium Desktop */
        @media (max-width: 1200px) {
          .cta__text-content {
            padding-right: 20px;
          }
        }

        /* Tablet Layout */
        @media (max-width: 991px) {
          .cta__content .row {
            flex-direction: column !important;
            gap: 30px;
          }
          
          .col-md-12 {
            flex: 0 0 100% !important;
            max-width: 100% !important;
          }
          
          .col-lg-6:first-child {
            order: 1;
          }
          
          .col-lg-6:last-child {
            order: 2;
          }
          
          .cta__text-content {
            text-align: left;
            padding: 0 30px;
            max-width: 100%;
          }
          
          .cta__text-content h2 {
            font-size: 1.9rem !important;
            margin-bottom: 15px !important;
            line-height: 1.2 !important;
          }
          
          .cta__text-content p {
            font-size: 1rem !important;
            line-height: 1.5 !important;
            margin-bottom: 12px;
          }
          
          .cta__text-content ul {
            margin-bottom: 20px;
          }
          
          .cta__text-content li {
            font-size: 1rem !important;
            line-height: 1.5 !important;
          }
          
          .cta-button {
            padding: 14px 28px !important;
            font-size: 1rem !important;
            width: auto !important;
            max-width: fit-content !important;
            margin: 20px 0 0 0 !important;
            display: inline-block !important;
          }
          
          .cta__image {
            margin-top: 0;
            width: 100%;
            max-width: 100%;
            margin: 0 auto;
            padding: 0 30px;
            position: relative;
          }
          
          .cta-main-image {
            width: 100%;
            border-radius: 20px;
            height: auto;
            max-height: 350px;
            object-fit: cover;
          }
          
          .cta-shape-desktop {
            display: none !important;
          }
          
          .cta-shape-mobile {
            display: none !important;
          }
        }

        /* Mobile Layout */
        @media (max-width: 768px) {
          .layout-pt-lg {
            padding-top: 40px !important;
          }
          .layout-pb-lg {
            padding-bottom: 40px !important;
          }
          
          .cta__content .row {
            gap: 25px;
            flex-direction: column !important;
          }
          
          .col-lg-6:first-child {
            order: 1;
            margin-bottom: 0 !important;
          }
          
          .col-lg-6:last-child {
            order: 2;
            margin-top: 25px !important;
          }
          
          .cta__text-content {
            padding: 0 20px;
            text-align: left;
            position: relative;
            z-index: 2;
            background: transparent;
          }
          
          .cta__text-content h2 {
            font-size: 1.6rem !important;
            line-height: 1.3 !important;
            margin-bottom: 12px !important;
          }
          
          .cta__text-content p {
            font-size: 0.95rem !important;
            line-height: 1.5 !important;
            margin-bottom: 10px;
          }
          
          .cta__text-content li {
            font-size: 0.95rem !important;
            line-height: 1.5 !important;
          }
          
          .cta-button {
            padding: 12px 24px !important;
            font-size: 0.95rem !important;
            width: auto !important;
            max-width: fit-content !important;
            margin: 18px 0 0 0 !important;
            display: inline-block !important;
          }
          
          .cta__image {
            max-width: 100%;
            padding: 0 20px;
            position: relative;
          }
          
          .cta-main-image {
            border-radius: 16px;
            max-height: 280px;
            object-fit: cover;
            width: 100%;
            height: auto;
          }
        }

        /* Small Mobile */
        @media (max-width: 480px) {
          .cta__text-content {
            padding: 0 15px;
          }
          
          .cta__text-content h2 {
            font-size: 1.4rem !important;
          }
          
          .cta__text-content p,
          .cta__text-content li {
            font-size: 0.9rem !important;
          }
          
          .cta-button {
            padding: 10px 20px !important;
            font-size: 0.9rem !important;
          }
          
          .cta__image {
            padding: 0 15px;
          }
          
          .cta-main-image {
            max-height: 240px;
            border-radius: 12px;
          }
          
          .container {
            padding: 0 15px !important;
          }
        }
          @media (max-width: 575px) {
        
        /* Very Small Mobile */
        @media (max-width: 360px) {
          .cta__text-content h2 {
            font-size: 1.2rem !important;
          }
        }
      `}</style>
    </section>
  );
}
