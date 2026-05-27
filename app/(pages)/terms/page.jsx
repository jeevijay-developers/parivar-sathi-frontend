import FooterThree from "@/components/layout/footers/FooterThree";
import Header4 from "@/components/layout/header/Header4";
import Content from "@/components/pages/terms/Content";
import PageHeader from "@/components/pages/terms/PageHeader";
import React from "react";

export const metadata = {
  title: "Terms & Conditions | Parivar Saathi",
  description: "Read the terms and conditions for using Parivar Saathi's fertility counseling and OPD camp services.",
  alternates: {
    canonical: "https://parivarsaathi.com/terms",
  },
};

export default function page() {
  return (
    <>
      <main>
        <Header4 />
        <PageHeader />
        <Content />
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
