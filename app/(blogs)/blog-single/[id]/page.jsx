import FooterOne from "@/components/layout/footers/FooterOne";
import Header1 from "@/components/layout/header/Header1";
import Hero1 from "@/components/blogs/Hero1";
import BlogSingle from "@/components/blogs/BlogSingle";
// Use native fetch on the server for reliability in RSC
import Header4 from "@/components/layout/header/Header4";
import FooterThree from "@/components/layout/footers/FooterThree";

export const metadata = {
  title: "Parivar Sathi",
  description:
    "Parivar Sathi was created for people who are silently struggling with fertility concerns and don’t know where to begin...",
};

async function getBlogData(id) {
  const base = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:5000/api";
  try {
    // Server-side fetch (RSC) — avoids axios adapter differences between client/server
    const res = await fetch(`${base}/blogs/getBlog/${id}`);
    if (!res.ok) {
      console.error(`getBlogData: fetch returned ${res.status} ${res.statusText}`);
      return null;
    }
    const json = await res.json();
    return json;
  } catch (err) {
    console.error("Error fetching blog (server fetch):", err);
    return null;
  }
}

export default async function Page({ params }) {
  // In Next.js App Router params may be a Promise — await it to access values reliably
  const resolvedParams = await params;
  const id = resolvedParams.id;
  const blog = await getBlogData(id);

  return (
    <main>
      <Header4 />
      <Hero1 blog={blog} />
      <BlogSingle blog={blog} />
      <FooterThree />
    </main>
  );
}
