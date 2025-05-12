import FooterOne from "@/components/layout/footers/FooterOne";
import FooterThree from "@/components/layout/footers/FooterThree";
import Header1 from "@/components/layout/header/Header1";
import Header4 from "@/components/layout/header/Header4";
import Activity from "@/components/pages/helpCenter/Activity";
import Faq from "@/components/pages/helpCenter/Faq";
import Hero from "@/components/pages/helpCenter/Hero";
import React from "react";

export const metadata = {
  title: "Help center || ViaTour - Travel & Tour React NextJS Template",
  description: "ViaTour - Travel & Tour React NextJS Template",
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
      </main>
    </>
  );
}
