import FooterOne from "@/components/layout/footers/FooterOne";
import Header1 from "@/components/layout/header/Header1";
import Hero1 from "@/components/blogs/Hero1";
import BlogSingle from "@/components/blogs/BlogSingle";
import { axiosInstance } from "@/app/lib/axiousInstance";

export const metadata = {
  title: "Parivar Sathi",
  description:
    "Parivar Sathi was created for people who are silently struggling with fertility concerns and don’t know where to begin...",
};

async function getBlogData(id) {
  try {
    const res = await axiosInstance.get(`/blogs/getBlog/${id}`);
    // console.log("Blog data: ", res.data);
    
    return res.data;
  } catch (err) {
    console.error("Error fetching blog:", err);
    return null;
  }
}

export default async function Page({ params }) {
  const id = params.id;
  const blog = await getBlogData(id);

  return (
    <main>
      <Header1 />
      <Hero1 blog={blog} />
      <BlogSingle blog={blog} />
      <FooterOne />
    </main>
  );
}
