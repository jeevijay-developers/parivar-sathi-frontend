import FooterOne from "@/components/layout/footers/FooterOne";
import FooterThree from "@/components/layout/footers/FooterThree";
import Header1 from "@/components/layout/header/Header1";
import Header4 from "@/components/layout/header/Header4";
import PageHeader from "@/components/tourSingle/PageHeader";
import TourSlider from "@/components/tourSingle/TourSlider";
import SingleOne from "@/components/tourSingle/pages/SingleOne";
import { allTour } from "@/data/tours";

import React from "react";

export const metadata = {
  title: "Tour-single-1 || ViaTour - Travel & Tour React NextJS Template",
  description: "ViaTour - Travel & Tour React NextJS Template",
};

export default function page({ params }) {
  const id = params.id;
  const tour = allTour.find((item) => item.id == id) || allTour[0];

  return (
    <>
      <main>
        <Header4 />
        <PageHeader />

        <SingleOne tour={tour} />
        {/* <TourSlider /> */}
        <FooterThree />
      </main>
    </>
  );
}
