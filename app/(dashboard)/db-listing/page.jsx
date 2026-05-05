import DBListing from "@/components/dasboard/DBListing";
import React from "react";

export const metadata = {
  title: "Dashboard-listing |",
  description: "",
};

export default function page() {
  return (
    <>
      <main>
        <DBListing />
      
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
