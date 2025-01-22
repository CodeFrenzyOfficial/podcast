import EpisodeButton from "@/components/buttons/social-icons/episode-cards-button/EpisodeButton";
import AllPodcasts from "@/components/sections/all-podcasts/AllPodcasts";
import Newsletter from "@/components/sections/newsletter/Newsletter";
import NavFooterWrapper from "@/wrappers/nav-footer-wrapper/NavFooterWrapper";
import Link from "next/link";
import { BsFillRssFill } from "react-icons/bs";
import { FaMicrophoneAlt } from "react-icons/fa";
import { FaPlay } from "react-icons/fa6";
import { GrSpotify } from "react-icons/gr";
import { ImPodcast } from "react-icons/im";
import { MdVideoLibrary } from "react-icons/md";
import { PiApplePodcastsLogoFill, PiGooglePodcastsLogoFill, PiSoundcloudLogoFill } from "react-icons/pi";

export default function page() {
    return (
        <NavFooterWrapper>
            {/* About Hero */}
            <section className="about-hero-bg">
                <div className="min-h-[50vh] max-w-screen-lg mx-auto flex justify-center lg:justify-normal items-center">
                    <div className="space-y-3 px-5 py-10 lg:pl-4 lg:pr-10 lg:py-10 backdrop-blur-lg rounded-2xl shadow-xl shadow-black/30">
                        <h2 className="text-4xl font-bold text-white">About Us</h2>
                        <div className="flex items-center gap-5">
                            <Link href="/" className="text-xl font-medium text-white">Home</Link>

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
                        <img src="/assets/hosts/about-1.jpg" alt="" className=" rounded-tl-[0] rounded-br-[235px] rounded-tr-[235px] rounded-bl-[235px]" />
                    </div>

                    <div className="md:w-1/2 space-y-4">
                        <div className="space-y-2">
                            <div className="flex items-center gap-2">
                                <FaMicrophoneAlt className="text-yellow-400 text-xl" />
                                <p>we make your playlist easyer</p>
                            </div>
                            <h2 className="text-3xl !leading-tight lg:text-4xl font-medium">The Best Place to Listen to Your Favorite Song</h2>
                        </div>

                        <div className="space-y-2">
                            <p className="text-neutral-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </p>
                            <p className="text-neutral-500">
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Cum sociis natoque penatibus et magnis dis parturient montes.
                            </p>
                        </div>

                        <div className="flex items-center gap-5">
                            <EpisodeButton link='/' content='View All Episodes' />
                            <div className="flex items-center gap-2">
                                <div className='rounded-full bg-blue-600 text-white p-3'>
                                    <FaPlay className='text-2xl' />
                                </div>

                                <h2 className="text-neutral-500">How it Works</h2>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Popular Podcast Channels */}
            <section className="bg-black grid place-items-center min-h-[50vh] px-10 lg:px-0 py-10 space-y-10">
                <div className="grid place-items-center space-y-2 text-center text-white">
                    <div className="space-y-2 grid place-items-center">
                        <MdVideoLibrary className="text-xl" />
                        <p className="font-light">
                            Streaming Applications
                        </p>
                        <h2 className="text-2xl font-semibold">
                            Most popular podcast listening platforms
                        </h2>
                    </div>
                </div>

                {/* Channels Grid */}
                <div className="grid grid-cols-2 md:grid-cols-6 gap-10 text-white place-items-center">
                    <div className="lg:col-span-2 grid place-items-center text-center">
                        <PiSoundcloudLogoFill className="text-4xl" />
                        <h2 className="">Souncloud</h2>
                    </div>
                    <div className="lg:col-span-2 grid place-items-center text-center">
                        <GrSpotify className="text-4xl" />
                        <h2 className="">Spotify</h2>
                    </div>
                    <div className="lg:col-span-2 grid place-items-center text-center">
                        <BsFillRssFill className="text-4xl" />
                        <h2 className="">RSS Feed</h2>
                    </div>
                    <div className="lg:col-span-3 grid place-items-center text-center">
                        <PiGooglePodcastsLogoFill className="text-4xl" />
                        <h2 className="">Google Podcast</h2>
                    </div>
                    <div className="col-span-2 lg:col-span-3 grid place-items-center text-center">
                        <PiApplePodcastsLogoFill className="text-4xl" />
                        <h2 className="">Apple Podcast</h2>
                    </div>
                </div>
            </section>

            {/* Streaming Application */}
            <section className='w-full min-h-[70vh] about-section-bg grid place-items-center'>
                <div className='w-[90%] lg:w-1/2 text-center space-y-5 text-white grid place-items-center'>
                    <div className="space-y-1 grid place-items-center">
                        <ImPodcast className='text-3xl' />
                        <div className='flex items-center gap-2'>
                            <p>
                                Streaming Applications
                            </p>
                        </div>
                    </div>
                    <h2 className='text-3xl font-semibold'>
                        Support and stand by listening to our most recent show on apple Podcast
                    </h2>
                    <EpisodeButton link='/' content='View All Episodes' />
                </div>
            </section>

            {/* All Episodes */}
            <AllPodcasts />

            {/* Newsletter */}
            <Newsletter />

        </NavFooterWrapper>
    )
}
