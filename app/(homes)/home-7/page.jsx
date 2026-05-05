import ArticlesOne from "@/components/homes/articles/ArticlesOne";
import Banner from "@/components/homes/banners/Banner";
import Banner11 from "@/components/homes/banners/Banner11";
import TopAttractions from "@/components/homes/destinations/TopAttractions";
import TrendingDestinations from "@/components/homes/destinations/TrendingDestinations";
import Hero7 from "@/components/homes/heros/Hero7";

import TestimonialOne from "@/components/homes/testimonials/TestimonialOne";
import PopulerTours from "@/components/homes/tours/PopulerTours";
import TourSlider4 from "@/components/homes/tours/TourSlider4";
import FooterThree from "@/components/layout/footers/FooterThree";
import Header4 from "@/components/layout/header/Header4";
import React from "react";

export const metadata = {
  title: "Home-7 |",
  description: "",
};

export default function page() {
  return (
    <>
      <main>
        <Header4 />
        <Hero7 />
        <TourSlider4 />
        <TrendingDestinations />
        <Banner />
        <TopAttractions />
        <div className="bg-accent-1-05">
          <TestimonialOne />
        </div>
        <PopulerTours />
        <Banner11 />
        <ArticlesOne />
        <FooterThree />
      
        {/* PARIVAR SAATHI SCHEMA */}
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "Organization",
                    name: "Parivar Saathi",
                    url: "https://parivarsaathi.com",
                    logo: "https://parivarsaathi.com/img/logo.jpg"
                })
            }}
        />
      </main>
    </>
  );
}
