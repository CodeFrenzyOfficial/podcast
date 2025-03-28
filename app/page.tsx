"use client";

import NavFooterWrapper from "@/wrappers/nav-footer-wrapper/NavFooterWrapper";

import EpisodeButton from "@/components/buttons/social-icons/episode-cards-button/EpisodeButton";
import SocialIcon from "@/components/buttons/social-icons/SocialIcon";
import HomeCarousel from "@/components/carousels/home-carousel/HomeCarousel";
// import HostCarousel from "@/components/carousels/hosts-carousel/HostCarousel";
import AllPodcasts from "@/components/sections/all-podcasts/AllPodcasts";

import { FaPlay, FaYoutube } from "react-icons/fa6";
import { GiMoebiusStar } from "react-icons/gi";
import { FaApple, FaSpotify } from "react-icons/fa";
import { ImPodcast } from "react-icons/im";
import { IoLogoAmazon } from "react-icons/io5";
import HomeBlogs from "@/components/sections/home-blogs/HomeBlogs";
import HostCard from "@/components/cards/host-card/HostCard";
import { useStore } from "zustand";
import usePodcastStore from "@/store/podcast";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function page() {
  const [dj_order, __dj_order] = useState("");
  const [dj_page, __dj_page] = useState(1);

  const [other_order, __other_order] = useState("");
  const [other_page, __other_page] = useState(1);

  const {
    fetch_user_podcasts_by_category,
    dj_podcasts,
    other_podcasts,
    dj_loading,
    other_loading,
  } = useStore(usePodcastStore);

  useEffect(() => {
    fetch_user_podcasts_by_category("dj", dj_order, dj_page);
    fetch_user_podcasts_by_category("other", other_order, other_page);
  }, []);

  useEffect(() => {
    fetch_user_podcasts_by_category("dj", dj_order, 1);
  }, [dj_order]);

  useEffect(() => {
    fetch_user_podcasts_by_category("dj", "", dj_page);
  }, [dj_page]);

  useEffect(() => {
    fetch_user_podcasts_by_category("other", other_order, 1);
  }, [other_order]);

  useEffect(() => {
    fetch_user_podcasts_by_category("other", "", other_page);
  }, [other_page]);

  return (
    <NavFooterWrapper>
      {/* Hero section */}
      <section className="w-full min-h-screen md:min-h-screen main-hero-section flex flex-col-reverse md:flex-row items-center justify-center gap-2 md:gap-8 px-7 md:py-0 lg:px-10 xl:pl-40 xl:pr-20 overflow-hidden">
        <div className="w-full md:w-1/2 text-center md:!text-left space-y-4 text-white rounded-2xl backdrop-blur-lg p-4 shadow-xl">
          <p className="tracking-tight text-base lg:pt-10">
            Welcome to the GoWinOut Podcast: Where the Nightlife Industry
            Connects
          </p>

          <h2 className="w-full text-2xl md:text-4xl font-bold">
            Taking you behind the scenes on the work, lifestyle and lessons
            learned on working and doing business in the nightlife industry
          </h2>

          <div className="w-full flex justify-center items-center md:justify-between md:items-start">
            <p>Available on YouTube, Spotify, Apple Podcast and Amazon Music</p>
            <img src="/assets/svgs/1.svg" alt="" className="hidden lg:block" />
          </div>

          {/* buttons */}
          <div className="lg:relative -top-20 space-y-4">
            <hr className="w-full lg:w-2/3 h-px bg-neutral-300 space-y-3" />
            <div className="flex justify-center items-center md:justify-start gap-3 ">
              <SocialIcon
                title="Youtube"
                icon={<FaYoutube className="text-xl" />}
                link="http://www.youtube.com/@GoWinOutPodcast"
              />
              <SocialIcon
                title="Spotify"
                icon={<FaSpotify className="text-xl" />}
                link="https://open.spotify.com/show/6AkJ5yEZyminFi7hwh36Kv?si=5faa8dfaf077425d"
              />
            </div>
            <div className="flex justify-center items-center md:justify-start gap-3 ">
              <SocialIcon
                className="bg-white text-black hover:text-white"
                title="Apple Podcast"
                icon={<FaApple className="text-xl" />}
                link="https://podcasts.apple.com/us/podcast/gowinout-podcast/id1767919675

 "
              />
              <SocialIcon
                className="bg-white text-black hover:text-white"
                title="Amazon"
                icon={<IoLogoAmazon className="text-xl" />}
                link="https://music.amazon.com/podcasts/534987da-100a-4c9c-b2e9-d40230fae66f/gowinout-podcast"
              />
            </div>
          </div>
        </div>

        {/* Headphone image */}
        <div className="md:w-1/2 grid place-items-center">
          <img
            src="/assets/elements/headphones.png"
            className="drop-shadow-2xl drop-shadow-black w-1/2 md:w-[90%] mx-auto rotate-[25deg]"
            alt=""
          />
        </div>
      </section>

      {/* Episodes Card grid Section */}
      <section className="overflow-hidden w-full py-10 px-7 md:px-16 lg:px-20 xl:px-40 min-h-screen space-y-10">
        <div className="w-full grid place-items-center space-y-2 text-center">
          <h2 className="text-4xl font-semibold">Browse Episodes</h2>
          <p className="text-neutral-500">
            View Episodes based on different roles in nightlife
          </p>
        </div>

        {/* Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 place-items-center gap-5">
          {/* Card 1 */}
          <div className="p-4 rounded-2xl shadow-xl space-y-4 group/card">
            <div className="overflow-hidden rounded-2xl">
              <img
                src="/assets/hero-sections-bg/episodes-card-1.jpg"
                className="group-hover/card:scale-125 group-hover/card:rotate-12 transition-all duration-300  group-hover/card:blur-md"
                alt=""
              />
            </div>

            <div className="md:w-[90%] space-y-4">
              <h2 className="capitalize text-lg leading-tight lg:text-2xl font-medium mb-4">
                Explore the world of Djing in nigthclubs and other venues:
              </h2>

              <div className="flex justify-end ml-auto bg-gray-100 p-1 rounded-md mb-4 w-fit text-sm mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 0 1-.659 1.591l-5.432 5.432a2.25 2.25 0 0 0-.659 1.591v2.927a2.25 2.25 0 0 1-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 0 0-.659-1.591L3.659 7.409A2.25 2.25 0 0 1 3 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0 1 12 3Z"
                  />
                </svg>

                <select
                  onChange={(e: any) => __dj_order(e.target.value)}
                  name="filter"
                  className="outline-none cursor-pointer bg-transparent"
                >
                  <option value="" selected></option>
                  <option value="asc">Newest</option>
                  <option value="desc">Oldest</option>
                </select>
              </div>

              {!dj_loading
                ? dj_podcasts?.results?.podcasts?.map(
                    (podcast: any, index: any) => (
                      <Link key={index} href={podcast.videoSrc}>
                        <div className="flex items-start gap-3 mb-3 p-2 rounded-md hover:bg-gray-100">
                          <div className="rounded-full bg-blue-600 text-white p-3">
                            <FaPlay className="text-2xl" />
                          </div>

                          <div className="">
                            <p className="text-sm md:text-base text-neutral-500">
                              Episode #{index + 1} - Classic
                            </p>
                            <h2 className="text-base md:text-xl font-semibold">
                              {podcast.title}
                            </h2>
                          </div>
                        </div>
                      </Link>
                    )
                  )
                : [1, 2, 3].map((index: any) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 animate-pulse"
                    >
                      <div className="rounded-full bg-blue-600 text-white p-3">
                        <FaPlay className="text-2xl" />
                      </div>

                      <div className="grid gap-2">
                        <p className="h-4 rounded-full w-24 bg-gray-200"></p>
                        <h2 className="h-4 rounded-full w-60 bg-gray-200"></h2>
                      </div>
                    </div>
                  ))}
            </div>

            {/* Button */}
            <div
              className={`flex items-center pt-2 ${
                dj_podcasts?.count > 3 ? "justify-between" : "justify-center"
              }`}
            >
              {dj_podcasts?.count > 3 && (
                <>
                  <button
                    disabled={dj_page == 1}
                    onClick={() => __dj_page((prev) => prev - 1)}
                    className="disabled:text-gray-200 diabled:cursor-not-allowed"
                  >
                    Prev
                  </button>
                </>
              )}
              <EpisodeButton link="#all-episodes" content="View All Episodes" />
              {dj_podcasts?.count > 3 && (
                <>
                  <button
                    disabled={!dj_podcasts?.next}
                    onClick={() => __dj_page((prev) => prev + 1)}
                    className="disabled:text-gray-200 diabled:cursor-not-allowed"
                  >
                    Next
                  </button>
                </>
              )}
            </div>
          </div>

          {/* Card 2 */}
          <div className="p-4 rounded-2xl shadow-xl space-y-4 group">
            <div className="overflow-hidden rounded-2xl">
              <img
                src="/assets/hero-sections-bg/episodes-card-2.jpg"
                className="group-hover:scale-125 group-hover:rotate-12 transition-all duration-300  group-hover:blur-md"
                alt=""
              />
            </div>

            <div className="w-[90%] space-y-4">
              <h2 className="capitalize text-lg leading-tight lg:text-2xl font-medium mb-4">
                Hear from different members working in the industry from all types of roles, from bartending to venue ownership:
              </h2>

              <div className="flex justify-end ml-auto bg-gray-100 p-1 rounded-md mb-4 w-fit text-sm mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 0 1-.659 1.591l-5.432 5.432a2.25 2.25 0 0 0-.659 1.591v2.927a2.25 2.25 0 0 1-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 0 0-.659-1.591L3.659 7.409A2.25 2.25 0 0 1 3 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0 1 12 3Z"
                  />
                </svg>

                <select
                  onChange={(e: any) => __other_order(e.target.value)}
                  name="filter"
                  className="outline-none cursor-pointer bg-transparent"
                >
                  <option value="" selected></option>
                  <option value="asc">Newest</option>
                  <option value="desc">Oldest</option>
                </select>
              </div>

              {!other_loading
                ? other_podcasts?.results?.podcasts?.map(
                    (podcast: any, index: any) => (
                      <Link key={index} href={podcast.videoSrc}>
                        <div className="flex items-start gap-3 mb-3 p-2 rounded-md hover:bg-gray-100">
                          <div className="rounded-full bg-blue-600 text-white p-3">
                            <FaPlay className="text-2xl" />
                          </div>

                          <div className="">
                            <p className="text-sm md:text-base text-neutral-500">
                              Episode #{index + 1} - Classic
                            </p>
                            <h2 className="text-base md:text-xl font-semibold">
                              {podcast.title}
                            </h2>
                          </div>
                        </div>
                      </Link>
                    )
                  )
                : [1, 2, 3].map((index: any) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 animate-pulse"
                    >
                      <div className="rounded-full bg-blue-600 text-white p-3">
                        <FaPlay className="text-2xl" />
                      </div>

                      <div className="grid gap-2">
                        <p className="h-4 rounded-full w-24 bg-gray-200"></p>
                        <h2 className="h-4 rounded-full w-60 bg-gray-200"></h2>
                      </div>
                    </div>
                  ))}
            </div>

            <div
              className={`flex items-center pt-2 ${
                other_podcasts?.count > 3 ? "justify-between" : "justify-center"
              }`}
            >
              {other_podcasts?.count > 3 && (
                <>
                  <button
                    disabled={other_page == 1}
                    onClick={() => __other_page((prev) => prev - 1)}
                    className="disabled:text-gray-200 diabled:cursor-not-allowed"
                  >
                    Prev
                  </button>
                </>
              )}
              <EpisodeButton link="#all-episodes" content="View All Episodes" />
              {other_podcasts?.count > 3 && (
                <>
                  <button
                    onClick={() => __other_page((prev) => prev + 1)}
                    disabled={!other_podcasts?.next}
                    className="disabled:text-gray-200 diabled:cursor-not-allowed"
                  >
                    Next
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* View all episodes Section */}
      <AllPodcasts heading="Watch our Latest episode" />

      {/* Slider Section */}
      <section className="slider-section-bg lg:min-h-[90vh] w-full overflow-x-hidden  py-10">
        {/* <div className="w-full grid place-items-center space-y-2 mb-10">
          <h2 className="text-4xl font-semibold">Enjoy New Podcasts</h2>
          <p className="text-neutral-500">Explore All Podcasts</p>
        </div> */}
        <HomeCarousel />
      </section>

      <section className="w-full min-h-[70vh] streaming-section-bg grid place-items-center ">
        <div className="w-2/3 lg:w-1/2 text-center space-y-5 text-white grid place-items-center">
          <div className="flex items-center gap-2">
            <ImPodcast className="text-xl" />
            <p>Episodes Now Streaming</p>
          </div>
          <h2 className="text-2xl md:text-3xl font-semibold">
            Support our podcast by listening and commenting on your favorite
            episodes
          </h2>
          <EpisodeButton link="#all-episodes" content="View All Episodes" />
        </div>
      </section>

      {/* overlapping "learn" section */}
      <section className="overflow-hidden py-10">
        <div className="w-full p-10 bg-blue-600" />

        <div className="relative -top-16 md:-top-20 flex justify-between items-center space-y-5 bg-white -rotate-3 shadow-lg shadow-black/10 py-8">
          {/* learn card */}
          <div className="text-yellow-500 text-4xl">
            <GiMoebiusStar />
          </div>
          <div className="flex items-center space-y-4">
            <h2 className="text-4xl font-semibold">WATCH</h2>
          </div>
          {/* learn card */}
          <div className="text-yellow-500 text-4xl">
            <GiMoebiusStar />
          </div>
          <div className="flex items-center space-y-4">
            <h2 className="text-4xl font-semibold">LISTEN</h2>
          </div>
          {/* learn card */}
          <div className="text-yellow-500 text-4xl">
            <GiMoebiusStar />
          </div>
          <div className="flex items-center space-y-4">
            <h2 className="text-4xl font-semibold">READ</h2>
          </div>
          {/* learn card */}
          <div className="text-yellow-500 text-4xl">
            <GiMoebiusStar />
          </div>
          <div className="flex items-center space-y-4">
            <h2 className="text-4xl font-semibold">LEARN</h2>
          </div>
          {/* learn card */}
          <div className="text-yellow-500 text-4xl">
            <GiMoebiusStar />
          </div>
          <div className="flex items-center space-y-4">
            <h2 className="text-4xl font-semibold">LAUGH</h2>
          </div>
          {/* learn card */}
          <div className="text-yellow-500 text-4xl">
            <GiMoebiusStar />
          </div>
          <div className="flex items-center space-y-4">
            <h2 className="text-4xl font-semibold">INSPIRE</h2>
          </div>
          {/* learn card */}
          <div className="text-yellow-500 text-4xl">
            <GiMoebiusStar />
          </div>
          <div className="flex items-center space-y-4">
            <h2 className="text-4xl font-semibold">NETWORK</h2>
          </div>
        </div>
      </section>

      {/* Hosts Carousel */}
      <section className="py-10 w-full min-h-[60vh] lg:min-h-[90vh] host-bg space-y-5">
        <div className="grid place-items-center space-y-2 text-center">
          <p className="text-neutral-500">Expert People</p>
          <h2 className="text-3xl lg:text-4xl font-semibold">
            Meet our Podcast Host
          </h2>
        </div>
        <div className="w-full grid place-items-center mx-auto px-10 lg:px-0">
          {/* <HostCarousel /> */}
          <HostCard
            name="Stephon Tynes"
            position="Host & Founder"
            imgSrc="/assets/hosts/4.jpeg"
          />
        </div>
      </section>

      {/*  */}
      <section className="py-10 w-full min-h-screen space-y-10 px-10">
        <div className="grid place-items-center space-y-2 text-center">
          <p className="text-neutral-500">Streaming Application</p>
          <h2 className="text-4xl font-semibold">Related Blog Posts</h2>
        </div>

        <div className="max-w-screen-lg mx-auto flex flex-col gap-5">
          {/* Card 1 */}
          <HomeBlogs />
        </div>
      </section>
    </NavFooterWrapper>
  );
}
