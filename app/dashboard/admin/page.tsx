"use client";

import PodcastCard from "@/components/@dashboard/admin/cards/podcast-card/PodcastCard";
// import { podcastData, PodcastDataType } from "@/data/podcasts/data";
import usePodcastStore from "@/store/podcast";
import { useEffect, useState } from "react";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import useAuthStore from "@/store/store";
import useBlogStore from "@/store/blog";
import UserDashBlogCard from "@/components/@dashboard/user/cards/blog-card/BlogCard";
import { useStore } from "zustand";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function page() {
  const { user } = useStore(useAuthStore);
  const { fetch_podcasts, podcasts, podcastMutate } = useStore(usePodcastStore);
  const { fetch_user_blogs, blogs, fetch_blogs, mutate, loading } = useStore(useBlogStore);
  // console.log("blogs",blogs)
  useEffect(() => {
    if (user && user.uid) {
      fetch_podcasts();
      // fetch_user_blogs(user.uid);
      fetch_blogs();
    }
  }, [user, mutate, podcastMutate]);

  return (
    <section className="px-10">
      <div className="max-w-screen-xl mx-auto rounded-2xl shadow-lg shadow-neutral-400/30 bg-gradient-to-tl from-neutral-300/70 to-neutral-100/10 grid place-items-center py-5 lg:py-10 px-2 md:px-5">
        <div className="grid place-items-center text-center pb-5 space-y-1">
          <h2 className="text-2xl md:text-3xl">Manage Your Podcast Library</h2>
          <p className="text-neutral-500 text-sm">
            Explore all your uploaded podcasts in one place!{" "}
          </p>
        </div>
        {/* Blog Grid Data Mapping */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7 lg:gap-4">
          {/* {podcastData.slice(0, 6).map((podcastData, index) => (
            <div key={index}>
              <PodcastCard {...podcastData} />
            </div>
          ))} */}

          {podcasts?.length > 0 ? (
            podcasts?.map((podcast: any, index: any) => (
              <div key={index}>
                <PodcastCard {...podcast} />
              </div>
            ))
          ) : (
            <div className="grid place-items-start">
              <div className="w-40 h-40 bg-gradient-to-tl from-neutral-400/70 to-neutral-100/10 rounded-lg animate-pulse upload-podcast-skeleton relative overflow-hidden z-0 grid place-items-center px-2">
                  <h2 className="w-full text-center text-sm">{loading ? "Loading Podcasts" : "No podcasts uploaded yet"}</h2>
                  {!loading && <Link href={'/dashboard/admin/upload-podcast'}>
                    <Button className="bg-blue-600 text-white mt-2">Upload <br/> Podcasts</Button>
                  </Link>}
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto min-h-[50vh] rounded-2xl shadow-lg shadow-neutral-400/30 bg-gradient-to-tl from-neutral-300/70 to-neutral-100/10 grid place-items-center py-5 lg:py-10 px-2 md:px-5 mt-4">
        <div className="grid place-items-center text-center pb-5 space-y-1">
          <h2 className="text-2xl md:text-3xl">Manage Your Blogs Library</h2>
          <p className="text-neutral-500 text-sm">
            Explore all your uploaded blogs in one place!{" "}
          </p>
        </div>
        {/* Blog Grid Data Mapping */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7 lg:gap-4">
          {/* {podcastData.slice(0, 6).map((podcastData, index) => (
            <div key={index}>
              <PodcastCard {...podcastData} />
            </div>
          ))} */}

          {
            blogs?.length > 0 ? (
              blogs?.map((blog: any, index: any) => (
                <div key={index}>
                  <UserDashBlogCard {...blog} />
                </div>
              ))
            ) : (
              <div className="grid place-items-start">
                <div className="w-40 h-40 bg-gradient-to-tl from-neutral-400/70 to-neutral-100/10 rounded-lg animate-pulse upload-podcast-skeleton relative overflow-hidden z-0 grid place-items-center">
                  <h2 className="text-sm">{loading ? "Loading Blogs" : "No Blogs to show."}</h2>
                  {!loading && <Link href={'/dashboard/admin/upload-blog'}>
                    <Button className="bg-blue-600 text-white mt-2">Upload Blog</Button>
                  </Link>}
                </div>
              </div>
            )
          }
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
