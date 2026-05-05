import AddTour from "@/components/dasboard/AddTour";
import React from "react";

export const metadata = {
  title: "Dashboard-add-tour |",
  description: "",
};

export default function page() {
  return (
    <>
      <main>
        <AddTour />
      
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
