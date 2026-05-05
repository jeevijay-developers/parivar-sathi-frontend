import ArticlesOne from "@/components/homes/articles/ArticlesOne";
import Banner12 from "@/components/homes/banners/Banner12";
import Banner13 from "@/components/homes/banners/Banner13";
import Destinations6 from "@/components/homes/destinations/Destinations6";
import Destinations7 from "@/components/homes/destinations/Destinations7";
import FeaturesOne from "@/components/homes/features/FeaturesOne";
import Hero8 from "@/components/homes/heros/Hero8";
import SpacialOffer from "@/components/homes/others/SpacialOffer";
import CityTour from "@/components/homes/tours/CityTour";
import CruiseTour from "@/components/homes/tours/CruiseTour";
import CulturalTour from "@/components/homes/tours/CulturalTour";
import PopularTourSlider from "@/components/homes/tours/PopulerTourSlider";
import FooterThree from "@/components/layout/footers/FooterThree";
import Header4 from "@/components/layout/header/Header4";
import React from "react";

export const metadata = {
  title: "Home-8 |",
  description: "",
};

export default function page() {
  return (
    <>
      <main>
        <Header4 />
        <Hero8 />
        <SpacialOffer />
        <PopularTourSlider />
        <Destinations6 />
        <Destinations7 />
        <CityTour />
        <CulturalTour />
        <Banner12 />
        <CruiseTour />
        <Banner13 />
        <FeaturesOne />
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
