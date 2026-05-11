import FeaturesOne from "@/components/homes/features/FeaturesOne";
import FeturesTwo from "@/components/homes/features/FeturesTwo";
import Header4 from "@/components/layout/header/Header4";
import Hero from "@/components/pages/about/Hero";
import Information from "@/components/pages/about/Information";
import Team from "@/components/pages/about/Team";
import ContactCall from "@/components/pages/about/ContactCall";
import WhatWeDo from "@/components/pages/about/WhatWeDo";
import React from "react";
import FooterThree from "@/components/layout/footers/FooterThree";

export const metadata = {
  title: "About Parivar Saathi - Our Mission & Team",
  description: "Learn about Parivar Saathi's mission to provide gentle, honest fertility counseling and support. Meet our compassionate team dedicated to helping people on their fertility journey.",
  alternates: {
    canonical: "https://parivarsaathi.com/about",
  },
  openGraph: {
    title: "About Parivar Saathi",
    description: "Discover our mission, values, and team committed to fertility counseling and community support.",
    url: "https://parivarsaathi.com/about",
    type: "website",
  },
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
