"use client";

import { useEffect, useState } from "react";
import NavFooterWrapper from "@/wrappers/NavFooterWrapper";
import { useParams } from "next/navigation";
import { BlogCardProps } from "@/data/blogs/data";
import Link from "next/link";
import useBlogStore from "@/store/blog";
import { useStore } from "zustand";
// NEW: sanitize HTML
import DescriptionPurifier from "@/components/html-renderer/DescriptionPurifier";
import { Loader2 } from "lucide-react";

export default function Page() {
  const { slug } = useParams();
  const { blogs, fetch_blogs, loading } = useStore(useBlogStore);
  const [blog, setBlog] = useState<BlogCardProps | null>(null);

  useEffect(() => {
    if (!slug) return;

    fetch_blogs();
  }, [slug]);

  useEffect(() => {
    if (!slug || blogs.length === 0) return;

    const decodedSlug = decodeURIComponent(slug.toString());
    const foundBlog = blogs.find((blog: any) => blog.slug === decodedSlug) || null;

    setBlog(foundBlog);
  }, [slug, blogs]);

  return (
    <NavFooterWrapper>
      {
        loading
          ? <div className="w-full h-screen grid place-items-center">
            <div>
              <Loader2 className="animate-spin size-5" />
            </div>
          </div>
          : <section className="max-w-screen-2xl mx-auto p-8">
            <div className="flex flex-col md:flex-row gap-5">
              <div className="w-full md:w-2/3">
                {blog ? (
                  <div className="w-full space-y-7">
                    <div className="w-full rounded-lg">
                      <img
                        src={blog.imgSrc[0]}
                        alt={blog.title}
                        className="lg:w-full h-96 object-cover rounded-lg shadow-xl shadow-black/30"
                      />
                    </div>
                    <div className="space-y-2">
                      <h1 className="text-2xl font-bold">{blog.title}</h1>
                      <div className="space-y-2">
                        <DescriptionPurifier html={blog.desc} actualText={true} />
                      </div>
                    </div>

                    <div className="w-full flex gap-4 overflow-x-auto pb-2 touch-pan-x whitespace-nowrap scrollbar-none">
                      {blog.imgSrc.map((img: string, index: number) => (
                        <div key={index} className="flex-shrink-0 inline-block">
                          <img
                            src={img}
                            alt={`blog-image-${index}`}
                            className="w-72 h-72 object-cover rounded-lg border shadow-sm"
                          />
                        </div>
                      ))}
                    </div>

                  </div>
                ) : (
                  <p className="text-center text-gray-500 text-lg">
                    Blog not found.
                  </p>
                )}
              </div>

              {/* Recent blogs */}
              <div className="w-full md:w-1/3">
                <h2 className="w-full text-center text-2xl font-bold mb-4">
                  Recent Blogs
                </h2>
                <div className="flex flex-col gap-5">
                  {blogs
                    .reverse()
                    .slice(0, 3)
                    .map((blog, index) => (
                      <Link href={`/blogs/${blog.title}`} key={index}>
                        <div className="bg-white rounded-lg p-4 overflow-hidden shadow-lg shadow-black/20">
                          <img
                            src={blog.imgSrc[0]}
                            className="w-full h-48 object-cover mb-2 rounded-lg"
                            alt=""
                          />
                          <h3 className="text-lg font-semibold">{blog.title}</h3>
                          <p className="text-gray-600 line-clamp-2 break-all">
                            <DescriptionPurifier html={blog.desc} actualText={false} />
                          </p>
                        </div>
                      </Link>
                    ))}
                </div>
              </div>
            </div>
          </section>
      }
    </NavFooterWrapper>
  );
}
