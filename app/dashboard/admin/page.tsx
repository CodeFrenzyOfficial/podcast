"use client";

import PodcastCard from "@/components/@dashboard/admin/cards/podcast-card/PodcastCard";
import { podcastData, PodcastDataType } from "@/data/podcasts/data";
import { useEffect, useState } from "react";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

export default function page() {
  const [podcasts, _podcasts] = useState<PodcastDataType[]>([]);

  const get_podcasts = async () => {
    try {
      const response = await fetch("http://localhost:8000/podcast/", {
        method: "GET",
      });

      const result = await response.json();

      if (response.ok) {
        console.log("podcasts fetched successfully:", result);
        _podcasts(result);
      } else {
        console.error("Error during registration:", result);
      }
    } catch (error) {
      console.error("Error during API request:", error);
    } finally {
    }
  };

  useEffect(() => {
    get_podcasts();
  }, []);

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

          <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7 lg:gap-4">
            {podcasts.length > 0 ? (
              podcasts.map((podcast, index) => (
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
