import Header4 from "@/components/layout/header/Header4";
import React from "react";
import FooterThree from "@/components/layout/footers/FooterThree";
import ContactForm from "@/components/pages/joinus/JoinUsForm";
import Hero from "@/components/pages/joinus/Hero";

export const metadata = {
  title: "Join US ",
  description: "Parivar Sathi ",
};

export default function page() {
  return (
    <>
      <main>
        <Header4 />
        <Hero />
        <ContactForm />
        {/* <TestimonialOne /> */}
        {/* <BannerOne /> */}
        {/* <Team /> */}
        {/* <BrandsOne /> */}
        <FooterThree />
      </main>
    </>
  );
}
