import FAQTeaser from "@/components/common/FAQTeaser";
import ArticlesOne from "@/components/homes/articles/ArticlesOne";

import Banner12 from "@/components/homes/banners/Banner12";

import BannerEight from "@/components/homes/banners/BannerEight";

import DestinationsFive from "@/components/homes/destinations/DestinationsFive";
import Features6 from "@/components/homes/features/Features6";
import Hero5 from "@/components/homes/heros/Hero5";
import TestimonialsFour from "@/components/homes/testimonials/TestimonialsFour";
import TestimonialsThree from "@/components/homes/testimonials/TestimonialsThree";
import TourTypesTwo from "@/components/homes/tourTypes/TourTypesTwo";
import FeaturedTrips from "@/components/homes/tours/FeaturedTrips";
import FooterThree from "@/components/layout/footers/FooterThree";
import Header4 from "@/components/layout/header/Header4";
import React from "react";
import BlogSectionHomePage from "@/components/blogs/BlogSectionHomePage";
import HowWeHelp from "@/components/homes/Section/HowWeHelp";
import WhyTrustParivarSathi from "@/components/homes/Section/WhyTrustParivarSathi";
export const metadata = {
  title: "Home-5 || ViaTour - Travel & Tour React NextJS Template",
  description: "ViaTour - Travel & Tour React NextJS Template",
};

export default function page() {
  return (
    <>
      <main>
        <Header4 />
        <Hero5 />
        {/* <BrandsThree /> */}
        <TourTypesTwo />
        <FeaturedTrips />
        <BannerEight />
        <DestinationsFive />
        <WhyTrustParivarSathi />
        <Banner12 />
        <BlogSectionHomePage />
        <FAQTeaser/>
        <TestimonialsFour />
        {/* <ArticlesOne /> */}
        {/* <Banner9 /> */}
        <FooterThree />
      </main>
    </>
  );
}
