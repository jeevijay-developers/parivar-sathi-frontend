import ContactBanner from "@/components/contact/ContactBanner";
import FooterThree from "@/components/layout/footers/FooterThree";
import Header4 from "@/components/layout/header/Header4";
import ContactForm from "@/components/pages/contact/ContactForm";
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
        <ContactForm />
        <FooterThree />
      </main>
    </>
  );
}
