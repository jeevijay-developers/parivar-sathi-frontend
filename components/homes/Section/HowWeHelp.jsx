"use client";

import React from 'react';
import Image from 'next/image';

const HowWeHelp = () => {
  const steps = [
    {
      icon: "/img/icons/1/1.svg",
      className: "text-18",
      title: "Step 1: Reach Out",
      description: "You reach out to us via social media, call, or camp",
    },
    {
      icon: "/img/icons/1/2.svg",
      title: "Step 2: Consultation",
      description: "Our counselor understands your needs and explains your choices",
    },
    {
      icon: "/img/icons/1/3.svg",
      title: "Step 3: Referral",
      description: "We refer you to ethical, experienced doctors or clinics with pre-agreed discounts",
    },
  ];

  return (
    <section className="layout-pt-md">
      <div className="container">
        <div className="row y-gap-10 justify-between items-end">
          <div className="col-auto">
            <h2 data-aos="fade-up" data-aos-delay="" className="text-30">
              How We Help ?
            </h2>
          </div>
        </div>

        <div
          data-aos="fade-up"
          data-aos-delay=""
          className="row y-gap-20 pt-40"
        >
          {steps.map((step, i) => (
            <div key={i} className="col-xl-4 col-md-4 col-sm-6">
              <div className="featureCard -type-5 -hover-accent-2 group">
                <div className="featureCard__icon">
                  <Image 
                    src={step.icon} 
                    width={i === 0 || i === 2 ? 40 : 60} 
                    height={56} 
                    alt={step.title}
                    className="w-14 h-14"
                  />
                </div>
                <h4 className="text-18 fw-500 mt-20 group-hover:text-white transition-colors duration-300">
                  {step.title}
                </h4>
                <p className="text-15 mt-10 fw-bold group-hover:text-white transition-colors duration-300">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowWeHelp;