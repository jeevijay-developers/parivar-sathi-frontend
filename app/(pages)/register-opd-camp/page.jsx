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

async function getUpcomingCamp() {
  const base = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:5000/api";
  try {
    const res = await fetch(`${base}/opdcamps/upnext`, { next: { revalidate: 3600 } });
    if (!res.ok) return null;
    return await res.json();
  } catch {
    return null;
  }
}

function buildEventSchema(camp) {
  // Combine date + time into a full ISO string when both are available
  const startDate = camp?.date
    ? new Date(`${new Date(camp.date).toISOString().split("T")[0]}T${camp.time || "09:00"}`)
    : null;

  return {
    "@context": "https://schema.org",
    "@type": "Event",
    name: camp?.title || "Free Fertility OPD Camp by Parivar Saathi",
    description:
      "A free one-on-one fertility counseling camp with trained counselors. Get expert guidance, clinic referrals, and test discount coupons.",
    url: "https://parivarsaathi.com/register-opd-camp",
    image: camp?.image || "https://parivarsaathi.com/img/general/OPDCampspng.png",
    eventStatus: "https://schema.org/EventScheduled",
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    ...(startDate && { startDate: startDate.toISOString() }),
    location: {
      "@type": "Place",
      name: camp?.location || "Various Locations Across India",
      address: {
        "@type": "PostalAddress",
        addressCountry: "IN",
        ...(camp?.location && { addressLocality: camp.location }),
      },
    },
    organizer: {
      "@type": "Organization",
      name: "Parivar Saathi",
      url: "https://parivarsaathi.com",
    },
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "INR",
      availability: "https://schema.org/InStock",
      url: "https://parivarsaathi.com/register-opd-camp",
    },
  };
}

export default async function Page() {
  const camp = await getUpcomingCamp();

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Parivar Saathi",
    url: "https://parivarsaathi.com",
    logo: "https://parivarsaathi.com/img/logo.jpg",
  };

  return (
    <main>
      <Header4 />
      <Hero />
      <RegisterOpdCampForm />
      <FooterThree />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildEventSchema(camp)) }}
      />
    </main>
  );
}
