import FooterOne from "@/components/layout/footers/FooterOne";
import Header1 from "@/components/layout/header/Header1";
import Hero1 from "@/components/blogs/Hero1";
import BlogSingle from "@/components/blogs/BlogSingle";
import { blogs } from "@/data/blogs";

export const metadata = {
  title: "Parivar Sathi",
  description:
    "Parivar Sathi was created for people who are silently struggling with fertility concerns and don’t know where to begin. We’re not a hospital, clinic, or NGO. But we operate with the compassion and community spirit of one.",
};

export default function page({ params }) {
  const id = params.id;
  const blog = blogs.find((item) => item.id == id) || blogs[0];

  return (
    <>
      <main>
        <Header1 />
        <Hero1 blog={blog} />
        <BlogSingle />
        <FooterOne />
      </main>
    </>
  );
}
