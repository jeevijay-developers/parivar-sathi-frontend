import FooterThree from "@/components/layout/footers/FooterThree";
import Header4 from "@/components/layout/header/Header4";
import Hero from "@/components/pages/RegisterOpdCamp/Hero";
import RegisterOpdCampForm from "@/components/pages/RegisterOpdCamp/RegisterOpdCampForm";

export const metadata = {
  title: "Register for OPD Camp | Parivar Saathi",
  description: "Register for a free OPD camp near you. Get professional fertility counseling and medical consultations from expert counselors at Parivar Saathi.",
  alternates: {
    canonical: "https://parivarsaathi.com/register-opd-camp",
  },
  openGraph: {
    title: "Register for OPD Camp | Parivar Saathi",
    description: "Attend a free OPD camp in your city. Professional fertility counseling and support.",
    url: "https://parivarsaathi.com/register-opd-camp",
    type: "website",
  },
};

export default function page() {
  return (
    <>
      <RegisterOpdCampClient />
    </>
  );
}

function RegisterOpdCampClient() {
  "use client";
  return (
    <>
      <main>
        <Header4 />
        <Hero />
        <RegisterOpdCampForm />
        <FooterThree />
      
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
