// import BrandsOne from "@/components/homes/brands/BrandsOne";
import FooterThree from "@/components/layout/footers/FooterThree";

import Header4 from "@/components/layout/header/Header4";
import Hero from "@/components/pages/RegisterOpdCamp/Hero";
import RegisterOpdCampForm from "@/components/pages/RegisterOpdCamp/RegisterOpdCampForm";
import React from "react";

export const metadata = {
  title: "Register OPD Camp",
  description: "Parivar Sathi ",
};

"use client";

export default function page() {
  return (
    <>
      <main>
        <Header4 />
        <Hero />
        <RegisterOpdCampForm />
        <FooterThree />
      </main>
    </>
  );
}
