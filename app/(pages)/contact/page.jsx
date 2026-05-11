import ContactBanner from "@/components/contact/ContactBanner";
import FooterThree from "@/components/layout/footers/FooterThree";
import Header4 from "@/components/layout/header/Header4";
import ContactForm from "@/components/pages/contact/ContactForm";
import React from "react";

export const metadata = {
  title: "Contact Us | Parivar Saathi - Get Support",
  description: "Contact Parivar Saathi for fertility counseling, OPD camp information, or partnership inquiries. Reach out to us for support on your journey.",
  alternates: {
    canonical: "https://parivarsaathi.com/contact",
  },
  openGraph: {
    title: "Contact Parivar Saathi",
    description: "Get in touch with us for fertility support, counseling, or to learn about our OPD camps.",
    url: "https://parivarsaathi.com/contact",
    type: "website",
  },
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
