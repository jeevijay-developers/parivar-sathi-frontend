import BannerOne from "@/components/homes/banners/BannerOne";
import BrandsOne from "@/components/homes/brands/BrandsOne";
import FeaturesOne from "@/components/homes/features/FeaturesOne";
import FeturesTwo from "@/components/homes/features/FeturesTwo";
import TestimonialOne from "@/components/homes/testimonials/TestimonialOne";
import FooterOne from "@/components/layout/footers/FooterOne";
import Header1 from "@/components/layout/header/Header1";
import Header4 from "@/components/layout/header/Header4";
import Banner from "@/components/pages/about/Banner";
import Hero from "@/components/pages/about/Hero";
import Information from "@/components/pages/about/Information";
import Team from "@/components/pages/about/Team";
import ContactCall from "@/components/pages/about/ContactCall";
import WhatWeDo from "@/components/pages/about/WhatWeDo";
import React from "react";

export const metadata = {
  title: "About ",
  description: "Parivar Sathi ",
};

export default function page() {
  return (
    <>
      <main>
        <Header4 />
        <Hero />
        <Information />
        <WhatWeDo />
        {/* <Banner /> */}
        <FeaturesOne />
        <div className="mt-60">
          <FeturesTwo />
        </div>
        {/* <TestimonialOne /> */}
        {/* <BannerOne /> */}
        <Team />
        <ContactCall />
        {/* <BrandsOne /> */}
        <FooterOne />
      </main>
    </>
  );
}
