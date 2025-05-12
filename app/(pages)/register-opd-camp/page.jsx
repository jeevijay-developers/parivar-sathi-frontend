import BannerOne from "@/components/homes/banners/BannerOne";
// import BrandsOne from "@/components/homes/brands/BrandsOne";
import BrandsOne from "@/components/homes/brands/BrandsOne";
import FeaturesOne from "@/components/homes/features/FeaturesOne";
import FeturesTwo from "@/components/homes/features/FeturesTwo";
import TestimonialOne from "@/components/homes/testimonials/TestimonialOne";
import FooterThree from "@/components/layout/footers/FooterThree";

import Header4 from "@/components/layout/header/Header4";
import Banner from "@/components/pages/about/Banner";
import Hero from "@/components/pages/RegisterOpdCamp/Hero";
import RegisterOpdCampForm from "@/components/pages/RegisterOpdCamp/RegisterOpdCampForm";
import Information from "@/components/pages/about/Information";
import Team from "@/components/pages/about/Team";
import React from "react";

export const metadata = {
  title: "Register OPD Camp",
  description: "Parivar Sathi ",
};

export default function page() {
  return (
    <>
      <main>
        <Header4 />
        <Hero />
        <RegisterOpdCampForm />
        <FooterThree />
      </main>
    </>
  );
}
