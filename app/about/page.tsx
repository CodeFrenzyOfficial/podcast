import EpisodeButton from "@/components/buttons/social-icons/episode-cards-button/EpisodeButton";
import AllPodcasts from "@/components/sections/all-podcasts/AllPodcasts";
import NavFooterWrapper from "@/wrappers/nav-footer-wrapper/NavFooterWrapper";
import Link from "next/link";
import { FaMicrophoneAlt } from "react-icons/fa";
import { FaPlay } from "react-icons/fa6";
import { ImPodcast } from "react-icons/im";

export default function page() {
    return (
        <NavFooterWrapper>
            <section className="about-hero-bg">
                <div className="min-h-[50vh] max-w-screen-lg mx-auto flex justify-center lg:justify-normal items-center">
                    <div className="space-y-3">
                        <h2 className="text-4xl font-bold text-white">About Us</h2>
                        <div className="flex items-center gap-5">
                            <Link href="/" className="text-xl font-medium text-white">Home</Link>

                            <hr className="h-5 w-px bg-white" />

                            <p className="text-xl font-medium text-blue-600">About</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="about-player-section min-h-screen py-10 px-10 lg:px-0">
                <div className="max-w-screen-lg mx-auto flex flex-col lg:flex-row justify-between items-center gap-5 lg:gap-0">

                    <div className="lg:w-[40%] py-10 overflow-hidden relative about-player-img">
                        <img src="/assets/hosts/about-1.jpg" alt="" className=" rounded-tl-[0] rounded-br-[235px] rounded-tr-[235px] rounded-bl-[235px]" />
                    </div>

                    <div className="lg:w-1/2 space-y-4">
                        <div className="space-y-2">
                            <div className="flex items-center gap-2">
                                <FaMicrophoneAlt className="text-yellow-400 text-xl" />
                                <p>we make your playlist easyer</p>
                            </div>
                            <h2 className="text-4xl font-medium">The Best Place to Listen to Your Favorite Song</h2>
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

            <section className='w-full min-h-[70vh] about-section-bg grid place-items-center'>
                <div className='w-2/3 lg:w-1/2 text-center space-y-5 text-white grid place-items-center'>
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

            <AllPodcasts />
        </NavFooterWrapper>
    )
}
