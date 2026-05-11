import React from "react";
import Firstpage from "./(homes)/home-5/page";

export const metadata = {
  title: "Parivar Saathi - Gentle Fertility Counseling & OPD Camps",
  description: "Parivar Saathi was created for people silently struggling with fertility concerns. We provide honest, gentle counseling and free OPD camps in your city. Not a hospital, clinic, or NGO - we operate with compassion and community spirit.",
  alternates: {
    canonical: "https://parivarsaathi.com",
  },
  openGraph: {
    title: "Parivar Saathi - Trying to Conceive? We Can Help",
    description: "Gentle, honest fertility counseling. Speak to a counselor or attend a free OPD camp in your city.",
    url: "https://parivarsaathi.com",
    type: "website",
    images: [{ url: "https://parivarsaathi.com/img/og-image.png", width: 1200, height: 630 }],
  },
};

export default function page() {
  return (
    <>
      <Firstpage />
    </>
  );
}
