import Header4 from "@/components/layout/header/Header4";
import React from "react";
import FooterThree from "@/components/layout/footers/FooterThree";
import ContactForm from "@/components/pages/joinus/JoinUsForm";
import Hero from "@/components/pages/joinus/Hero";

export const metadata = {
  title: "Join US ",
  description: "Parivar Saathi ",
};

export default function page() {
  return (
    <>
      <main>
        <Header4 />
        <Hero />
        <ContactForm />
        {/* <TestimonialOne /> */}
        {/* <BannerOne /> */}
        {/* <Team /> */}
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
