const BASE_URL = "https://parivarsaathi.com";

export default async function sitemap() {
  const now = new Date();

  // Generate static pages
  const staticPages = [
    { url: `${BASE_URL}/`,                   lastModified: now, changeFrequency: "weekly",  priority: 1.0 },
    { url: `${BASE_URL}/about`,              lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/contact`,            lastModified: now, changeFrequency: "yearly",  priority: 0.5 },
    { url: `${BASE_URL}/joinus`,             lastModified: now, changeFrequency: "monthly", priority: 0.5 },
    { url: `${BASE_URL}/register-opd-camp`, lastModified: now, changeFrequency: "weekly",  priority: 0.8 },
    { url: `${BASE_URL}/clinic-partnership`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
    { url: `${BASE_URL}/help-center`,        lastModified: now, changeFrequency: "monthly", priority: 0.5 },
    { url: `${BASE_URL}/blog`,               lastModified: now, changeFrequency: "daily",   priority: 0.9 },
  ];

  // Fetch blogs from our actual API
  let blogs = [];
  try {
    const apiBase = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:5000/api";
    const res = await fetch(`${apiBase}/blogs/getAllBlogs`);
    if (res.ok) {
      blogs = await res.json();
    }
  } catch (err) {
    console.error("Error fetching blogs for sitemap:", err);
  }

  const blogPages = blogs
    .filter((b) => b.slug)
    .map((b) => ({
      url: `${BASE_URL}/blog/${b.slug}`,
      lastModified: b.updatedAt || now,
      changeFrequency: "weekly",
      priority: 0.8,
    }));

  return [...staticPages, ...blogPages];
}
