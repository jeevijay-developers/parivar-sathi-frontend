"use client";
import Calender from "@/components/common/dropdownSearch/Calender";
import Location from "@/components/common/dropdownSearch/Location";
import TourType from "@/components/common/dropdownSearch/TourType";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { FaUserDoctor } from "react-icons/fa6";
import { LiaCashRegisterSolid } from "react-icons/lia";
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
        <Image width={716} height={760} src="/img/hero/5/3.jpg" alt="image"  />
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
                // ref={}
                className="hero5-buttons bg-transparent p-2 rounded-200 w-fit btnCouncelour">
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
    </section>
  );
}
