import ArticlesOne from "@/components/homes/articles/ArticlesOne";
import BannerSeven from "@/components/homes/banners/BannerSeven";
import PopulerDestinations from "@/components/homes/destinations/PopulerDestinations";
import TrendingDestinationsTwo from "@/components/homes/destinations/TrendingDestinationsTwo";
import FeaturesOne from "@/components/homes/features/FeaturesOne";
import Hero4 from "@/components/homes/heros/Hero4";
import TestimonialsThree from "@/components/homes/testimonials/TestimonialsThree";
import FeaturedToures from "@/components/homes/tours/FeaturedToures";
import FooterThree from "@/components/layout/footers/FooterThree";

import Header4 from "@/components/layout/header/Header4";
import React from "react";

export const metadata = {
  title: "Home-4 |",
  description: "",
};

export default function page() {
  return (
    <>
      <main>
        <Header4 />
        <Hero4 />
        <PopulerDestinations />
        <FeaturesOne />
        <div className="mt-50">
          <FeaturedToures />
        </div>
        <TrendingDestinationsTwo />
        <TestimonialsThree />
        <ArticlesOne />
        <BannerSeven />
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
