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
    <section className="cta -type-4 mt-30">
      <div className="container">
        <div className="cta__content">
          <div className="row justify-between">
            <div className="col-xl-7 col-lg-8">
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
                className="button -md -success-2 bg-green-3 text-white mt-20"
                onClick={() => handleWhatsAppClick()}
              >
                Talk to a Fertility Counselor Now
                <i className="icon-arrow-top-right ml-10"></i>
              </button>
            </div>

            <div className="col-lg-6">
              <div className="cta__image">
                <Image
                  src="/img/cta/11/1.jpg"
                  width={730}
                  height={375}
                  alt="Couple seeking support"
                />
                <Image
                  src="/img/cta/11/shape.svg"
                  width="21"
                  height="250"
                  style={{ width: "auto", height: "100%" }}
                  alt=""
                />
                <Image
                  src="/img/cta/11/mobileShape.svg"
                  width="254"
                  height="23"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
