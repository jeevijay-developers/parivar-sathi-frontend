import ContactBanner from "@/components/contact/ContactBanner";
import FooterOne from "@/components/layout/footers/FooterOne";
import FooterThree from "@/components/layout/footers/FooterThree";
import Header1 from "@/components/layout/header/Header1";
import Header4 from "@/components/layout/header/Header4";
import ContactForm from "@/components/pages/contact/ContactForm";
import Locations from "@/components/pages/contact/Locations";
import React from "react";

export const metadata = {
  title: "Contact",
  description: "Parivar Sathi Contact Page",
};

export default function page() {
  return (
    <>
      <main>
        <Header4 />
        <ContactBanner />
        <Locations />
        <ContactForm />
        <FooterThree />
      </main>
    </>
  );
}
