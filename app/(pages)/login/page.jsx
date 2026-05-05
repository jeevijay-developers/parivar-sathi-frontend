import FooterThree from "@/components/layout/footers/FooterThree";
import Header4 from "@/components/layout/header/Header4";
import Login from "@/components/pages/Login";
import React from "react";

export const metadata = {
  title: "Login |",
  description: "",
};

export default function page() {
  return (
    <>
      <main>
        <Header4 />
        <Login />
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
