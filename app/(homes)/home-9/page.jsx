import ArticlesOne from "@/components/homes/articles/ArticlesOne";
import Destinations8 from "@/components/homes/destinations/Destinations8";
import DestinationsThree from "@/components/homes/destinations/DestinationsThree";
import Features6 from "@/components/homes/features/Features6";
import Features7 from "@/components/homes/features/Features7";
import Hero9 from "@/components/homes/heros/Hero9";
import TestimonialsFive from "@/components/homes/testimonials/TestimonialsFive";
import Tour2 from "@/components/homes/tours/Tour2";
import TourSlider5 from "@/components/homes/tours/TourSlider5";
import FooterThree from "@/components/layout/footers/FooterThree";
import Header4 from "@/components/layout/header/Header4";
import React from "react";

export const metadata = {
  title: "Home-9 |",
  description: "",
};

export default function page() {
  return (
    <>
      <main>
        <Header4 />
        <Hero9 />
        <Destinations8 />
        <TourSlider5 />
        <Features6 />
        <DestinationsThree />
        <div style={{ marginTop: "120px" }}>
          <Features7 />
          <Tour2 />
          <TestimonialsFive />
          <ArticlesOne />
          <FooterThree />
        </div>
      
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
