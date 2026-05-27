import FooterThree from "@/components/layout/footers/FooterThree";
import Header4 from "@/components/layout/header/Header4";
import Hero1 from "@/components/blogs/Hero1";
import BlogSingle from "@/components/blogs/BlogSingle";

async function getBlogData(slug) {
  const base = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:5000/api";
  try {
    // Server-side fetch (RSC) — avoids axios adapter differences between client/server
    const res = await fetch(`${base}/blogs/getBlog/${slug}`);
    if (!res.ok) {
      console.error(`getBlogData: fetch returned ${res.status} ${res.statusText}`);
      return null;
    }
    return await res.json();
  } catch (err) {
    console.error("Error fetching blog (server fetch):", err);
    return null;
  }
}

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const blog = await getBlogData(resolvedParams.slug);

  if (!blog) {
    return {
      title: "Blog Not Found | Parivar Saathi",
      description: "This blog could not be found.",
    };
  }

  // Use the article schema and basic meta
  return {
    title: `${blog.title} | Parivar Saathi`,
    description: blog.desc || "Read the latest from Parivar Saathi.",
    alternates: {
      canonical: `https://parivarsaathi.com/blog/${blog.slug}`,
    },
    openGraph: {
      title: `${blog.title} | Parivar Saathi`,
      description: blog.desc,
      url: `https://parivarsaathi.com/blog/${blog.slug}`,
      type: "article",
      images: [{ url: blog.bannerImage || "https://parivarsaathi.com/img/og-image.png" }],
    },
  };
}

export default async function Page({ params }) {
  // In Next.js App Router params may be a Promise — await it to access values reliably
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  const blog = await getBlogData(slug);

  if (!blog) {
    return <main><h1>Blog not found</h1></main>;
  }

  return (
    <main>
      <Header4 />
      <Hero1 blog={blog} />
      <BlogSingle blog={blog} />
      <FooterThree />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": blog.title,
            "description": blog.desc,
            "image": blog.bannerImage,
            "datePublished": blog.createdAt,
            "dateModified": blog.updatedAt,
            "url": `https://parivarsaathi.com/blog/${blog.slug}`,
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": `https://parivarsaathi.com/blog/${blog.slug}`
            },
            "author": {
              "@type": "Organization",
              "name": "Parivar Saathi",
              "url": "https://parivarsaathi.com"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Parivar Saathi",
              "logo": {
                "@type": "ImageObject",
                "url": "https://parivarsaathi.com/img/logo.jpg"
              }
            }
          }),
        }}
      />
    </main>
  );
}
