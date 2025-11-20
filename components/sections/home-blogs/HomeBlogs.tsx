"use client";

import EpisodeButton from "@/components/buttons/social-icons/episode-cards-button/EpisodeButton";
import useBlogStore from "@/store/blog";
import Link from "next/link";
import { useEffect } from "react";
import { FaComments, FaUser } from "react-icons/fa6";

export default function HomeBlogs() {
  const { fetch_blogs, blogs } = useBlogStore();

  useEffect(() => {
    fetch_blogs();
  }, []);
  return blogs.map((blog: any, index: any) =>
    index % 2 === 0 ? (
      <Link
        href={`/blogs/${blog.slug}`}
        key={blog.slug}
        className="flex flex-col lg:flex-row rounded-2xl overflow-hidden border border-px border-neutral-300"
      >
        <div className="lg:w-1/2">
          <img
            src={blog.imgSrc[0]}
            className="w-full h-[35vh] lg:h-[50vh] object-cover"
            alt=""
          />
        </div>

        <div className="lg:w-1/2 px-5 py-5 lg:py-0 gap-6  flex flex-col items-start justify-center lg:gap-3">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1">
              <FaUser />
              <p className="text-neutral-500 text-xs">Jhon Doe</p>
            </div>
            <div className="flex items-center gap-1">
              <FaComments />
              <p className="text-neutral-500 text-xs">3 comments</p>
            </div>
            <div className="flex items-center gap-1">
              <FaComments />
              <p className="text-neutral-500 text-xs">
                {new Date(blog.upload_date).toISOString().split("T")[0]}
              </p>
            </div>
          </div>

          <h2 className="text-2xl lg:text-3xl font-semibold">{blog.title}</h2>

          <EpisodeButton
            content="Explore"
            link="/"
            className="pointer-events-none"
            contentClassName="text-sm"
          />
        </div>
      </Link>
    ) : (
      <Link
        href={`/blogs/${blog.slug}`}
        key={blog.slug}
        className="flex flex-col lg:flex-row rounded-2xl overflow-hidden border border-px border-neutral-300"
      >
        <div className="lg:w-1/2 px-5 py-5 lg:py-0 gap-6  flex flex-col items-start justify-center lg:gap-">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1">
              <FaUser />
              <p className="text-neutral-500 text-xs">Jhon Doe</p>
            </div>
            <div className="flex items-center gap-1">
              <FaComments />
              <p className="text-neutral-500 text-xs">3 comments</p>
            </div>
            <div className="flex items-center gap-1">
              <FaComments />
              <p className="text-neutral-500 text-xs">
                {new Date(blog.upload_date).toISOString().split("T")[0]}
              </p>
            </div>
          </div>

          <h2 className="text-2xl lg:text-3xl font-semibold">{blog.title}</h2>

          <EpisodeButton
            content="Explore"
            link="/"
            className="pointer-events-none"
            contentClassName="text-sm"
          />
        </div>

        <div className="lg:w-1/2">
          <img
            src={blog.imgSrc[0]}
            className="w-full h-[35vh] lg:h-[50vh] object-cover"
            alt=""
          />
        </div>
      </Link>
    )
  );
}
