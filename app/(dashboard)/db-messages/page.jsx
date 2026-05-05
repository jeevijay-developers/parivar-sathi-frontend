import Messages from "@/components/dasboard/Messages";
import React from "react";

export const metadata = {
  title: "Dashboard-messages |",
  description: "",
};

export default function page() {
  return (
    <>
      <main>
        <Messages />
      
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
