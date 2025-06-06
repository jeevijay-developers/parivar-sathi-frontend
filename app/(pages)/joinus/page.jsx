import BannerOne from "@/components/homes/banners/BannerOne";
// import BrandsOne from "@/components/homes/brands/BrandsOne";
import BrandsOne from "@/components/homes/brands/BrandsOne";
import FeaturesOne from "@/components/homes/features/FeaturesOne";
import FeturesTwo from "@/components/homes/features/FeturesTwo";
import TestimonialOne from "@/components/homes/testimonials/TestimonialOne";
import FooterOne from "@/components/layout/footers/FooterOne";

import Header4 from "@/components/layout/header/Header4";
import Banner from "@/components/pages/about/Banner";
import Hero from "@/components/pages/joinus/Hero";
import JoinUsForm from "@/components/pages/joinus/JoinUsForm";
import Information from "@/components/pages/about/Information";
import Team from "@/components/pages/about/Team";
import React from "react";
import FooterThree from "@/components/layout/footers/FooterThree";

export const metadata = {
  title: "Join US ",
  description: "Parivar Sathi ",
};

export default function page() {
  return (
    <>
      <main>
        <Header4 />
        <Hero />
        <JoinUsForm />
        {/* <TestimonialOne /> */}
        {/* <BannerOne /> */}
        {/* <Team /> */}
        {/* <BrandsOne /> */}
        <FooterThree />
      </main>
    </>
  );
}
