export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/admin/", "/login", "/_next/"],
      },
    ],
    sitemap: "https://parivarsaathi.com/sitemap.xml",
    host: "https://parivarsaathi.com",
  };
}
