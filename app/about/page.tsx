import EpisodeButton from "@/components/buttons/social-icons/episode-cards-button/EpisodeButton";
import AllPodcasts from "@/components/sections/all-podcasts/AllPodcasts";
import NavFooterWrapper from "@/wrappers/nav-footer-wrapper/NavFooterWrapper";
import Link from "next/link";
import { FaMicrophoneAlt } from "react-icons/fa";
import { GrSpotify } from "react-icons/gr";
import { ImPodcast } from "react-icons/im";
import { MdVideoLibrary } from "react-icons/md";
import {
  PiAmazonLogo,
  PiApplePodcastsLogoFill,
  PiYoutubeLogo,
} from "react-icons/pi";

export default function page() {
  return (
    <NavFooterWrapper>
      {/* About Hero */}
      <section className="about-hero-bg">
        <div className="min-h-[50vh] max-w-screen-lg mx-auto flex justify-center lg:justify-normal items-center">
          <div className="space-y-3 px-5 py-10 lg:pl-4 lg:pr-10 lg:py-10 backdrop-blur-lg rounded-2xl shadow-xl shadow-black/30">
            <h2 className="text-4xl font-bold text-white">About Us</h2>
            <div className="flex items-center gap-5">
              <Link href="/" className="text-xl font-medium text-white">
                Home
              </Link>

              <hr className="h-5 w-px bg-white" />

              <p className="text-xl font-medium text-blue-600">About</p>
            </div>
          </div>
        </div>
      </section>

      {/* Player Section with content */}
      <section className="about-player-section min-h-screen py-10 px-10 lg:px-0">
        <div className="max-w-screen-lg mx-auto flex flex-col md:flex-row justify-between items-center gap-5 lg:gap-0">
          <div className="md:w-[40%] py-10 overflow-hidden relative about-player-img">
            <img
              src="/assets/hosts/about-1.jpg"
              alt=""
              className=" rounded-tl-[0] rounded-br-[235px] rounded-tr-[235px] rounded-bl-[235px]"
            />
          </div>

          <div className="md:w-1/2 space-y-4">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <FaMicrophoneAlt className="text-yellow-400 text-xl" />
                <p>
                  We showcase inspiring and entertaining stories from members of
                  the nightlife community
                </p>
              </div>
              <h2 className="text-3xl !leading-tight lg:text-4xl font-medium">
                The Best Place to Get to Know your Local Nightlife Community
              </h2>
            </div>

            <div className="space-y-2">
              <p className="text-neutral-500">
                The GoWinOut Podcast was created to bring the nightlife
                community together and allow everyday party goers to get to know
                their local promoters, DJs, bartenders and club owners and
                remain aware of events and promotions in their local market. We
                have conversations to highlight the inspiring stories of members
                of this community.
              </p>
              <p className="text-neutral-500">
                Whether it’s a story on how they got started in business or how
                they are using their nightlife gigs to fund and promote other
                opportunities, we bring you the most raw and authentic first
                hands accounts straight to wherever you stream your favorite
                podcast.
              </p>
            </div>

            <div className="flex items-center gap-5">
              <EpisodeButton link="#all-episodes" content="View All Episodes" />
            </div>
          </div>
        </div>
      </section>

      {/* Popular Podcast Channels */}
      <section className="bg-black grid place-items-center min-h-[50vh] px-10 lg:px-0 py-10 space-y-10">
        <div className="grid place-items-center space-y-2 text-center text-white">
          <div className="space-y-2 grid place-items-center">
            <MdVideoLibrary className="text-xl" />
            <p className="font-light">Streaming Applications</p>
            <h2 className="text-2xl font-semibold">
              Most popular podcast listening platforms
            </h2>
          </div>
        </div>

        {/* Channels Grid */}
        <div className="grid grid-cols-2 md:grid-cols-2 gap-10 text-white place-items-center">
          <Link
            href="https://open.spotify.com/show/6AkJ5yEZyminFi7hwh36Kv?si=5faa8dfaf077425d"
            className="grid place-items-center text-center transition-all duration-200 hover:scale-[1.05]"
          >
            <GrSpotify className="text-4xl" />
            <h2 className="">Spotify</h2>
          </Link>
          <Link
            href=" https://music.amazon.com/podcasts/534987da-100a-4c9c-b2e9-d40230fae66f/gowinout-podcast"
            className="grid place-items-center text-center transition-all duration-200 hover:scale-[1.05]"
          >
            <PiYoutubeLogo className="text-4xl" />
            <h2 className="">Youtube</h2>
          </Link>
          <Link
            href=" https://music.amazon.com/podcasts/534987da-100a-4c9c-b2e9-d40230fae66f/gowinout-podcast"
            className=" grid place-items-center text-center transition-all duration-200 hover:scale-[1.05]"
          >
            <PiAmazonLogo className="text-4xl" />
            <h2 className="">Amazon Podcast</h2>
          </Link>
          <Link
            href="https://podcasts.apple.com/us/podcast/gowinout-podcast/id1767919675"
            className="grid place-items-center text-center transition-all duration-200 hover:scale-[1.05]"
          >
            <PiApplePodcastsLogoFill className="text-4xl" />
            <h2 className="">Apple Podcast</h2>
          </Link>
        </div>
      </section>

      {/* Streaming Application */}
      <section className="w-full min-h-[70vh] about-section-bg grid place-items-center">
        <div className="w-[90%] lg:w-1/2 text-center space-y-5 text-white grid place-items-center">
          <div className="space-y-1 grid place-items-center">
            <ImPodcast className="text-3xl" />
            <div className="flex items-center gap-2">
              <p>Streaming Applications</p>
            </div>
          </div>
          <h2 className="text-3xl font-semibold">
            Support our podcast by listening and commenting on your favorite episodes
          </h2>
          <EpisodeButton link="/" content="View All Episodes" />
        </div>
      </section>

      {/* All Episodes */}
      <AllPodcasts heading="Browse All Episodes"  />

    </NavFooterWrapper>
  );
}
