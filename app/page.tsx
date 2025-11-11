import type { Metadata } from "next";

import NavFooterWrapper from "@/wrappers/NavFooterWrapper";

import EpisodeButton from "@/components/buttons/social-icons/episode-cards-button/EpisodeButton";
import SocialIcon from "@/components/buttons/social-icons/SocialIcon";
import HomeCarousel from "@/components/carousels/home-carousel/HomeCarousel";
import AllPodcasts from "@/components/sections/all-podcasts/AllPodcasts";

import { FaPlay, FaYoutube } from "react-icons/fa6";
import { GiMoebiusStar } from "react-icons/gi";
import { FaApple, FaSpotify } from "react-icons/fa";
import { ImPodcast } from "react-icons/im";
import { IoLogoAmazon } from "react-icons/io5";
import HomeBlogs from "@/components/sections/home-blogs/HomeBlogs";
import HostCard from "@/components/cards/host-card/HostCard";
import HomePodcastCards from "@/components/sections/home-podcast-cards/index";

export const metadata: Metadata = {
  title: "GoWinOut — Explore Nightlife Through Podcasts",
  description:
    "Dive into the vibrant world of nightlife with GoWinOut — a podcast platform featuring DJs, promoters, venue owners, and partygoers. Discover authentic stories, expert insights, and behind-the-scenes moments from nightlife insiders.",
  keywords: [
    "nightlife podcasts",
    "DJ interviews",
    "party culture",
    "nightlife industry",
    "GoWinOut",
    "club culture",
    "promoters podcast",
    "venue owner stories",
    "electronic music podcast",
    "nightlife stories"
  ],
  authors: [{ name: "GoWinOut Team", url: "https://gowinout.com" }],
  creator: "GoWinOut",
  metadataBase: new URL("https://gowinout.com"),
  openGraph: {
    title: "GoWinOut — Explore Nightlife Through Podcasts",
    description:
      "Tune into stories and interviews from the heartbeat of nightlife — DJs, promoters, bartenders, and more. Listen now on GoWinOut.",
    url: "https://gowinout.com",
    siteName: "GoWinOut",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://gowinout.com/assets/hosts/4.jpeg", // Replace with your OG image URL
        width: 1200,
        height: 630,
        alt: "GoWinOut Podcast Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GoWinOut — Explore Nightlife Through Podcasts",
    description:
      "Authentic voices from nightlife: DJs, promoters, bartenders, and venue owners — all on one podcast platform.",
    images: ["https://gowinout.com/assets/hosts/4.jpeg"], // Replace with your image
    creator: "@gowinout", // Replace with your Twitter handle if available
  },
};

export default function Home() {
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
                link="https://podcasts.apple.com/us/podcast/gowinout-podcast/id1767919675"
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

      {/* Podcasts Episodes Card grid Section */}
      <HomePodcastCards />

      {/* View all episodes Section */}
      <AllPodcasts heading="Watch our Latest episode" />

      {/* Slider Section */}
      <section className="slider-section-bg lg:min-h-[90vh] w-full overflow-x-hidden py-10">
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
