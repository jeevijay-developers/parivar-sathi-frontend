import FooterOne from "@/components/layout/footers/FooterOne";
import FooterThree from "@/components/layout/footers/FooterThree";
import Header1 from "@/components/layout/header/Header1";
import Header4 from "@/components/layout/header/Header4";
import PageHeader from "@/components/tours/PageHeader";
import TourList1 from "@/components/tours/TourList1";
import React from "react";

export const metadata = {
  title: "Previous Camps",
  description: "",
};

export default function page() {
  return (
    <>
      <main>
        <Header4 />
        <PageHeader />
        <TourList1 />
        <FooterThree />
      </main>
    </>
  );
}
