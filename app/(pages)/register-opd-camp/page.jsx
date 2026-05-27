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

async function getUpcomingCamps() {
  try {
    const apiBase = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:5000/api";
    const res = await fetch(`${apiBase}/opds/opdcamps/next`, { next: { revalidate: 3600 } });
    if (!res.ok) return [];
    return await res.json();
  } catch {
    return [];
  }
}

export default async function page() {
  const upcomingCamps = await getUpcomingCamps();

  const eventSchemas = Array.isArray(upcomingCamps) && upcomingCamps.length > 0
    ? upcomingCamps.map((camp) => ({
        "@context": "https://schema.org",
        "@type": "Event",
        name: camp.title,
        startDate: camp.date,
        location: {
          "@type": "Place",
          name: camp.location,
        },
        organizer: {
          "@type": "Organization",
          name: "Parivar Saathi",
          url: "https://parivarsaathi.com",
        },
        url: "https://parivarsaathi.com/register-opd-camp",
        eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
        eventStatus: "https://schema.org/EventScheduled",
        isAccessibleForFree: true,
      }))
    : null;

  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalOrganization",
    name: "Parivar Saathi",
    url: "https://parivarsaathi.com",
    logo: "https://parivarsaathi.com/img/logo.jpg",
    description: "Gentle, honest fertility counseling and free OPD camps across India.",
    medicalSpecialty: "Fertility",
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer support",
      url: "https://parivarsaathi.com/contact",
    },
  };

  return (
    <main>
      <Header4 />
      <Hero />
      <RegisterOpdCampForm />
      <FooterThree />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(eventSchemas ?? orgSchema),
        }}
      />
    </main>
  );
}
