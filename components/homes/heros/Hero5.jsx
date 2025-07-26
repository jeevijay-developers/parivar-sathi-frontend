"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";

import { FaWhatsapp } from "react-icons/fa";
import { MdAddCall } from "react-icons/md";
import { FaMapMarkerAlt } from "react-icons/fa";
import { useEffect, useState, useRef } from "react";

export default function Hero5() {
  const router = useRouter();
  const [currentActiveDD, setCurrentActiveDD] = useState("");
  const [location, setLocation] = useState("");
  const [calender, setCalender] = useState("");
  const [tourType, setTourType] = useState("");
  useEffect(() => {
    setCurrentActiveDD("");
  }, [location, calender, tourType, setCurrentActiveDD]);
  const dropDownContainer = useRef();
  useEffect(() => {
    const handleClick = (event) => {
      if (
        dropDownContainer.current &&
        !dropDownContainer.current.contains(event.target)
      ) {
        setCurrentActiveDD("");
      }
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);
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
    <section className="hero -type-5  " >
      <div className="hero__bg">
        <Image
          width={1920}
          height={760}
          src="/img/hero/5/heroBG.jpg"
          alt="background"
        />
      </div>

      <div className="hero__image">
        <Image
          width="40"
          height="760"
          src="/img/hero/5/shape.svg"
          style={{ height: "100%", width: "fit-content" }}
          alt="image"
        />
        <Image width={716} height={760} src="/img/hero/5/3.jpg" style={{borderRadius: "0px"}} alt="image"  />
        <Image
          width="760"
          height="40"
          src="/img/hero/5/mobile.svg"
          alt="image" 
        />
      </div>

      <div className="container"   >
        <div className="row">
          <div className="col-lg-8">
            <div className="hero__content">
              <h1
                data-aos="fade-up"
                data-aos-delay="300"
                className="hero__title "
              >
                <span className="text-accent-2">Trying to Conceive?  <br /> Feeling Unsure Where to Begin? </span>
                <span className="guide-font-size"> </span>
              </h1>

              <div
                data-aos="fade-up"
                data-aos-delay="400"
                className="hero__filter"
              >
                <div
                  data-aos="fade-up"
                  data-aos-delay="100"
                  className="mt-2 mb-10"
                >
                  Parivar Saathi guides you — gently, honestly, and without pressure. <br />
                  Speak to a counselor or attend a free OPD camp in your city.

                </div>
              </div>
              <div
                className="hero5-buttons bg-transparent p-2 rounded-200 w-fit">
                <div className="d-flex call-wa-button">
                  <div className="searchForm__button">
                    <button
                      data-aos="fade-up"
                      data-aos-delay="400"
                      onClick={handleCallClick}
                      className="button p-3  hero-5-buttons rounded-200 text-white "
                    >
                      <MdAddCall className="hero5-icon" />
                      <p className="text-white ms-2">Call Now</p>
                    </button>
                  </div>
                  <div className="searchForm__button">
                    <button
                      data-aos="fade-up"
                      data-aos-delay="300"
                      onClick={handleWhatsAppClick}
                      className="button p-3 hero-5-buttons  rounded-200 text-white "
                    >
                      <FaWhatsapp className="hero5-icon" />
                      <p className="text-white ms-2">Message on WhatsApp</p>
                    </button>
                  </div>
                <div className="searchForm__button">
                  <button
                    data-aos="fade-up"
                    data-aos-delay="500"
                    onClick={() => router.push("/register-opd-camp")}
                    className="button  p-3 hero-5-buttons rounded-200 text-white"
                  >
                    <FaMapMarkerAlt className="hero5-icon" />
                    <p className="text-white ms-2">Register for OPD Camp</p>
                  </button>
                </div>
              
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Mobile-specific responsive styles */}
      <style jsx>{`

@media (max-width: 991px) {
        @media (max-width: 768px) {
          .hero.-type-5 {
            min-height: auto !important;
            padding-bottom: 40px;
          }
          
          .hero__image {
            position: relative !important;
            right: auto !important;
            top: auto !important;
            width: 100% !important;
            height: auto !important;
            display: flex !important;
            flex-direction: column !important;
            align-items: center !important;
            margin-top: 20px !important;
            z-index: 1 !important;
          }
          
          .hero__image img {
            max-width: 100% !important;
            height: auto !important;
            object-fit: contain !important;
          }
          
          .hero__image img:nth-child(2) {
            max-height: 300px !important;
            width: auto !important;
          }
          
          .hero__content {
            text-align: center !important;
            padding: 0 15px !important;
          }
          
          .hero__title {
            font-size: 1.8rem !important;
            line-height: 1.3 !important;
            margin: 20px 0px !important;
          }
          
          .hero__filter {
            margin-bottom: 25px !important;
          }
          
          .hero5-buttons {
            width: 100% !important;
            padding: 10px !important;
            display: flex !important;
            flex-direction: column !important;
            align-items: center !important;
          }
          
          .call-wa-button {
            flex-direction: column !important;
            gap: 12px !important;
            margin-bottom: 12px !important;
            width: 100% !important;
          }
          
          .hero5-buttons .button {
            padding: 12px 20px !important;
            font-size: 0.9rem !important;
            width: 100% !important;
            max-width: 280px !important;
            min-width: auto !important;
            justify-content: center !important;
            display: flex !important;
            align-items: center !important;
            margin: 0 auto !important;
          }
          
          .hero5-buttons .searchForm__button {
            width: 100% !important;
            display: flex !important;
            justify-content: center !important;
          }
          
          .hero5-icon {
            font-size: 1.1rem !important;
            margin-right: 8px !important;
          }
          
          .hero5-buttons .button p {
            margin-bottom: 0 !important;
            white-space: nowrap !important;
          }
          
          .container {
            padding: 0 15px !important;
          }
          
          .col-lg-8 {
            width: 100% !important;
            max-width: 100% !important;
          }
        }
        
        @media (max-width: 480px) {
          .hero__title {
            font-size: 1.5rem !important;
          }
          
          .hero5-buttons .button {
            padding: 10px 16px !important;
            font-size: 0.85rem !important;
            max-width: 100% !important;
          }
          
          .hero5-buttons .button p {
            font-size: 0.85rem !important;
          }
          
          .hero5-icon {
            font-size: 1rem !important;
          }
        }
      `}</style>
    </section>
  );
}
