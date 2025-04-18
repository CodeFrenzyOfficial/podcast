"use client";

import PodcastCard from "@/components/@dashboard/admin/cards/podcast-card/PodcastCard";
import UserDashBlogCard from "@/components/@dashboard/user/cards/blog-card/BlogCard";
// import { podcastData, PodcastDataType } from "@/data/podcasts/data";
import useBlogStore from "@/store/blog";
import usePodcastStore from "@/store/podcast";
import useAuthStore from "@/store/store";
import { useEffect, useState } from "react";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { useStore } from "zustand";

export default function Page() {
  const { user } = useStore(useAuthStore);
  const { blogs, fetch_user_blogs } = useStore(useBlogStore);
  const { podcasts, fetch_user_podcasts } = useStore(usePodcastStore);

  useEffect(() => {
    fetch_user_blogs(user?.uid);
    fetch_user_podcasts(user?.uid);
  }, []);

  return (
    <section className="px-10">
      <div className="max-w-screen-xl mx-auto min-h-[50vh] rounded-2xl shadow-lg shadow-neutral-400/30 bg-gradient-to-tl from-neutral-300/70 to-neutral-100/10 grid place-items-center py-5 lg:py-10 px-2 md:px-5">
        <div className="grid place-items-center text-center pb-5 space-y-1">
          <h2 className="text-2xl md:text-3xl">Manage Your Blogs</h2>
          <p className="text-neutral-500 text-sm">
            Explore all your uploaded blogs in one place!{" "}
          </p>
        </div>

        {/* Blog Grid Data Mapping */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7 lg:gap-4">
          {blogs.length > 0 ? (
            blogs.map((blog: any, index: any) => (
              <div key={index}>
                <UserDashBlogCard {...blog} />
              </div>
            ))
          ) : (
            <div className="text-center w-full col-span-2">No Blogs Added</div>
          )}
        </div>

        {/* Pagination Controls */}
        {/* <div className="w-full flex justify-center items-center gap-2 pt-10">
          <div className="rounded-lg w-8 h-8 grid place-items-center text-base shadow-lg shadow-neutral-300 cursor-pointer bg-white transition-all duration-200 hover:opacity-50 text-black opacity-50">
            <FaArrowLeftLong />
          </div>
          <div className="rounded-lg w-8 h-8 grid place-items-center text-base shadow-lg shadow-neutral-300 cursor-pointer bg-white transition-all duration-200 hover:opacity-50 text-black">
            1
          </div>
          <div className="rounded-lg w-8 h-8 grid place-items-center text-base shadow-lg shadow-neutral-300 cursor-pointer bg-white transition-all duration-200 hover:opacity-50 text-black">
            2
          </div>
          <div className="rounded-lg w-8 h-8 grid place-items-center text-base shadow-lg shadow-neutral-300 cursor-pointer bg-white transition-all duration-200 hover:opacity-50 text-black">
            ...
          </div>
          <div className="rounded-lg w-8 h-8 grid place-items-center text-base shadow-lg shadow-neutral-300 cursor-pointer bg-white transition-all duration-200 hover:opacity-50 text-black">
            <FaArrowRightLong />
          </div>
        </div> */}
      </div>

      <div className="max-w-screen-xl mx-auto min-h-[50vh] rounded-2xl shadow-lg shadow-neutral-400/30 bg-gradient-to-tl from-neutral-300/70 to-neutral-100/10 grid place-items-center py-5 lg:py-10 px-2 md:px-5 mt-10">
        <div className="grid place-items-center text-center pb-5 space-y-1">
          <h2 className="text-2xl md:text-3xl">Manage Your Podcasts</h2>
          <p className="text-neutral-500 text-sm">
            Explore all your uploaded podcasts in one place!{" "}
          </p>
        </div>

        {/* Blog Grid Data Mapping */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7 lg:gap-4">
          {podcasts.length > 0 ? (
            podcasts.map((podcasts: any, index: any) => (
              <div key={index}>
                <PodcastCard  {...podcasts} />
              </div>
            ))
          ) : (
            <div className="text-center w-full col-span-2">No Podcasts Added</div>
          )}
        </div>

        {/* Pagination Controls */}
        {/* <div className="w-full flex justify-center items-center gap-2 pt-10">
          <div className="rounded-lg w-8 h-8 grid place-items-center text-base shadow-lg shadow-neutral-300 cursor-pointer bg-white transition-all duration-200 hover:opacity-50 text-black opacity-50">
            <FaArrowLeftLong />
          </div>
          <div className="rounded-lg w-8 h-8 grid place-items-center text-base shadow-lg shadow-neutral-300 cursor-pointer bg-white transition-all duration-200 hover:opacity-50 text-black">
            1
          </div>
          <div className="rounded-lg w-8 h-8 grid place-items-center text-base shadow-lg shadow-neutral-300 cursor-pointer bg-white transition-all duration-200 hover:opacity-50 text-black">
            2
          </div>
          <div className="rounded-lg w-8 h-8 grid place-items-center text-base shadow-lg shadow-neutral-300 cursor-pointer bg-white transition-all duration-200 hover:opacity-50 text-black">
            ...
          </div>
          <div className="rounded-lg w-8 h-8 grid place-items-center text-base shadow-lg shadow-neutral-300 cursor-pointer bg-white transition-all duration-200 hover:opacity-50 text-black">
            <FaArrowRightLong />
          </div>
        </div> */}
      </div>
    </section>
  );
}
