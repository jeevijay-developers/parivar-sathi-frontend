import DBMain from "@/components/dasboard/main";
import React from "react";

export const metadata = {
  title: "Dashboard-main |",
  description: "",
};

export default function page() {
  return (
    <>
      <main>
        <DBMain />
      
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
