import FooterThree from "@/components/layout/footers/FooterThree";
import Header4 from "@/components/layout/header/Header4";
import Hero1 from "@/components/blogs/Hero1";
import BlogList1 from "@/components/blogs/BlogList1";

export const metadata = {
  title: "Blog | Parivar Saathi",
  description: "Read our latest articles on fertility, IVF, and counseling. We provide honest, gentle guidance.",
  alternates: {
    canonical: `https://parivarsaathi.com/blog`,
  },
  openGraph: {
    title: "Blog | Parivar Saathi",
    description: "Read our latest articles on fertility, IVF, and counseling. We provide honest, gentle guidance.",
    url: "https://parivarsaathi.com/blog",
    type: "website",
  },
};

export default async function Page() {
  // Fetch blogs server-side (SSR)
  let blogs = [];
  try {
    const apiBase = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:5000/api";
    const res = await fetch(`${apiBase}/blogs/getAllBlogs`, { next: { revalidate: 60 } }); // ISR caching 60s
    if (res.ok) {
      blogs = await res.json();
    }
  } catch (err) {
    console.error("Error fetching blogs on SSR:", err);
  }

  return (
    <>
      <main>
        <Header4 />
        {/* Pass custom title prop or ensure Hero renders correctly */}
        <Hero1 />
        
        {/* Pass fetched blogs to the listing component */}
        <BlogList1 ssrBlogs={blogs} />
        
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
                    logo: "https://parivarsaathi.com/img/logo/logo2.svg"
                })
            }}
        />
      </main>
    </>
  );
}
