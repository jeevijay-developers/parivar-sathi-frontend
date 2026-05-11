import Header4 from "@/components/layout/header/Header4";
import React from "react";
import FooterThree from "@/components/layout/footers/FooterThree";
import ContactForm from "@/components/pages/joinus/JoinUsForm";
import Hero from "@/components/pages/joinus/Hero";

export const metadata = {
  title: "Join Parivar Saathi | Become a Counselor or Partner",
  description: "Join our team as a fertility counselor or community partner. Help us bring compassionate fertility support to families across India.",
  alternates: {
    canonical: "https://parivarsaathi.com/joinus",
  },
  openGraph: {
    title: "Join Parivar Saathi Team",
    description: "Make an impact. Join us as a counselor or partner and help families on their fertility journey.",
    url: "https://parivarsaathi.com/joinus",
    type: "website",
  },
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
