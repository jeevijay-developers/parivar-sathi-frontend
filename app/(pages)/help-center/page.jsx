import FooterThree from "@/components/layout/footers/FooterThree";
import Header4 from "@/components/layout/header/Header4";
import Activity from "@/components/pages/helpCenter/Activity";
import Faq from "@/components/pages/helpCenter/Faq";
import Hero from "@/components/pages/helpCenter/Hero";
import React from "react";

export const metadata = {
  title: "Help Center & FAQs | Parivar Saathi",
  description: "Find answers to frequently asked questions about fertility, IVF, counseling, OPD camps, and more at Parivar Saathi's Help Center.",
  alternates: {
    canonical: "https://parivarsaathi.com/help-center",
  },
  openGraph: {
    title: "Help Center | Parivar Saathi",
    description: "Explore our FAQs and help resources for fertility-related questions and support.",
    url: "https://parivarsaathi.com/help-center",
    type: "website",
  },
};

export default function page() {
  return (
    <>
      <main>
        <Header4 />
        {/* <Hero /> */}
        {/* <Activity /> */}
        <Faq />
        <FooterThree />
      
        {/* FAQ SCHEMA */}
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "FAQPage",
                    mainEntity: [
                      {
                        "@type": "Question",
                        name: "What is Parivar Saathi?",
                        acceptedAnswer: {
                          "@type": "Answer",
                          text: "Parivar Saathi provides gentle, honest fertility counseling and free OPD camps. We're not a hospital, clinic, or NGO, but operate with compassion and community spirit."
                        }
                      },
                      {
                        "@type": "Question",
                        name: "How can I book an OPD camp slot?",
                        acceptedAnswer: {
                          "@type": "Answer",
                          text: "You can register for an OPD camp through our website or contact us directly for availability in your city."
                        }
                      },
                      {
                        "@type": "Question",
                        name: "Do you offer online counseling?",
                        acceptedAnswer: {
                          "@type": "Answer",
                          text: "Yes, we provide both online and in-person counseling for fertility-related concerns."
                        }
                      }
                    ]
                })
            }}
        />
      </main>
    </>
  );
}
