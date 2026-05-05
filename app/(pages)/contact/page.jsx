import ContactBanner from "@/components/contact/ContactBanner";
import FooterThree from "@/components/layout/footers/FooterThree";
import Header4 from "@/components/layout/header/Header4";
import ContactForm from "@/components/pages/contact/ContactForm";
import React from "react";

export const metadata = {
  title: "Contact",
  description: "Parivar Saathi Contact Page",
};

export default function page() {
  return (
    <>
      <main>
        <Header4 />
        <ContactBanner />
        <ContactForm />
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
