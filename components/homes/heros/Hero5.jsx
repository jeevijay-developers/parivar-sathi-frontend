"use client";
import Calender from "@/components/common/dropdownSearch/Calender";
import Location from "@/components/common/dropdownSearch/Location";
import TourType from "@/components/common/dropdownSearch/TourType";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { FaUserDoctor } from "react-icons/fa6";
import { LiaCashRegisterSolid } from "react-icons/lia";
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
  return (
    <section className="hero -type-5">
      <div className="hero__bg">
        <Image
          width={1920}
          height={760}
          src="/img/hero/5/bg.png"
          alt="background"
        />
      </div>

      <div className="hero__image">
        <Image
          width="40"
          height="760"
          src="/img/hero/5/shape.svg"
          style={{ height: "100%", width: "auto" }}
          alt="image"
        />
        <Image width={716} height={760} src="/img/hero/5/3.jpeg" alt="image" />
        <Image
          width="760"
          height="40"
          src="/img/hero/5/mobile.svg"
          alt="image"
        />
      </div>

      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="hero__content">
              <div
                data-aos="fade-up"
                data-aos-delay="100"
                className="hero__subtitle mb-10"
              >
                Trying to Conceive? Need Help Deciding Where to Start?
              </div>

              <h1
                data-aos="fade-up"
                data-aos-delay="300"
                className="hero__title"
              >
                Parivar Sathi guides you
                <br className="md:d-none" />
                <span className="text-accent-2">with care</span>
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
                  Book a free consultation or attend an OPD camp near you.
                </div>
              </div>
              <div
                // ref={}
                className="d-flex justify-content-start align-items-start bg-transparent p-2   rounded-200 w-fit gap-3"
                style={{
                  width: "fit-content ! important",
                  gap: "16px ! important",
                  backgroundColor: "transparent ! important",
                }}
              >
                <div className="searchForm__button">
                  <button
                    data-aos="fade-up"
                    data-aos-delay="300"
                    onClick={handleWhatsAppClick}
                    className="button p-3 -dark-1 bg-accent-2 rounded-200 text-white gap-3"
                  >
                    <FaUserDoctor />
                    <p className="text-white ms-2">Talk to counselor</p>
                  </button>
                </div>
                <div className="searchForm__button">
                  <button
                    data-aos="fade-up"
                    data-aos-delay="300"
                    onClick={() => router.push("/register-opd-camp")}
                    className="button -dark-1 p-3 bg-accent-3-v rounded-200 text-white"
                  >
                    <LiaCashRegisterSolid />
                    <p className="text-white ms-2">Register OPD Camp</p>
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
