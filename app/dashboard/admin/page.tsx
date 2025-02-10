"use client";

import PodcastCard from "@/components/@dashboard/admin/cards/podcast-card/PodcastCard";
import { podcastData, PodcastDataType } from "@/data/podcasts/data";
import usePodcastStore from "@/store/podcast";
import { useEffect, useState } from "react";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import useAuthStore from "@/store/store";
import useBlogStore from "@/store/blog";

export default function page() {
  const { user } = useAuthStore();
  const { fetch_podcasts, podcasts } = usePodcastStore();
  const { fetch_blogs, blogs } = useBlogStore();

  useEffect(() => {
    if (user && user.uid) {
      fetch_podcasts(user.uid);
      fetch_blogs(user.uid);
    }
  }, [user]);

  return (
    <section className="px-10">
      <div className="max-w-screen-xl mx-auto min-h-[50vh] rounded-2xl shadow-lg shadow-neutral-400/30 bg-gradient-to-tl from-neutral-300/70 to-neutral-100/10 grid place-items-center py-5 lg:py-10 px-2 md:px-5">
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
              <div className="w-40 h-40 bg-gradient-to-tl from-neutral-400/70 to-neutral-100/10 rounded-lg animate-pulse upload-podcast-skeleton relative overflow-hidden z-0 grid place-items-center">
                <h2 className="text-sm">Loading Podcasts</h2>
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

          {blogs?.length > 0 ? (
            blogs?.map((podcast: any, index: any) => (
              <div key={index}>
                <PodcastCard {...podcast} />
              </div>
            ))
          ) : (
            <div className="grid place-items-start">
              <div className="w-40 h-40 bg-gradient-to-tl from-neutral-400/70 to-neutral-100/10 rounded-lg animate-pulse upload-podcast-skeleton relative overflow-hidden z-0 grid place-items-center">
                <h2 className="text-sm">Loading Blogs</h2>
              </div>
            </div>
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
