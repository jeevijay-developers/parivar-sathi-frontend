import FooterThree from "@/components/layout/footers/FooterThree";
import Header4 from "@/components/layout/header/Header4";
import Register from "@/components/pages/Register";
import React from "react";

export const metadata = {
  title: "Register | Parivar Saathi",
  description: "Create your Parivar Saathi account.",
  robots: { index: false, follow: false },
};

export default function page() {
  return (
    <>
      <main>
        <Header4 />
        <Register />
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
