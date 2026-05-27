'use client';
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
import Link from "next/link";
import React, { useEffect } from "react";
import BlogSectionHomePage from "@/components/blogs/BlogSectionHomePage";
import HowWeHelp from "@/components/homes/Section/HowWeHelp";
import WhyTrustParivarSathi from "@/components/homes/Section/WhyTrustParivarSathi";
// export const metadata = {
//   title: "Home-5 |",
//   description: "",
// };

export default function page() {
  return (
    <>
      <main style={{ backgroundColor: "#FFF9F2" }}>
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

        {/* Internal links — rendered in SSR HTML for Google crawling */}
        <section className="layout-pt-sm layout-pb-sm">
          <div className="container">
            <div className="row x-gap-20 y-gap-15 justify-center text-center">
              <div className="col-auto">
                <Link href="/blog" className="button -sm border-1 border-accent-1 text-accent-1 rounded-200 px-20 py-10">
                  Explore all fertility articles
                </Link>
              </div>
              <div className="col-auto">
                <Link href="/register-opd-camp" className="button -sm border-1 border-accent-1 text-accent-1 rounded-200 px-20 py-10">
                  Register for a free IVF OPD camp
                </Link>
              </div>
              <div className="col-auto">
                <Link href="/clinic-partnership" className="button -sm border-1 border-accent-1 text-accent-1 rounded-200 px-20 py-10">
                  Clinic partnership program
                </Link>
              </div>
            </div>
          </div>
        </section>

        <FAQTeaser/>
        <TestimonialsFour />
        {/* <ArticlesOne /> */}
        {/* <Banner9 /> */}
        <FooterThree />
      
        {/* PARIVAR SAATHI SCHEMA */}
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "MedicalOrganization",
                    name: "Parivar Saathi",
                    url: "https://parivarsaathi.com",
                    logo: "https://parivarsaathi.com/img/logo.jpg",
                    description: "Gentle, honest fertility counseling and free OPD camps across India.",
                    medicalSpecialty: "Fertility",
                    contactPoint: {
                        "@type": "ContactPoint",
                        contactType: "customer support",
                        url: "https://parivarsaathi.com/contact"
                    },
                    sameAs: []
                })
            }}
        />
      </main>
    </>
  );
}
