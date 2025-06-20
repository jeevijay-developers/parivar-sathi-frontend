"use client";
import { useState } from "react";
import dynamic from "next/dynamic";
// import axios from "axios";
import "react-quill/dist/quill.snow.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Image from "next/image";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

export default function CreateBlog() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [content, setContent] = useState("");
  const [bannerImage, setBannerImage] = useState(null);
  const [contentImages, setContentImages] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("desc", desc);
    formData.append("content", content);
    if (bannerImage) formData.append("bannerImage", bannerImage);
    contentImages.forEach((img) => formData.append("contentImages", img));

    // await axios.post("http://localhost:5000/api/blogs", formData);
    // alert("Blog submitted!");
  };

  return (
    <div className="container mt-5">
      <h1 className="mb-4">Create Blog</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <input
            type="text"
            className="form-control border"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            className="form-control border"
            placeholder="Short Description"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <ReactQuill theme="snow" value={content} onChange={setContent} />
        </div>
        <div className="mb-3">
          <label className="form-label">Banner Image</label>
          <input
            type="file"
            accept="image/*"
            className="form-control border"
            onChange={(e) => setBannerImage(e.target.files[0])}
          />
          {bannerImage && (
            <Image
              width={200}
              height={100}
              src={URL.createObjectURL(bannerImage)}
              alt="Banner Preview"
              className="mt-2 img-fluid rounded"
              style={{ maxHeight: "200px" }}
            />
          )}
        </div>
        <div className="mb-3">
          <label className="form-label">Content Images (2)</label>
          <div className="d-flex gap-2">
            <input
              type="file"
              accept="image/*"
              className="form-control"
              onChange={(e) =>
                setContentImages((prev) => [e.target.files[0], prev[1] || null])
              }
            />
            <input
              type="file"
              accept="image/*"
              className="form-control"
              onChange={(e) =>
                setContentImages((prev) => [prev[0] || null, e.target.files[0]])
              }
            />
          </div>
          <div className="d-flex flex-wrap gap-3 mt-2">
            {contentImages.filter(Boolean).map((file, idx) => (
              <Image
              height={200}
              width={100}
              key={idx}
                src={URL.createObjectURL(file)}
                alt={`Preview ${idx}`}
                className="rounded"
                style={{ height: "100px" }}
              />
            ))}
          </div>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}
